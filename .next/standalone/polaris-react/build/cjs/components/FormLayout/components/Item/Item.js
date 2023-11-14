'use strict';

var React = require('react');
var css = require('../../../../utilities/css.js');
var FormLayout = require('../../FormLayout.scss.js');

function Item({
  children,
  condensed = false
}) {
  const className = css.classNames(FormLayout.default.Item, condensed ? FormLayout.default.condensed : FormLayout.default.grouped);
  return children ? /*#__PURE__*/React.createElement("div", {
    className: className
  }, children) : null;
}

exports.Item = Item;
