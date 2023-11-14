"use strict";
exports.id = 5904;
exports.ids = [5904];
exports.modules = {

/***/ 35904:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Mb": () => (/* reexport */ createVarName),
  "du": () => (/* binding */ isTokenName),
  "TY": () => (/* reexport */ metaThemeDefault),
  "rv": () => (/* binding */ themeDefault)
});

// UNUSED EXPORTS: breakpointsAliases, createThemeClassName, createVar, getMediaConditions, getThemeVarNames, metaThemes, themeNameDefault, themeNames, themes, toPx, toPxs, toRem

;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/src/themes/base/breakpoints.mjs
// NOTE: Order is important here: smallest -> largest
// Exporting as const means it will be typed as a Tuple instead of string[]
var breakpointsAliases = (/* unused pure expression or super */ null && (['xs', 'sm', 'md', 'lg', 'xl']));

// Convert the Tuple to a union

var breakpoints = {
  'breakpoints-xs': {
    value: '0px',
    description: 'Commonly used for sizing containers (e.g. max-width). See below for media query usage.'
  },
  'breakpoints-sm': {
    value: '490px',
    description: 'Commonly used for sizing containers (e.g. max-width). See below for media query usage.'
  },
  'breakpoints-md': {
    value: '768px',
    description: 'Commonly used for sizing containers (e.g. max-width). See below for media query usage.'
  },
  'breakpoints-lg': {
    value: '1040px',
    description: 'Commonly used for sizing containers (e.g. max-width). See below for media query usage.'
  },
  'breakpoints-xl': {
    value: '1440px',
    description: 'Commonly used for sizing containers (e.g. max-width). See below for media query usage.'
  }
};



;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/_virtual/_rollupPluginBabelHelpers.mjs
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}
function _rollupPluginBabelHelpers_slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}



;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/src/utils.mjs


var _templateObject;
var BASE_FONT_SIZE = 16;
var UNIT_PX = 'px';
var UNIT_EM = 'em';
var UNIT_REM = 'rem';

// https://regex101.com/r/zvY2bu/1
var DIGIT_REGEX = new RegExp(String.raw(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["-?d+(?:.d+|d*)"], ["-?\\d+(?:\\.\\d+|\\d*)"]))));
var UNIT_REGEX = new RegExp(UNIT_PX + "|" + UNIT_EM + "|" + UNIT_REM);
function getUnit(value) {
  if (value === void 0) {
    value = '';
  }
  var unit = value.match(new RegExp(DIGIT_REGEX.source + "(" + UNIT_REGEX.source + ")"));
  return unit && unit[1];
}
function toPx(value) {
  if (value === void 0) {
    value = '';
  }
  var unit = getUnit(value);
  if (!unit) return value;
  if (unit === UNIT_PX) {
    return value;
  }
  if (unit === UNIT_EM || unit === UNIT_REM) {
    return "" + parseFloat(value) * BASE_FONT_SIZE + UNIT_PX;
  }
}
function toPxs(value) {
  return value.replace(new RegExp(DIGIT_REGEX.source + "(" + UNIT_EM + "|" + UNIT_REM + ")", 'g'), function (emOrRem) {
    var _toPx;
    return (_toPx = toPx(emOrRem)) != null ? _toPx : emOrRem;
  });
}
function toEm(value, fontSize) {
  if (value === void 0) {
    value = '';
  }
  if (fontSize === void 0) {
    fontSize = BASE_FONT_SIZE;
  }
  var unit = getUnit(value);
  if (!unit) return value;
  if (unit === UNIT_EM) {
    return value;
  }
  if (unit === UNIT_PX) {
    return "" + parseFloat(value) / fontSize + UNIT_EM;
  }
  if (unit === UNIT_REM) {
    return "" + parseFloat(value) * BASE_FONT_SIZE / fontSize + UNIT_EM;
  }
}
function toRem(value) {
  if (value === void 0) {
    value = '';
  }
  var unit = getUnit(value);
  if (!unit) return value;
  if (unit === UNIT_REM) {
    return value;
  }
  if (unit === UNIT_EM) {
    return "" + parseFloat(value) + UNIT_REM;
  }
  if (unit === UNIT_PX) {
    return "" + parseFloat(value) / BASE_FONT_SIZE + UNIT_REM;
  }
}
function rem(value) {
  return value.replace(new RegExp(DIGIT_REGEX.source + "(" + UNIT_PX + ")", 'g'), function (px) {
    var _toRem;
    return (_toRem = toRem(px)) != null ? _toRem : px;
  });
}
function tokenGroupToRems(metaTokenGroup) {
  return Object.fromEntries(Object.entries(metaTokenGroup).map(function (_ref) {
    var _ref2 = _rollupPluginBabelHelpers_slicedToArray(_ref, 2),
      tokenName = _ref2[0],
      tokenProperties = _ref2[1];
    return [tokenName, Object.assign(Object.assign({}, tokenProperties), {}, {
      value: rem(tokenProperties.value)
    })];
  })
  // We loose the `metaTokenGroup` inference after transforming the object with
  // `Object.fromEntries()` and `Object.entries()`. Thus, we cast the result
  // back to `T` since we are simply converting the `value` from px to rem.
  );
}

function createVarName(tokenName) {
  return "--p-" + tokenName;
}
function createVar(tokenName) {
  return "var(" + createVarName(tokenName) + ")";
}
function getTokenNames(theme) {
  return Object.values(theme).flatMap(function (tokenGroup) {
    return Object.keys(tokenGroup);
  });
}

/**
 * Allowed Polaris token custom properties.
 *
 * Result: ['--p-color-bg', '--p-color-text', etc...]
 */
function getThemeVarNames(theme) {
  return getTokenNames(theme).map(createVarName);
}

/**
 * Alias direction used for composing Polaris `breakpoints` utilities.
 */

/**
 * A collection of directional media conditions for a given Polaris `breakpoints` alias.
 */

/**
 * Media conditions for all Polaris `breakpoints` aliases.
 */

function getMediaConditions(breakpoints) {
  var breakpointEntries = Object.entries(breakpoints);
  var lastBreakpointIndex = breakpointEntries.length - 1;
  return Object.fromEntries(breakpointEntries.map(function (entry, index) {
    var _ref3 = entry,
      _ref4 = _slicedToArray(_ref3, 2),
      breakpointsTokenName = _ref4[0],
      breakpoint = _ref4[1];
    var upMediaCondition = getUpMediaCondition(breakpoint);
    var downMediaCondition = getDownMediaCondition(breakpoint);
    var onlyMediaCondition = index === lastBreakpointIndex ? upMediaCondition : upMediaCondition + " and " + getDownMediaCondition(breakpointEntries[index + 1][1]);
    return [breakpointsTokenName, {
      // Media condition for the current breakpoint and up
      up: upMediaCondition,
      // Media condition for current breakpoint and down
      down: downMediaCondition,
      // Media condition for only the current breakpoint
      only: onlyMediaCondition
    }];
  }));
}
function getUpMediaCondition(breakpoint) {
  return "(min-width: " + toEm(breakpoint) + ")";
}

/**
 * Down media condition breakpoints are being subtracted by 0.04px to prevent
 * them from overwriting up media queries. We experimented with multiple offsets
 * and felt that 0.04px would be the safest across different pixel densities,
 * while being representable in ems with 4 decimal places of precision.
 */
function getDownMediaCondition(breakpoint) {
  var _toPx2;
  var offsetBreakpoint = parseFloat((_toPx2 = toPx(breakpoint)) != null ? _toPx2 : '') - 0.04;
  return "(max-width: " + toEm(offsetBreakpoint + "px") + ")";
}
var tokenGroupNamesToRems = ['border', 'breakpoints', 'font', 'height', 'shadow', 'space', 'text', 'width'];

/**
 * Mimics the behavior of an identity function:
 * - Validates the input matches the `MetaThemeShape` type exactly
 * - Converts all `px` values to `rem`
 * - Infers all members
 *
 * @example
 * ```
 * const example = createMetaThemeBase({
 *   color: {
 *     bg: {value: '#fff'},
 *   },
 * })
 * ```
 *
 * Where `typeof example` is inferred as `{ color: { bg: { value: string } } }`
 */
function createMetaThemeBase(metaTheme) {
  return Object.fromEntries(Object.entries(metaTheme).map(function (_ref5) {
    var _ref6 = _rollupPluginBabelHelpers_slicedToArray(_ref5, 2),
      tokenGroupName = _ref6[0],
      tokenGroup = _ref6[1];
    return [tokenGroupName, tokenGroupNamesToRems.includes(tokenGroupName) ? tokenGroupToRems(tokenGroup) : tokenGroup];
  }));
}



// EXTERNAL MODULE: ../polaris-tokens/node_modules/deepmerge/dist/cjs.js
var cjs = __webpack_require__(19679);
;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/src/size.mjs
var size = {
  '0': '0px',
  '0165': '0.66px',
  '025': '1px',
  '050': '2px',
  '100': '4px',
  '150': '6px',
  '200': '8px',
  '275': '11px',
  '300': '12px',
  '325': '13px',
  '350': '14px',
  '400': '16px',
  '500': '20px',
  '600': '24px',
  '700': '28px',
  '750': '30px',
  '800': '32px',
  '900': '36px',
  '1000': '40px',
  '1200': '48px',
  '1600': '64px',
  '2000': '80px',
  '2400': '96px',
  '2800': '112px',
  '3200': '128px'
};



;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/src/themes/base/border.mjs


var border = {
  'border-radius-0': {
    value: size[0]
  },
  'border-radius-050': {
    value: size["050"]
  },
  'border-radius-100': {
    value: size[100]
  },
  'border-radius-150': {
    value: size[150]
  },
  'border-radius-200': {
    value: size[200]
  },
  'border-radius-300': {
    value: size[300]
  },
  'border-radius-400': {
    value: size[400]
  },
  'border-radius-500': {
    value: size[500]
  },
  'border-radius-750': {
    value: size[750]
  },
  'border-radius-full': {
    value: '9999px'
  },
  'border-width-0165': {
    value: size["0165"]
  },
  'border-width-025': {
    value: size["025"]
  },
  'border-width-050': {
    value: size["050"]
  },
  'border-width-100': {
    value: size[100]
  }
};



;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/src/colors.mjs
var gray = {
  1: 'rgba(255, 255, 255, 1)',
  2: 'rgba(253, 253, 253, 1)',
  3: 'rgba(250, 250, 250, 1)',
  4: 'rgba(247, 247, 247, 1)',
  5: 'rgba(243, 243, 243, 1)',
  6: 'rgba(241, 241, 241, 1)',
  7: 'rgba(235, 235, 235, 1)',
  8: 'rgba(227, 227, 227, 1)',
  9: 'rgba(212, 212, 212, 1)',
  10: 'rgba(204, 204, 204, 1)',
  11: 'rgba(181, 181, 181, 1)',
  12: 'rgba(138, 138, 138, 1)',
  13: 'rgba(97, 97, 97, 1)',
  14: 'rgba(74, 74, 74, 1)',
  15: 'rgba(48, 48, 48, 1)',
  16: 'rgba(26, 26, 26, 1)'
};
var azure = {
  '1': 'rgba(251, 253, 255, 1)',
  '2': 'rgba(242, 249, 255, 1)',
  '3': 'rgba(234, 244, 255, 1)',
  '4': 'rgba(224, 240, 255, 1)',
  '5': 'rgba(213, 235, 255, 1)',
  '6': 'rgba(202, 230, 255, 1)',
  '7': 'rgba(192, 225, 255, 1)',
  '8': 'rgba(168, 216, 255, 1)',
  '9': 'rgba(145, 208, 255, 1)',
  '10': 'rgba(81, 192, 255, 1)',
  '11': 'rgba(0, 148, 213, 1)',
  '12': 'rgba(0, 124, 180, 1)',
  '13': 'rgba(0, 103, 155, 1)',
  '14': 'rgba(0, 82, 124, 1)',
  '15': 'rgba(0, 58, 90, 1)',
  '16': 'rgba(0, 33, 51, 1)'
};
var blue = {
  '1': 'rgba(252, 253, 255, 1)',
  '2': 'rgba(246, 248, 255, 1)',
  '3': 'rgba(240, 242, 255, 1)',
  '4': 'rgba(234, 237, 255, 1)',
  '5': 'rgba(226, 231, 255, 1)',
  '6': 'rgba(219, 225, 255, 1)',
  '7': 'rgba(213, 220, 255, 1)',
  '8': 'rgba(197, 208, 255, 1)',
  '9': 'rgba(186, 199, 255, 1)',
  '10': 'rgba(151, 173, 255, 1)',
  '11': 'rgba(65, 136, 255, 1)',
  '12': 'rgba(0, 113, 233, 1)',
  '13': 'rgba(0, 91, 211, 1)',
  '14': 'rgba(0, 66, 153, 1)',
  '15': 'rgba(0, 46, 106, 1)',
  '16': 'rgba(0, 22, 51, 1)'
};
var cyan = {
  '1': 'rgba(250, 255, 254, 1)',
  '2': 'rgba(231, 252, 248, 1)',
  '3': 'rgba(215, 251, 243, 1)',
  '4': 'rgba(192, 249, 239, 1)',
  '5': 'rgba(165, 247, 233, 1)',
  '6': 'rgba(144, 244, 227, 1)',
  '7': 'rgba(146, 237, 222, 1)',
  '8': 'rgba(130, 227, 209, 1)',
  '9': 'rgba(116, 219, 200, 1)',
  '10': 'rgba(23, 199, 167, 1)',
  '11': 'rgba(19, 163, 137, 1)',
  '12': 'rgba(14, 132, 112, 1)',
  '13': 'rgba(8, 107, 90, 1)',
  '14': 'rgba(9, 83, 70, 1)',
  '15': 'rgba(6, 56, 47, 1)',
  '16': 'rgba(5, 36, 30, 1)'
};
var green = {
  '1': 'rgba(248, 255, 251, 1)',
  '2': 'rgba(227, 255, 237, 1)',
  '3': 'rgba(205, 254, 225, 1)',
  '4': 'rgba(180, 254, 210, 1)',
  '5': 'rgba(146, 254, 194, 1)',
  '6': 'rgba(99, 253, 176, 1)',
  '7': 'rgba(56, 250, 163, 1)',
  '8': 'rgba(53, 238, 155, 1)',
  '9': 'rgba(50, 225, 147, 1)',
  '10': 'rgba(46, 211, 137, 1)',
  '11': 'rgba(50, 160, 110, 1)',
  '12': 'rgba(41, 132, 90, 1)',
  '13': 'rgba(19, 111, 69, 1)',
  '14': 'rgba(12, 81, 50, 1)',
  '15': 'rgba(8, 61, 37, 1)',
  '16': 'rgba(9, 42, 27, 1)'
};
var magenta = {
  '1': 'rgba(255, 253, 255, 1)',
  '2': 'rgba(255, 245, 255, 1)',
  '3': 'rgba(253, 239, 253, 1)',
  '4': 'rgba(254, 231, 254, 1)',
  '5': 'rgba(252, 223, 252, 1)',
  '6': 'rgba(251, 215, 251, 1)',
  '7': 'rgba(251, 207, 251, 1)',
  '8': 'rgba(249, 190, 249, 1)',
  '9': 'rgba(248, 177, 248, 1)',
  '10': 'rgba(246, 141, 246, 1)',
  '11': 'rgba(225, 86, 225, 1)',
  '12': 'rgba(197, 48, 197, 1)',
  '13': 'rgba(159, 38, 159, 1)',
  '14': 'rgba(121, 26, 121, 1)',
  '15': 'rgba(86, 16, 86, 1)',
  '16': 'rgba(52, 6, 52, 1)'
};
var orange = {
  '1': 'rgba(255, 253, 250, 1)',
  '2': 'rgba(255, 247, 238, 1)',
  '3': 'rgba(255, 241, 227, 1)',
  '4': 'rgba(255, 235, 213, 1)',
  '5': 'rgba(255, 228, 198, 1)',
  '6': 'rgba(255, 221, 182, 1)',
  '7': 'rgba(255, 214, 164, 1)',
  '8': 'rgba(255, 200, 121, 1)',
  '9': 'rgba(255, 184, 0, 1)',
  '10': 'rgba(229, 165, 0, 1)',
  '11': 'rgba(178, 132, 0, 1)',
  '12': 'rgba(149, 111, 0, 1)',
  '13': 'rgba(124, 88, 0, 1)',
  '14': 'rgba(94, 66, 0, 1)',
  '15': 'rgba(65, 45, 0, 1)',
  '16': 'rgba(37, 26, 0, 1)'
};
var purple = {
  '1': 'rgba(253, 253, 255, 1)',
  '2': 'rgba(248, 247, 255, 1)',
  '3': 'rgba(243, 241, 255, 1)',
  '4': 'rgba(239, 236, 255, 1)',
  '5': 'rgba(233, 229, 255, 1)',
  '6': 'rgba(228, 222, 255, 1)',
  '7': 'rgba(223, 217, 255, 1)',
  '8': 'rgba(212, 204, 255, 1)',
  '9': 'rgba(199, 188, 255, 1)',
  '10': 'rgba(170, 149, 255, 1)',
  '11': 'rgba(148, 116, 255, 1)',
  '12': 'rgba(128, 81, 255, 1)',
  '13': 'rgba(113, 38, 255, 1)',
  '14': 'rgba(87, 0, 209, 1)',
  '15': 'rgba(59, 0, 147, 1)',
  '16': 'rgba(28, 0, 79, 1)'
};
var red = {
  '1': 'rgba(255, 251, 251, 1)',
  '2': 'rgba(255, 246, 246, 1)',
  '3': 'rgba(255, 237, 236, 1)',
  '4': 'rgba(254, 233, 232, 1)',
  '5': 'rgba(254, 226, 225, 1)',
  '6': 'rgba(254, 218, 217, 1)',
  '7': 'rgba(254, 211, 209, 1)',
  '8': 'rgba(254, 195, 193, 1)',
  '9': 'rgba(253, 176, 172, 1)',
  '10': 'rgba(253, 129, 122, 1)',
  '11': 'rgba(239, 77, 47, 1)',
  '12': 'rgba(229, 28, 0, 1)',
  '13': 'rgba(181, 38, 11, 1)',
  '14': 'rgba(142, 31, 11, 1)',
  '15': 'rgba(95, 21, 7, 1)',
  '16': 'rgba(47, 10, 4, 1)'
};
var rose = {
  '1': 'rgba(255, 253, 253, 1)',
  '2': 'rgba(255, 246, 248, 1)',
  '3': 'rgba(255, 239, 243, 1)',
  '4': 'rgba(255, 232, 238, 1)',
  '5': 'rgba(255, 225, 232, 1)',
  '6': 'rgba(255, 217, 227, 1)',
  '7': 'rgba(254, 209, 221, 1)',
  '8': 'rgba(254, 193, 210, 1)',
  '9': 'rgba(254, 181, 202, 1)',
  '10': 'rgba(254, 142, 177, 1)',
  '11': 'rgba(253, 75, 146, 1)',
  '12': 'rgba(227, 12, 118, 1)',
  '13': 'rgba(185, 7, 95, 1)',
  '14': 'rgba(141, 4, 72, 1)',
  '15': 'rgba(100, 2, 49, 1)',
  '16': 'rgba(62, 1, 28, 1)'
};
var yellow = {
  '1': 'rgba(255, 253, 246, 1)',
  '2': 'rgba(255, 248, 219, 1)',
  '3': 'rgba(255, 244, 191, 1)',
  '4': 'rgba(255, 239, 157, 1)',
  '5': 'rgba(255, 235, 120, 1)',
  '6': 'rgba(255, 230, 0, 1)',
  '7': 'rgba(247, 223, 0, 1)',
  '8': 'rgba(234, 211, 0, 1)',
  '9': 'rgba(225, 203, 0, 1)',
  '10': 'rgba(197, 178, 0, 1)',
  '11': 'rgba(153, 138, 0, 1)',
  '12': 'rgba(130, 117, 0, 1)',
  '13': 'rgba(105, 95, 0, 1)',
  '14': 'rgba(79, 71, 0, 1)',
  '15': 'rgba(51, 46, 0, 1)',
  '16': 'rgba(31, 28, 0, 1)'
};
var blackAlpha = {
  1: 'rgba(0, 0, 0, 0)',
  2: 'rgba(0, 0, 0, 0.01)',
  3: 'rgba(0, 0, 0, 0.02)',
  4: 'rgba(0, 0, 0, 0.03)',
  5: 'rgba(0, 0, 0, 0.05)',
  6: 'rgba(0, 0, 0, 0.06)',
  7: 'rgba(0, 0, 0, 0.08)',
  8: 'rgba(0, 0, 0, 0.11)',
  9: 'rgba(0, 0, 0, 0.17)',
  10: 'rgba(0, 0, 0, 0.20)',
  11: 'rgba(0, 0, 0, 0.29)',
  12: 'rgba(0, 0, 0, 0.46)',
  13: 'rgba(0, 0, 0, 0.62)',
  14: 'rgba(0, 0, 0, 0.71)',
  15: 'rgba(0, 0, 0, 0.81)',
  16: 'rgba(0, 0, 0, 0.90)'
};



;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/src/themes/base/color.mjs


var color = {
  'color-bg': {
    value: gray[6],
    description: 'The default background color of the admin.'
  },
  'color-bg-inverse': {
    value: gray[16],
    description: 'Use for high contrast page or component backgrounds.'
  },
  'color-bg-surface': {
    value: gray[1],
    description: 'The background color for elements with the highest level of prominence, like a card.'
  },
  'color-bg-surface-hover': {
    value: gray[4],
    description: 'The hover state color for elements with the highest level of prominence.'
  },
  'color-bg-surface-active': {
    value: gray[5],
    description: 'The active state (on press) color for elements with the highest level of prominence.'
  },
  'color-bg-surface-selected': {
    value: gray[6],
    description: 'The selected state color for elements with the highest level of prominence.'
  },
  'color-bg-surface-disabled': {
    value: blackAlpha[5],
    description: 'The disabled state color for elements.'
  },
  'color-bg-surface-secondary': {
    value: gray[4],
    description: 'The background color for elements with a secondary level of prominence.'
  },
  'color-bg-surface-secondary-hover': {
    value: gray[6],
    description: 'The hover state color for elements with a secondary level of prominence.'
  },
  'color-bg-surface-secondary-active': {
    value: gray[7],
    description: 'The active state (on press) color for elements with a secondary level of prominence.'
  },
  'color-bg-surface-secondary-selected': {
    value: gray[7],
    description: 'The selected state color for elements with a secondary level of prominence.'
  },
  'color-bg-surface-tertiary': {
    value: gray[5],
    description: 'The background color for elements with a third level of prominence.'
  },
  'color-bg-surface-tertiary-hover': {
    value: gray[7],
    description: 'The hover state color for elements with a third level of prominence.'
  },
  'color-bg-surface-tertiary-active': {
    value: gray[8],
    description: 'The active state (on press) color for elements with a third level of prominence.'
  },
  'color-bg-surface-brand': {
    value: gray[8],
    description: 'Use to apply the key color to elements.'
  },
  'color-bg-surface-brand-hover': {
    value: gray[7],
    description: 'The hover state color for key elements.'
  },
  'color-bg-surface-brand-active': {
    value: gray[6],
    description: 'The active state (on press) color for key elements.'
  },
  'color-bg-surface-brand-selected': {
    value: gray[6],
    description: 'The selected state color for key elements.'
  },
  'color-bg-surface-info': {
    value: azure[3],
    description: 'Use for backgrounds communicating important information, like banners.'
  },
  'color-bg-surface-info-hover': {
    value: azure[4],
    description: 'The hover state color for communicating important information.'
  },
  'color-bg-surface-info-active': {
    value: azure[6],
    description: 'The active state (on press) color for communicating important information.'
  },
  'color-bg-surface-success': {
    value: green[3],
    description: 'Use for backgrounds communicating success, like banners.'
  },
  'color-bg-surface-success-hover': {
    value: green[4],
    description: 'The hover state color for communicating success.'
  },
  'color-bg-surface-success-active': {
    value: green[5],
    description: 'The active state (on press) color for communicating success.'
  },
  'color-bg-surface-caution': {
    value: yellow[2],
    description: 'Use for backgrounds communicating caution, like banners.'
  },
  'color-bg-surface-caution-hover': {
    value: yellow[3],
    description: 'The hover state for communicating caution.'
  },
  'color-bg-surface-caution-active': {
    value: yellow[4],
    description: 'The active state (on press) color for communicating caution.'
  },
  'color-bg-surface-warning': {
    value: orange[3],
    description: 'Use for backgrounds communicating warning, like banners.'
  },
  'color-bg-surface-warning-hover': {
    value: orange[4],
    description: 'The hover state color for communicating warning.'
  },
  'color-bg-surface-warning-active': {
    value: orange[5],
    description: 'The active state (on press) color for communicating warning.'
  },
  'color-bg-surface-critical': {
    value: red[4],
    description: 'Use for backgrounds communicating critical information, like banners or input errors.'
  },
  'color-bg-surface-critical-hover': {
    value: red[5],
    description: 'The hover state color for communicating critical information.'
  },
  'color-bg-surface-critical-active': {
    value: red[6],
    description: 'The active state (on press) color for communicating critical information.'
  },
  'color-bg-surface-emphasis': {
    value: blue[3],
    description: 'Use for backgrounds indicating areas of focus in editors, such as the theme editor.'
  },
  'color-bg-surface-emphasis-hover': {
    value: blue[4],
    description: 'The hover state color for elements indicating areas of focus in editors.'
  },
  'color-bg-surface-emphasis-active': {
    value: blue[5],
    description: 'The active state (on press) color for elements indicating areas of focus in editors.'
  },
  'color-bg-surface-magic': {
    value: purple[2],
    description: 'Use for backgrounds of elements suggested by magic AI.'
  },
  'color-bg-surface-magic-hover': {
    value: purple[3],
    description: 'The hover state color for elements suggested by magic AI.'
  },
  'color-bg-surface-magic-active': {
    value: purple[5],
    description: 'The active state (on press) color for elements suggested by magic AI.'
  },
  'color-bg-surface-inverse': {
    value: gray[15],
    description: 'Use for elements on bg-inverse.'
  },
  'color-bg-surface-transparent': {
    value: blackAlpha[1],
    description: 'Use for elements that need a fully transparent background.'
  },
  'color-bg-fill': {
    value: gray[1],
    description: 'The background color of contained elements with a smaller surface area, like a button.'
  },
  'color-bg-fill-hover': {
    value: gray[3],
    description: 'The hover state color of contained elements with a smaller surface area, like a button.'
  },
  'color-bg-fill-active': {
    value: gray[4],
    description: 'The active state (on press) color of contained elements with a smaller surface area, like a button.'
  },
  'color-bg-fill-selected': {
    value: gray[10],
    description: 'The selected state color of contained elements with a smaller surface area, like a button or checkbox.'
  },
  'color-bg-fill-disabled': {
    value: blackAlpha[5],
    description: 'The disabled state color of contained elements with a smaller surface area, like a button.'
  },
  'color-bg-fill-secondary': {
    value: gray[6],
    description: 'The background color of elements with a smaller surface area and a secondary level of prominence.'
  },
  'color-bg-fill-secondary-hover': {
    value: gray[7],
    description: 'The hover state color of elements with a smaller surface area and a secondary level of prominence.'
  },
  'color-bg-fill-secondary-active': {
    value: gray[8],
    description: 'The active state (on press) color of elements with a smaller surface area and a secondary level of prominence.'
  },
  'color-bg-fill-tertiary': {
    value: gray[8],
    description: 'The background color of elements with a smaller surface area and a third level of prominence.'
  },
  'color-bg-fill-tertiary-hover': {
    value: gray[9],
    description: 'The hover state color of elements with a smaller surface area and a third level of prominence.'
  },
  'color-bg-fill-tertiary-active': {
    value: gray[10],
    description: 'The active state (on press) color of elements with a smaller surface area and a third level of prominence.'
  },
  'color-bg-fill-brand': {
    value: gray[15],
    description: 'The background color of main actions, like primary buttons.'
  },
  'color-bg-fill-brand-hover': {
    value: gray[16],
    description: 'The hover state color of main actions, like primary buttons.'
  },
  'color-bg-fill-brand-active': {
    value: gray[16],
    description: 'The active state (on press) color of main actions, like primary buttons.'
  },
  'color-bg-fill-brand-selected': {
    value: gray[15],
    description: 'The selected state color of main actions, like primary buttons.'
  },
  'color-bg-fill-brand-disabled': {
    value: blackAlpha[9],
    description: 'The disabled state color of main actions, like primary buttons.'
  },
  'color-bg-fill-info': {
    value: azure[9],
    description: 'Use for backgrounds communicating important information on elements with a smaller surface area, like a badge or button.'
  },
  'color-bg-fill-info-hover': {
    value: azure[10],
    description: 'The hover state color for communicating important information on elements with a smaller surface area.'
  },
  'color-bg-fill-info-active': {
    value: azure[11],
    description: 'The active state (on press) color for communicating important information on elements with a smaller surface area.'
  },
  'color-bg-fill-info-secondary': {
    value: azure[4],
    description: 'Use for backgrounds communicating important information on elements with a smaller surface area, with a secondary level of prominence.'
  },
  'color-bg-fill-success': {
    value: green[12],
    description: "Use for backgrounds communicating success on elements with a smaller surface area, like a badge or a banner."
  },
  'color-bg-fill-success-hover': {
    value: green[13],
    description: 'The hover state color for communicating success on elements with a smaller surface area.'
  },
  'color-bg-fill-success-active': {
    value: green[14],
    description: 'The active state (on press) color for communicating success on elements with a smaller surface area.'
  },
  'color-bg-fill-success-secondary': {
    value: green[3],
    description: 'Use for backgrounds communicating success on elements with a smaller surface area, with a secondary level of prominence.'
  },
  'color-bg-fill-warning': {
    value: orange[9],
    description: 'Use for backgrounds communicating warning on elements with a smaller surface area, like a badge or a banner.'
  },
  'color-bg-fill-warning-hover': {
    value: orange[10],
    description: 'The hover state color for communicating warning on elements with a smaller surface area.'
  },
  'color-bg-fill-warning-active': {
    value: orange[11],
    description: 'The active state (on press) color for communicating warning on elements with a smaller surface area.'
  },
  'color-bg-fill-warning-secondary': {
    value: orange[7],
    description: 'Use for backgrounds communicating warning on elements with a smaller surface area, with a secondary level of prominence.'
  },
  'color-bg-fill-caution': {
    value: yellow[6],
    description: 'Use for backgrounds communicating caution on elements with a smaller surface area, like a badge or a banner.'
  },
  'color-bg-fill-caution-hover': {
    value: yellow[8],
    description: 'The hover state color for communicating caution on elements with a smaller surface area.'
  },
  'color-bg-fill-caution-active': {
    value: yellow[9],
    description: 'The active state (on press) color for communicating caution on elements with a smaller surface area.'
  },
  'color-bg-fill-caution-secondary': {
    value: yellow[4],
    description: 'Use for backgrounds communicating caution on elements with a smaller surface area, with a secondary level of prominence.'
  },
  'color-bg-fill-critical': {
    value: red[12],
    description: 'Use for backgrounds communicating critical information on elements with a smaller surface area, like a badge or a banner.'
  },
  'color-bg-fill-critical-hover': {
    value: red[13],
    description: 'The hover state color for communicating critical information on elements with a smaller surface area.'
  },
  'color-bg-fill-critical-active': {
    value: red[14],
    description: 'The active state (on press) color for communicating critical information on elements with a smaller surface area.'
  },
  'color-bg-fill-critical-selected': {
    value: red[14],
    description: 'The selected state color for communicating critical information on elements with a smaller surface area.'
  },
  'color-bg-fill-critical-secondary': {
    value: red[6],
    description: 'Use for backgrounds communicating critical information on elements with a smaller surface area, with a secondary level of prominence.'
  },
  'color-bg-fill-emphasis': {
    value: blue[13],
    description: 'Use for backgrounds indicating areas of focus in editors on elements with a smaller surface area, like a button or a badge.'
  },
  'color-bg-fill-emphasis-hover': {
    value: blue[14],
    description: 'The hover state color for indicating areas of focus in editors on elements with a smaller surface area.'
  },
  'color-bg-fill-emphasis-active': {
    value: blue[15],
    description: 'The active state (on press) color for indicating areas of focus in editors on elements with a smaller surface area.'
  },
  'color-bg-fill-magic': {
    value: purple[12],
    description: 'The background color of elements suggested by magic AI, like a badge or a banner.'
  },
  'color-bg-fill-magic-secondary': {
    value: purple[6],
    description: 'The background color of elements suggested by magic AI, with a secondary level of prominence.'
  },
  'color-bg-fill-magic-secondary-hover': {
    value: purple[7],
    description: 'The hover state color of elements suggested by magic AI, with a secondary level of prominence.'
  },
  'color-bg-fill-magic-secondary-active': {
    value: purple[8],
    description: 'The active state (on press) color of elements suggested by magic AI, with a secondary level of prominence.'
  },
  'color-bg-fill-inverse': {
    value: gray[15],
    description: 'The background color of elements with a smaller surface area on an inverse background.'
  },
  'color-bg-fill-inverse-hover': {
    value: gray[14],
    description: 'The hover state color of elements with a smaller surface area on an inverse background.'
  },
  'color-bg-fill-inverse-active': {
    value: gray[13],
    description: 'The active state (on press) color of elements with a smaller surface area on an inverse background.'
  },
  'color-bg-fill-transparent': {
    value: blackAlpha[3],
    description: 'The background color of elements that need to sit on different background colors, like tabs.'
  },
  'color-bg-fill-transparent-hover': {
    value: blackAlpha[5],
    description: 'The hover state color of elements that need to sit on different background colors, like tabs.'
  },
  'color-bg-fill-transparent-active': {
    value: blackAlpha[7],
    description: 'The active state (on press) color of elements that need to sit on different background colors, like tabs.'
  },
  'color-bg-fill-transparent-selected': {
    value: blackAlpha[7],
    description: 'The selected state color of elements that need to sit on different background colors, like tabs.'
  },
  'color-bg-fill-transparent-secondary': {
    value: blackAlpha[6],
    description: 'The background color of elements that need to sit on different background colors, with a secondary level of prominence.'
  },
  'color-bg-fill-transparent-secondary-hover': {
    value: blackAlpha[7],
    description: 'The hover state color of elements that need to sit on different background colors, with a secondary level of prominence.'
  },
  'color-bg-fill-transparent-secondary-active': {
    value: blackAlpha[8],
    description: 'The active state (on press) color of elements that need to sit on different background colors, with a secondary level of prominence.'
  },
  'color-text': {
    value: gray[15],
    description: 'The default text color.'
  },
  'color-text-secondary': {
    value: gray[13],
    description: 'Use for text with a secondary level of prominence.'
  },
  'color-text-disabled': {
    value: gray[11],
    description: 'Use for text in a disabled state.'
  },
  'color-text-link': {
    value: blue[13],
    description: 'Use for text links.'
  },
  'color-text-link-hover': {
    value: blue[14],
    description: 'The hover state color for text links.'
  },
  'color-text-link-active': {
    value: blue[15],
    description: 'The active state (on press) color for text links.'
  },
  'color-text-brand': {
    value: gray[14],
    description: 'Use for text that needs to pull attention.'
  },
  'color-text-brand-hover': {
    value: gray[15],
    description: 'The hover state color for text that needs to pull attention.'
  },
  'color-text-brand-on-bg-fill': {
    value: gray[1],
    description: 'Use for text on bg-fill-brand, like primary buttons.'
  },
  'color-text-brand-on-bg-fill-hover': {
    value: gray[8],
    description: 'The hover state color for text on bg-fill-brand-hover.'
  },
  'color-text-brand-on-bg-fill-active': {
    value: gray[10],
    description: 'The active state (on press) color for text on bg-fill-brand.'
  },
  'color-text-brand-on-bg-fill-disabled': {
    value: gray[1],
    description: 'The disabled state color for text on bg-fill-brand-disabled.'
  },
  'color-text-info': {
    value: azure[14],
    description: 'Use for text communicating important information.'
  },
  'color-text-info-hover': {
    value: azure[15],
    description: 'The hover state color for text communicating important information.'
  },
  'color-text-info-active': {
    value: azure[16],
    description: 'The active state (on press) color for text communicating important information.'
  },
  'color-text-info-on-bg-fill': {
    value: azure[16],
    description: 'Use for text and icons on bg-fill-info.'
  },
  'color-text-success': {
    value: green[14],
    description: 'Use for text communicating success.'
  },
  'color-text-success-hover': {
    value: green[15],
    description: 'The hover state color for text communicating success.'
  },
  'color-text-success-active': {
    value: green[16],
    description: 'The active state (on press) color for text communicating success.'
  },
  'color-text-success-on-bg-fill': {
    value: green[1],
    description: 'Use for text and icons on bg-fill-success.'
  },
  'color-text-caution': {
    value: yellow[14],
    description: 'Use for text communicating caution.'
  },
  'color-text-caution-hover': {
    value: yellow[15],
    description: 'The hover state color for text communicating caution.'
  },
  'color-text-caution-active': {
    value: yellow[16],
    description: 'The active state (on press) color for text communicating caution.'
  },
  'color-text-caution-on-bg-fill': {
    value: yellow[15],
    description: 'Use for text and icons on bg-fill-caution.'
  },
  'color-text-warning': {
    value: orange[14],
    description: 'Use for text communicating warning.'
  },
  'color-text-warning-hover': {
    value: orange[15],
    description: 'The hover state color for text communicating warning.'
  },
  'color-text-warning-active': {
    value: orange[16],
    description: 'The active state (on press) color for text communicating warning.'
  },
  'color-text-warning-on-bg-fill': {
    value: orange[16],
    description: 'Use for text and icons on bg-fill-warning.'
  },
  'color-text-critical': {
    value: red[14],
    description: 'Use for text communicating critical information.'
  },
  'color-text-critical-hover': {
    value: red[15],
    description: 'The hover state color for text communicating critical information.'
  },
  'color-text-critical-active': {
    value: red[16],
    description: 'The active state (on press) color for text communicating critical information.'
  },
  'color-text-critical-on-bg-fill': {
    value: red[1],
    description: 'Use for text and icons on bg-fill-critical.'
  },
  'color-text-emphasis': {
    value: blue[13],
    description: 'Use for text indicating areas of focus in editors, like the theme editor.'
  },
  'color-text-emphasis-hover': {
    value: blue[14],
    description: 'The hover state color for text indicating areas of focus.'
  },
  'color-text-emphasis-active': {
    value: blue[15],
    description: 'The active state (on press) color for text indicating areas of focus.'
  },
  'color-text-emphasis-on-bg-fill': {
    value: blue[1],
    description: 'Use for text and icons on bg-fill-emphasis.'
  },
  'color-text-emphasis-on-bg-fill-hover': {
    value: blue[5],
    description: 'Use for text and icons on bg-fill-emphasis-hover.'
  },
  'color-text-emphasis-on-bg-fill-active': {
    value: blue[7],
    description: 'Use for text and icons on bg-fill-emphasis-active.'
  },
  'color-text-magic': {
    value: purple[14],
    description: 'Use for text suggested by magic AI.'
  },
  'color-text-magic-secondary': {
    value: purple[12],
    description: 'Use for text suggested by magic AI with a secondary level of prominence.'
  },
  'color-text-magic-on-bg-fill': {
    value: purple[1],
    description: 'Use for text and icons on bg-fill-magic.'
  },
  'color-text-inverse': {
    value: gray[8],
    description: 'Use for text on an inverse background.'
  },
  'color-text-inverse-secondary': {
    value: gray[11],
    description: 'Use for secondary text on an inverse background.'
  },
  'color-text-link-inverse': {
    value: blue[8],
    description: 'Use for text links on an inverse background.'
  },
  'color-border': {
    value: gray[8],
    description: 'The default color for borders on any element.'
  },
  'color-border-hover': {
    value: gray[10],
    description: 'The hover color for borders on any element.'
  },
  'color-border-disabled': {
    value: gray[7],
    description: 'The disabled color for borders on any element.'
  },
  'color-border-secondary': {
    value: gray[7],
    description: 'The color for hr elements or any visual dividers.'
  },
  'color-border-tertiary': {
    value: gray[10],
    description: 'The border color on any element. Pair with bg-surface-tertiary or bg-fill-tertiary.'
  },
  'color-border-focus': {
    value: blue[13],
    description: 'The focus ring for any interactive element in a focused state.'
  },
  'color-border-brand': {
    value: gray[8],
    description: 'Use for borders paired with brand colors.'
  },
  'color-border-info': {
    value: azure[8],
    description: 'Use for borders communicating information.'
  },
  'color-border-success': {
    value: green[5],
    description: 'Use for borders communicating success.'
  },
  'color-border-caution': {
    value: yellow[5],
    description: 'Use for borders communicating caution.'
  },
  'color-border-warning': {
    value: orange[8],
    description: 'Use for borders communicating warning.'
  },
  'color-border-critical': {
    value: red[8],
    description: 'Use for borders communicating critical information.'
  },
  'color-border-critical-secondary': {
    value: red[14],
    description: 'Use for borders communicating critical information, such as borders on invalid text fields.'
  },
  'color-border-emphasis': {
    value: blue[13],
    description: 'Use for borders indicating areas of focus.'
  },
  'color-border-emphasis-hover': {
    value: blue[14],
    description: 'The hover state color for borders indicating areas of focus.'
  },
  'color-border-emphasis-active': {
    value: blue[15],
    description: 'The active state (on press) color for borders indicating areas of focus.'
  },
  'color-border-magic': {
    value: purple[6],
    description: 'Use for borders suggested by magic AI.'
  },
  'color-border-magic-secondary': {
    value: purple[11],
    description: 'Use for borders suggested by magic AI, such as borders on text fields.'
  },
  'color-border-magic-secondary-hover': {
    value: purple[12],
    description: 'Use for borders suggested by magic AI, such as borders on text fields.'
  },
  'color-border-inverse': {
    value: gray[13],
    description: 'Use for borders on an inverse background, such as borders on the global search.'
  },
  'color-border-inverse-hover': {
    value: gray[10],
    description: 'The hover state color for borders on an inverse background.'
  },
  'color-border-inverse-active': {
    value: gray[8],
    description: 'The active state (on press) color for borders on an inverse background.'
  },
  'color-icon': {
    value: gray[14],
    description: 'The default color for icons.'
  },
  'color-icon-hover': {
    value: gray[15],
    description: 'The hover state color for icons.'
  },
  'color-icon-active': {
    value: gray[16],
    description: 'The active state (on press) color for icons.'
  },
  'color-icon-disabled': {
    value: gray[10],
    description: 'The disabled state color for icons.'
  },
  'color-icon-secondary': {
    value: gray[12],
    description: 'Use for secondary icons.'
  },
  'color-icon-secondary-hover': {
    value: gray[13],
    description: 'The hover state color for secondary icons.'
  },
  'color-icon-secondary-active': {
    value: gray[14],
    description: 'The active state (on press) color for secondary icons.'
  },
  'color-icon-brand': {
    value: gray[16],
    description: 'Use for icons that need to pull more focus.'
  },
  'color-icon-info': {
    value: azure[11],
    description: 'Use for icons communicating information.'
  },
  'color-icon-success': {
    value: green[12],
    description: 'Use for icons communicating success.'
  },
  'color-icon-caution': {
    value: yellow[11],
    description: 'Use for icons communicating caution.'
  },
  'color-icon-warning': {
    value: orange[11],
    description: 'Use for icons communicating warning.'
  },
  'color-icon-critical': {
    value: red[11],
    description: 'Use for icons communicating critical information.'
  },
  'color-icon-emphasis': {
    value: blue[13],
    description: 'Use for icons indicating areas of focus in editors, like the theme editor.'
  },
  'color-icon-emphasis-hover': {
    value: blue[14],
    description: 'The hover color for icons indicating areas of focus in editors.'
  },
  'color-icon-emphasis-active': {
    value: blue[15],
    description: 'The active state (on press) color for icons indicating areas of focus in editors.'
  },
  'color-icon-magic': {
    value: purple[12],
    description: 'Use for icons suggested by magic AI.'
  },
  'color-icon-inverse': {
    value: gray[8],
    description: 'Use for icons on an inverse background.'
  },
  'color-avatar-bg-fill': {
    value: gray[11]
  },
  'color-avatar-five-bg-fill': {
    value: rose[7]
  },
  'color-avatar-five-text-on-bg-fill': {
    value: rose[14]
  },
  'color-avatar-four-bg-fill': {
    value: azure[7]
  },
  'color-avatar-four-text-on-bg-fill': {
    value: azure[14]
  },
  'color-avatar-one-bg-fill': {
    value: magenta[7]
  },
  'color-avatar-one-text-on-bg-fill': {
    value: magenta[14]
  },
  'color-avatar-text-on-bg-fill': {
    value: gray[1]
  },
  'color-avatar-three-bg-fill': {
    value: cyan[7]
  },
  'color-avatar-three-text-on-bg-fill': {
    value: cyan[14]
  },
  'color-avatar-two-bg-fill': {
    value: green[7]
  },
  'color-avatar-two-text-on-bg-fill': {
    value: green[14]
  },
  'color-backdrop-bg': {
    value: blackAlpha[14]
  },
  'color-checkbox-bg-surface-disabled': {
    value: blackAlpha[7]
  },
  'color-checkbox-icon-disabled': {
    value: gray[1]
  },
  'color-input-bg-surface': {
    value: gray[2]
  },
  'color-input-bg-surface-hover': {
    value: gray[3]
  },
  'color-input-bg-surface-active': {
    value: gray[4]
  },
  'color-input-border': {
    value: gray[12]
  },
  'color-input-border-hover': {
    value: gray[13]
  },
  'color-input-border-active': {
    value: gray[16]
  },
  'color-nav-bg': {
    value: gray[7]
  },
  'color-nav-bg-surface': {
    value: blackAlpha[3]
  },
  'color-nav-bg-surface-hover': {
    value: gray[6]
  },
  'color-nav-bg-surface-active': {
    value: gray[3]
  },
  'color-nav-bg-surface-selected': {
    value: gray[3]
  },
  'color-radio-button-bg-surface-disabled': {
    value: blackAlpha[7]
  },
  'color-radio-button-icon-disabled': {
    value: gray[1]
  },
  'color-video-thumbnail-play-button-bg-fill-hover': {
    value: blackAlpha[15]
  },
  'color-video-thumbnail-play-button-bg-fill': {
    value: blackAlpha[14]
  },
  'color-video-thumbnail-play-button-text-on-bg-fill': {
    value: gray[1]
  }
};



;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/src/themes/base/font.mjs


var font = {
  'font-family-sans': {
    value: "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
  },
  'font-family-mono': {
    value: "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
  },
  'font-size-275': {
    value: size[275]
  },
  'font-size-300': {
    value: size[300]
  },
  'font-size-325': {
    value: size[325]
  },
  'font-size-350': {
    value: size[350]
  },
  'font-size-400': {
    value: size[400]
  },
  'font-size-500': {
    value: size[500]
  },
  'font-size-600': {
    value: size[600]
  },
  'font-size-750': {
    value: size[750]
  },
  'font-size-900': {
    value: size[900]
  },
  'font-size-1000': {
    value: size[1000]
  },
  'font-weight-regular': {
    value: '450'
  },
  'font-weight-medium': {
    value: '550'
  },
  'font-weight-semibold': {
    value: '650'
  },
  'font-weight-bold': {
    value: '700'
  },
  'font-letter-spacing-densest': {
    value: '-0.54px'
  },
  'font-letter-spacing-denser': {
    value: '-0.3px'
  },
  'font-letter-spacing-dense': {
    value: '-0.2px'
  },
  'font-letter-spacing-normal': {
    value: '0px'
  },
  'font-line-height-300': {
    value: size[300]
  },
  'font-line-height-400': {
    value: size[400]
  },
  'font-line-height-500': {
    value: size[500]
  },
  'font-line-height-600': {
    value: size[600]
  },
  'font-line-height-700': {
    value: size[700]
  },
  'font-line-height-800': {
    value: size[800]
  },
  'font-line-height-1000': {
    value: size[1000]
  },
  'font-line-height-1200': {
    value: size[1200]
  }
};



;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/src/themes/base/height.mjs


var height = {
  'height-0': {
    value: size[0]
  },
  'height-025': {
    value: size["025"]
  },
  'height-050': {
    value: size["050"]
  },
  'height-100': {
    value: size[100]
  },
  'height-150': {
    value: size[150]
  },
  'height-200': {
    value: size[200]
  },
  'height-300': {
    value: size[300]
  },
  'height-400': {
    value: size[400]
  },
  'height-500': {
    value: size[500]
  },
  'height-600': {
    value: size[600]
  },
  'height-700': {
    value: size[700]
  },
  'height-800': {
    value: size[800]
  },
  'height-900': {
    value: size[900]
  },
  'height-1000': {
    value: size[1000]
  },
  'height-1200': {
    value: size[1200]
  },
  'height-1600': {
    value: size[1600]
  },
  'height-2000': {
    value: size[2000]
  },
  'height-2400': {
    value: size[2400]
  },
  'height-2800': {
    value: size[2800]
  },
  'height-3200': {
    value: size[3200]
  }
};



;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/src/themes/base/motion.mjs
var motion = {
  'motion-duration-0': {
    value: '0ms'
  },
  'motion-duration-50': {
    value: '50ms'
  },
  'motion-duration-100': {
    value: '100ms'
  },
  'motion-duration-150': {
    value: '150ms'
  },
  'motion-duration-200': {
    value: '200ms'
  },
  'motion-duration-250': {
    value: '250ms'
  },
  'motion-duration-300': {
    value: '300ms'
  },
  'motion-duration-350': {
    value: '350ms'
  },
  'motion-duration-400': {
    value: '400ms'
  },
  'motion-duration-450': {
    value: '450ms'
  },
  'motion-duration-500': {
    value: '500ms'
  },
  'motion-duration-5000': {
    value: '5000ms'
  },
  'motion-ease': {
    value: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    description: 'Responds quickly and finishes with control. A great default for any user interaction.'
  },
  'motion-ease-in': {
    value: 'cubic-bezier(0.42, 0, 1, 1)',
    description: 'Starts slowly and finishes at top speed. Use sparingly.'
  },
  'motion-ease-out': {
    value: 'cubic-bezier(0.19, 0.91, 0.38, 1)',
    description: 'Starts at top speed and finishes slowly. Use sparingly.'
  },
  'motion-ease-in-out': {
    value: 'cubic-bezier(0.42, 0, 0.58, 1)',
    description: 'Starts and finishes with equal speed. A good default for transitions triggered by the system.'
  },
  'motion-linear': {
    value: 'cubic-bezier(0, 0, 1, 1)',
    description: 'Moves with constant speed. Use for continuous and mechanical animations, such as rotating spinners.'
  },
  'motion-keyframes-bounce': {
    value: '{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }'
  },
  'motion-keyframes-fade-in': {
    value: '{ to { opacity: 1 } }'
  },
  'motion-keyframes-pulse': {
    value: '{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }'
  },
  'motion-keyframes-spin': {
    value: '{ to { transform: rotate(1turn) } }'
  },
  'motion-keyframes-appear-above': {
    value: '{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }'
  },
  'motion-keyframes-appear-below': {
    value: '{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }'
  }
};



;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/src/themes/base/shadow.mjs
var shadow = {
  'shadow-0': {
    value: 'none'
  },
  'shadow-100': {
    value: '0px 1px 0px 0px rgba(26, 26, 26, 0.07)'
  },
  'shadow-200': {
    value: '0px 3px 1px -1px rgba(26, 26, 26, 0.07)'
  },
  'shadow-300': {
    value: '0px 4px 6px -2px rgba(26, 26, 26, 0.20)'
  },
  'shadow-400': {
    value: '0px 8px 16px -4px rgba(26, 26, 26, 0.22)'
  },
  'shadow-500': {
    value: '0px 12px 20px -8px rgba(26, 26, 26, 0.24)'
  },
  'shadow-600': {
    value: '0px 20px 20px -8px rgba(26, 26, 26, 0.28)'
  },
  'shadow-bevel-100': {
    value: '1px 0px 0px 0px rgba(0, 0, 0, 0.13) inset, -1px 0px 0px 0px rgba(0, 0, 0, 0.13) inset, 0px -1px 0px 0px rgba(0, 0, 0, 0.17) inset, 0px 1px 0px 0px rgba(204, 204, 204, 0.5) inset'
  },
  'shadow-inset-100': {
    value: '0px 1px 2px 0px rgba(26, 26, 26, 0.15) inset, 0px 1px 1px 0px rgba(26, 26, 26, 0.15) inset'
  },
  'shadow-inset-200': {
    value: '0px 2px 1px 0px rgba(26, 26, 26, 0.20) inset, 1px 0px 1px 0px rgba(26, 26, 26, 0.12) inset, -1px 0px 1px 0px rgba(26, 26, 26, 0.12) inset'
  },
  'shadow-button': {
    value: '0px 1px 0px 0px #E3E3E3 inset, 1px 0px 0px 0px #E3E3E3 inset, -1px 0px 0px 0px #E3E3E3 inset, 0px -1px 0px 0px #B5B5B5 inset'
  },
  'shadow-button-hover': {
    value: '0px 1px 0px 0px #EBEBEB inset, -1px 0px 0px 0px #EBEBEB inset, 1px 0px 0px 0px #EBEBEB inset, 0px -1px 0px 0px #CCC inset'
  },
  'shadow-button-inset': {
    value: '0px 2px 1px 0px rgba(26, 26, 26, 0.20) inset, 1px 0px 1px 0px rgba(26, 26, 26, 0.12) inset, -1px 0px 1px 0px rgba(26, 26, 26, 0.12) inset'
  },
  'shadow-button-primary': {
    value: '0px 2px 0px 0px rgba(255, 255, 255, 0.2) inset, 2px 0px 0px 0px rgba(255, 255, 255, 0.2) inset, -2px 0px 0px 0px rgba(255, 255, 255, 0.2) inset, 0px -1px 0px 1px #000 inset, 0px 1px 0px 0px #000 inset'
  },
  'shadow-button-primary-hover': {
    value: '0px 1px 0px 0px rgba(255, 255, 255, 0.24) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1px 0px 0px #000 inset, 0px -1px 0px 1px #1A1A1A'
  },
  'shadow-button-primary-inset': {
    value: '0px 3px 0px 0px #000 inset'
  },
  'shadow-button-primary-critical': {
    value: '0px 1px 0px 0px rgba(255, 255, 255, 0.48) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1.5px 0px 0px rgba(0, 0, 0, 0.25) inset'
  },
  'shadow-button-primary-critical-hover': {
    value: '0px 1px 0px 0px rgba(255, 255, 255, 0.48) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1.5px 0px 0px rgba(0, 0, 0, 0.25) inset'
  },
  'shadow-button-primary-critical-inset': {
    value: '0px 2px 0px 0px rgba(0, 0, 0, 0.60) inset, 1px 0px 1px 0px rgba(0, 0, 0, 0.20) inset, -1px 0px 1px 0px rgba(0, 0, 0, 0.20) inset'
  },
  'shadow-button-primary-success': {
    value: '0px 1px 0px 0px rgba(255, 255, 255, 0.48) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1.5px 0px 0px rgba(0, 0, 0, 0.25) inset'
  },
  'shadow-button-primary-success-hover': {
    value: '0px 1px 0px 0px rgba(255, 255, 255, 0.48) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1.5px 0px 0px rgba(0, 0, 0, 0.25) inset'
  },
  'shadow-button-primary-success-inset': {
    value: '0px 2px 0px 0px rgba(0, 0, 0, 0.60) inset, 1px 0px 1px 0px rgba(0, 0, 0, 0.20) inset, -1px 0px 1px 0px rgba(0, 0, 0, 0.20) inset'
  },
  'shadow-border-inset': {
    value: '0px 0px 0px 1px rgba(0, 0, 0, 0.08) inset'
  }
};



;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/src/themes/base/space.mjs



var space = {
  'space-0': {
    value: size[0]
  },
  'space-025': {
    value: size["025"]
  },
  'space-050': {
    value: size["050"]
  },
  'space-100': {
    value: size[100]
  },
  'space-150': {
    value: size[150]
  },
  'space-200': {
    value: size[200]
  },
  'space-300': {
    value: size[300]
  },
  'space-400': {
    value: size[400]
  },
  'space-500': {
    value: size[500]
  },
  'space-600': {
    value: size[600]
  },
  'space-800': {
    value: size[800]
  },
  'space-1000': {
    value: size[1000]
  },
  'space-1200': {
    value: size[1200]
  },
  'space-1600': {
    value: size[1600]
  },
  'space-2000': {
    value: size[2000]
  },
  'space-2400': {
    value: size[2400]
  },
  'space-2800': {
    value: size[2800]
  },
  'space-3200': {
    value: size[3200]
  },
  'space-button-group-gap': {
    value: space_createVar('space-200')
  },
  'space-card-gap': {
    value: space_createVar('space-400')
  },
  'space-card-padding': {
    value: space_createVar('space-400')
  },
  'space-table-cell-padding': {
    value: space_createVar('space-150')
  }
};
function space_createVar(spaceTokenName) {
  return "var(" + createVarName(spaceTokenName) + ")";
}



;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/src/themes/base/text.mjs


var text_text = {
  // heading-3xl
  'text-heading-3xl-font-family': {
    value: createVar('font-family-sans')
  },
  'text-heading-3xl-font-size': {
    value: createVar('font-size-900')
  },
  'text-heading-3xl-font-weight': {
    value: createVar('font-weight-bold')
  },
  'text-heading-3xl-font-letter-spacing': {
    value: createVar('font-letter-spacing-densest')
  },
  'text-heading-3xl-font-line-height': {
    value: createVar('font-line-height-1200')
  },
  // heading-2xl
  'text-heading-2xl-font-family': {
    value: createVar('font-family-sans')
  },
  'text-heading-2xl-font-size': {
    value: createVar('font-size-750')
  },
  'text-heading-2xl-font-weight': {
    value: createVar('font-weight-bold')
  },
  'text-heading-2xl-font-letter-spacing': {
    value: createVar('font-letter-spacing-denser')
  },
  'text-heading-2xl-font-line-height': {
    value: createVar('font-line-height-1000')
  },
  // heading-xl
  'text-heading-xl-font-family': {
    value: createVar('font-family-sans')
  },
  'text-heading-xl-font-size': {
    value: createVar('font-size-600')
  },
  'text-heading-xl-font-weight': {
    value: createVar('font-weight-bold')
  },
  'text-heading-xl-font-letter-spacing': {
    value: createVar('font-letter-spacing-dense')
  },
  'text-heading-xl-font-line-height': {
    value: createVar('font-line-height-800')
  },
  // heading-lg
  'text-heading-lg-font-family': {
    value: createVar('font-family-sans')
  },
  'text-heading-lg-font-size': {
    value: createVar('font-size-500')
  },
  'text-heading-lg-font-weight': {
    value: createVar('font-weight-semibold')
  },
  'text-heading-lg-font-letter-spacing': {
    value: createVar('font-letter-spacing-dense')
  },
  'text-heading-lg-font-line-height': {
    value: createVar('font-line-height-600')
  },
  // heading-md
  'text-heading-md-font-family': {
    value: createVar('font-family-sans')
  },
  'text-heading-md-font-size': {
    value: createVar('font-size-350')
  },
  'text-heading-md-font-weight': {
    value: createVar('font-weight-semibold')
  },
  'text-heading-md-font-letter-spacing': {
    value: createVar('font-letter-spacing-normal')
  },
  'text-heading-md-font-line-height': {
    value: createVar('font-line-height-500')
  },
  // heading-sm
  'text-heading-sm-font-family': {
    value: createVar('font-family-sans')
  },
  'text-heading-sm-font-size': {
    value: createVar('font-size-325')
  },
  'text-heading-sm-font-weight': {
    value: createVar('font-weight-semibold')
  },
  'text-heading-sm-font-letter-spacing': {
    value: createVar('font-letter-spacing-normal')
  },
  'text-heading-sm-font-line-height': {
    value: createVar('font-line-height-500')
  },
  // body-lg
  'text-body-lg-font-family': {
    value: createVar('font-family-sans')
  },
  'text-body-lg-font-size': {
    value: createVar('font-size-350')
  },
  'text-body-lg-font-weight': {
    value: createVar('font-weight-regular')
  },
  'text-body-lg-font-letter-spacing': {
    value: createVar('font-letter-spacing-normal')
  },
  'text-body-lg-font-line-height': {
    value: createVar('font-line-height-500')
  },
  // body-md
  'text-body-md-font-family': {
    value: createVar('font-family-sans')
  },
  'text-body-md-font-size': {
    value: createVar('font-size-325')
  },
  'text-body-md-font-weight': {
    value: createVar('font-weight-regular')
  },
  'text-body-md-font-letter-spacing': {
    value: createVar('font-letter-spacing-normal')
  },
  'text-body-md-font-line-height': {
    value: createVar('font-line-height-500')
  },
  // body-sm
  'text-body-sm-font-family': {
    value: createVar('font-family-sans')
  },
  'text-body-sm-font-size': {
    value: createVar('font-size-300')
  },
  'text-body-sm-font-weight': {
    value: createVar('font-weight-regular')
  },
  'text-body-sm-font-letter-spacing': {
    value: createVar('font-letter-spacing-normal')
  },
  'text-body-sm-font-line-height': {
    value: createVar('font-line-height-400')
  },
  // body-xs
  'text-body-xs-font-family': {
    value: createVar('font-family-sans')
  },
  'text-body-xs-font-size': {
    value: createVar('font-size-275')
  },
  'text-body-xs-font-weight': {
    value: createVar('font-weight-regular')
  },
  'text-body-xs-font-letter-spacing': {
    value: createVar('font-letter-spacing-normal')
  },
  'text-body-xs-font-line-height': {
    value: createVar('font-line-height-300')
  }
};



;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/src/themes/base/width.mjs


var width = {
  'width-0': {
    value: size[0]
  },
  'width-025': {
    value: size["025"]
  },
  'width-050': {
    value: size["050"]
  },
  'width-100': {
    value: size[100]
  },
  'width-150': {
    value: size[150]
  },
  'width-200': {
    value: size[200]
  },
  'width-300': {
    value: size[300]
  },
  'width-400': {
    value: size[400]
  },
  'width-500': {
    value: size[500]
  },
  'width-600': {
    value: size[600]
  },
  'width-700': {
    value: size[700]
  },
  'width-800': {
    value: size[800]
  },
  'width-900': {
    value: size[900]
  },
  'width-1000': {
    value: size[1000]
  },
  'width-1200': {
    value: size[1200]
  },
  'width-1600': {
    value: size[1600]
  },
  'width-2000': {
    value: size[2000]
  },
  'width-2400': {
    value: size[2400]
  },
  'width-2800': {
    value: size[2800]
  },
  'width-3200': {
    value: size[3200]
  }
};



;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/src/themes/base/zIndex.mjs
var zIndex = {
  'z-index-1': {
    value: '100'
  },
  'z-index-2': {
    value: '400'
  },
  'z-index-3': {
    value: '510'
  },
  'z-index-4': {
    value: '512'
  },
  'z-index-5': {
    value: '513'
  },
  'z-index-6': {
    value: '514'
  },
  'z-index-7': {
    value: '515'
  },
  'z-index-8': {
    value: '516'
  },
  'z-index-9': {
    value: '517'
  },
  'z-index-10': {
    value: '518'
  },
  'z-index-11': {
    value: '519'
  },
  'z-index-12': {
    value: '520'
  }
};



;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/src/themes/base/index.mjs













var metaThemeBase = createMetaThemeBase({
  border: border,
  breakpoints: breakpoints,
  color: color,
  font: font,
  height: height,
  motion: motion,
  shadow: shadow,
  space: space,
  text: text_text,
  width: width,
  zIndex: zIndex
});



;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/src/themes/utils.mjs





/**
 * Mimics the behavior of an identity function:
 * - Validates the input matches the `MetaThemeShape` type exactly
 * - Converts all `px` values to `rem`
 * - Infers all members
 *
 * @example
 * ```
 * const example = createMetaThemePartial({
 *   color: {
 *     bg: {value: '#fff'},
 *   },
 * })
 * ```
 *
 * Where `typeof example` is inferred as `{ color: { bg: { value: string } } }`
 */
function createMetaThemePartial(metaThemePartial) {
  return Object.fromEntries(Object.entries(metaThemePartial).map(function (_ref) {
    var _ref2 = _rollupPluginBabelHelpers_slicedToArray(_ref, 2),
      tokenGroupName = _ref2[0],
      tokenGroup = _ref2[1];
    return [tokenGroupName, tokenGroup && tokenGroupNamesToRems.includes(tokenGroupName) ? tokenGroupToRems(tokenGroup) : tokenGroup];
  }));
}
function createMetaTheme(metaThemePartial) {
  return cjs(metaThemeBase, metaThemePartial);
}
function createThemeClassName(themeName) {
  return "p-theme-" + themeName;
}
function createIsTokenName(theme) {
  var tokenNames = new Set(getTokenNames(theme));
  return function (tokenName) {
    return tokenNames.has(tokenName);
  };
}

/**
 * Important: Do not export from Polaris tokens. This utility is exposed
 * in the `toValues` build step to ensure the `metaTheme` isn't in client bundles.
 */
createIsTokenName(metaThemeBase);



;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/src/themes/constants.mjs
var themeNameLight = 'light';
var themeNameDefault = themeNameLight;
var themeNames = [themeNameLight, 'light-high-contrast-experimental'];



;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/src/themes/light.mjs


var metaThemeLightPartial = createMetaThemePartial({});
var metaThemeLight = createMetaTheme(metaThemeLightPartial);



;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/src/themes/light-high-contrast.mjs



var metaThemeLightHighContrastPartial = createMetaThemePartial({
  color: {
    'color-text': {
      value: gray[16]
    },
    'color-text-secondary': {
      value: gray[16]
    },
    'color-text-brand': {
      value: gray[16]
    },
    'color-icon-secondary': {
      value: gray[14]
    },
    'color-border': {
      value: gray[12]
    },
    'color-input-border': {
      value: gray[14]
    },
    'color-border-secondary': {
      value: gray[12]
    },
    'color-bg-surface-secondary': {
      value: gray[6]
    }
  },
  shadow: {
    'shadow-bevel-100': {
      value: '0px 1px 0px 0px rgba(26, 26, 26, 0.07), 0px 1px 0px 0px rgba(208, 208, 208, 0.40) inset, 1px 0px 0px 0px #CCC inset, -1px 0px 0px 0px #CCC inset, 0px -1px 0px 0px #999 inset'
    }
  }
});
var metaThemeLightHighContrast = createMetaTheme(metaThemeLightHighContrastPartial);



;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/src/themes/index.mjs





var metaThemes = {
  light: metaThemeLight,
  'light-high-contrast-experimental': metaThemeLightHighContrast
};
var metaThemePartials = {
  light: metaThemeLightPartial,
  'light-high-contrast-experimental': metaThemeLightHighContrastPartial
};
var metaThemeDefaultPartial = metaThemePartials[themeNameDefault];
var metaThemeDefault = createMetaTheme(metaThemeDefaultPartial);



;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/build/index.mjs








var themes = {
  "light": {
    "border": {
      "border-radius-0": "0rem",
      "border-radius-050": "0.125rem",
      "border-radius-100": "0.25rem",
      "border-radius-150": "0.375rem",
      "border-radius-200": "0.5rem",
      "border-radius-300": "0.75rem",
      "border-radius-400": "1rem",
      "border-radius-500": "1.25rem",
      "border-radius-750": "1.875rem",
      "border-radius-full": "624.9375rem",
      "border-width-0165": "0.04125rem",
      "border-width-025": "0.0625rem",
      "border-width-050": "0.125rem",
      "border-width-100": "0.25rem"
    },
    "breakpoints": {
      "breakpoints-xs": "0rem",
      "breakpoints-sm": "30.625rem",
      "breakpoints-md": "48rem",
      "breakpoints-lg": "65rem",
      "breakpoints-xl": "90rem"
    },
    "color": {
      "color-bg": "rgba(241, 241, 241, 1)",
      "color-bg-inverse": "rgba(26, 26, 26, 1)",
      "color-bg-surface": "rgba(255, 255, 255, 1)",
      "color-bg-surface-hover": "rgba(247, 247, 247, 1)",
      "color-bg-surface-active": "rgba(243, 243, 243, 1)",
      "color-bg-surface-selected": "rgba(241, 241, 241, 1)",
      "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-surface-secondary": "rgba(247, 247, 247, 1)",
      "color-bg-surface-secondary-hover": "rgba(241, 241, 241, 1)",
      "color-bg-surface-secondary-active": "rgba(235, 235, 235, 1)",
      "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
      "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
      "color-bg-surface-brand-selected": "rgba(241, 241, 241, 1)",
      "color-bg-surface-info": "rgba(234, 244, 255, 1)",
      "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
      "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
      "color-bg-surface-success": "rgba(205, 254, 225, 1)",
      "color-bg-surface-success-hover": "rgba(180, 254, 210, 1)",
      "color-bg-surface-success-active": "rgba(146, 254, 194, 1)",
      "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
      "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
      "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
      "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
      "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
      "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
      "color-bg-surface-critical": "rgba(254, 233, 232, 1)",
      "color-bg-surface-critical-hover": "rgba(254, 226, 225, 1)",
      "color-bg-surface-critical-active": "rgba(254, 218, 217, 1)",
      "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
      "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
      "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
      "color-bg-surface-magic": "rgba(248, 247, 255, 1)",
      "color-bg-surface-magic-hover": "rgba(243, 241, 255, 1)",
      "color-bg-surface-magic-active": "rgba(233, 229, 255, 1)",
      "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
      "color-bg-fill": "rgba(255, 255, 255, 1)",
      "color-bg-fill-hover": "rgba(250, 250, 250, 1)",
      "color-bg-fill-active": "rgba(247, 247, 247, 1)",
      "color-bg-fill-selected": "rgba(204, 204, 204, 1)",
      "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
      "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
      "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
      "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
      "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
      "color-bg-fill-brand": "rgba(48, 48, 48, 1)",
      "color-bg-fill-brand-hover": "rgba(26, 26, 26, 1)",
      "color-bg-fill-brand-active": "rgba(26, 26, 26, 1)",
      "color-bg-fill-brand-selected": "rgba(48, 48, 48, 1)",
      "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
      "color-bg-fill-info": "rgba(145, 208, 255, 1)",
      "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
      "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
      "color-bg-fill-info-secondary": "rgba(224, 240, 255, 1)",
      "color-bg-fill-success": "rgba(41, 132, 90, 1)",
      "color-bg-fill-success-hover": "rgba(19, 111, 69, 1)",
      "color-bg-fill-success-active": "rgba(12, 81, 50, 1)",
      "color-bg-fill-success-secondary": "rgba(205, 254, 225, 1)",
      "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
      "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
      "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
      "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
      "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
      "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
      "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
      "color-bg-fill-caution-secondary": "rgba(255, 239, 157, 1)",
      "color-bg-fill-critical": "rgba(229, 28, 0, 1)",
      "color-bg-fill-critical-hover": "rgba(181, 38, 11, 1)",
      "color-bg-fill-critical-active": "rgba(142, 31, 11, 1)",
      "color-bg-fill-critical-selected": "rgba(142, 31, 11, 1)",
      "color-bg-fill-critical-secondary": "rgba(254, 218, 217, 1)",
      "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
      "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
      "color-bg-fill-magic-secondary": "rgba(228, 222, 255, 1)",
      "color-bg-fill-magic-secondary-hover": "rgba(223, 217, 255, 1)",
      "color-bg-fill-magic-secondary-active": "rgba(212, 204, 255, 1)",
      "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
      "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
      "color-bg-fill-transparent": "rgba(0, 0, 0, 0.02)",
      "color-bg-fill-transparent-hover": "rgba(0, 0, 0, 0.05)",
      "color-bg-fill-transparent-active": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-selected": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
      "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
      "color-text": "rgba(48, 48, 48, 1)",
      "color-text-secondary": "rgba(97, 97, 97, 1)",
      "color-text-disabled": "rgba(181, 181, 181, 1)",
      "color-text-link": "rgba(0, 91, 211, 1)",
      "color-text-link-hover": "rgba(0, 66, 153, 1)",
      "color-text-link-active": "rgba(0, 46, 106, 1)",
      "color-text-brand": "rgba(74, 74, 74, 1)",
      "color-text-brand-hover": "rgba(48, 48, 48, 1)",
      "color-text-brand-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
      "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
      "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
      "color-text-info": "rgba(0, 82, 124, 1)",
      "color-text-info-hover": "rgba(0, 58, 90, 1)",
      "color-text-info-active": "rgba(0, 33, 51, 1)",
      "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
      "color-text-success": "rgba(12, 81, 50, 1)",
      "color-text-success-hover": "rgba(8, 61, 37, 1)",
      "color-text-success-active": "rgba(9, 42, 27, 1)",
      "color-text-success-on-bg-fill": "rgba(248, 255, 251, 1)",
      "color-text-caution": "rgba(79, 71, 0, 1)",
      "color-text-caution-hover": "rgba(51, 46, 0, 1)",
      "color-text-caution-active": "rgba(31, 28, 0, 1)",
      "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
      "color-text-warning": "rgba(94, 66, 0, 1)",
      "color-text-warning-hover": "rgba(65, 45, 0, 1)",
      "color-text-warning-active": "rgba(37, 26, 0, 1)",
      "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
      "color-text-critical": "rgba(142, 31, 11, 1)",
      "color-text-critical-hover": "rgba(95, 21, 7, 1)",
      "color-text-critical-active": "rgba(47, 10, 4, 1)",
      "color-text-critical-on-bg-fill": "rgba(255, 251, 251, 1)",
      "color-text-emphasis": "rgba(0, 91, 211, 1)",
      "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
      "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
      "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
      "color-text-magic": "rgba(87, 0, 209, 1)",
      "color-text-magic-secondary": "rgba(128, 81, 255, 1)",
      "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
      "color-text-inverse": "rgba(227, 227, 227, 1)",
      "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
      "color-text-link-inverse": "rgba(197, 208, 255, 1)",
      "color-border": "rgba(227, 227, 227, 1)",
      "color-border-hover": "rgba(204, 204, 204, 1)",
      "color-border-disabled": "rgba(235, 235, 235, 1)",
      "color-border-secondary": "rgba(235, 235, 235, 1)",
      "color-border-tertiary": "rgba(204, 204, 204, 1)",
      "color-border-focus": "rgba(0, 91, 211, 1)",
      "color-border-brand": "rgba(227, 227, 227, 1)",
      "color-border-info": "rgba(168, 216, 255, 1)",
      "color-border-success": "rgba(146, 254, 194, 1)",
      "color-border-caution": "rgba(255, 235, 120, 1)",
      "color-border-warning": "rgba(255, 200, 121, 1)",
      "color-border-critical": "rgba(254, 195, 193, 1)",
      "color-border-critical-secondary": "rgba(142, 31, 11, 1)",
      "color-border-emphasis": "rgba(0, 91, 211, 1)",
      "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-border-magic": "rgba(228, 222, 255, 1)",
      "color-border-magic-secondary": "rgba(148, 116, 255, 1)",
      "color-border-magic-secondary-hover": "rgba(128, 81, 255, 1)",
      "color-border-inverse": "rgba(97, 97, 97, 1)",
      "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
      "color-border-inverse-active": "rgba(227, 227, 227, 1)",
      "color-icon": "rgba(74, 74, 74, 1)",
      "color-icon-hover": "rgba(48, 48, 48, 1)",
      "color-icon-active": "rgba(26, 26, 26, 1)",
      "color-icon-disabled": "rgba(204, 204, 204, 1)",
      "color-icon-secondary": "rgba(138, 138, 138, 1)",
      "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
      "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
      "color-icon-brand": "rgba(26, 26, 26, 1)",
      "color-icon-info": "rgba(0, 148, 213, 1)",
      "color-icon-success": "rgba(41, 132, 90, 1)",
      "color-icon-caution": "rgba(153, 138, 0, 1)",
      "color-icon-warning": "rgba(178, 132, 0, 1)",
      "color-icon-critical": "rgba(239, 77, 47, 1)",
      "color-icon-emphasis": "rgba(0, 91, 211, 1)",
      "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-icon-magic": "rgba(128, 81, 255, 1)",
      "color-icon-inverse": "rgba(227, 227, 227, 1)",
      "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
      "color-avatar-five-bg-fill": "rgba(254, 209, 221, 1)",
      "color-avatar-five-text-on-bg-fill": "rgba(141, 4, 72, 1)",
      "color-avatar-four-bg-fill": "rgba(192, 225, 255, 1)",
      "color-avatar-four-text-on-bg-fill": "rgba(0, 82, 124, 1)",
      "color-avatar-one-bg-fill": "rgba(251, 207, 251, 1)",
      "color-avatar-one-text-on-bg-fill": "rgba(121, 26, 121, 1)",
      "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-avatar-three-bg-fill": "rgba(146, 237, 222, 1)",
      "color-avatar-three-text-on-bg-fill": "rgba(9, 83, 70, 1)",
      "color-avatar-two-bg-fill": "rgba(56, 250, 163, 1)",
      "color-avatar-two-text-on-bg-fill": "rgba(12, 81, 50, 1)",
      "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
      "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-input-bg-surface": "rgba(253, 253, 253, 1)",
      "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
      "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
      "color-input-border": "rgba(138, 138, 138, 1)",
      "color-input-border-hover": "rgba(97, 97, 97, 1)",
      "color-input-border-active": "rgba(26, 26, 26, 1)",
      "color-nav-bg": "rgba(235, 235, 235, 1)",
      "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
      "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
      "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
      "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
      "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
      "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
      "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)"
    },
    "font": {
      "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
      "font-size-275": "0.6875rem",
      "font-size-300": "0.75rem",
      "font-size-325": "0.8125rem",
      "font-size-350": "0.875rem",
      "font-size-400": "1rem",
      "font-size-500": "1.25rem",
      "font-size-600": "1.5rem",
      "font-size-750": "1.875rem",
      "font-size-900": "2.25rem",
      "font-size-1000": "2.5rem",
      "font-weight-regular": "450",
      "font-weight-medium": "550",
      "font-weight-semibold": "650",
      "font-weight-bold": "700",
      "font-letter-spacing-densest": "-0.03375rem",
      "font-letter-spacing-denser": "-0.01875rem",
      "font-letter-spacing-dense": "-0.0125rem",
      "font-letter-spacing-normal": "0rem",
      "font-line-height-300": "0.75rem",
      "font-line-height-400": "1rem",
      "font-line-height-500": "1.25rem",
      "font-line-height-600": "1.5rem",
      "font-line-height-700": "1.75rem",
      "font-line-height-800": "2rem",
      "font-line-height-1000": "2.5rem",
      "font-line-height-1200": "3rem"
    },
    "height": {
      "height-0": "0rem",
      "height-025": "0.0625rem",
      "height-050": "0.125rem",
      "height-100": "0.25rem",
      "height-150": "0.375rem",
      "height-200": "0.5rem",
      "height-300": "0.75rem",
      "height-400": "1rem",
      "height-500": "1.25rem",
      "height-600": "1.5rem",
      "height-700": "1.75rem",
      "height-800": "2rem",
      "height-900": "2.25rem",
      "height-1000": "2.5rem",
      "height-1200": "3rem",
      "height-1600": "4rem",
      "height-2000": "5rem",
      "height-2400": "6rem",
      "height-2800": "7rem",
      "height-3200": "8rem"
    },
    "motion": {
      "motion-duration-0": "0ms",
      "motion-duration-50": "50ms",
      "motion-duration-100": "100ms",
      "motion-duration-150": "150ms",
      "motion-duration-200": "200ms",
      "motion-duration-250": "250ms",
      "motion-duration-300": "300ms",
      "motion-duration-350": "350ms",
      "motion-duration-400": "400ms",
      "motion-duration-450": "450ms",
      "motion-duration-500": "500ms",
      "motion-duration-5000": "5000ms",
      "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
      "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
      "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
      "motion-linear": "cubic-bezier(0, 0, 1, 1)",
      "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
      "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
      "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
      "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
      "motion-keyframes-appear-above": "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
      "motion-keyframes-appear-below": "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
    },
    "shadow": {
      "shadow-0": "none",
      "shadow-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07)",
      "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
      "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
      "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
      "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
      "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
      "shadow-bevel-100": "0.0625rem 0rem 0rem 0rem rgba(0, 0, 0, 0.13) inset, -0.0625rem 0rem 0rem 0rem rgba(0, 0, 0, 0.13) inset, 0rem -0.0625rem 0rem 0rem rgba(0, 0, 0, 0.17) inset, 0rem 0.0625rem 0rem 0rem rgba(204, 204, 204, 0.5) inset",
      "shadow-inset-100": "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
      "shadow-inset-200": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
      "shadow-button": "0rem 0.0625rem 0rem 0rem #E3E3E3 inset, 0.0625rem 0rem 0rem 0rem #E3E3E3 inset, -0.0625rem 0rem 0rem 0rem #E3E3E3 inset, 0rem -0.0625rem 0rem 0rem #B5B5B5 inset",
      "shadow-button-hover": "0rem 0.0625rem 0rem 0rem #EBEBEB inset, -0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0rem -0.0625rem 0rem 0rem #CCC inset",
      "shadow-button-inset": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
      "shadow-button-primary": "0rem 0.125rem 0rem 0rem rgba(255, 255, 255, 0.2) inset, 0.125rem 0rem 0rem 0rem rgba(255, 255, 255, 0.2) inset, -0.125rem 0rem 0rem 0rem rgba(255, 255, 255, 0.2) inset, 0rem -0.0625rem 0rem 0.0625rem #000 inset, 0rem 0.0625rem 0rem 0rem #000 inset",
      "shadow-button-primary-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.24) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.0625rem 0rem 0rem #000 inset, 0rem -0.0625rem 0rem 0.0625rem #1A1A1A",
      "shadow-button-primary-inset": "0rem 0.1875rem 0rem 0rem #000 inset",
      "shadow-button-primary-critical": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-critical-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-critical-inset": "0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.60) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.20) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.20) inset",
      "shadow-button-primary-success": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-success-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-success-inset": "0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.60) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.20) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.20) inset",
      "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset"
    },
    "space": {
      "space-0": "0rem",
      "space-025": "0.0625rem",
      "space-050": "0.125rem",
      "space-100": "0.25rem",
      "space-150": "0.375rem",
      "space-200": "0.5rem",
      "space-300": "0.75rem",
      "space-400": "1rem",
      "space-500": "1.25rem",
      "space-600": "1.5rem",
      "space-800": "2rem",
      "space-1000": "2.5rem",
      "space-1200": "3rem",
      "space-1600": "4rem",
      "space-2000": "5rem",
      "space-2400": "6rem",
      "space-2800": "7rem",
      "space-3200": "8rem",
      "space-button-group-gap": "0.5rem",
      "space-card-gap": "1rem",
      "space-card-padding": "1rem",
      "space-table-cell-padding": "0.375rem"
    },
    "text": {
      "text-heading-3xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-3xl-font-size": "2.25rem",
      "text-heading-3xl-font-weight": "700",
      "text-heading-3xl-font-letter-spacing": "-0.03375rem",
      "text-heading-3xl-font-line-height": "3rem",
      "text-heading-2xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-2xl-font-size": "1.875rem",
      "text-heading-2xl-font-weight": "700",
      "text-heading-2xl-font-letter-spacing": "-0.01875rem",
      "text-heading-2xl-font-line-height": "2.5rem",
      "text-heading-xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-xl-font-size": "1.5rem",
      "text-heading-xl-font-weight": "700",
      "text-heading-xl-font-letter-spacing": "-0.0125rem",
      "text-heading-xl-font-line-height": "2rem",
      "text-heading-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-lg-font-size": "1.25rem",
      "text-heading-lg-font-weight": "650",
      "text-heading-lg-font-letter-spacing": "-0.0125rem",
      "text-heading-lg-font-line-height": "1.5rem",
      "text-heading-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-md-font-size": "0.875rem",
      "text-heading-md-font-weight": "650",
      "text-heading-md-font-letter-spacing": "0rem",
      "text-heading-md-font-line-height": "1.25rem",
      "text-heading-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-sm-font-size": "0.8125rem",
      "text-heading-sm-font-weight": "650",
      "text-heading-sm-font-letter-spacing": "0rem",
      "text-heading-sm-font-line-height": "1.25rem",
      "text-body-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-lg-font-size": "0.875rem",
      "text-body-lg-font-weight": "450",
      "text-body-lg-font-letter-spacing": "0rem",
      "text-body-lg-font-line-height": "1.25rem",
      "text-body-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-md-font-size": "0.8125rem",
      "text-body-md-font-weight": "450",
      "text-body-md-font-letter-spacing": "0rem",
      "text-body-md-font-line-height": "1.25rem",
      "text-body-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-sm-font-size": "0.75rem",
      "text-body-sm-font-weight": "450",
      "text-body-sm-font-letter-spacing": "0rem",
      "text-body-sm-font-line-height": "1rem",
      "text-body-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-xs-font-size": "0.6875rem",
      "text-body-xs-font-weight": "450",
      "text-body-xs-font-letter-spacing": "0rem",
      "text-body-xs-font-line-height": "0.75rem"
    },
    "width": {
      "width-0": "0rem",
      "width-025": "0.0625rem",
      "width-050": "0.125rem",
      "width-100": "0.25rem",
      "width-150": "0.375rem",
      "width-200": "0.5rem",
      "width-300": "0.75rem",
      "width-400": "1rem",
      "width-500": "1.25rem",
      "width-600": "1.5rem",
      "width-700": "1.75rem",
      "width-800": "2rem",
      "width-900": "2.25rem",
      "width-1000": "2.5rem",
      "width-1200": "3rem",
      "width-1600": "4rem",
      "width-2000": "5rem",
      "width-2400": "6rem",
      "width-2800": "7rem",
      "width-3200": "8rem"
    },
    "zIndex": {
      "z-index-1": "100",
      "z-index-2": "400",
      "z-index-3": "510",
      "z-index-4": "512",
      "z-index-5": "513",
      "z-index-6": "514",
      "z-index-7": "515",
      "z-index-8": "516",
      "z-index-9": "517",
      "z-index-10": "518",
      "z-index-11": "519",
      "z-index-12": "520"
    }
  },
  "light-high-contrast-experimental": {
    "border": {
      "border-radius-0": "0rem",
      "border-radius-050": "0.125rem",
      "border-radius-100": "0.25rem",
      "border-radius-150": "0.375rem",
      "border-radius-200": "0.5rem",
      "border-radius-300": "0.75rem",
      "border-radius-400": "1rem",
      "border-radius-500": "1.25rem",
      "border-radius-750": "1.875rem",
      "border-radius-full": "624.9375rem",
      "border-width-0165": "0.04125rem",
      "border-width-025": "0.0625rem",
      "border-width-050": "0.125rem",
      "border-width-100": "0.25rem"
    },
    "breakpoints": {
      "breakpoints-xs": "0rem",
      "breakpoints-sm": "30.625rem",
      "breakpoints-md": "48rem",
      "breakpoints-lg": "65rem",
      "breakpoints-xl": "90rem"
    },
    "color": {
      "color-bg": "rgba(241, 241, 241, 1)",
      "color-bg-inverse": "rgba(26, 26, 26, 1)",
      "color-bg-surface": "rgba(255, 255, 255, 1)",
      "color-bg-surface-hover": "rgba(247, 247, 247, 1)",
      "color-bg-surface-active": "rgba(243, 243, 243, 1)",
      "color-bg-surface-selected": "rgba(241, 241, 241, 1)",
      "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-surface-secondary": "rgba(241, 241, 241, 1)",
      "color-bg-surface-secondary-hover": "rgba(241, 241, 241, 1)",
      "color-bg-surface-secondary-active": "rgba(235, 235, 235, 1)",
      "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
      "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
      "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
      "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
      "color-bg-surface-brand-selected": "rgba(241, 241, 241, 1)",
      "color-bg-surface-info": "rgba(234, 244, 255, 1)",
      "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
      "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
      "color-bg-surface-success": "rgba(205, 254, 225, 1)",
      "color-bg-surface-success-hover": "rgba(180, 254, 210, 1)",
      "color-bg-surface-success-active": "rgba(146, 254, 194, 1)",
      "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
      "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
      "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
      "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
      "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
      "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
      "color-bg-surface-critical": "rgba(254, 233, 232, 1)",
      "color-bg-surface-critical-hover": "rgba(254, 226, 225, 1)",
      "color-bg-surface-critical-active": "rgba(254, 218, 217, 1)",
      "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
      "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
      "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
      "color-bg-surface-magic": "rgba(248, 247, 255, 1)",
      "color-bg-surface-magic-hover": "rgba(243, 241, 255, 1)",
      "color-bg-surface-magic-active": "rgba(233, 229, 255, 1)",
      "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
      "color-bg-fill": "rgba(255, 255, 255, 1)",
      "color-bg-fill-hover": "rgba(250, 250, 250, 1)",
      "color-bg-fill-active": "rgba(247, 247, 247, 1)",
      "color-bg-fill-selected": "rgba(204, 204, 204, 1)",
      "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
      "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
      "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
      "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
      "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
      "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
      "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
      "color-bg-fill-brand": "rgba(48, 48, 48, 1)",
      "color-bg-fill-brand-hover": "rgba(26, 26, 26, 1)",
      "color-bg-fill-brand-active": "rgba(26, 26, 26, 1)",
      "color-bg-fill-brand-selected": "rgba(48, 48, 48, 1)",
      "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
      "color-bg-fill-info": "rgba(145, 208, 255, 1)",
      "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
      "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
      "color-bg-fill-info-secondary": "rgba(224, 240, 255, 1)",
      "color-bg-fill-success": "rgba(41, 132, 90, 1)",
      "color-bg-fill-success-hover": "rgba(19, 111, 69, 1)",
      "color-bg-fill-success-active": "rgba(12, 81, 50, 1)",
      "color-bg-fill-success-secondary": "rgba(205, 254, 225, 1)",
      "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
      "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
      "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
      "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
      "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
      "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
      "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
      "color-bg-fill-caution-secondary": "rgba(255, 239, 157, 1)",
      "color-bg-fill-critical": "rgba(229, 28, 0, 1)",
      "color-bg-fill-critical-hover": "rgba(181, 38, 11, 1)",
      "color-bg-fill-critical-active": "rgba(142, 31, 11, 1)",
      "color-bg-fill-critical-selected": "rgba(142, 31, 11, 1)",
      "color-bg-fill-critical-secondary": "rgba(254, 218, 217, 1)",
      "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
      "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
      "color-bg-fill-magic-secondary": "rgba(228, 222, 255, 1)",
      "color-bg-fill-magic-secondary-hover": "rgba(223, 217, 255, 1)",
      "color-bg-fill-magic-secondary-active": "rgba(212, 204, 255, 1)",
      "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
      "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
      "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
      "color-bg-fill-transparent": "rgba(0, 0, 0, 0.02)",
      "color-bg-fill-transparent-hover": "rgba(0, 0, 0, 0.05)",
      "color-bg-fill-transparent-active": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-selected": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
      "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
      "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
      "color-text": "rgba(26, 26, 26, 1)",
      "color-text-secondary": "rgba(26, 26, 26, 1)",
      "color-text-disabled": "rgba(181, 181, 181, 1)",
      "color-text-link": "rgba(0, 91, 211, 1)",
      "color-text-link-hover": "rgba(0, 66, 153, 1)",
      "color-text-link-active": "rgba(0, 46, 106, 1)",
      "color-text-brand": "rgba(26, 26, 26, 1)",
      "color-text-brand-hover": "rgba(48, 48, 48, 1)",
      "color-text-brand-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
      "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
      "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
      "color-text-info": "rgba(0, 82, 124, 1)",
      "color-text-info-hover": "rgba(0, 58, 90, 1)",
      "color-text-info-active": "rgba(0, 33, 51, 1)",
      "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
      "color-text-success": "rgba(12, 81, 50, 1)",
      "color-text-success-hover": "rgba(8, 61, 37, 1)",
      "color-text-success-active": "rgba(9, 42, 27, 1)",
      "color-text-success-on-bg-fill": "rgba(248, 255, 251, 1)",
      "color-text-caution": "rgba(79, 71, 0, 1)",
      "color-text-caution-hover": "rgba(51, 46, 0, 1)",
      "color-text-caution-active": "rgba(31, 28, 0, 1)",
      "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
      "color-text-warning": "rgba(94, 66, 0, 1)",
      "color-text-warning-hover": "rgba(65, 45, 0, 1)",
      "color-text-warning-active": "rgba(37, 26, 0, 1)",
      "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
      "color-text-critical": "rgba(142, 31, 11, 1)",
      "color-text-critical-hover": "rgba(95, 21, 7, 1)",
      "color-text-critical-active": "rgba(47, 10, 4, 1)",
      "color-text-critical-on-bg-fill": "rgba(255, 251, 251, 1)",
      "color-text-emphasis": "rgba(0, 91, 211, 1)",
      "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
      "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
      "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
      "color-text-magic": "rgba(87, 0, 209, 1)",
      "color-text-magic-secondary": "rgba(128, 81, 255, 1)",
      "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
      "color-text-inverse": "rgba(227, 227, 227, 1)",
      "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
      "color-text-link-inverse": "rgba(197, 208, 255, 1)",
      "color-border": "rgba(138, 138, 138, 1)",
      "color-border-hover": "rgba(204, 204, 204, 1)",
      "color-border-disabled": "rgba(235, 235, 235, 1)",
      "color-border-secondary": "rgba(138, 138, 138, 1)",
      "color-border-tertiary": "rgba(204, 204, 204, 1)",
      "color-border-focus": "rgba(0, 91, 211, 1)",
      "color-border-brand": "rgba(227, 227, 227, 1)",
      "color-border-info": "rgba(168, 216, 255, 1)",
      "color-border-success": "rgba(146, 254, 194, 1)",
      "color-border-caution": "rgba(255, 235, 120, 1)",
      "color-border-warning": "rgba(255, 200, 121, 1)",
      "color-border-critical": "rgba(254, 195, 193, 1)",
      "color-border-critical-secondary": "rgba(142, 31, 11, 1)",
      "color-border-emphasis": "rgba(0, 91, 211, 1)",
      "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-border-magic": "rgba(228, 222, 255, 1)",
      "color-border-magic-secondary": "rgba(148, 116, 255, 1)",
      "color-border-magic-secondary-hover": "rgba(128, 81, 255, 1)",
      "color-border-inverse": "rgba(97, 97, 97, 1)",
      "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
      "color-border-inverse-active": "rgba(227, 227, 227, 1)",
      "color-icon": "rgba(74, 74, 74, 1)",
      "color-icon-hover": "rgba(48, 48, 48, 1)",
      "color-icon-active": "rgba(26, 26, 26, 1)",
      "color-icon-disabled": "rgba(204, 204, 204, 1)",
      "color-icon-secondary": "rgba(74, 74, 74, 1)",
      "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
      "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
      "color-icon-brand": "rgba(26, 26, 26, 1)",
      "color-icon-info": "rgba(0, 148, 213, 1)",
      "color-icon-success": "rgba(41, 132, 90, 1)",
      "color-icon-caution": "rgba(153, 138, 0, 1)",
      "color-icon-warning": "rgba(178, 132, 0, 1)",
      "color-icon-critical": "rgba(239, 77, 47, 1)",
      "color-icon-emphasis": "rgba(0, 91, 211, 1)",
      "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
      "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
      "color-icon-magic": "rgba(128, 81, 255, 1)",
      "color-icon-inverse": "rgba(227, 227, 227, 1)",
      "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
      "color-avatar-five-bg-fill": "rgba(254, 209, 221, 1)",
      "color-avatar-five-text-on-bg-fill": "rgba(141, 4, 72, 1)",
      "color-avatar-four-bg-fill": "rgba(192, 225, 255, 1)",
      "color-avatar-four-text-on-bg-fill": "rgba(0, 82, 124, 1)",
      "color-avatar-one-bg-fill": "rgba(251, 207, 251, 1)",
      "color-avatar-one-text-on-bg-fill": "rgba(121, 26, 121, 1)",
      "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
      "color-avatar-three-bg-fill": "rgba(146, 237, 222, 1)",
      "color-avatar-three-text-on-bg-fill": "rgba(9, 83, 70, 1)",
      "color-avatar-two-bg-fill": "rgba(56, 250, 163, 1)",
      "color-avatar-two-text-on-bg-fill": "rgba(12, 81, 50, 1)",
      "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
      "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-input-bg-surface": "rgba(253, 253, 253, 1)",
      "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
      "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
      "color-input-border": "rgba(74, 74, 74, 1)",
      "color-input-border-hover": "rgba(97, 97, 97, 1)",
      "color-input-border-active": "rgba(26, 26, 26, 1)",
      "color-nav-bg": "rgba(235, 235, 235, 1)",
      "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
      "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
      "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
      "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
      "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
      "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
      "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
      "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
      "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)"
    },
    "font": {
      "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
      "font-size-275": "0.6875rem",
      "font-size-300": "0.75rem",
      "font-size-325": "0.8125rem",
      "font-size-350": "0.875rem",
      "font-size-400": "1rem",
      "font-size-500": "1.25rem",
      "font-size-600": "1.5rem",
      "font-size-750": "1.875rem",
      "font-size-900": "2.25rem",
      "font-size-1000": "2.5rem",
      "font-weight-regular": "450",
      "font-weight-medium": "550",
      "font-weight-semibold": "650",
      "font-weight-bold": "700",
      "font-letter-spacing-densest": "-0.03375rem",
      "font-letter-spacing-denser": "-0.01875rem",
      "font-letter-spacing-dense": "-0.0125rem",
      "font-letter-spacing-normal": "0rem",
      "font-line-height-300": "0.75rem",
      "font-line-height-400": "1rem",
      "font-line-height-500": "1.25rem",
      "font-line-height-600": "1.5rem",
      "font-line-height-700": "1.75rem",
      "font-line-height-800": "2rem",
      "font-line-height-1000": "2.5rem",
      "font-line-height-1200": "3rem"
    },
    "height": {
      "height-0": "0rem",
      "height-025": "0.0625rem",
      "height-050": "0.125rem",
      "height-100": "0.25rem",
      "height-150": "0.375rem",
      "height-200": "0.5rem",
      "height-300": "0.75rem",
      "height-400": "1rem",
      "height-500": "1.25rem",
      "height-600": "1.5rem",
      "height-700": "1.75rem",
      "height-800": "2rem",
      "height-900": "2.25rem",
      "height-1000": "2.5rem",
      "height-1200": "3rem",
      "height-1600": "4rem",
      "height-2000": "5rem",
      "height-2400": "6rem",
      "height-2800": "7rem",
      "height-3200": "8rem"
    },
    "motion": {
      "motion-duration-0": "0ms",
      "motion-duration-50": "50ms",
      "motion-duration-100": "100ms",
      "motion-duration-150": "150ms",
      "motion-duration-200": "200ms",
      "motion-duration-250": "250ms",
      "motion-duration-300": "300ms",
      "motion-duration-350": "350ms",
      "motion-duration-400": "400ms",
      "motion-duration-450": "450ms",
      "motion-duration-500": "500ms",
      "motion-duration-5000": "5000ms",
      "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
      "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
      "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
      "motion-linear": "cubic-bezier(0, 0, 1, 1)",
      "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
      "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
      "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
      "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
      "motion-keyframes-appear-above": "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
      "motion-keyframes-appear-below": "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
    },
    "shadow": {
      "shadow-0": "none",
      "shadow-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07)",
      "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
      "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
      "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
      "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
      "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
      "shadow-bevel-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07), 0rem 0.0625rem 0rem 0rem rgba(208, 208, 208, 0.40) inset, 0.0625rem 0rem 0rem 0rem #CCC inset, -0.0625rem 0rem 0rem 0rem #CCC inset, 0rem -0.0625rem 0rem 0rem #999 inset",
      "shadow-inset-100": "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
      "shadow-inset-200": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
      "shadow-button": "0rem 0.0625rem 0rem 0rem #E3E3E3 inset, 0.0625rem 0rem 0rem 0rem #E3E3E3 inset, -0.0625rem 0rem 0rem 0rem #E3E3E3 inset, 0rem -0.0625rem 0rem 0rem #B5B5B5 inset",
      "shadow-button-hover": "0rem 0.0625rem 0rem 0rem #EBEBEB inset, -0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0rem -0.0625rem 0rem 0rem #CCC inset",
      "shadow-button-inset": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
      "shadow-button-primary": "0rem 0.125rem 0rem 0rem rgba(255, 255, 255, 0.2) inset, 0.125rem 0rem 0rem 0rem rgba(255, 255, 255, 0.2) inset, -0.125rem 0rem 0rem 0rem rgba(255, 255, 255, 0.2) inset, 0rem -0.0625rem 0rem 0.0625rem #000 inset, 0rem 0.0625rem 0rem 0rem #000 inset",
      "shadow-button-primary-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.24) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.0625rem 0rem 0rem #000 inset, 0rem -0.0625rem 0rem 0.0625rem #1A1A1A",
      "shadow-button-primary-inset": "0rem 0.1875rem 0rem 0rem #000 inset",
      "shadow-button-primary-critical": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-critical-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-critical-inset": "0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.60) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.20) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.20) inset",
      "shadow-button-primary-success": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-success-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
      "shadow-button-primary-success-inset": "0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.60) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.20) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.20) inset",
      "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset"
    },
    "space": {
      "space-0": "0rem",
      "space-025": "0.0625rem",
      "space-050": "0.125rem",
      "space-100": "0.25rem",
      "space-150": "0.375rem",
      "space-200": "0.5rem",
      "space-300": "0.75rem",
      "space-400": "1rem",
      "space-500": "1.25rem",
      "space-600": "1.5rem",
      "space-800": "2rem",
      "space-1000": "2.5rem",
      "space-1200": "3rem",
      "space-1600": "4rem",
      "space-2000": "5rem",
      "space-2400": "6rem",
      "space-2800": "7rem",
      "space-3200": "8rem",
      "space-button-group-gap": "0.5rem",
      "space-card-gap": "1rem",
      "space-card-padding": "1rem",
      "space-table-cell-padding": "0.375rem"
    },
    "text": {
      "text-heading-3xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-3xl-font-size": "2.25rem",
      "text-heading-3xl-font-weight": "700",
      "text-heading-3xl-font-letter-spacing": "-0.03375rem",
      "text-heading-3xl-font-line-height": "3rem",
      "text-heading-2xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-2xl-font-size": "1.875rem",
      "text-heading-2xl-font-weight": "700",
      "text-heading-2xl-font-letter-spacing": "-0.01875rem",
      "text-heading-2xl-font-line-height": "2.5rem",
      "text-heading-xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-xl-font-size": "1.5rem",
      "text-heading-xl-font-weight": "700",
      "text-heading-xl-font-letter-spacing": "-0.0125rem",
      "text-heading-xl-font-line-height": "2rem",
      "text-heading-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-lg-font-size": "1.25rem",
      "text-heading-lg-font-weight": "650",
      "text-heading-lg-font-letter-spacing": "-0.0125rem",
      "text-heading-lg-font-line-height": "1.5rem",
      "text-heading-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-md-font-size": "0.875rem",
      "text-heading-md-font-weight": "650",
      "text-heading-md-font-letter-spacing": "0rem",
      "text-heading-md-font-line-height": "1.25rem",
      "text-heading-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-heading-sm-font-size": "0.8125rem",
      "text-heading-sm-font-weight": "650",
      "text-heading-sm-font-letter-spacing": "0rem",
      "text-heading-sm-font-line-height": "1.25rem",
      "text-body-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-lg-font-size": "0.875rem",
      "text-body-lg-font-weight": "450",
      "text-body-lg-font-letter-spacing": "0rem",
      "text-body-lg-font-line-height": "1.25rem",
      "text-body-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-md-font-size": "0.8125rem",
      "text-body-md-font-weight": "450",
      "text-body-md-font-letter-spacing": "0rem",
      "text-body-md-font-line-height": "1.25rem",
      "text-body-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-sm-font-size": "0.75rem",
      "text-body-sm-font-weight": "450",
      "text-body-sm-font-letter-spacing": "0rem",
      "text-body-sm-font-line-height": "1rem",
      "text-body-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      "text-body-xs-font-size": "0.6875rem",
      "text-body-xs-font-weight": "450",
      "text-body-xs-font-letter-spacing": "0rem",
      "text-body-xs-font-line-height": "0.75rem"
    },
    "width": {
      "width-0": "0rem",
      "width-025": "0.0625rem",
      "width-050": "0.125rem",
      "width-100": "0.25rem",
      "width-150": "0.375rem",
      "width-200": "0.5rem",
      "width-300": "0.75rem",
      "width-400": "1rem",
      "width-500": "1.25rem",
      "width-600": "1.5rem",
      "width-700": "1.75rem",
      "width-800": "2rem",
      "width-900": "2.25rem",
      "width-1000": "2.5rem",
      "width-1200": "3rem",
      "width-1600": "4rem",
      "width-2000": "5rem",
      "width-2400": "6rem",
      "width-2800": "7rem",
      "width-3200": "8rem"
    },
    "zIndex": {
      "z-index-1": "100",
      "z-index-2": "400",
      "z-index-3": "510",
      "z-index-4": "512",
      "z-index-5": "513",
      "z-index-6": "514",
      "z-index-7": "515",
      "z-index-8": "516",
      "z-index-9": "517",
      "z-index-10": "518",
      "z-index-11": "519",
      "z-index-12": "520"
    }
  }
};
var themeDefault = themes[themeNameDefault];
var isTokenName = createIsTokenName(themes[themeNameDefault]);




/***/ })

};
;