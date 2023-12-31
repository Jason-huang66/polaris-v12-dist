'use strict';

var React = require('react');
var polarisIcons = require('@shopify/polaris-icons');
var css = require('../../utilities/css.js');
var focus = require('../../utilities/focus.js');
var Button$1 = require('./Button.scss.js');
var Icon = require('../Icon/Icon.js');
var Spinner = require('../Spinner/Spinner.js');
var UnstyledButton = require('../UnstyledButton/UnstyledButton.js');
var hooks = require('../../utilities/i18n/hooks.js');

const DEFAULT_SIZE = 'medium';
function Button({
  id,
  children,
  url,
  disabled,
  external,
  download,
  target,
  submit,
  loading,
  pressed,
  accessibilityLabel,
  role,
  ariaControls,
  ariaExpanded,
  ariaDescribedBy,
  ariaChecked,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  onMouseEnter,
  onTouchStart,
  onPointerDown,
  icon,
  disclosure,
  removeUnderline,
  size = DEFAULT_SIZE,
  textAlign,
  fullWidth,
  dataPrimaryLink,
  tone,
  variant
}) {
  const i18n = hooks.useI18n();
  const isDisabled = disabled || loading;
  const className = css.classNames(Button$1.default.Button, fullWidth && Button$1.default.fullWidth, icon && children == null && Button$1.default.iconOnly, isDisabled && Button$1.default.disabled, loading && Button$1.default.loading, pressed && !disabled && !url && Button$1.default.pressed, removeUnderline && Button$1.default.removeUnderline, size && size !== DEFAULT_SIZE && Button$1.default[css.variationName('size', size)], textAlign && Button$1.default[css.variationName('textAlign', textAlign)], tone && Button$1.default[css.variationName('tone', tone)], variant && Button$1.default[css.variationName('variant', variant)]);
  const disclosureMarkup = disclosure ? /*#__PURE__*/React.createElement("span", {
    className: Button$1.default.Icon
  }, /*#__PURE__*/React.createElement("div", {
    className: css.classNames(Button$1.default.DisclosureIcon, loading && Button$1.default.hidden)
  }, /*#__PURE__*/React.createElement(Icon.Icon, {
    source: loading ? 'placeholder' : getDisclosureIconSource(disclosure, polarisIcons.ChevronUpMinor, polarisIcons.ChevronDownMinor)
  }))) : null;
  const iconSource = isIconSource(icon) ? /*#__PURE__*/React.createElement(Icon.Icon, {
    source: loading ? 'placeholder' : icon
  }) : icon;
  const iconMarkup = iconSource ? /*#__PURE__*/React.createElement("span", {
    className: css.classNames(Button$1.default.Icon, loading && Button$1.default.hidden)
  }, iconSource) : null;
  const childMarkup = children ? /*#__PURE__*/React.createElement("span", {
    className: css.classNames(Button$1.default.Text, removeUnderline && Button$1.default.removeUnderline)
    // Fixes Safari bug that doesn't re-render button text to correct color
    ,
    key: disabled ? 'text-disabled' : 'text'
  }, children) : null;
  const spinnerSVGMarkup = loading ? /*#__PURE__*/React.createElement("span", {
    className: Button$1.default.Spinner
  }, /*#__PURE__*/React.createElement(Spinner.Spinner, {
    size: "small",
    accessibilityLabel: i18n.translate('Polaris.Button.spinnerAccessibilityLabel')
  })) : null;
  const commonProps = {
    id,
    className,
    accessibilityLabel,
    ariaDescribedBy,
    role,
    onClick,
    onFocus,
    onBlur,
    onMouseUp: focus.handleMouseUpByBlurring,
    onMouseEnter,
    onTouchStart,
    'data-primary-link': dataPrimaryLink
  };
  const linkProps = {
    url,
    external,
    download,
    target
  };
  const actionProps = {
    submit,
    disabled: isDisabled,
    loading,
    ariaControls,
    ariaExpanded,
    ariaChecked,
    pressed,
    onKeyDown,
    onKeyUp,
    onKeyPress,
    onPointerDown
  };
  const buttonMarkup = /*#__PURE__*/React.createElement(UnstyledButton.UnstyledButton, Object.assign({}, commonProps, linkProps, actionProps), /*#__PURE__*/React.createElement("span", {
    className: Button$1.default.Content
  }, spinnerSVGMarkup, iconMarkup, childMarkup, disclosureMarkup));
  return buttonMarkup;
}
function isIconSource(x) {
  return typeof x === 'string' || typeof x === 'object' && x.body || typeof x === 'function';
}
function getDisclosureIconSource(disclosure, upIcon, downIcon) {
  if (disclosure === 'select') {
    return polarisIcons.SelectMinor;
  }
  return disclosure === 'up' ? upIcon : downIcon;
}

exports.Button = Button;
