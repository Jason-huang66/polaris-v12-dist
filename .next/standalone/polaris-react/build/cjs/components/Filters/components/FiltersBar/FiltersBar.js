'use strict';

var React = require('react');
var polarisIcons = require('@shopify/polaris-icons');
var useOnValueChange = require('../../../../utilities/use-on-value-change.js');
var css = require('../../../../utilities/css.js');
var breakpoints = require('../../../../utilities/breakpoints.js');
var Filters = require('../../Filters.scss.js');
var FilterPill = require('../FilterPill/FilterPill.js');
var hooks = require('../../../../utilities/i18n/hooks.js');
var UnstyledButton = require('../../../UnstyledButton/UnstyledButton.js');
var Text = require('../../../Text/Text.js');
var Popover = require('../../../Popover/Popover.js');
var ActionList = require('../../../ActionList/ActionList.js');
var Button = require('../../../Button/Button.js');
var Box = require('../../../Box/Box.js');
var InlineStack = require('../../../InlineStack/InlineStack.js');

function FiltersBar({
  filters,
  appliedFilters,
  onClearAll,
  disabled,
  hideQueryField,
  disableFilters,
  mountedStateStyles,
  onAddFilterClick,
  closeOnChildOverlayClick,
  children
}) {
  const i18n = hooks.useI18n();
  const {
    mdDown
  } = breakpoints.useBreakpoints();
  const [popoverActive, setPopoverActive] = React.useState(false);
  const hasMounted = React.useRef(false);
  React.useEffect(() => {
    hasMounted.current = true;
  });
  const togglePopoverActive = () => setPopoverActive(popoverActive => !popoverActive);
  const handleAddFilterClick = () => {
    onAddFilterClick?.();
    togglePopoverActive();
  };
  const appliedFilterKeys = appliedFilters?.map(({
    key
  }) => key);
  const pinnedFiltersFromPropsAndAppliedFilters = filters.filter(({
    pinned,
    key
  }) => {
    const isPinnedOrApplied = Boolean(pinned) || appliedFilterKeys?.includes(key);
    return isPinnedOrApplied;
  });
  const [localPinnedFilters, setLocalPinnedFilters] = React.useState(pinnedFiltersFromPropsAndAppliedFilters.map(({
    key
  }) => key));
  useOnValueChange.useOnValueChange(filters.length, () => {
    setLocalPinnedFilters(pinnedFiltersFromPropsAndAppliedFilters.map(({
      key
    }) => key));
  });
  const pinnedFilters = localPinnedFilters.map(key => filters.find(filter => filter.key === key)).reduce((acc, filter) => filter ? [...acc, filter] : acc, []);
  const onFilterClick = ({
    key,
    onAction
  }) => () => {
    // PopoverOverlay will cause a rerender of the component and nuke the
    // popoverActive state, so we set this as a microtask
    setTimeout(() => {
      setLocalPinnedFilters(currentLocalPinnedFilters => [...new Set([...currentLocalPinnedFilters, key])]);
      onAction?.();
      togglePopoverActive();
    }, 0);
  };
  const filterToActionItem = filter => ({
    ...filter,
    content: filter.label,
    onAction: onFilterClick(filter)
  });
  const unpinnedFilters = filters.filter(filter => !pinnedFilters.some(({
    key
  }) => key === filter.key));
  const unsectionedFilters = unpinnedFilters.filter(filter => !filter.section).map(filterToActionItem);
  const sectionedFilters = unpinnedFilters.filter(filter => filter.section).reduce((acc, filter) => {
    const filterActionItem = filterToActionItem(filter);
    const sectionIndex = acc.findIndex(section => section.title === filter.section);
    if (sectionIndex === -1) {
      acc.push({
        title: filter.section,
        items: [filterActionItem]
      });
    } else {
      acc[sectionIndex].items.push(filterActionItem);
    }
    return acc;
  }, []);
  const hasOneOrMorePinnedFilters = pinnedFilters.length >= 1;
  const labelVariant = mdDown ? 'bodyMd' : 'bodySm';
  const addFilterActivator = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(UnstyledButton.UnstyledButton, {
    type: "button",
    className: Filters.default.AddFilter,
    onClick: handleAddFilterClick,
    "aria-label": i18n.translate('Polaris.Filters.addFilter'),
    disabled: disabled || unsectionedFilters.length === 0 && sectionedFilters.length === 0 || disableFilters
  }, /*#__PURE__*/React.createElement(Text.Text, {
    variant: labelVariant,
    as: "span"
  }, i18n.translate('Polaris.Filters.addFilter'), ' '), /*#__PURE__*/React.createElement(polarisIcons.PlusMinor, null)));
  const handleClearAllFilters = () => {
    setLocalPinnedFilters([]);
    onClearAll?.();
  };
  const shouldShowAddButton = filters.some(filter => !filter.pinned);
  const pinnedFiltersMarkup = pinnedFilters.map(({
    key: filterKey,
    ...pinnedFilter
  }) => {
    const appliedFilter = appliedFilters?.find(({
      key
    }) => key === filterKey);
    const handleFilterPillRemove = () => {
      setLocalPinnedFilters(currentLocalPinnedFilters => currentLocalPinnedFilters.filter(key => key !== filterKey));
      appliedFilter?.onRemove(filterKey);
    };
    return /*#__PURE__*/React.createElement(FilterPill.FilterPill, Object.assign({
      key: filterKey
    }, pinnedFilter, {
      initialActive: hasMounted.current && !pinnedFilter.pinned && !appliedFilter,
      label: appliedFilter?.label || pinnedFilter.label,
      filterKey: filterKey,
      selected: appliedFilterKeys?.includes(filterKey),
      onRemove: handleFilterPillRemove,
      disabled: pinnedFilter.disabled || disableFilters,
      closeOnChildOverlayClick: closeOnChildOverlayClick
    }));
  });
  const addButton = shouldShowAddButton ? /*#__PURE__*/React.createElement("div", {
    className: css.classNames(Filters.default.AddFilterActivator, hasOneOrMorePinnedFilters && Filters.default.AddFilterActivatorMultiple)
  }, /*#__PURE__*/React.createElement(Popover.Popover, {
    active: popoverActive && !disabled,
    activator: addFilterActivator,
    onClose: togglePopoverActive
  }, /*#__PURE__*/React.createElement(ActionList.ActionList, {
    actionRole: "menuitem",
    items: unsectionedFilters,
    sections: sectionedFilters
  }))) : null;
  const clearAllMarkup = appliedFilters?.length || localPinnedFilters.length ? /*#__PURE__*/React.createElement("div", {
    className: css.classNames(Filters.default.ClearAll, hasOneOrMorePinnedFilters && shouldShowAddButton && Filters.default.MultiplePinnedFilterClearAll)
  }, /*#__PURE__*/React.createElement(Button.Button, {
    size: "micro",
    onClick: handleClearAllFilters,
    removeUnderline: true,
    variant: "monochromePlain"
  }, i18n.translate('Polaris.Filters.clearFilters'))) : null;
  return /*#__PURE__*/React.createElement("div", {
    className: css.classNames(Filters.default.FiltersWrapper, shouldShowAddButton && hasOneOrMorePinnedFilters && Filters.default.FiltersWrapperWithAddButton),
    "aria-live": "polite",
    style: mountedStateStyles
  }, /*#__PURE__*/React.createElement("div", {
    className: css.classNames(Filters.default.FiltersInner)
  }, /*#__PURE__*/React.createElement("div", {
    className: css.classNames(Filters.default.FiltersStickyArea)
  }, pinnedFiltersMarkup, addButton, clearAllMarkup)), hideQueryField ? /*#__PURE__*/React.createElement(Box.Box, {
    paddingInlineEnd: "300",
    paddingBlockStart: "200",
    paddingBlockEnd: "200"
  }, /*#__PURE__*/React.createElement(InlineStack.InlineStack, {
    align: "start",
    blockAlign: "center",
    gap: {
      xs: '400',
      md: '300'
    }
  }, children)) : null);
}

exports.FiltersBar = FiltersBar;
