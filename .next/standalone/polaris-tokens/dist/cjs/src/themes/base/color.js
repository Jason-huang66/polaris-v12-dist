'use strict';

var colors = require('../../colors.js');

var color = {
  'color-bg': {
    value: colors.gray[6],
    description: 'The default background color of the admin.'
  },
  'color-bg-inverse': {
    value: colors.gray[16],
    description: 'Use for high contrast page or component backgrounds.'
  },
  'color-bg-surface': {
    value: colors.gray[1],
    description: 'The background color for elements with the highest level of prominence, like a card.'
  },
  'color-bg-surface-hover': {
    value: colors.gray[4],
    description: 'The hover state color for elements with the highest level of prominence.'
  },
  'color-bg-surface-active': {
    value: colors.gray[5],
    description: 'The active state (on press) color for elements with the highest level of prominence.'
  },
  'color-bg-surface-selected': {
    value: colors.gray[6],
    description: 'The selected state color for elements with the highest level of prominence.'
  },
  'color-bg-surface-disabled': {
    value: colors.blackAlpha[5],
    description: 'The disabled state color for elements.'
  },
  'color-bg-surface-secondary': {
    value: colors.gray[4],
    description: 'The background color for elements with a secondary level of prominence.'
  },
  'color-bg-surface-secondary-hover': {
    value: colors.gray[6],
    description: 'The hover state color for elements with a secondary level of prominence.'
  },
  'color-bg-surface-secondary-active': {
    value: colors.gray[7],
    description: 'The active state (on press) color for elements with a secondary level of prominence.'
  },
  'color-bg-surface-secondary-selected': {
    value: colors.gray[7],
    description: 'The selected state color for elements with a secondary level of prominence.'
  },
  'color-bg-surface-tertiary': {
    value: colors.gray[5],
    description: 'The background color for elements with a third level of prominence.'
  },
  'color-bg-surface-tertiary-hover': {
    value: colors.gray[7],
    description: 'The hover state color for elements with a third level of prominence.'
  },
  'color-bg-surface-tertiary-active': {
    value: colors.gray[8],
    description: 'The active state (on press) color for elements with a third level of prominence.'
  },
  'color-bg-surface-brand': {
    value: colors.gray[8],
    description: 'Use to apply the key color to elements.'
  },
  'color-bg-surface-brand-hover': {
    value: colors.gray[7],
    description: 'The hover state color for key elements.'
  },
  'color-bg-surface-brand-active': {
    value: colors.gray[6],
    description: 'The active state (on press) color for key elements.'
  },
  'color-bg-surface-brand-selected': {
    value: colors.gray[6],
    description: 'The selected state color for key elements.'
  },
  'color-bg-surface-info': {
    value: colors.azure[3],
    description: 'Use for backgrounds communicating important information, like banners.'
  },
  'color-bg-surface-info-hover': {
    value: colors.azure[4],
    description: 'The hover state color for communicating important information.'
  },
  'color-bg-surface-info-active': {
    value: colors.azure[6],
    description: 'The active state (on press) color for communicating important information.'
  },
  'color-bg-surface-success': {
    value: colors.green[3],
    description: 'Use for backgrounds communicating success, like banners.'
  },
  'color-bg-surface-success-hover': {
    value: colors.green[4],
    description: 'The hover state color for communicating success.'
  },
  'color-bg-surface-success-active': {
    value: colors.green[5],
    description: 'The active state (on press) color for communicating success.'
  },
  'color-bg-surface-caution': {
    value: colors.yellow[2],
    description: 'Use for backgrounds communicating caution, like banners.'
  },
  'color-bg-surface-caution-hover': {
    value: colors.yellow[3],
    description: 'The hover state for communicating caution.'
  },
  'color-bg-surface-caution-active': {
    value: colors.yellow[4],
    description: 'The active state (on press) color for communicating caution.'
  },
  'color-bg-surface-warning': {
    value: colors.orange[3],
    description: 'Use for backgrounds communicating warning, like banners.'
  },
  'color-bg-surface-warning-hover': {
    value: colors.orange[4],
    description: 'The hover state color for communicating warning.'
  },
  'color-bg-surface-warning-active': {
    value: colors.orange[5],
    description: 'The active state (on press) color for communicating warning.'
  },
  'color-bg-surface-critical': {
    value: colors.red[4],
    description: 'Use for backgrounds communicating critical information, like banners or input errors.'
  },
  'color-bg-surface-critical-hover': {
    value: colors.red[5],
    description: 'The hover state color for communicating critical information.'
  },
  'color-bg-surface-critical-active': {
    value: colors.red[6],
    description: 'The active state (on press) color for communicating critical information.'
  },
  'color-bg-surface-emphasis': {
    value: colors.blue[3],
    description: 'Use for backgrounds indicating areas of focus in editors, such as the theme editor.'
  },
  'color-bg-surface-emphasis-hover': {
    value: colors.blue[4],
    description: 'The hover state color for elements indicating areas of focus in editors.'
  },
  'color-bg-surface-emphasis-active': {
    value: colors.blue[5],
    description: 'The active state (on press) color for elements indicating areas of focus in editors.'
  },
  'color-bg-surface-magic': {
    value: colors.purple[2],
    description: 'Use for backgrounds of elements suggested by magic AI.'
  },
  'color-bg-surface-magic-hover': {
    value: colors.purple[3],
    description: 'The hover state color for elements suggested by magic AI.'
  },
  'color-bg-surface-magic-active': {
    value: colors.purple[5],
    description: 'The active state (on press) color for elements suggested by magic AI.'
  },
  'color-bg-surface-inverse': {
    value: colors.gray[15],
    description: 'Use for elements on bg-inverse.'
  },
  'color-bg-surface-transparent': {
    value: colors.blackAlpha[1],
    description: 'Use for elements that need a fully transparent background.'
  },
  'color-bg-fill': {
    value: colors.gray[1],
    description: 'The background color of contained elements with a smaller surface area, like a button.'
  },
  'color-bg-fill-hover': {
    value: colors.gray[3],
    description: 'The hover state color of contained elements with a smaller surface area, like a button.'
  },
  'color-bg-fill-active': {
    value: colors.gray[4],
    description: 'The active state (on press) color of contained elements with a smaller surface area, like a button.'
  },
  'color-bg-fill-selected': {
    value: colors.gray[10],
    description: 'The selected state color of contained elements with a smaller surface area, like a button or checkbox.'
  },
  'color-bg-fill-disabled': {
    value: colors.blackAlpha[5],
    description: 'The disabled state color of contained elements with a smaller surface area, like a button.'
  },
  'color-bg-fill-secondary': {
    value: colors.gray[6],
    description: 'The background color of elements with a smaller surface area and a secondary level of prominence.'
  },
  'color-bg-fill-secondary-hover': {
    value: colors.gray[7],
    description: 'The hover state color of elements with a smaller surface area and a secondary level of prominence.'
  },
  'color-bg-fill-secondary-active': {
    value: colors.gray[8],
    description: 'The active state (on press) color of elements with a smaller surface area and a secondary level of prominence.'
  },
  'color-bg-fill-tertiary': {
    value: colors.gray[8],
    description: 'The background color of elements with a smaller surface area and a third level of prominence.'
  },
  'color-bg-fill-tertiary-hover': {
    value: colors.gray[9],
    description: 'The hover state color of elements with a smaller surface area and a third level of prominence.'
  },
  'color-bg-fill-tertiary-active': {
    value: colors.gray[10],
    description: 'The active state (on press) color of elements with a smaller surface area and a third level of prominence.'
  },
  'color-bg-fill-brand': {
    value: colors.gray[15],
    description: 'The background color of main actions, like primary buttons.'
  },
  'color-bg-fill-brand-hover': {
    value: colors.gray[16],
    description: 'The hover state color of main actions, like primary buttons.'
  },
  'color-bg-fill-brand-active': {
    value: colors.gray[16],
    description: 'The active state (on press) color of main actions, like primary buttons.'
  },
  'color-bg-fill-brand-selected': {
    value: colors.gray[15],
    description: 'The selected state color of main actions, like primary buttons.'
  },
  'color-bg-fill-brand-disabled': {
    value: colors.blackAlpha[9],
    description: 'The disabled state color of main actions, like primary buttons.'
  },
  'color-bg-fill-info': {
    value: colors.azure[9],
    description: 'Use for backgrounds communicating important information on elements with a smaller surface area, like a badge or button.'
  },
  'color-bg-fill-info-hover': {
    value: colors.azure[10],
    description: 'The hover state color for communicating important information on elements with a smaller surface area.'
  },
  'color-bg-fill-info-active': {
    value: colors.azure[11],
    description: 'The active state (on press) color for communicating important information on elements with a smaller surface area.'
  },
  'color-bg-fill-info-secondary': {
    value: colors.azure[4],
    description: 'Use for backgrounds communicating important information on elements with a smaller surface area, with a secondary level of prominence.'
  },
  'color-bg-fill-success': {
    value: colors.green[12],
    description: "Use for backgrounds communicating success on elements with a smaller surface area, like a badge or a banner."
  },
  'color-bg-fill-success-hover': {
    value: colors.green[13],
    description: 'The hover state color for communicating success on elements with a smaller surface area.'
  },
  'color-bg-fill-success-active': {
    value: colors.green[14],
    description: 'The active state (on press) color for communicating success on elements with a smaller surface area.'
  },
  'color-bg-fill-success-secondary': {
    value: colors.green[3],
    description: 'Use for backgrounds communicating success on elements with a smaller surface area, with a secondary level of prominence.'
  },
  'color-bg-fill-warning': {
    value: colors.orange[9],
    description: 'Use for backgrounds communicating warning on elements with a smaller surface area, like a badge or a banner.'
  },
  'color-bg-fill-warning-hover': {
    value: colors.orange[10],
    description: 'The hover state color for communicating warning on elements with a smaller surface area.'
  },
  'color-bg-fill-warning-active': {
    value: colors.orange[11],
    description: 'The active state (on press) color for communicating warning on elements with a smaller surface area.'
  },
  'color-bg-fill-warning-secondary': {
    value: colors.orange[7],
    description: 'Use for backgrounds communicating warning on elements with a smaller surface area, with a secondary level of prominence.'
  },
  'color-bg-fill-caution': {
    value: colors.yellow[6],
    description: 'Use for backgrounds communicating caution on elements with a smaller surface area, like a badge or a banner.'
  },
  'color-bg-fill-caution-hover': {
    value: colors.yellow[8],
    description: 'The hover state color for communicating caution on elements with a smaller surface area.'
  },
  'color-bg-fill-caution-active': {
    value: colors.yellow[9],
    description: 'The active state (on press) color for communicating caution on elements with a smaller surface area.'
  },
  'color-bg-fill-caution-secondary': {
    value: colors.yellow[4],
    description: 'Use for backgrounds communicating caution on elements with a smaller surface area, with a secondary level of prominence.'
  },
  'color-bg-fill-critical': {
    value: colors.red[12],
    description: 'Use for backgrounds communicating critical information on elements with a smaller surface area, like a badge or a banner.'
  },
  'color-bg-fill-critical-hover': {
    value: colors.red[13],
    description: 'The hover state color for communicating critical information on elements with a smaller surface area.'
  },
  'color-bg-fill-critical-active': {
    value: colors.red[14],
    description: 'The active state (on press) color for communicating critical information on elements with a smaller surface area.'
  },
  'color-bg-fill-critical-selected': {
    value: colors.red[14],
    description: 'The selected state color for communicating critical information on elements with a smaller surface area.'
  },
  'color-bg-fill-critical-secondary': {
    value: colors.red[6],
    description: 'Use for backgrounds communicating critical information on elements with a smaller surface area, with a secondary level of prominence.'
  },
  'color-bg-fill-emphasis': {
    value: colors.blue[13],
    description: 'Use for backgrounds indicating areas of focus in editors on elements with a smaller surface area, like a button or a badge.'
  },
  'color-bg-fill-emphasis-hover': {
    value: colors.blue[14],
    description: 'The hover state color for indicating areas of focus in editors on elements with a smaller surface area.'
  },
  'color-bg-fill-emphasis-active': {
    value: colors.blue[15],
    description: 'The active state (on press) color for indicating areas of focus in editors on elements with a smaller surface area.'
  },
  'color-bg-fill-magic': {
    value: colors.purple[12],
    description: 'The background color of elements suggested by magic AI, like a badge or a banner.'
  },
  'color-bg-fill-magic-secondary': {
    value: colors.purple[6],
    description: 'The background color of elements suggested by magic AI, with a secondary level of prominence.'
  },
  'color-bg-fill-magic-secondary-hover': {
    value: colors.purple[7],
    description: 'The hover state color of elements suggested by magic AI, with a secondary level of prominence.'
  },
  'color-bg-fill-magic-secondary-active': {
    value: colors.purple[8],
    description: 'The active state (on press) color of elements suggested by magic AI, with a secondary level of prominence.'
  },
  'color-bg-fill-inverse': {
    value: colors.gray[15],
    description: 'The background color of elements with a smaller surface area on an inverse background.'
  },
  'color-bg-fill-inverse-hover': {
    value: colors.gray[14],
    description: 'The hover state color of elements with a smaller surface area on an inverse background.'
  },
  'color-bg-fill-inverse-active': {
    value: colors.gray[13],
    description: 'The active state (on press) color of elements with a smaller surface area on an inverse background.'
  },
  'color-bg-fill-transparent': {
    value: colors.blackAlpha[3],
    description: 'The background color of elements that need to sit on different background colors, like tabs.'
  },
  'color-bg-fill-transparent-hover': {
    value: colors.blackAlpha[5],
    description: 'The hover state color of elements that need to sit on different background colors, like tabs.'
  },
  'color-bg-fill-transparent-active': {
    value: colors.blackAlpha[7],
    description: 'The active state (on press) color of elements that need to sit on different background colors, like tabs.'
  },
  'color-bg-fill-transparent-selected': {
    value: colors.blackAlpha[7],
    description: 'The selected state color of elements that need to sit on different background colors, like tabs.'
  },
  'color-bg-fill-transparent-secondary': {
    value: colors.blackAlpha[6],
    description: 'The background color of elements that need to sit on different background colors, with a secondary level of prominence.'
  },
  'color-bg-fill-transparent-secondary-hover': {
    value: colors.blackAlpha[7],
    description: 'The hover state color of elements that need to sit on different background colors, with a secondary level of prominence.'
  },
  'color-bg-fill-transparent-secondary-active': {
    value: colors.blackAlpha[8],
    description: 'The active state (on press) color of elements that need to sit on different background colors, with a secondary level of prominence.'
  },
  'color-text': {
    value: colors.gray[15],
    description: 'The default text color.'
  },
  'color-text-secondary': {
    value: colors.gray[13],
    description: 'Use for text with a secondary level of prominence.'
  },
  'color-text-disabled': {
    value: colors.gray[11],
    description: 'Use for text in a disabled state.'
  },
  'color-text-link': {
    value: colors.blue[13],
    description: 'Use for text links.'
  },
  'color-text-link-hover': {
    value: colors.blue[14],
    description: 'The hover state color for text links.'
  },
  'color-text-link-active': {
    value: colors.blue[15],
    description: 'The active state (on press) color for text links.'
  },
  'color-text-brand': {
    value: colors.gray[14],
    description: 'Use for text that needs to pull attention.'
  },
  'color-text-brand-hover': {
    value: colors.gray[15],
    description: 'The hover state color for text that needs to pull attention.'
  },
  'color-text-brand-on-bg-fill': {
    value: colors.gray[1],
    description: 'Use for text on bg-fill-brand, like primary buttons.'
  },
  'color-text-brand-on-bg-fill-hover': {
    value: colors.gray[8],
    description: 'The hover state color for text on bg-fill-brand-hover.'
  },
  'color-text-brand-on-bg-fill-active': {
    value: colors.gray[10],
    description: 'The active state (on press) color for text on bg-fill-brand.'
  },
  'color-text-brand-on-bg-fill-disabled': {
    value: colors.gray[1],
    description: 'The disabled state color for text on bg-fill-brand-disabled.'
  },
  'color-text-info': {
    value: colors.azure[14],
    description: 'Use for text communicating important information.'
  },
  'color-text-info-hover': {
    value: colors.azure[15],
    description: 'The hover state color for text communicating important information.'
  },
  'color-text-info-active': {
    value: colors.azure[16],
    description: 'The active state (on press) color for text communicating important information.'
  },
  'color-text-info-on-bg-fill': {
    value: colors.azure[16],
    description: 'Use for text and icons on bg-fill-info.'
  },
  'color-text-success': {
    value: colors.green[14],
    description: 'Use for text communicating success.'
  },
  'color-text-success-hover': {
    value: colors.green[15],
    description: 'The hover state color for text communicating success.'
  },
  'color-text-success-active': {
    value: colors.green[16],
    description: 'The active state (on press) color for text communicating success.'
  },
  'color-text-success-on-bg-fill': {
    value: colors.green[1],
    description: 'Use for text and icons on bg-fill-success.'
  },
  'color-text-caution': {
    value: colors.yellow[14],
    description: 'Use for text communicating caution.'
  },
  'color-text-caution-hover': {
    value: colors.yellow[15],
    description: 'The hover state color for text communicating caution.'
  },
  'color-text-caution-active': {
    value: colors.yellow[16],
    description: 'The active state (on press) color for text communicating caution.'
  },
  'color-text-caution-on-bg-fill': {
    value: colors.yellow[15],
    description: 'Use for text and icons on bg-fill-caution.'
  },
  'color-text-warning': {
    value: colors.orange[14],
    description: 'Use for text communicating warning.'
  },
  'color-text-warning-hover': {
    value: colors.orange[15],
    description: 'The hover state color for text communicating warning.'
  },
  'color-text-warning-active': {
    value: colors.orange[16],
    description: 'The active state (on press) color for text communicating warning.'
  },
  'color-text-warning-on-bg-fill': {
    value: colors.orange[16],
    description: 'Use for text and icons on bg-fill-warning.'
  },
  'color-text-critical': {
    value: colors.red[14],
    description: 'Use for text communicating critical information.'
  },
  'color-text-critical-hover': {
    value: colors.red[15],
    description: 'The hover state color for text communicating critical information.'
  },
  'color-text-critical-active': {
    value: colors.red[16],
    description: 'The active state (on press) color for text communicating critical information.'
  },
  'color-text-critical-on-bg-fill': {
    value: colors.red[1],
    description: 'Use for text and icons on bg-fill-critical.'
  },
  'color-text-emphasis': {
    value: colors.blue[13],
    description: 'Use for text indicating areas of focus in editors, like the theme editor.'
  },
  'color-text-emphasis-hover': {
    value: colors.blue[14],
    description: 'The hover state color for text indicating areas of focus.'
  },
  'color-text-emphasis-active': {
    value: colors.blue[15],
    description: 'The active state (on press) color for text indicating areas of focus.'
  },
  'color-text-emphasis-on-bg-fill': {
    value: colors.blue[1],
    description: 'Use for text and icons on bg-fill-emphasis.'
  },
  'color-text-emphasis-on-bg-fill-hover': {
    value: colors.blue[5],
    description: 'Use for text and icons on bg-fill-emphasis-hover.'
  },
  'color-text-emphasis-on-bg-fill-active': {
    value: colors.blue[7],
    description: 'Use for text and icons on bg-fill-emphasis-active.'
  },
  'color-text-magic': {
    value: colors.purple[14],
    description: 'Use for text suggested by magic AI.'
  },
  'color-text-magic-secondary': {
    value: colors.purple[12],
    description: 'Use for text suggested by magic AI with a secondary level of prominence.'
  },
  'color-text-magic-on-bg-fill': {
    value: colors.purple[1],
    description: 'Use for text and icons on bg-fill-magic.'
  },
  'color-text-inverse': {
    value: colors.gray[8],
    description: 'Use for text on an inverse background.'
  },
  'color-text-inverse-secondary': {
    value: colors.gray[11],
    description: 'Use for secondary text on an inverse background.'
  },
  'color-text-link-inverse': {
    value: colors.blue[8],
    description: 'Use for text links on an inverse background.'
  },
  'color-border': {
    value: colors.gray[8],
    description: 'The default color for borders on any element.'
  },
  'color-border-hover': {
    value: colors.gray[10],
    description: 'The hover color for borders on any element.'
  },
  'color-border-disabled': {
    value: colors.gray[7],
    description: 'The disabled color for borders on any element.'
  },
  'color-border-secondary': {
    value: colors.gray[7],
    description: 'The color for hr elements or any visual dividers.'
  },
  'color-border-tertiary': {
    value: colors.gray[10],
    description: 'The border color on any element. Pair with bg-surface-tertiary or bg-fill-tertiary.'
  },
  'color-border-focus': {
    value: colors.blue[13],
    description: 'The focus ring for any interactive element in a focused state.'
  },
  'color-border-brand': {
    value: colors.gray[8],
    description: 'Use for borders paired with brand colors.'
  },
  'color-border-info': {
    value: colors.azure[8],
    description: 'Use for borders communicating information.'
  },
  'color-border-success': {
    value: colors.green[5],
    description: 'Use for borders communicating success.'
  },
  'color-border-caution': {
    value: colors.yellow[5],
    description: 'Use for borders communicating caution.'
  },
  'color-border-warning': {
    value: colors.orange[8],
    description: 'Use for borders communicating warning.'
  },
  'color-border-critical': {
    value: colors.red[8],
    description: 'Use for borders communicating critical information.'
  },
  'color-border-critical-secondary': {
    value: colors.red[14],
    description: 'Use for borders communicating critical information, such as borders on invalid text fields.'
  },
  'color-border-emphasis': {
    value: colors.blue[13],
    description: 'Use for borders indicating areas of focus.'
  },
  'color-border-emphasis-hover': {
    value: colors.blue[14],
    description: 'The hover state color for borders indicating areas of focus.'
  },
  'color-border-emphasis-active': {
    value: colors.blue[15],
    description: 'The active state (on press) color for borders indicating areas of focus.'
  },
  'color-border-magic': {
    value: colors.purple[6],
    description: 'Use for borders suggested by magic AI.'
  },
  'color-border-magic-secondary': {
    value: colors.purple[11],
    description: 'Use for borders suggested by magic AI, such as borders on text fields.'
  },
  'color-border-magic-secondary-hover': {
    value: colors.purple[12],
    description: 'Use for borders suggested by magic AI, such as borders on text fields.'
  },
  'color-border-inverse': {
    value: colors.gray[13],
    description: 'Use for borders on an inverse background, such as borders on the global search.'
  },
  'color-border-inverse-hover': {
    value: colors.gray[10],
    description: 'The hover state color for borders on an inverse background.'
  },
  'color-border-inverse-active': {
    value: colors.gray[8],
    description: 'The active state (on press) color for borders on an inverse background.'
  },
  'color-icon': {
    value: colors.gray[14],
    description: 'The default color for icons.'
  },
  'color-icon-hover': {
    value: colors.gray[15],
    description: 'The hover state color for icons.'
  },
  'color-icon-active': {
    value: colors.gray[16],
    description: 'The active state (on press) color for icons.'
  },
  'color-icon-disabled': {
    value: colors.gray[10],
    description: 'The disabled state color for icons.'
  },
  'color-icon-secondary': {
    value: colors.gray[12],
    description: 'Use for secondary icons.'
  },
  'color-icon-secondary-hover': {
    value: colors.gray[13],
    description: 'The hover state color for secondary icons.'
  },
  'color-icon-secondary-active': {
    value: colors.gray[14],
    description: 'The active state (on press) color for secondary icons.'
  },
  'color-icon-brand': {
    value: colors.gray[16],
    description: 'Use for icons that need to pull more focus.'
  },
  'color-icon-info': {
    value: colors.azure[11],
    description: 'Use for icons communicating information.'
  },
  'color-icon-success': {
    value: colors.green[12],
    description: 'Use for icons communicating success.'
  },
  'color-icon-caution': {
    value: colors.yellow[11],
    description: 'Use for icons communicating caution.'
  },
  'color-icon-warning': {
    value: colors.orange[11],
    description: 'Use for icons communicating warning.'
  },
  'color-icon-critical': {
    value: colors.red[11],
    description: 'Use for icons communicating critical information.'
  },
  'color-icon-emphasis': {
    value: colors.blue[13],
    description: 'Use for icons indicating areas of focus in editors, like the theme editor.'
  },
  'color-icon-emphasis-hover': {
    value: colors.blue[14],
    description: 'The hover color for icons indicating areas of focus in editors.'
  },
  'color-icon-emphasis-active': {
    value: colors.blue[15],
    description: 'The active state (on press) color for icons indicating areas of focus in editors.'
  },
  'color-icon-magic': {
    value: colors.purple[12],
    description: 'Use for icons suggested by magic AI.'
  },
  'color-icon-inverse': {
    value: colors.gray[8],
    description: 'Use for icons on an inverse background.'
  },
  'color-avatar-bg-fill': {
    value: colors.gray[11]
  },
  'color-avatar-five-bg-fill': {
    value: colors.rose[7]
  },
  'color-avatar-five-text-on-bg-fill': {
    value: colors.rose[14]
  },
  'color-avatar-four-bg-fill': {
    value: colors.azure[7]
  },
  'color-avatar-four-text-on-bg-fill': {
    value: colors.azure[14]
  },
  'color-avatar-one-bg-fill': {
    value: colors.magenta[7]
  },
  'color-avatar-one-text-on-bg-fill': {
    value: colors.magenta[14]
  },
  'color-avatar-text-on-bg-fill': {
    value: colors.gray[1]
  },
  'color-avatar-three-bg-fill': {
    value: colors.cyan[7]
  },
  'color-avatar-three-text-on-bg-fill': {
    value: colors.cyan[14]
  },
  'color-avatar-two-bg-fill': {
    value: colors.green[7]
  },
  'color-avatar-two-text-on-bg-fill': {
    value: colors.green[14]
  },
  'color-backdrop-bg': {
    value: colors.blackAlpha[14]
  },
  'color-checkbox-bg-surface-disabled': {
    value: colors.blackAlpha[7]
  },
  'color-checkbox-icon-disabled': {
    value: colors.gray[1]
  },
  'color-input-bg-surface': {
    value: colors.gray[2]
  },
  'color-input-bg-surface-hover': {
    value: colors.gray[3]
  },
  'color-input-bg-surface-active': {
    value: colors.gray[4]
  },
  'color-input-border': {
    value: colors.gray[12]
  },
  'color-input-border-hover': {
    value: colors.gray[13]
  },
  'color-input-border-active': {
    value: colors.gray[16]
  },
  'color-nav-bg': {
    value: colors.gray[7]
  },
  'color-nav-bg-surface': {
    value: colors.blackAlpha[3]
  },
  'color-nav-bg-surface-hover': {
    value: colors.gray[6]
  },
  'color-nav-bg-surface-active': {
    value: colors.gray[3]
  },
  'color-nav-bg-surface-selected': {
    value: colors.gray[3]
  },
  'color-radio-button-bg-surface-disabled': {
    value: colors.blackAlpha[7]
  },
  'color-radio-button-icon-disabled': {
    value: colors.gray[1]
  },
  'color-video-thumbnail-play-button-bg-fill-hover': {
    value: colors.blackAlpha[15]
  },
  'color-video-thumbnail-play-button-bg-fill': {
    value: colors.blackAlpha[14]
  },
  'color-video-thumbnail-play-button-text-on-bg-fill': {
    value: colors.gray[1]
  }
};

exports.color = color;
