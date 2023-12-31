'use strict';

var React = require('react');

exports.SelectionType = void 0;
(function (SelectionType) {
  SelectionType["All"] = "all";
  SelectionType["Page"] = "page";
  SelectionType["Multi"] = "multi";
  SelectionType["Single"] = "single";
  SelectionType["Range"] = "range";
})(exports.SelectionType || (exports.SelectionType = {}));
function defaultResourceIDResolver(resource) {
  if ('id' in resource) {
    return resource.id;
  }
  throw new Error('Your resource does not directly contain an `id`. Pass a `resourceIDResolver` to `useIndexResourceState`');
}
function useIndexResourceState(resources, {
  selectedResources: initSelectedResources = [],
  allResourcesSelected: initAllResourcesSelected = false,
  resourceIDResolver = defaultResourceIDResolver,
  resourceFilter = undefined
} = {
  selectedResources: [],
  allResourcesSelected: false,
  resourceIDResolver: defaultResourceIDResolver,
  resourceFilter: undefined
}) {
  const [selectedResources, setSelectedResources] = React.useState(initSelectedResources);
  const [allResourcesSelected, setAllResourcesSelected] = React.useState(initAllResourcesSelected);
  const handleSelectionChange = React.useCallback((selectionType, isSelecting, selection, _position) => {
    if (selectionType === exports.SelectionType.All) {
      setAllResourcesSelected(isSelecting);
    } else if (allResourcesSelected) {
      setAllResourcesSelected(false);
    }
    switch (selectionType) {
      case exports.SelectionType.Single:
        setSelectedResources(newSelectedResources => isSelecting ? [...newSelectedResources, selection] : newSelectedResources.filter(id => id !== selection));
        break;
      case exports.SelectionType.All:
      case exports.SelectionType.Page:
        if (resourceFilter) {
          const filteredResources = resources.filter(resourceFilter);
          setSelectedResources(isSelecting && selectedResources.length < filteredResources.length ? filteredResources.map(resourceIDResolver) : []);
        } else {
          setSelectedResources(isSelecting ? resources.map(resourceIDResolver) : []);
        }
        break;
      case exports.SelectionType.Multi:
        if (!selection) break;
        setSelectedResources(currentSelectedResources => {
          const ids = [];
          const filteredResources = resourceFilter ? resources.filter(resourceFilter) : resources;
          for (let i = selection[0]; i <= selection[1]; i++) {
            if (filteredResources.includes(resources[i])) {
              const id = resourceIDResolver(resources[i]);
              if (isSelecting && !currentSelectedResources.includes(id) || !isSelecting && currentSelectedResources.includes(id)) {
                ids.push(id);
              }
            }
          }
          return isSelecting ? [...currentSelectedResources, ...ids] : currentSelectedResources.filter(id => !ids.includes(id));
        });
        break;
      case exports.SelectionType.Range:
        if (!selection) break;
        setSelectedResources(currentSelectedResources => {
          const filteredResources = resourceFilter ? resources.filter(resourceFilter) : resources;
          const resourceIds = filteredResources.map(resourceIDResolver);
          const selectedIds = resourceIds.slice(Number(selection[0]), Number(selection[1]) + 1);
          const isIndeterminate = selectedIds.some(id => {
            return selectedResources.includes(id);
          });
          const isChecked = selectedIds.every(id => {
            return selectedResources.includes(id);
          });
          const isSelectingAllInRange = !isChecked && (isSelecting || isIndeterminate);
          const nextSelectedResources = isSelectingAllInRange ? [...new Set([...currentSelectedResources, ...selectedIds]).values()] : currentSelectedResources.filter(id => !selectedIds.includes(id));
          return nextSelectedResources;
        });
        break;
    }
  }, [allResourcesSelected, resourceFilter, selectedResources, resources, resourceIDResolver]);
  const clearSelection = React.useCallback(() => {
    setSelectedResources([]);
    setAllResourcesSelected(false);
  }, []);
  const removeSelectedResources = React.useCallback(removeResources => {
    const selectedResourcesCopy = [...selectedResources];
    const newSelectedResources = selectedResourcesCopy.filter(resource => !removeResources.includes(resource));
    setSelectedResources(newSelectedResources);
    if (newSelectedResources.length === 0) {
      setAllResourcesSelected(false);
    }
  }, [selectedResources]);
  return {
    selectedResources,
    allResourcesSelected,
    handleSelectionChange,
    clearSelection,
    removeSelectedResources
  };
}

exports.useIndexResourceState = useIndexResourceState;
