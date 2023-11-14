"use strict";
exports.id = 9233;
exports.ids = [9233];
exports.modules = {

/***/ 79233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "kC": () => (/* binding */ capitalize),
  "ok": () => (/* binding */ className),
  "rT": () => (/* binding */ deslugify),
  "jD": () => (/* binding */ getResponsiveProps),
  "lV": () => (/* binding */ slugify),
  "wl": () => (/* binding */ stripMarkdownLinks),
  "Mh": () => (/* binding */ toPascalCase),
  "AB": () => (/* binding */ uppercaseFirst),
  "Bv": () => (/* binding */ viewTransition)
});

// UNUSED EXPORTS: isObject, legacyPatterns, patterns

;// CONCATENATED MODULE: ./.cache/site.json
const site_namespaceObject = JSON.parse('{"coming-soon":{"frontMatter":{"title":"Coming soon","hideChildren":true,"url":"/coming-soon/view-transitions"}},"coming-soon/view-transitions":{"frontMatter":{"title":"Embracing the future with the View Transitions API","description":"Merchants need tools that are not just powerful, but also intuitive. That\'s why we\'re experimenting with new ways to enhance the Shopify admin experience using the View Transitions API.","keywords":["motion","animations","transitions","view transitions","view transitions api"]}},"components":{"frontMatter":{"title":"Components","order":7,"icon":"AppsMajor","previewImg":"/images/components.png"}},"components/actions":{"frontMatter":{"title":"Actions","shortDescription":"Perform tasks or take actions within the Shopify admin.","expanded":true,"order":1,"previewImg":"/images/components/actions.png"}},"components/actions/account-connection":{"frontMatter":{"title":"Account connection","shortDescription":"Used for connecting or disconnecting a store to various accounts, like Facebook for the sales channel.","category":"Actions","keywords":["AccountConnection","connect","account","sign-up","default account connection","disconnection","authorize","third-party accounts","integrate","facebook","social media"],"examples":[{"fileName":"account-connection-default.tsx","title":"Default","description":"Use to let merchants connect or disconnect their store to their third-party accounts, like Facebook."}],"previewImg":"/images/components/actions/account-connection.png"}},"components/actions/button":{"frontMatter":{"title":"Button","shortDescription":"Used primarily for actions like \'Add\', \'Close\', \'Cancel\', or \'Save\'. Plain buttons are used for less important actions.","category":"Actions","keywords":["CTA","call to action","call-to-action","primary","action","basic button","outline","plain","destructive","slim","large","full-width","disabled state","disabled","button","link","click","submit"],"examples":[{"fileName":"button-default.tsx","title":"Default","description":"Used most in the interface. Only use another style if a button requires more or less visual weight."},{"fileName":"button-plain.tsx","title":"Plain","description":"Use for less important or less commonly used actions since they’re less prominent. For example, plain buttons are used as actions in cards."},{"fileName":"button-tertiary.tsx","title":"Tertiary","description":"Use for tertiary actions. Can be paired with any other button style to create visual variation."},{"fileName":"button-plain-critical.tsx","title":"Plain critical","description":"Use for actions that will delete merchant data or be otherwise difficult to recover from. Since they’re less prominent, use for less important or less commonly used critical actions. For example, plain buttons are used as actions in cards."},{"fileName":"button-primary.tsx","title":"Primary","description":"Use to highlight the most important actions in any experience. Don’t use more than one primary button in a section or screen to avoid overwhelming merchants."},{"fileName":"button-primary-critical.tsx","title":"Primary critical","description":"Use when the action will delete merchant data or be otherwise difficult to recover from. Critical buttons should trigger a confirmation dialog before the action is completed. Be thoughtful about using critical buttons because they can feel stressful for merchants."},{"fileName":"button-large.tsx","title":"Large","description":"Use for the main call to action in empty states or for calls to action shown with large illustrations."},{"fileName":"button-full-width.tsx","title":"Full-width","description":"Use for buttons placed in a narrow column (especially when stacking multiple buttons) or for creating a set of buttons of equal width. Full-width buttons should rarely exceed 320 px wide."},{"fileName":"button-text-aligned.tsx","title":"Text-aligned","description":"Use for plain or monochrome buttons that could have a long length and should be aligned when they potentially overflow onto the next line."},{"fileName":"button-pressed.tsx","title":"Pressed","description":"Buttons are sometimes used as a toggle for other parts of the user interface."},{"fileName":"button-plain-disclosure.tsx","title":"Plain disclosure","description":"Use to indicate that more content can be disclosed on click, like text in a collapsible."},{"fileName":"button-right-aligned-disclosure.tsx","title":"Right-aligned disclosure","description":"When working with `fullWidth + textAlign=\\"left\\"`, the `disclosure` will align itself to the far right."},{"fileName":"button-select-disclosure.tsx","title":"Select disclosure","description":"Use to indicate that multiple options are available from this control, similar to a `<select />` HTML element."},{"fileName":"button-split.tsx","title":"Split","description":"Use when there is only one primary action but other related actions can be taken."},{"fileName":"button-disabled-state.tsx","title":"Disabled state","description":"Use for actions that aren’t currently available. The surrounding interface should make it clear why the button is disabled and what needs to be done to enable it."},{"fileName":"button-loading-state.tsx","title":"Loading state","description":"Use when a button has been pressed and the associated action is in progress."}],"previewImg":"/images/components/actions/button.png"}},"components/actions/button-group":{"frontMatter":{"title":"Button group","shortDescription":"Displays multiple related actions stacked or in a horizontal row for arrangement and spacing.","category":"Actions","keywords":["ButtonGroup","choices","decision","call-to-action","CTA","segmented buttons","divided buttons","grouped actions","multiple horizontal buttons","multiple buttons","set of buttons","set of actions","horizontal arrangement of buttons","stacked","segmented control"],"examples":[{"fileName":"button-group-default.tsx","title":"Default","description":"Use when you have multiple buttons to space them out evenly."},{"fileName":"button-group-with-segmented-buttons.tsx","title":"With segmented buttons","description":"Use to emphasize several buttons as a thematically-related set among other controls."},{"fileName":"button-group-pressed-with-segmented-buttons.tsx","title":"Pressed with segmented buttons","description":"Pressed buttons can be used in combination to create a toggle for other parts of the user interface."}],"previewImg":"/images/components/actions/button-group.png"}},"components/actions/page-actions":{"frontMatter":{"title":"Page actions","shortDescription":"Allows merchants to take key actions at the bottom of specific pages in the interface.","category":"Actions","keywords":["PageActions","bottom of page actions","bottom page actions","primary action","primary page actions","default page actions","save delete actions","save actions","delete actions"],"examples":[{"fileName":"page-actions-default.tsx","title":"Default","description":"Used on a resource page (such as an individual order or product page) to let merchants take key actions at the bottom of the page. Usually, the primary action is Save and the secondary action is Delete."},{"fileName":"page-actions-primary-action-only.tsx","title":"Primary action only","description":"Not all page actions require a secondary action."},{"fileName":"page-actions-with-custom-primary-action.tsx","title":"With custom primary action","description":"Use to create a custom primary action."},{"fileName":"page-actions-with-custom-secondary-action.tsx","title":"With custom secondary action","description":"Use to create a custom secondary action."}],"previewImg":"/images/components/actions/page-actions.png"}},"components/deprecated":{"frontMatter":{"title":"Deprecated","shortDescription":"Deprecated components will be removed in future major versions of Polaris. They should be avoided and will show warnings.","expanded":true,"order":12,"previewImg":"/images/components/deprecated.png"}},"components/deprecated/caption":{"frontMatter":{"title":"Caption","shortDescription":"Caption text is smaller than the recommended size for general reading. Used in graphs, timestamps, or as secondary text.","category":"Deprecated","keywords":["labels","text","microcopy","typographic","graph","timestamp","smaller text","smallest text","smaller than reading size text","time text","compact text","small text"],"status":"Deprecated","previewImg":"/images/components/deprecated/caption.png"}},"components/deprecated/display-text":{"frontMatter":{"title":"Display text","shortDescription":"Display styles make a bold visual statement. Used for visual storytelling, marketing content, or capturing attention.","category":"Deprecated","keywords":["DisplayText","announcement text","greeting text","marketing text","title text","biggest text","bigger text","big text","large text","larger text","largest text","strong text","bold text","bold statements","extra large display text","medium and large display text","small display text","visual story telling","visual storytelling","visual statements"],"status":"Deprecated","previewImg":"/images/components/deprecated/display-text.png"}},"components/deprecated/heading":{"frontMatter":{"title":"Heading","shortDescription":"Used as the titles of each major section of a page in the interface, like in card components.","category":"Deprecated","keywords":["titles","text","microcopy","conversational","typographic","card headings","card titles","section titles","section headings","heading text","heading font"],"status":"Deprecated","previewImg":"/images/components/deprecated/heading.png"}},"components/deprecated/legacy-card":{"frontMatter":{"title":"Legacy card","shortDescription":"Legacy version of the Card component. Used to group similar concepts and tasks together for easier scanning and reading.","category":"Deprecated","keywords":["layout","container","box","grid","panel","card with call to action in the footer","card with call to action in the heading","card with call to action in a section","card with button in the footer","card with button in the heading","card with multiple sections","card with subsections","sectioned card","card with a subdued section","subdued card for secondary content","callout","call out","legacy card"],"status":"Deprecated","examples":[{"fileName":"legacy-card-default.tsx","title":"Default","description":"Use when you have a simple message to communicate to merchants that doesn’t require any secondary steps."},{"fileName":"legacy-card-with-header-actions.tsx","title":"With header actions","description":"Use for less important card actions, or actions merchants may do before reviewing the contents of the card. For example, merchants may want to add items to a card containing a long list, or enter a customer’s new address."},{"fileName":"legacy-card-with-footer-actions.tsx","title":"With footer actions","description":"Use footer actions for a card’s most important actions, or actions merchants should do after reviewing the contents of the card. For example, merchants should review the contents of a shipment before an important action like adding tracking information. Footer actions can be left or right aligned with the `footerActionAlignment` prop."},{"fileName":"legacy-card-with-multiple-footer-actions.tsx","title":"With multiple footer actions","description":"When multiple secondary footer actions are provided, they will render in an action list popover activated by a disclosure button. The disclosure button text can be customized with the `secondaryFooterActionsDisclosureText` prop."},{"fileName":"legacy-card-with-custom-footer-actions.tsx","title":"With custom footer actions","description":"Use to present actionable content that is optional or not the primary purpose of the page."},{"fileName":"legacy-card-with-destructive-footer-action.tsx","title":"With destructive footer action","description":"Use when a card action will delete merchant data or be otherwise difficult to recover from."},{"fileName":"legacy-card-with-multiple-sections.tsx","title":"With multiple sections","description":"Use when you have two related but distinct pieces of information to communicate to merchants. Multiple sections can help break up complicated concepts to make them easier to scan and understand."},{"fileName":"legacy-card-with-multiple-titled-sections.tsx","title":"With multiple titled sections","description":"Use when you have two related but distinct pieces of information to communicate to merchants that are complex enough to require a title to introduce them."},{"fileName":"legacy-card-with-sections-and-actions.tsx","title":"With sections and actions","description":"Use when your card section has actions that apply only to that section."},{"fileName":"legacy-card-with-subsection.tsx","title":"With subsection","description":"Use when your card sections need further categorization."},{"fileName":"legacy-card-with-destructive-action.tsx","title":"With destructive action","description":"Use when a card action applies only to one section and will delete merchant data or be otherwise difficult to recover from."},{"fileName":"legacy-card-with-a-subdued-section.tsx","title":"With a subdued section","description":"Use to indicate when one of the sections in your card contains inactive or disabled content."},{"fileName":"legacy-card-with-subdued-for-secondary-content.tsx","title":"With subdued for secondary content","description":"Use for content that you want to deprioritize. Subdued cards don’t stand out as much as cards with white backgrounds so don’t use them for information or actions that are critical to merchants."},{"fileName":"legacy-card-with-separate-header.tsx","title":"With separate header","description":"Use to be able to use custom React elements as header content."},{"fileName":"legacy-card-with-custom-react-node-title.tsx","title":"With custom React Node title","description":"Use to render custom content such as icons, links, or buttons in a card section’s header."},{"fileName":"legacy-card-with-all-elements.tsx","title":"With all elements","description":"Use as a broad example that includes most props available to card."},{"fileName":"legacy-card-with-flushed-sections.tsx","title":"With flushed sections","description":"Use when you need further control over the spacing of your card sections."}],"previewImg":"/images/components/deprecated/legacy-card.png"}},"components/deprecated/legacy-filters":{"frontMatter":{"title":"Legacy filters","shortDescription":"Legacy version of the Filters component. Used to filter the items of a list or table.","category":"Selection and input","keywords":["filters","filtering","filter control","resource list","index","list filter","table"],"status":"Deprecated","examples":[{"fileName":"legacy-filters-with-a-resource-list.tsx","title":"With a resource list"},{"fileName":"legacy-filters-with-a-data-table.tsx","title":"With a data table"},{"fileName":"legacy-filters-with-children-content.tsx","title":"With children content"},{"fileName":"legacy-filters-disabled.tsx","title":"Disabled"},{"fileName":"legacy-filters-some-disabled.tsx","title":"Some disabled"},{"fileName":"legacy-filters-without-clear-button.tsx","title":"Without clear button"},{"fileName":"legacy-filters-with-help-text.tsx","title":"With help text"},{"fileName":"legacy-filters-with-query-field-hidden.tsx","title":"With query field hidden"},{"fileName":"legacy-filters-with-query-field-disabled.tsx","title":"With query field disabled"}],"previewImg":"/images/components/deprecated/legacy-filters.png"}},"components/deprecated/legacy-stack":{"frontMatter":{"title":"Legacy stack","shortDescription":"Legacy version of the Stack component. Used for layout of a horizontal row of components or vertical centering.","category":"Deprecated","keywords":["rows","vertical centering","horizontal row of components","flexible items","flexbox","row of components","stack spacing","vertical centering","fill available space","fill space","equal width","right-aligned stack","stack layout","layout","legacy stack"],"status":"Deprecated","examples":[{"fileName":"legacy-stack-default.tsx","title":"Default","description":"Use to quickly lay out a horizontal row of components and maintain their relative sizes. On small screens, children rows wrap down to additional rows as needed."},{"fileName":"legacy-stack-non-wrapping.tsx","title":"Non-wrapping","description":"Use to create a stack where the children will not wrap to new rows on small screens. As noted above, the wrap option defaults to true. This means you must explicitly set it to false to turn it off."},{"fileName":"legacy-stack-spacing.tsx","title":"Spacing","description":"Use to control spacing of items in a stack in standard increments. Use tight for less spacing, loose for more spacing, or none to remove normal spacing altogether."},{"fileName":"legacy-stack-vertical-centering.tsx","title":"Vertical centering","description":"Use to vertically center a set of items that have different heights."},{"fileName":"legacy-stack-fill-available-space-proportionally.tsx","title":"Fill available space proportionally","description":"Use to have the stack’s items fill the horizontal space in the container but maintain their relative proportions."},{"fileName":"legacy-stack-where-items-fill-space-evenly.tsx","title":"Where items fill space evenly","description":"Use to have the stack’s items fill the horizontal space in the container and be equal widths, regardless of their content."},{"fileName":"legacy-stack-where-a-single-item-fills-the-remaining-space.tsx","title":"Where a single item fills the remaining space","description":"Use for aligning buttons or secondary content to the right edge of another element, allowing it to wrap below on small screens."}],"previewImg":"/images/components/deprecated/legacy-stack.png"}},"components/deprecated/legacy-tabs":{"frontMatter":{"title":"Legacy tabs","shortDescription":"Used to alternate among related views within the same context.","category":"Deprecated","keywords":["layout","navigate","organize","list views","list filters","fitted tabs","segmented controls","scrollable"],"status":"Deprecated","examples":[{"fileName":"legacy-tabs-default.tsx","title":"Default","description":"Use for most cases, especially when the number of tabs may be more than three."},{"fileName":"legacy-tabs-fitted.tsx","title":"Fitted","description":"Use when tabs contain a few (2 or 3) items within a narrow column."},{"fileName":"legacy-tabs-with-badge-content.tsx","title":"With badge content","description":"Use to inform a piece of information about the tabs."},{"fileName":"legacy-tabs-with-custom-disclosure.tsx","title":"With custom disclosure","description":"Use to provide information about the popover contents"}],"previewImg":"/images/components/deprecated/legacy-tabs.png"}},"components/deprecated/setting-toggle":{"frontMatter":{"title":"Setting toggle","shortDescription":"Used to control a feature or option that can be turned on or off.","category":"Deprecated","keywords":["SettingToggle","settings buttons","setting buttons","enable buttons","disable buttons","setting switches","turn on button","turn off button","option button","on off","switch","adjuster"],"status":"Deprecated","examples":[{"fileName":"setting-toggle-with-primitive-components.tsx","title":"With primitive components","description":"Use to allow merchants to toggle a setting that has an on or off state. Display the name of the setting and provide a description so merchants have the context needed to decide whether or not to enable the setting. This pattern is built using the layout and typography components, instead of the deprecated `SettingToggle` component."},{"fileName":"setting-toggle-deprecated.tsx","title":"With deprecated component","description":"The setting toggle component is deprecated. The \\"With primitive components\\" example is the recommended way to build the setting toggle pattern."}],"previewImg":"/images/components/deprecated/setting-toggle.png"}},"components/deprecated/sheet":{"frontMatter":{"title":"Sheet","shortDescription":"A large container providing actions and information contextual to the page without interrupting flow like a modal.","category":"Deprecated","keywords":["sheet","modal","open","title","overlay","drawer","dialog"],"status":"Deprecated","examples":[{"fileName":"sheet-default.tsx","title":"Default","description":"Use as the default option for a sheet."},{"fileName":"sheet-with-searchable-listbox.tsx","title":"With searchable listbox","description":"Use to help merchants browse, filter, and choose from a list of options."}],"previewImg":"/images/components/deprecated/sheet.png"}},"components/deprecated/subheading":{"frontMatter":{"title":"Subheading","shortDescription":"Used for the title of any sub-sections in top-level page sections.","category":"Deprecated","keywords":["title bar","top-level","description","sub-section titles","titles of sub-sections","subsection titles","titles of subsections"],"status":"Deprecated","previewImg":"/images/components/deprecated/subheading.png"}},"components/deprecated/text-container":{"frontMatter":{"title":"Text container","shortDescription":"Used to wrap text elements like paragraphs, headings, and lists for vertical spacing.","category":"Deprecated","releasedIn":"1.9.0","keywords":["spacing","heading","list","layout","vertical","margin","padding"],"status":"Deprecated","examples":[{"fileName":"text-container-default.tsx","title":"Default","description":"Use this component for default vertical spacing."},{"fileName":"text-container-tight.tsx","title":"Tight","description":"Use the tight spacing option to relate content topics to each other."},{"fileName":"text-container-loose.tsx","title":"Loose","description":"Use the loose spacing option to separate concepts that are independent of each other."}],"previewImg":"/images/components/deprecated/text-container.png"}},"components/deprecated/text-style":{"frontMatter":{"title":"Text style","shortDescription":"Enhances text with additional visual meaning, like using subdued text to de-emphasize it.","category":"Deprecated","keywords":["TextStyle","typographic","subdued","strong","negative","warning","positive","cues","enhancements","type","bold","dollar","increase","decrease","input","fields"],"status":"Deprecated","previewImg":"/images/components/deprecated/text-style.png"}},"components/deprecated/visually-hidden":{"frontMatter":{"title":"Visually hidden","shortDescription":"Used when an element needs to be available to assistive technology but otherwise hidden.","category":"Deprecated","keywords":["VisuallyHidden","screen readers","hidden but available for screen readers","visually hidden headings","hide","hidden headings","hidden text","visually hidden table headers","visually hidden headers","hidden table headers","hidden table headings","accessibility","a11y","assistive technology"],"status":"Deprecated","previewImg":"/images/components/deprecated/visually-hidden.png"}},"components/feedback-indicators":{"frontMatter":{"title":"Feedback indicators","shortDescription":"Inform merchants about the status of a process, provide feedback, or indicate progress.","expanded":true,"order":5,"previewImg":"/images/components/feedback-indicators.png"}},"components/feedback-indicators/badge":{"frontMatter":{"title":"Badge","shortDescription":"Used to inform merchants of the tone of an object or an action taken.","category":"Feedback indicators","keywords":["pills","tone indicators","color-coded indicators","informational badge","success badge","attention badge","warning badge","critical badge","object tone","tone","alert"],"examples":[{"fileName":"badge-default.tsx","title":"Default","description":"Use to give a non-critical tone update on a piece of information or action."},{"fileName":"badge-small.tsx","title":"Small","description":"Use in layouts with minimal space, like inside of an `IndexTable` cell."},{"fileName":"badge-informational.tsx","title":"Informational","description":"Use to call out an object or action as having an important attribute. For example, marking an option as “Recommended” or marking a theme as “Published”."},{"fileName":"badge-success.tsx","title":"Success","description":"Use to indicate a successful, completed, or desirable state when it’s important to provide positive reinforcement to merchants. For example, when merchants successfully dispute a chargeback, a success badge shows that says “Funds recovered”."},{"fileName":"badge-attention.tsx","title":"Attention","description":"Use when something requires merchants’ attention but the issue isn’t critical. For example, this badge would show next to an order that needs to be reviewed by merchants."},{"fileName":"badge-warning.tsx","title":"Warning","description":"Use for warnings and time-sensitive issues that require merchants’ attention and potential action. Warning events are often reversible. Keep in mind that seeing this badge can feel stressful for merchants so it should only be used when absolutely necessary."},{"fileName":"badge-critical.tsx","title":"Critical","description":"Use for critical and irreversible issues that require merchants’ attention and potential action. Keep in mind that seeing this badge can feel stressful for merchants so it should only be used when absolutely necessary."},{"fileName":"badge-incomplete.tsx","title":"Incomplete","description":"Use to indicate when a given task has not yet been completed. For example, when merchants haven’t fulfilled an order."},{"fileName":"badge-partially-complete.tsx","title":"Partially complete","description":"Use to indicate when a given task has been partially completed. For example, when merchants have partially fulfilled an order."},{"fileName":"badge-complete.tsx","title":"Complete","description":"Use to indicate when a given task has been completed. For example, when merchants have fulfilled an order."},{"fileName":"badge-with-tone-and-progress-label-override.tsx","title":"With toneAndProgressLabelOverride","description":"Use when the tone and progress accessibilityLabels are not appropriate to a given context."}],"previewImg":"/images/components/feedback-indicators/badge.png"}},"components/feedback-indicators/banner":{"frontMatter":{"title":"Banner","shortDescription":"Informs merchants about important changes or persistent conditions in a prominent way.","category":"Feedback indicators","keywords":["inform","update","changes","conditions","dismissible banners","banner with footer call-to-action","banner with footer button","banner with button","informational banners","success banners","warning banners","critical banners","banner width","banner headings","banner content","banner buttons","banner links","banner body content","banner text","banner body text","full-width alert"],"examples":[{"fileName":"banner-default.tsx","title":"Default","description":"Use to convey general information or actions that aren’t critical. For example, you might show a banner that asks for merchant feedback. Default banners contain lower priority information and should always be dismissible."},{"fileName":"banner-dismissible.tsx","title":"Dismissible","description":"Make all banners dismissible, unless they contain critical information or an important action that merchants are required to take."},{"fileName":"banner-with-footer-call-to-action.tsx","title":"With footer call-to-action","description":"Use when you want merchants to take an action after reading the banner."},{"fileName":"banner-informational.tsx","title":"Informational","description":"Use to update merchants about a change or give them advice."},{"fileName":"banner-success.tsx","title":"Success","description":"Default to using toasts for success messages, unless the feedback is delayed, persistent, or has a call to action. Include next steps if applicable."},{"fileName":"banner-warning.tsx","title":"Warning","description":"Use to display information that needs attention or that merchants need to take action on. Seeing these banners can be stressful for merchants so be cautious about using them."},{"fileName":"banner-critical.tsx","title":"Critical","description":"Use to communicate problems that have to be resolved immediately for merchants to complete a task. For example, you will show this banner for orders with high fraud risk. Seeing these banners can be stressful for merchants so be cautious about using them."},{"fileName":"banner-in-a-modal.tsx","title":"In a modal","description":"Banners inside of modals render with less spacing and a pared-back design to fit within a content context."},{"fileName":"banner-with-focus.tsx","title":"With focus","description":"Banner can programmatically receive focus. Use this functionality to draw the merchant’s attention to the banner."},{"fileName":"banner-in-a-card.tsx","title":"In a card","description":"Banners inside of cards render with less spacing and a pared-back design to fit within a content context."}],"previewImg":"/images/components/feedback-indicators/banner.png"}},"components/feedback-indicators/exception-list":{"frontMatter":{"title":"Exception list","shortDescription":"Helps merchants notice important, standout information that adds extra context to a task.","category":"Feedback indicators","keywords":["exception list","exceptions","list","list exceptions"],"examples":[{"fileName":"exception-list-default.tsx","title":"Default","description":"Use icons to add clarity or assist in visualizing the meaning"}],"previewImg":"/images/components/feedback-indicators/exception-list.png"}},"components/feedback-indicators/loading":{"frontMatter":{"title":"Loading","shortDescription":"Used to indicate to merchants that a page is loading or an upload is processing.","category":"Feedback indicators","keywords":["spinner","loader","loading","loading bar"],"examples":[{"fileName":"loading-default.tsx","title":"Default","description":"Use to indicate that the page is loading."}],"previewImg":"/images/components/feedback-indicators/loading.png"}},"components/feedback-indicators/progress-bar":{"frontMatter":{"title":"Progress bar","shortDescription":"Used to visually represent the completion of a task or operation.","category":"Feedback indicators","releasedIn":"1.8.0","keywords":["ProgressBar","progress indicator","progress bar","loading"],"examples":[{"fileName":"progress-bar-default.tsx","title":"Default","description":"Use this component to visually represent the completion of a task or operation."},{"fileName":"progress-bar-small.tsx","title":"Small","description":"Use the size option when you need to increase or decrease the visual weight of the progress bar."},{"fileName":"progress-bar-colored.tsx","title":"Colored","description":"Use the color option when you need to blend the progress bar in a context that calls for it, such as a progress toward success or where it’s the primary focus."},{"fileName":"progress-bar-non-animated.tsx","title":"Non-animated","description":"Use the animated prop when you want to show a static progress bar."}],"previewImg":"/images/components/feedback-indicators/progress-bar.png"}},"components/feedback-indicators/skeleton-body-text":{"frontMatter":{"title":"Skeleton body text","shortDescription":"Provides a low fidelity representation of content before it appears, improving perceived load times.","category":"Feedback indicators","releasedIn":"1.7.0","keywords":["SkeletonBodyText","skeleton","loading","page"],"examples":[{"fileName":"skeleton-body-text-default.tsx","title":"Default","description":"Use this component to represent a block of content being loaded. For example, you could use it to represent an entire product description card on the product page."},{"fileName":"skeleton-body-text-single-line-content.tsx","title":"Single line content","description":"Use this component to represent a short, single line of text, like a timestamp."}],"previewImg":"/images/components/feedback-indicators/skeleton-body-text.png"}},"components/feedback-indicators/skeleton-display-text":{"frontMatter":{"title":"Skeleton display text","shortDescription":"Provides a low fidelity representation of content before it appears, improving perceived load times.","category":"Feedback indicators","releasedIn":"1.7.0","keywords":["SkeletonDisplayText","skeleton","loading","page"],"examples":[{"fileName":"skeleton-display-text-medium-and-large.tsx","title":"Medium and large","description":"Use this component to represent medium and large display text such as large metrics on the reports list page, or for page titles."},{"fileName":"skeleton-display-text-extra-large.tsx","title":"Extra large","description":"Use this component to represent extra large display text."},{"fileName":"skeleton-display-text-small.tsx","title":"Small","description":"Use this component to represent small display text such as content headings."}],"previewImg":"/images/components/feedback-indicators/skeleton-display-text.png"}},"components/feedback-indicators/skeleton-page":{"frontMatter":{"title":"Skeleton page","shortDescription":"Used with other skeleton loading components to provide a low fidelity representation of the UI before content appears.","category":"Feedback indicators","releasedIn":"1.7.0","keywords":["SkeletonPage","skeleton","loading","page"],"examples":[{"fileName":"skeleton-page-with-dynamic-content.tsx","title":"With dynamic content","description":"Use this component to compose a loading version of a page where the page title and header content are dynamic, meaning, the content changes."},{"fileName":"skeleton-page-with-static-content.tsx","title":"With static content","description":"Use this component to compose a loading version of a page where the page title and header content are known and stay the same."}],"previewImg":"/images/components/feedback-indicators/skeleton-page.png"}},"components/feedback-indicators/skeleton-tabs":{"frontMatter":{"title":"Skeleton tabs","shortDescription":"Provides a low fidelity representation of content before it appears, improving perceived load times.","category":"Feedback indicators","releasedIn":9,"keywords":["SkeletonTabs","skeleton","loading","page"],"examples":[{"fileName":"skeleton-tabs-default.tsx","title":"Default"},{"fileName":"skeleton-tabs-with-a-custom-count.tsx","title":"With a custom count"}],"previewImg":"/images/components/feedback-indicators/skeleton-tabs.png"}},"components/feedback-indicators/skeleton-thumbnail":{"frontMatter":{"title":"Skeleton thumbnail","shortDescription":"Provides a low fidelity representation of an image before it appears, improving perceived load times.","category":"Feedback indicators","releasedIn":"3.7.2","keywords":["SkeletonThumbnail","skeleton","loading","page"],"examples":[{"fileName":"skeleton-thumbnail-medium.tsx","title":"Medium","description":"Use this component to represent medium thumbnails."},{"fileName":"skeleton-thumbnail-large.tsx","title":"Large","description":"Use this component to represent large thumbnails."},{"fileName":"skeleton-thumbnail-small.tsx","title":"Small","description":"Use this component to represent small thumbnails."},{"fileName":"skeleton-thumbnail-extra-small.tsx","title":"Extra small","description":"Use this component to represent extra small thumbnails."}],"previewImg":"/images/components/feedback-indicators/skeleton-thumbnail.png"}},"components/feedback-indicators/spinner":{"frontMatter":{"title":"Spinner","shortDescription":"Used to notify merchants that their action is being processed. Used for content that can’t be represented with skeleton loading components.","category":"Feedback indicators","releasedIn":"1.7.0","keywords":["spinner","loader","loading","progress indicator"],"examples":[{"fileName":"spinner-default.tsx","title":"Default","description":"Use to notify merchants that their requested action is being processed."},{"fileName":"spinner-small.tsx","title":"Small","description":"Smaller than the default spinner."},{"fileName":"spinner-with-focus-management.tsx","title":"With focus management","description":"Use to direct the focus state from the control to the spinner, to the content."}],"previewImg":"/images/components/feedback-indicators/spinner.png"}},"components/feedback-indicators/toast":{"frontMatter":{"title":"Toast","shortDescription":"A non-disruptive message that provides quick feedback on the outcome of an action.","category":"Feedback indicators","keywords":["toast","flash message","snackbar","notification bar","temporary feedback","timed feedback","message","overlay","popup","iframe","duration"],"examples":[{"fileName":"toast-default.tsx","title":"Default","description":"Use to convey general confirmation or actions that aren’t critical. For example, you might show a toast message to inform the merchant that their recent action was successful."},{"fileName":"toast-multiple-messages.tsx","title":"Multiple messages","description":"Use multiple toast messages to inform the merchant about distinct actions."},{"fileName":"toast-with-custom-duration.tsx","title":"With custom duration","description":"Use to shorten or lengthen the default duration of 5000 milliseconds."},{"fileName":"toast-with-action.tsx","title":"With action","description":"Use when a merchant has the ability to act on the message. For example, to undo a change or retry an action."},{"fileName":"toast-error.tsx","title":"Error","description":"Although error toast is still available and used in the system, we discourage its use. Reserve it for errors not caused by merchants, like a connection issue. Error toast should convey what went wrong in plain language and should not go over 3 words. For all other error message types, follow the [error message guidelines](https://polaris.shopify.com/patterns/error-messages)."}],"previewImg":"/images/components/feedback-indicators/toast.png"}},"components/images-and-icons":{"frontMatter":{"title":"Images and icons","shortDescription":"Represent visual content, such as avatars and thumbnails for images or video.","expanded":true,"order":4,"previewImg":"/images/components/images-and-icons.png"}},"components/images-and-icons/avatar":{"frontMatter":{"title":"Avatar","shortDescription":"Used to show a thumbnail representation of an individual or business in the interface.","category":"Images and icons","keywords":["photo","profile","picture","thumbnail","default face","face picture","customer avatar","customer face","customer picture","business face","business picture","customer avatar","business avatar","customer thumbnail","business thumbnail"],"examples":[{"fileName":"avatar-default.tsx","title":"Default","description":"Use to present an avatar for a merchant, customer, or business."},{"fileName":"avatar-initials.tsx","title":"Initials","description":"Use to present an avatar with initials for a merchant, customer, or business."},{"fileName":"avatar-extra-small.tsx","title":"Extra small","description":"Use to present an avatar in a condensed layout, such as a data table cell or an action list item."}],"previewImg":"/images/components/images-and-icons/avatar.png"}},"components/images-and-icons/icon":{"frontMatter":{"title":"Icon","shortDescription":"Used to visually communicate core parts of the product and available actions, acting as wayfinding tools.","category":"Images and icons","keywords":["iconography","visual indicator","svg","icon background","accessible icons","icon alternative text","alt text","alternative text","wayfinding","alert"],"examples":[{"fileName":"icon-default.tsx","title":"Default","description":"Use to visually communicate core parts of the product and available actions."},{"fileName":"icon-colored.tsx","title":"Colored","description":"Apply a color to the icon."},{"fileName":"icon-with-custom-svg.tsx","title":"With custom SVG","description":"Specify an SVG as a string to render it in an image tag, instead of an inline SVG to prevent script injection."},{"fileName":"icon-with-custom-svg-and-color.tsx","title":"With custom SVG and color","description":"When using changing color of an svg and it uses currentColor, the white color is applied."}],"previewImg":"/images/components/images-and-icons/icon.png"}},"components/images-and-icons/keyboard-key":{"frontMatter":{"title":"Keyboard key","shortDescription":"Used to educate merchants about keyboard shortcuts.","category":"Images and icons","keywords":["KeyboardKey","shortcuts","hotkey","hot key","keyboard shortcuts","keyboard letter","hotkey combinations"],"examples":[{"fileName":"keyboard-key-default.tsx","title":"Default","description":"Use to list a related set of keyboard shortcuts."}],"previewImg":"/images/components/images-and-icons/keyboard-key.png"}},"components/images-and-icons/thumbnail":{"frontMatter":{"title":"Thumbnail","shortDescription":"Used as a visual anchor and identifier for an object, along with text to provide context.","category":"Images and icons","keywords":["photo","picture","image","small thumbnail","medium thumbnail","large thumbnail","image preview"],"examples":[{"fileName":"thumbnail-default.tsx","title":"Default","description":"Use as the default size."},{"fileName":"thumbnail-extra-small.tsx","title":"Extra small","description":"Use to present a thumbnail in a condensed layout, such as a data table cell or an action list item."},{"fileName":"thumbnail-small.tsx","title":"Small","description":"Use when the default size is too large for the layout, or when the thumbnail has less importance."},{"fileName":"thumbnail-large.tsx","title":"Large","description":"Use when a thumbnail is a major focal point. Avoid this size in lists of like items."},{"fileName":"thumbnail-with-component-source.tsx","title":"With component source","description":"Use to render an icon inside of thumbnail."}],"previewImg":"/images/components/images-and-icons/thumbnail.png"}},"components/images-and-icons/video-thumbnail":{"frontMatter":{"title":"Video thumbnail","shortDescription":"A clickable placeholder image that opens a video player within a modal or full screen when clicked.","category":"Images and icons","keywords":["video","VideoThumbnail","updates","new features","video thumbnail","feature thumbnail","education","contextual learning system"],"examples":[{"fileName":"video-thumbnail-default.tsx","title":"Default","description":"Use as a play button for a video player within a media card."},{"fileName":"video-thumbnail-with-progress.tsx","title":"With progress","description":"Use to indicate the video’s play progress in relation to its duration."}],"previewImg":"/images/components/images-and-icons/video-thumbnail.png"}},"components/layout-and-structure":{"frontMatter":{"title":"Layout and structure","shortDescription":"The arrangement of elements on a page that helps merchants understand and find information to complete their goals.","expanded":true,"order":2,"primitives":["Bleed","Block stack","Box","Divider","Grid","Inline stack","Inline grid"],"previewImg":"/images/components/layout-and-structure.png"}},"components/layout-and-structure/bleed":{"frontMatter":{"title":"Bleed","shortDescription":"Applies negative margin to a layout, extending it to the edge of the screen on small screens.","category":"Layout and structure","keywords":["layout"],"examples":[{"fileName":"bleed-horizontal.tsx","title":"Horizontal","description":"Content will bleed horizontally into the surrounding layout using the `marginInline` prop."},{"fileName":"bleed-vertical.tsx","title":"Vertical","description":"Content will bleed vertically into the surrounding layout using the `marginBlock` prop."},{"fileName":"bleed-specific-direction.tsx","title":"Specific direction","description":"Negative margins can be added in a specific direction using the [Space tokens](https://polaris.shopify.com/tokens/space)."}],"previewImg":"/images/components/layout-and-structure/bleed.png"}},"components/layout-and-structure/block-stack":{"frontMatter":{"title":"Block stack","category":"Layout and structure","keywords":["layout","stack spacing","vertical centering","fill available space","fill space","equal width","right-aligned stack","stack layout"],"examples":[{"fileName":"block-stack-with-gap.tsx","title":"Gap","description":"Control the vertical space between children using the `gap` prop."},{"fileName":"block-stack-with-align.tsx","title":"Align","description":"Control the vertical alignment of children using the `align` prop."},{"fileName":"block-stack-with-inline-align.tsx","title":"Inline align","description":"Control the horizontal alignment of children using the `inlineAlign` prop."}],"previewImg":"/images/components/layout-and-structure/block-stack.png"}},"components/layout-and-structure/box":{"frontMatter":{"title":"Box","category":"Layout and structure","keywords":["layout","box","responsive","tokens"],"examples":[{"fileName":"box-with-color.tsx","title":"Color","description":"Background color of box and text color inside a box can be adjusted using the [Color tokens](https://polaris.shopify.com/tokens/color)."},{"fileName":"box-with-border.tsx","title":"Border width","description":"Border width can be adjusted using the [Border tokens](https://polaris.shopify.com/tokens/border), and a subset of tokens allows different types of border."},{"fileName":"box-with-border-radius.tsx","title":"Border radius","description":"Border radius can be adjusted using the [Border tokens](https://polaris.shopify.com/tokens/border)."},{"fileName":"box-with-padding.tsx","title":"Padding","description":"Padding can be added to either all sides, left, right, top, and bottom, using the [Space tokens](https://polaris.shopify.com/tokens/space). The `padding` prop supports responsive spacing with the [Breakpoints tokens](https://polaris.shopify.com/tokens/breakpoints)."},{"fileName":"box-with-shadow.tsx","title":"Shadow","description":"Shadow can be applied using the [Shadow tokens](https://polaris.shopify.com/tokens/shadow)."}],"previewImg":"/images/components/layout-and-structure/box.png"}},"components/layout-and-structure/callout-card":{"frontMatter":{"title":"Callout card","category":"Layout and structure","keywords":["CalloutCard","actionable","updates","new features","call out card","sales channel card","feature card","callout card heading","callout card body content","callout card text","callout card cta","callout card call to action","callout card button","callout card with secondary cta","callout card with secondary button","dismissible callout card","card with illustration","card with image","illustration card"],"examples":[{"fileName":"callout-card-default.tsx","title":"Default","description":"Use to let merchants know about a feature or opportunity where there is a clear, single action they need to take to move to the next step."},{"fileName":"callout-card-with-secondary-action.tsx","title":"With secondary action","description":"Use to let merchants know about a feature or opportunity where there are two distinct actions they can take on the information."},{"fileName":"callout-card-dismissable.tsx","title":"Dismissable","description":"Make all callout cards dismissible so merchants can get rid of cards about features they’re not interested in."}],"previewImg":"/images/components/layout-and-structure/callout-card.png"}},"components/layout-and-structure/card":{"frontMatter":{"title":"Card","shortDescription":"Used to group similar concepts and tasks together for easier scanning and reading.","category":"Layout and structure","keywords":["layout","card","responsive","container","box","grid","panel","card with call to action in the footer","card with call to action in the heading","card with call to action in a section","card with button in the footer","card with button in the heading","card with multiple sections","card with subsections","sectioned card","card with a subdued section","subdued card for secondary content","callout","call out"],"examples":[{"fileName":"card-default.tsx","title":"Default","description":"By default, cards have an 8px border radius and uses `--p-color-bg-surface` as the background and `--p-shadow-300` as the shadow. There is padding of `space-5` (20px) around children and `space-4` (16px) for small screens."},{"fileName":"card-with-subdued-background.tsx","title":"With subdued background","description":"Use for content that you want to deprioritize. Subdued cards don’t stand out as much as cards with white backgrounds so don’t use them for information or actions that are critical to merchants."},{"fileName":"card-with-varying-padding.tsx","title":"With varying padding","description":"Use the `padding` property to adjust the spacing within a card. You can also specify spacing values at different breakpoints."},{"fileName":"card-with-rounded-corners.tsx","title":"Rounded corners","description":"Use the `padding` property to adjust the spacing of content within a card. The `padding` prop supports responsive spacing with the [Breakpoints tokens](https://polaris.shopify.com/tokens/breakpoints)."}],"previewImg":"/images/components/layout-and-structure/card.png"}},"components/layout-and-structure/divider":{"frontMatter":{"title":"Divider","category":"Layout and structure","keywords":["layout","divider","border"],"examples":[{"fileName":"divider-with-border-color.tsx","title":"Color","description":"Divider border color can be adjusted using the [Color tokens](https://polaris.shopify.com/tokens/color)."}],"previewImg":"/images/components/layout-and-structure/divider.png"}},"components/layout-and-structure/empty-state":{"frontMatter":{"title":"Empty state","category":"Layout and structure","keywords":["EmptyState","lander","welcome","explain features","describe features","educate about features","merchant education","educational opportunity","educational opportunities","illustration on pages","empty layouts","empty states","starting pages","starting layouts","educating","teaching","landing pages","landing layouts"],"examples":[{"fileName":"empty-state-default.tsx","title":"Default","description":"Use to explain a single feature before merchants have used it."},{"fileName":"empty-state-with-subdued-footer-context.tsx","title":"With subdued footer context","description":"Use to provide additional but non-critical context for a new product or feature. Can also be used to include a subdued call to action for secondary or tertiary actions."},{"fileName":"empty-state-with-full-width-layout.tsx","title":"With full width layout"}],"previewImg":"/images/components/layout-and-structure/empty-state.png"}},"components/layout-and-structure/form-layout":{"frontMatter":{"title":"Form layout","shortDescription":"Manages the layout of all forms and fields within it. Used for the layout of new forms and managing the layout of all forms.","category":"Layout and structure","keywords":["FormLayout","Group","responsive","no grid","stack fields","vertical","vertically","arrange fields","form spacing","field layouts","form field layouts","field stacking","stack fields","vertical form stacking","stack form fields vertically","form layout group","field group","multiple fields in a row","condensed field groups","short inputs","short input fields","short text fields","layout forms","layout input fields"],"examples":[{"fileName":"form-layout-default.tsx","title":"Default","description":"Use to stack form fields vertically, which makes them easier to scan and complete."},{"fileName":"form-layout-field-group.tsx","title":"Field group","description":"Use field groups to arrange multiple fields in a row. Works best for familiar layouts such as a row of city, state, and zip code fields. Use caution when arranging unrelated fields next to each other as this makes fields easier to miss. Field groups will wrap automatically on smaller screens."},{"fileName":"form-layout-condensed-field-group.tsx","title":"Condensed field group","description":"For very short inputs, the width of the inputs may be reduced in order to fit more fields in the row."}],"previewImg":"/images/components/layout-and-structure/form-layout.png"}},"components/layout-and-structure/grid":{"frontMatter":{"title":"Grid","category":"Layout and structure","keywords":["one column","two column","three column","column","row","column layouts","grid layouts","containers","full width containers","css grid"],"examples":[{"fileName":"grid-two-column.tsx","title":"Two column","description":"Use to create a two column layout that wraps at a breakpoint and aligns to a twelve column grid."},{"fileName":"grid-two-thirds-and-one-third-column.tsx","title":"Two-thirds and one-third column","description":"Use to create a two-thirds, one-third column layout that wraps at a breakpoint and aligns to a twelve column grid."},{"fileName":"grid-three-one-third-column.tsx","title":"Three one-third column","description":"Use to create a three column layout that wrap at a breakpoint and aligns to a twelve column grid."},{"fileName":"grid-custom-layout.tsx","title":"Custom layout","description":"Use to create a layout that can be customized at specific breakpoints."}],"previewImg":"/images/components/layout-and-structure/grid.png"}},"components/layout-and-structure/inline-grid":{"frontMatter":{"title":"Inline grid","category":"Layout and structure","keywords":["layout","columns","grid","responsive"],"examples":[{"fileName":"inline-grid-with-varying-gap.tsx","title":"Gap","description":"Use the `gap` prop to set the amount of space between columns. The `gap` prop supports responsive spacing with the [Breakpoints tokens](https://polaris.shopify.com/tokens/breakpoints)."},{"fileName":"inline-grid-with-fixed-widths.tsx","title":"Column width","description":"The `columns` property accepts CSS column shorthand syntax, or an array of strings mapping to common widths in the admin such as `oneThird`, `oneHalf`, and `twoThirds`. For responsive columns, use the same syntax passed into an object with the breakpoints."},{"fileName":"inline-grid-with-set-number.tsx","title":"Number of columns","description":"Control the number of columns using the `columns` prop. Column numbers can be responsively set using the [Breakpoints tokens](https://polaris.shopify.com/tokens/breakpoints)."}],"previewImg":"/images/components/layout-and-structure/inline-grid.png"}},"components/layout-and-structure/inline-stack":{"frontMatter":{"title":"Inline stack","category":"Layout and structure","keywords":["layout","inline","flexbox","flex","responsive","flexible items","row of components","rows","vertical centering","horizontal row of components","stack"],"examples":[{"fileName":"inline-stack-with-non-wrapping.tsx","title":"Non-wrapping","description":"The default wrapping behavior of children can be overridden using the `wrap` prop."},{"fileName":"inline-stack-with-gap.tsx","title":"Gap","description":"Control the horizontal and vertical space between children using the `gap` prop. The `gap` prop supports responsive spacing with the [Breakpoints tokens](https://polaris.shopify.com/tokens/breakpoints)."},{"fileName":"inline-stack-with-block-align.tsx","title":"Block align","description":"Control the vertical alignment of children using the `blockAlign` prop."},{"fileName":"inline-stack-with-align.tsx","title":"Align","description":"Control the horizontal alignment of children using the `align` prop."}],"previewImg":"/images/components/layout-and-structure/inline-stack.png"}},"components/layout-and-structure/layout":{"frontMatter":{"title":"Layout","shortDescription":"A structural component used to group other components. Creates consistent spacing and helps layout stack and scale responsively.","category":"Layout and structure","keywords":["one column","two column","three column","column","annotated","page","column layouts","containers","full width containers","secondary sections","setting page","grouped sections","annotated sections"],"examples":[{"fileName":"layout-one-column.tsx","title":"One-column","description":"Use to have a single section on its own in a full-width container. Use for simple pages and as a container for banners and other full-width content."},{"fileName":"layout-two-columns-with-primary-and-secondary-widths.tsx","title":"Two columns with primary and secondary widths","description":"Use to follow a normal section with a secondary section to create a 2/3 + 1/3 layout on detail pages (such as individual product or order pages). Can also be used on any page that needs to structure a lot of content. This layout stacks the columns on small screens."},{"fileName":"layout-two-columns-with-equal-width.tsx","title":"Two columns with equal width","description":"Use to create a ½ + ½ layout. Can be used to display content of equal importance. This layout will stack the columns on small screens."},{"fileName":"layout-three-columns-with-equal-width.tsx","title":"Three columns with equal width","description":"Use to create a ⅓ + ⅓ + ⅓ layout. Can be used to display content of equal importance. This layout will stack the columns on small screens."},{"fileName":"layout-annotated.tsx","title":"Annotated","description":"Use for settings pages. When settings are grouped thematically in annotated sections, the title and description on each section helps merchants quickly find the setting they’re looking for."},{"fileName":"layout-annotated-with-sections.tsx","title":"Annotated with sections","description":"Use for settings pages. When settings are grouped thematically in annotated sections, the title and description on each section helps merchants quickly find the setting they’re looking for."},{"fileName":"layout-annotated-with-banner-at-the-top.tsx","title":"Annotated with Banner at the top","description":"Use for settings pages that need a banner or other content at the top."}],"previewImg":"/images/components/layout-and-structure/layout.png"}},"components/layout-and-structure/media-card":{"frontMatter":{"title":"Media card","shortDescription":"Provides a container for introductory or highlight information. Often used in a grid to present related content.","category":"Layout and structure","keywords":["MediaCard","actionable","updates","new features","Media card","image card","feature card","card with thumbnail","thumbnail card"],"examples":[{"fileName":"media-card-default.tsx","title":"Default","description":"Use to surface educational information about a feature or opportunity."},{"fileName":"media-card-with-small-visual.tsx","title":"With small visual","description":"Use when there are limited vertical space, or when the card should be less prominent."},{"fileName":"media-card-with-secondary-action.tsx","title":"With secondary action","description":"Use when there are two distinct actions merchants can take on the information in the card."},{"fileName":"media-card-with-no-actions.tsx","title":"With no actions","description":"Use when media card does not require any actions."},{"fileName":"media-card-video-card.tsx","title":"Video card","description":"Use to provide a consistent layout for contextual learning content. Use to wrap thumbnails of educational videos about Shopify features in context."},{"fileName":"media-card-portrait-video-card.tsx","title":"Portrait video card","description":"Use when vertical screen space is not limited or when the video card is the page’s primary content. For example, in an empty state."}],"previewImg":"/images/components/layout-and-structure/media-card.png"}},"components/layout-and-structure/page":{"frontMatter":{"title":"Page","shortDescription":"Used to build the layout of a page in the Shopify admin. A flexible container for composing pages consistently.","category":"Layout and structure","keywords":["page","breadcrumbs","view","title","titlebar","backAction","pagination","page with all header elements","page without primary action in header","page without pagination","full-width page","narrow-width page","page with action groups","outer wrapper","page actions","page layouts"],"examples":[{"fileName":"page-default.tsx","title":"Default","description":"Use for detail pages, which should have pagination and breadcrumbs, and also often have several actions."},{"fileName":"page-with-custom-primary-action.tsx","title":"With custom primary action","description":"Use to create a custom primary action."},{"fileName":"page-without-primary-action-in-header.tsx","title":"Without primary action in header","description":"Use when a primary action functions better as part of the page content instead of in the page header."},{"fileName":"page-with-destructive-secondary-action.tsx","title":"With destructive secondary action","description":"Used to visually indicate that the secondary page action is destructive."},{"fileName":"page-with-custom-secondary-action.tsx","title":"With custom secondary action","description":"Use to create a custom secondary action."},{"fileName":"page-with-tooltip-action.tsx","title":"With tooltip action","description":"Use when merchants or their staff will benefit from context on why a page action is disabled."},{"fileName":"page-with-subtitle.tsx","title":"With subtitle","description":"Use when the page title benefits from secondary content."},{"fileName":"page-with-external-link.tsx","title":"With external link","description":"Use when a secondary action links to another website. Actions marked external open in a new browser tab."},{"fileName":"page-without-pagination.tsx","title":"Without pagination","description":"Use when the page doesn’t represent a list of objects or a detail view for an object."},{"fileName":"page-full-width.tsx","title":"Full-width","description":"Use for layouts that benefit from more screen width, such as wide tables or lists."},{"fileName":"page-narrow-width.tsx","title":"Narrow width","description":"Use a narrow width layout if the page supports a single unified task. When merchants must review the entire page contents to complete their goal, this layout helps focus their attention in a single path from top to bottom."},{"fileName":"page-with-action-groups.tsx","title":"With action groups","description":"Use action groups for sets of actions that relate to one another, particularly when there are too many to display as secondary actions. Note that these groups will be further rolled up into a single action for smaller displays so that actions do not wrap or overflow the page bounds."},{"fileName":"page-with-content-after-title.tsx","title":"With content after title","description":"Title metadata appears immediately after the page’s title. Use it to communicate brief, important and non-interactive status information about an entire page."}],"previewImg":"/images/components/layout-and-structure/page.png"}},"components/lists":{"frontMatter":{"title":"Lists","expanded":true,"order":8,"previewImg":"/images/components/lists.png"}},"components/lists/action-list":{"frontMatter":{"title":"Action list","category":"Lists","keywords":["ActionList","dropdown","drop down","popover","pop over","menu","drop-down","select","options"],"examples":[{"fileName":"action-list-in-a-popover.tsx","title":"In a popover","description":"Use for the least important actions so merchants aren’t distracted by secondary tasks. Can also be used for a set of actions that won’t fit in the available screen space."},{"fileName":"action-list-with-icons-or-image.tsx","title":"With icons or image","description":"Use when the items benefit from an associated action or image, such as a list of products."},{"fileName":"action-list-with-an-icon-and-a-suffix.tsx","title":"With an icon and a suffix","description":"Use when the items benefit from an associated action or image, such as a list of products."},{"fileName":"action-list-with-sections.tsx","title":"With sections","description":"Use when the items benefit from sections to help differentiate actions."},{"fileName":"action-list-with-destructive-item.tsx","title":"With destructive item","description":"Use to visually indicate that an action list item is destructive."},{"fileName":"action-list-with-help-text.tsx","title":"With help text","description":"Use help text when the normal Verb noun syntax for the actions does not provide sufficient context for the merchant."},{"fileName":"action-list-with-a-prefix-and-a-suffix.tsx","title":"With a prefix and a suffix","description":"Use help text when the normal Verb noun syntax for the actions does not provide sufficient context for the merchant."}],"previewImg":"/images/components/lists/action-list.png"}},"components/lists/description-list":{"frontMatter":{"title":"Description list","shortDescription":"Used to present pairs of related information, like terms and definitions, or names and values, in a list format.","category":"Lists","keywords":["DescriptionList","glossary","description","list terms","list and define terms","item lists","text lists","list of terms","term explaination"],"examples":[{"fileName":"description-list-default.tsx","title":"Default","description":"Use when you need to present merchants with a list of items or terms alongside descriptions and explanations."}],"previewImg":"/images/components/lists/description-list.png"}},"components/lists/list":{"frontMatter":{"title":"List","category":"Lists","keywords":["bulleted lists","numbered lists","icon lists","list items","text lists","text-only lists"],"examples":[{"fileName":"list-bulleted.tsx","title":"Bulleted","description":"Use for a text-only list of related items that don’t need to be in a specific order and don’t require an icon or other indicator."},{"fileName":"list-numbered.tsx","title":"Numbered","description":"Use for a text-only list of related items when an inherent order, priority, or sequence needs to be communicated."},{"fileName":"list-extra-tight.tsx","title":"Extra Tight","description":"Use when there is limited space for a text-only list of related items when an inherent order, priority, or sequence needs to be communicated."}],"previewImg":"/images/components/lists/list.png"}},"components/lists/listbox":{"frontMatter":{"title":"Listbox","category":"Lists","keywords":["list","listbox","list box","interactive list"],"examples":[{"fileName":"listbox-default.tsx","title":"Default","description":"Basic implementation of a control element used to let merchants select options"},{"fileName":"listbox-with-loading.tsx","title":"With Loading","description":"Implementation of a control element showing a loading indicator to let merchants know more options are being loaded"},{"fileName":"listbox-with-action.tsx","title":"With Action","description":"Implementation of a control element used to let merchants take an action"},{"fileName":"listbox-with-custom-element.tsx","title":"With custom element","description":"Implementation of a control with custom rendering of options"},{"fileName":"listbox-with-search.tsx","title":"With search","description":"Use to help merchants browse, filter, and choose from a list of options."}],"previewImg":"/images/components/lists/listbox.png"}},"components/lists/option-list":{"frontMatter":{"title":"Option list","category":"Lists","keywords":["option list","choices","decision","list","list of tags","list of collections","collections lists","collection lists","list selection"],"examples":[{"fileName":"option-list-default.tsx","title":"Default","description":"Use for a group of similar selectable items when only one should be selectable at once."},{"fileName":"option-list-multiple.tsx","title":"Multiple","description":"Use when you have a group of similar selectable items and more than one item can be selected at once."},{"fileName":"option-list-with-sections.tsx","title":"With sections","description":"Use sections when you have multiple groups of similar selectable items."},{"fileName":"option-list-in-a-popover.tsx","title":"In a popover","description":"Use when a set of selections won’t fit in the available screen space."}],"previewImg":"/images/components/lists/option-list.png"}},"components/lists/resource-item":{"frontMatter":{"title":"Resource item","category":"Lists","keywords":["ResourceItem","resource item","collections","items","objects","list of products","list of orders","product lists","order lists","collections lists","collection lists","list of collections","product listings list","channel lists","resource list attributes","list attributes","exceptions list","list secondary actions","secondary actions in a list","list of resources"],"examples":[{"fileName":"resource-item-default.tsx","title":"Default","description":"A basic resource item with its details filled in at the point of use."},{"fileName":"resource-item-with-media.tsx","title":"With media","description":"The media element can hold an [avatar](https://polaris.shopify.com/components/avatar), [thumbnail](https://polaris.shopify.com/components/thumbnail), or other small-format graphic."},{"fileName":"resource-item-with-shortcut-actions.tsx","title":"With shortcut actions","description":"Shortcut actions present popular actions from the resource’s details page for easy access. A shortcut action should be available on every item in the list."},{"fileName":"resource-item-with-vertical-alignment.tsx","title":"With vertical alignment","description":"Use to adjust the vertical alignment of item content."}],"previewImg":"/images/components/lists/resource-item.png"}},"components/lists/resource-list":{"frontMatter":{"title":"Resource list","category":"Lists","keywords":["ResourceList","collections","items","objects","list of products","list of orders","product lists","order lists","collections lists","collection lists","list of collections","product listings list","channel lists","resource list attributes","list attributes","exceptions list","list secondary actions","secondary actions in a list","list of resources","filter","sort"],"examples":[{"fileName":"resource-list-default.tsx","title":"Default","description":"A resource list with simple items and no bulk actions, sorting, or filtering."},{"fileName":"resource-list-with-empty-state.tsx","title":"With empty state","description":"Use to explain the purpose of a list of resources when no resources exist yet. This allows a smooth transition from a list in a loading state to a list where zero, one, or many resources exist."},{"fileName":"resource-list-with-selection-and-no-bulk-actions.tsx","title":"With selection and no bulk actions","description":"A resource list with simple items and selection."},{"fileName":"resource-list-with-bulk-actions.tsx","title":"With bulk actions","description":"Allows merchants to select items and perform an action on the selection."},{"fileName":"resource-list-with-loading-state.tsx","title":"With loading state","description":"Notifies merchants that list items are being processed."},{"fileName":"resource-list-with-total-count.tsx","title":"With total count","description":"Use to indicate that the number of resources shown is a subset of the total number of resources in the list."},{"fileName":"resource-list-with-sorting.tsx","title":"With sorting","description":"Allows merchants to change the way the list is sorted by selecting one of several options from a [Select](https://polaris.shopify.com/components/select) control."},{"fileName":"resource-list-with-alternate-tool.tsx","title":"With alternate tool","description":"Allows merchants to add an alternate tool in the current sort option location when sort may not be the most relevant action for the current list."},{"fileName":"resource-list-with-filtering.tsx","title":"With filtering","description":"Allows merchants to narrow the resource list to a subset of the original items."},{"fileName":"resource-list-with-a-custom-empty-search-result-state.tsx","title":"With a custom empty search result state","description":"Allows merchants to narrow the resource list to a subset of the original items. If the filters or search applied return no results, then display a custom empty search state."},{"fileName":"resource-list-with-item-shortcut-actions.tsx","title":"With item shortcut actions","description":"Shortcut actions are intended to provide quick access to popular actions from the resource’s details page. They are shown when the mouse is hovered over the list item, and are not shown on small screen devices, so the action must also be accessible in another way."},{"fileName":"resource-list-with-persistent-item-shortcut-actions.tsx","title":"With persistent item shortcut actions","description":"Use persistent shortcut actions in rare cases when the action cannot be made available on the item’s details page. Persistent shortcut actions roll up into an overflow menu on small screens."},{"fileName":"resource-list-with-multiselect.tsx","title":"With multiselect","description":"Allows merchants to select or deselect multiple items at once."},{"fileName":"resource-list-with-all-of-its-elements.tsx","title":"With all of its elements","description":"Use as a broad example that includes most props available to resource list."},{"fileName":"resource-list-with-pagination.tsx","title":"With pagination","description":"Use when the list contains many rows and they need paginating."}],"previewImg":"/images/components/lists/resource-list.png"}},"components/navigation":{"frontMatter":{"title":"Navigation","expanded":true,"order":9,"previewImg":"/images/components/navigation.png"}},"components/navigation/footer-help":{"frontMatter":{"title":"Footer help","category":"Navigation","keywords":["FooterHelp","learn more about","help documentation links","links to help documentation","link to help documentation","footer help boxes","educate about features","merchant education","educational opportunity","educating","teaching"],"examples":[{"fileName":"footer-help-default.tsx","title":"Default","description":"Use to direct merchants to more information related to the product or feature they’re working on."}],"previewImg":"/images/components/navigation/footer-help.png"}},"components/navigation/fullscreen-bar":{"frontMatter":{"title":"Fullscreen bar","category":"Navigation","keywords":["topbar","top bar","header","bar","app"],"examples":[{"fileName":"fullscreen-bar-with-children.tsx","title":"With children","description":"Use to provide structure for the top of an application while in fullscreen mode."},{"fileName":"fullscreen-bar-no-children.tsx","title":"No children","description":"Use this default to show ONLY the Back button."}],"previewImg":"/images/components/navigation/fullscreen-bar.png"}},"components/navigation/link":{"frontMatter":{"title":"Link","category":"Navigation","keywords":["URL","linklist","link list","embed","actions","pathways","deep link","text link","plain button","plain call to action","plain cta","embeddd action","action in text","hyperlink","secondary actions","secondary cta","secondary call to action"],"examples":[{"fileName":"link-default.tsx","title":"Default links","description":"Use for text links inside a paragraph or for standalone text. Default links open in the same browser tab."},{"fileName":"link-monochrome.tsx","title":"Monochrome","description":"Use for text links that are the same color as the surrounding text."},{"fileName":"link-monochrome-in-a-banner.tsx","title":"Monochrome in a banner","description":"Monochrome styles will be applied to links rendered within a `Banner`."},{"fileName":"link-external.tsx","title":"External link","description":"Use for text links that should open in a new browser tab (or window, depending on the merchant’s browser settings). Use this only when a default link might disrupt the merchant’s workflow."}],"previewImg":"/images/components/navigation/link.png"}},"components/navigation/navigation":{"frontMatter":{"title":"Navigation","category":"Navigation","keywords":["navigation","nav","links","primary navigation","main navigation","frame","sidebar","side bar"],"examples":[{"fileName":"navigation-default.tsx","title":"Default","description":"Use to present a navigation menu in the [frame](https://polaris.shopify.com/components/frame)."},{"fileName":"navigation-with-multiple-secondary-navigations.tsx","title":"With multiple secondary navigations","description":"Use to present a secondary action, related to a section and to title the section."},{"fileName":"navigation-with-an-active-root-item-with-secondary-navigation-items.tsx","title":"With an active root item with secondary navigation items","description":"Use to present a secondary action, related to a section and to title the section."},{"fileName":"navigation-with-a-secondary-action-for-a-section-and-a-section-title.tsx","title":"With a secondary action for a section and a section title","description":"Use to present a secondary action, related to a section and to title the section."},{"fileName":"navigation-with-a-secondary-action-for-an-item.tsx","title":"With a secondary action for an item","description":"Use to add a different action for an item than the main action, like to view or add something."},{"fileName":"navigation-with-multiple-secondary-actions.tsx","title":"With multiple secondary actions","description":"Used to add one or two secondary actions to the navigation item."},{"fileName":"navigation-with-section-rollup.tsx","title":"With section rollup","description":"Use to show a limited number of items in a section with an option to expand the remaining items."},{"fileName":"navigation-with-section-separator.tsx","title":"With section separator","description":"Use to add a horizontal line below the section."},{"fileName":"navigation-with-various-states-and-secondary-elements.tsx","title":"With various states and secondary elements","description":"This example showcases the many elements that can compose a navigation, especially useful for testing purposes."},{"fileName":"navigation-with-truncation-for-various-states.tsx","title":"With truncation active for various states","description":"This example showcases how elements are displayed with the truncateText prop as true for various states."},{"fileName":"navigation-with-aria-labelledby.tsx","title":"With aria-labelledby","description":"This example shows how to add an aria-labelledby to add a hidden label to the `nav` element."},{"fileName":"navigation-using-major-icons.tsx","title":"Using Major icons","description":"This example shows how to use the shouldResizeIcon prop when using Major icons"}],"previewImg":"/images/components/navigation/navigation.png"}},"components/navigation/pagination":{"frontMatter":{"title":"Pagination","category":"Navigation","keywords":["lists","detail","page","label","pager","previous","next","navigation between pages","page arrows","list navigation","list arrows","list pagination","list pages","previous next buttons","previous buttons","next buttons"],"examples":[{"fileName":"pagination-default.tsx","title":"Default","description":"Use for pagination of resources."},{"fileName":"pagination-with-keyboard-navigation.tsx","title":"With keyboard navigation","description":"Attach standard keyboard shortcuts to important pagination controls."},{"fileName":"pagination-with-label.tsx","title":"With label","description":"Add a label between navigation buttons to provide more context of the content being viewed by the user."},{"fileName":"pagination-with-table-type.tsx","title":"With table type","description":"Use for pagination at the bottom of tables or lists."}],"previewImg":"/images/components/navigation/pagination.png"}},"components/navigation/tabs":{"frontMatter":{"title":"Tabs","shortDescription":"Used to alternate among related views within the same context.","category":"Navigation","keywords":["layout","navigate","organize","list views","list filters","fitted tabs","segmented controls","scrollable"],"examples":[{"fileName":"tabs-default.tsx","title":"Default","description":"Use for most cases, especially when the number of tabs may be more than three."},{"fileName":"tabs-inside-of-a-card.tsx","title":"Inside of a Card","description":"Use to display tabs inside of a [Card](/components/layout-and-structure/card)."},{"fileName":"tabs-fitted.tsx","title":"Fitted","description":"Use when tabs contain a few (2 or 3) items within a narrow column."},{"fileName":"tabs-with-actions.tsx","title":"With actions","description":"Use when actions need to be performed on a tab."},{"fileName":"tabs-with-badge-content.tsx","title":"With badge content","description":"Use to inform a piece of information about the tabs."},{"fileName":"tabs-with-custom-disclosure.tsx","title":"With custom disclosure","description":"Use to provide information about the popover contents."}],"previewImg":"/images/components/navigation/tabs.png"}},"components/navigation/top-bar":{"frontMatter":{"title":"Top bar","shortDescription":"Appears at the top of the page and is used to brand and navigate major applications areas.","category":"Navigation","keywords":["global chrome","global features","topbar","top bar","header","nav bar","bar","navbar","brand","search","user","menu","logo"],"examples":[{"fileName":"top-bar-default.tsx","title":"Default","description":"Use to provide structure for the top of an application. Style the top bar component using the app provider component with a theme. Providing just the `background` key for the top bar component theme will result in intelligent defaults being set for complementary colors with contrasting text."}],"previewImg":"/images/components/navigation/top-bar.png"}},"components/overlays":{"frontMatter":{"title":"Overlays","expanded":true,"order":10,"previewImg":"/images/components/overlays.png"}},"components/overlays/modal":{"frontMatter":{"title":"Modal","shortDescription":"Used to interrupt merchants with urgent information, details, or actions.","category":"Overlays","keywords":["modal","src","open","title","width","height","primary action","secondary action","tertiary action","destructive action","footer","instant","sectioned","large","small","limit height","loading","outer wrapper","iframe","overlay","dialog","alert"],"examples":[{"fileName":"modal-default.tsx","title":"Default","description":"Use as the default option for a modal."},{"fileName":"modal-with-primary-action.tsx","title":"With primary action","description":"Use to let merchants take a key action."},{"fileName":"modal-with-destructive-primary-action.tsx","title":"With destructive primary action","description":"Use to let merchants take a key action that cannot be undone."},{"fileName":"modal-with-primary-and-secondary-actions.tsx","title":"With primary and secondary actions","description":"Use to let merchants take key actions at the bottom of the modal."},{"fileName":"modal-large.tsx","title":"Large","description":"Use when you need to increase the width of your modal."},{"fileName":"modal-small.tsx","title":"Small","description":"Use when you need to decrease the width of your modal."},{"fileName":"modal-without-a-title.tsx","title":"Without a title","description":"A title is required for accessibility, but you may hide it."},{"fileName":"modal-with-scroll-listener.tsx","title":"With scroll listener","description":"Use to implement infinite scroll of modal content."},{"fileName":"modal-with-activator-ref.tsx","title":"With activator ref","description":"Provide an activator ref when it’s more convenient than providing an element. This ensures proper focus management when closing the modal. See the [accessibility features of a modal](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html) for more information regarding focus."},{"fileName":"modal-without-an-activator-prop.tsx","title":"Without an activator prop","description":"Use an external activator when technical limitations prevent you from passing the activator as an element or a ref. Make sure to focus the activator on close when choosing this approach. See the [accessibility features of a modal](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html) for more information regarding focus."}],"previewImg":"/images/components/overlays/modal.png"}},"components/overlays/popover":{"frontMatter":{"title":"Popover","shortDescription":"Small overlays that open on demand and close when the merchant interacts with any other part of Shopify. Used to surface secondary information or actions.","category":"Overlays","keywords":["interactive","container","dropdown","drop down","drop-down","popover","pop over","menu","fly out","select","action list","menu","context menu","popover with form components","popover with action list","popover with content and actions","action sheet"],"examples":[{"fileName":"popover-with-action-list.tsx","title":"With action list","description":"Use when presenting a set of actions in a disclosable menu."},{"fileName":"popover-with-content-and-actions.tsx","title":"With content and actions","description":"Use to present a combination of content, instructions, and actions in a panel for tasks that are of low or secondary importance to the current page. When used this way, popovers provide useful entry points to related features without overwhelming merchants."},{"fileName":"popover-with-form-components.tsx","title":"With form components","description":"Use to present secondary input tasks on demand."},{"fileName":"popover-with-lazy-loaded-list.tsx","title":"With lazy loaded list","description":"Use to present merchants with a list that dynamically loads more items on scroll or arrow down."},{"fileName":"popover-with-searchable-listbox.tsx","title":"With searchable listbox","description":"Use to help merchants browse, filter, and choose from a list of options."}],"previewImg":"/images/components/overlays/popover.png"}},"components/overlays/tooltip":{"frontMatter":{"title":"Tooltip","category":"Overlays","keywords":["info","help","popover","infotip","hint","small popover","hover","tap"],"examples":[{"fileName":"tooltip-default.tsx","title":"Default","description":"Use only when necessary to provide an explanation for an interface element."},{"fileName":"tooltip-visible-only-with-child-interaction.tsx","title":"Visible only with child interaction","description":"Use when the tooltip overlays interactive elements when active, for example a form input. The `dismissOnMouseOut` prop prevents the tooltip from remaining active when mouse hover or focus leaves its `children` and enters the tooltip\'s content."},{"fileName":"tooltip-with-persistence-on-click.tsx","title":"With persistence on click","description":"Use to present a tooltip that remains open if activated by click or keypress."},{"fileName":"tooltip-with-suffix.tsx","title":"With suffix","description":"Use when merchants benefit from information supplemental to the tooltip content. For example, to present a keyboard shortcut beside the content of a tooltip that describes an icon button."}],"previewImg":"/images/components/overlays/tooltip.png"}},"components/selection-and-input":{"frontMatter":{"title":"Selection and input","expanded":true,"order":3,"previewImg":"/images/components/selection-and-input.png"}},"components/selection-and-input/autocomplete":{"frontMatter":{"title":"Autocomplete","category":"Selection and input","keywords":["autocomplete","searchable","typeahead","combobox","listbox"],"examples":[{"fileName":"autocomplete-default.tsx","title":"Default","description":"Use to help merchants complete text input quickly from a list of options."},{"fileName":"autocomplete-with-multiple-tags.tsx","title":"With multiple tags","description":"Use to help merchants select multiple options from a list curated by the text input."},{"fileName":"autocomplete-with-multiple-sections.tsx","title":"With multiple sections","description":"Use to help merchants complete text input quickly from a multiple sections list of options."},{"fileName":"autocomplete-with-loading.tsx","title":"With loading","description":"Use to indicate loading state to merchants while option data is processing."},{"fileName":"autocomplete-with-lazy-loading.tsx","title":"With lazy loading"},{"fileName":"autocomplete-with-empty-state.tsx","title":"With empty state","description":"Use to indicate there are no search results."},{"fileName":"autocomplete-with-action.tsx","title":"With action","description":"Use to help merchants complete an action quickly."},{"fileName":"autocomplete-with-wrapping-action.tsx","title":"With wrapping action","description":"Use to help merchants complete an action quickly with wrapping lines of text."},{"fileName":"autocomplete-with-destructive-action.tsx","title":"With destructive action","description":"Use to help merchants complete a destructive action quickly."}],"previewImg":"/images/components/selection-and-input/autocomplete.png"}},"components/selection-and-input/checkbox":{"frontMatter":{"title":"Checkbox","category":"Selection and input","keywords":["accept","decline","terms","input","multiple choice lists","terms and services","checkboxes","check boxes","multiple selections","form selections","multi-choice lists"],"examples":[{"fileName":"checkbox-default.tsx","title":"Default","description":"Use in forms to toggle the state of something on or off. Default checkboxes can appear as selected and disabled, or unselected."}],"previewImg":"/images/components/selection-and-input/checkbox.png"}},"components/selection-and-input/choice-list":{"frontMatter":{"title":"Choice list","category":"Selection and input","keywords":["ChoiceList","form","input","choices","select","group of radio buttons","radio button group","group of checkboxes","group of check boxes","list of choices","list of radio buttons","list of checkboxes","list of check boxes","multi-choice list","single-choice list"],"examples":[{"fileName":"choice-list-default.tsx","title":"Default","description":"Allows merchants to select one option from a list. Make sure all options are an either/or choice."},{"fileName":"choice-list-with-error.tsx","title":"With error","description":"Allows for accessible error handling by connecting the error message to the field with the error."},{"fileName":"choice-list-with-multi-choice.tsx","title":"With multi-choice","description":"Allows merchants to select multiple options from a list. Avoid options that are an either/or choice."},{"fileName":"choice-list-with-children-content.tsx","title":"With children content","description":"Use when you need merchants to view and/or interact with additional content under a choice. The content will always be rendered."},{"fileName":"choice-list-with-dynamic-children-content.tsx","title":"With dynamic children content","description":"Use when you need merchants to view and/or interact with additional content under a choice. The content is only rendered when the choice is selected. Works for both single-choice and multi-choice list."}],"previewImg":"/images/components/selection-and-input/choice-list.png"}},"components/selection-and-input/color-picker":{"frontMatter":{"title":"Color picker","shortDescription":"Allows merchants to choose a color visually, or by entering a hex value.","category":"Selection and input","keywords":["ColorPicker","HuePicker","AlphaPicker","Slidable","Choose color","Select color","Pick color","color selector with transparent value","colorpicker with transparent value","alpha value picker","alpha value selector"],"examples":[{"fileName":"color-picker-default.tsx","title":"Default","description":"Use when merchants need to select a color to make the selection a visual task rather than a technical one."},{"fileName":"color-picker-with-transparent-value.tsx","title":"With transparent value","description":"Use when attached to a visual builder to allow the designated object to have a transparent background that allows underlying objects to show through."},{"fileName":"color-picker-with-transparent-value-full-width.tsx","title":"With transparent value full width","description":"Use when attached to a visual builder to allow the designated object to have a transparent background that allows underlying objects to show through."}],"previewImg":"/images/components/selection-and-input/color-picker.png"}},"components/selection-and-input/combobox":{"frontMatter":{"title":"Combobox","category":"Selection and input","keywords":["autocomplete","searchable","typeahead","combobox","combo box","listbox","list box"],"examples":[{"fileName":"combobox-default.tsx","title":"Default","description":"Use when merchants can select one option from a predefined or editable list."},{"fileName":"combobox-with-manual-selection.tsx","title":"With manual selection","description":"Use when merchants can select one option from a predefined or editable list."},{"fileName":"combobox-with-multi-select.tsx","title":"With multi-select","description":"Use when merchants can select one or more options from a predefined or editable list."},{"fileName":"combobox-with-multi-select-and-manual-selection.tsx","title":"With multi-select and manual selection","description":"Use when merchants can select one or more options from a predefined or editable list."},{"fileName":"combobox-with-multi-select-and-vertical-content.tsx","title":"With multi-select and vertical content","description":"Use to display selected options above the input value."},{"fileName":"combobox-with-loading.tsx","title":"With loading","description":"Use to indicate to merchants that the list data is being fetched."}],"previewImg":"/images/components/selection-and-input/combobox.png"}},"components/selection-and-input/contextual-save-bar":{"frontMatter":{"title":"Contextual save bar","shortDescription":"Informs merchants of their options once they have made changes to a form on the page or while creating a new object.","category":"Selection and input","keywords":["form","forms","action","actions","save","cancel","logo"],"examples":[{"fileName":"contextual-save-bar-default.tsx","title":"Default","description":"Use the save action to provide an opportunity to save changes. Use the discard action to allow merchants the option to discard their changes. Use the message to provide helpful context on the nature of those changes."},{"fileName":"contextual-save-bar-with-flush-contents.tsx","title":"With flush contents","description":"Use the alignContentFlush flag when you want to omit the logo from the contextual save bar and repurpose that space to extend the message contents fully to the left side of the container."},{"fileName":"contextual-save-bar-with-full-width.tsx","title":"With full width","description":"Use the fullWidth flag when you want to remove the default max-width set on the contextual save bar."}],"previewImg":"/images/components/selection-and-input/contextual-save-bar.png"}},"components/selection-and-input/date-picker":{"frontMatter":{"title":"Date picker","category":"Selection and input","keywords":["DatePicker","month","day","year","weekday","choose date","pick date","pick time","date picker","calendar","date selector","date range picker","date range selector"],"examples":[{"fileName":"date-picker-default.tsx","title":"Default","description":"Use when merchants need to select a single day close to today (today is the default starting position for the date picker)."},{"fileName":"date-picker-ranged.tsx","title":"Ranged","description":"Use when merchants need to select a range of days close to today (today is the default starting position for the date picker)."},{"fileName":"date-picker-multi-month-ranged.tsx","title":"Multi-month ranged","description":"Use multi-month mode to show two months at a time."},{"fileName":"date-picker-with-disabled-date-ranges.tsx","title":"With disabled date ranges","description":"Date ranges may be disabed if you do not want them to be selectable"},{"fileName":"date-picker-with-specific-disabled-dates.tsx","title":"With specific disabled dates","description":"Dates may be disabed if you do not want them to be selectable"}],"previewImg":"/images/components/selection-and-input/date-picker.png"}},"components/selection-and-input/drop-zone":{"frontMatter":{"title":"Drop zone","category":"Selection and input","keywords":["upload","image upload","file upload","drag","drop","area","drop area","file dialog","upload placeholder","drop placeholder"],"examples":[{"fileName":"drop-zone-default.tsx","title":"Default","description":"Use to allow merchants to upload files. They can drag and drop files into the dashed area, or upload traditionally by clicking the “Add file” button or anywhere inside the dashed area."},{"fileName":"drop-zone-with-a-label.tsx","title":"With a label","description":"Use to pair with a label for better accessibility."},{"fileName":"drop-zone-with-image-file-upload.tsx","title":"With image file upload","description":"Use for cases that accept image file formats."},{"fileName":"drop-zone-with-single-file-upload.tsx","title":"With single file upload","description":"Use to accept only one file."},{"fileName":"drop-zone-with-drop-on-page.tsx","title":"With drop on page","description":"Use to accept files for upload when dropped anywhere on the page."},{"fileName":"drop-zone-accepts-only-svg-files.tsx","title":"Accepts only SVG files","description":"Use to accept only SVG files."},{"fileName":"drop-zone-nested.tsx","title":"Nested","description":"Use to allow merchants to upload files in a wider area than the visible drop zone."},{"fileName":"drop-zone-medium-sized.tsx","title":"Medium-sized","description":"Use for cases with limited space. To improve usability, nest medium-sized drop zone in a larger drop zone with no outline. See the nested dropzone example."},{"fileName":"drop-zone-small-sized.tsx","title":"Small-sized","description":"Use for cases with tight space constraints, such as variant thumbnails on the Product details page. To improve usability, nest small-sized drop zone in a larger drop zone with no outline. See the nested dropzone example."},{"fileName":"drop-zone-with-custom-file-upload-text.tsx","title":"With custom FileUpload text","description":"Use for cases where you want the child contents of the dropzone to determine its height."},{"fileName":"drop-zone-with-custom-file-dialog-trigger.tsx","title":"With custom file dialog trigger","description":"Use to trigger the file dialog from an action somewhere else on the page."}],"previewImg":"/images/components/selection-and-input/drop-zone.png"}},"components/selection-and-input/filters":{"frontMatter":{"title":"Filters","shortDescription":"A composite component that filters the items of a list or table.","category":"Selection and input","keywords":["filters","filtering","filter control","resource list","index","list filter","table"],"examples":[{"fileName":"filters-with-a-resource-list.tsx","title":"With a resource list"},{"fileName":"filters-with-a-data-table.tsx","title":"With a data table"},{"fileName":"filters-with-children-content.tsx","title":"With children content"},{"fileName":"filters-disabled.tsx","title":"Disabled"},{"fileName":"filters-with-some-disabled.tsx","title":"With some disabled"},{"fileName":"filters-with-query-field-hidden.tsx","title":"With query field hidden"},{"fileName":"filters-with-query-field-disabled.tsx","title":"With query field disabled"}],"previewImg":"/images/components/selection-and-input/filters.png"}},"components/selection-and-input/form":{"frontMatter":{"title":"Form","category":"Selection and input","keywords":["form","forms","input","checkbox","check box","textfield","text field","post","get"],"examples":[{"fileName":"form-custom-on-submit.tsx","title":"Custom onSubmit","description":"Use onSubmit as a callback for when your form is submitted."},{"fileName":"form-without-native-validation.tsx","title":"Without native validation","description":"Use in forms to toggle native form validation."}],"previewImg":"/images/components/selection-and-input/form.png"}},"components/selection-and-input/index-filters":{"frontMatter":{"title":"Index filters","category":"Selection and input","keywords":["filters","filtering","filter control","tabs","index","list filter","table"],"examples":[{"fileName":"index-filters-default.tsx","title":"Default","description":"An IndexFilters component with view management, search, filtering, and sorting."},{"fileName":"index-filters-with-pinned-filters.tsx","title":"With pinned filters","description":"An IndexFilters component with some of the filters pinned, making them visible by default."},{"fileName":"index-filters-with-filtering-mode.tsx","title":"Filtering mode default","description":"An IndexFilters component with filtering mode enabled by default."},{"fileName":"index-filters-disabled.tsx","title":"Disabled","description":"An IndexFilters component that is disabled."},{"fileName":"index-filters-with-no-filters.tsx","title":"With no filters","description":"An IndexFilters component with only view management, search, and sorting."},{"fileName":"index-filters-with-no-search-or-filters.tsx","title":"With no search or filters","description":"An IndexFilters component with only view management and sorting."}],"previewImg":"/images/components/selection-and-input/index-filters.png"}},"components/selection-and-input/inline-error":{"frontMatter":{"title":"Inline error","category":"Selection and input","keywords":["InlineError","error message","form error","invalid input","form group"],"examples":[{"fileName":"inline-error-default.tsx","title":"Default","description":"Use when the merchant has entered information that is not valid into multiple fields inside of a form, or needs to be displayed in a non-standard position in the form layout."}],"previewImg":"/images/components/selection-and-input/inline-error.png"}},"components/selection-and-input/radio-button":{"frontMatter":{"title":"Radio button","category":"Selection and input","keywords":["RadioButton","selection","choices","options","pick","single selection form","choice form","option button","radio button form","toggle","switch"],"examples":[{"fileName":"radio-button-default.tsx","title":"Default","description":"Use radio buttons where merchants must make a single selection."}],"previewImg":"/images/components/selection-and-input/radio-button.png"}},"components/selection-and-input/range-slider":{"frontMatter":{"title":"Range slider","category":"Selection and input","keywords":["RangeSlider","input","range","slider","percent","number","range form"],"examples":[{"fileName":"range-slider-default.tsx","title":"Default","description":"Use when a single value between `0 and 100` needs to be selected."},{"fileName":"range-slider-with-min-and-max.tsx","title":"With min and max","description":"Use when a single value needs to be selected from a number range with a specific minimum and maximum."},{"fileName":"range-slider-with-steps.tsx","title":"With steps","description":"Use when a single value of a specific increment needs to be selected from a range of numbers."},{"fileName":"range-slider-with-prefix-and-suffix.tsx","title":"With prefix and suffix","description":"Use when the start or end of the range input benefits from additional content. The height of the range slider component varies based on the presence or absence of props like `label` and `helpText`. Setting a React element on the `prefix` and `suffix` props is supported to enable control of spacing and alignment."},{"fileName":"range-slider-with-dual-thumb.tsx","title":"With dual thumb","description":"Use when two values need to be selected from a range of numbers."}],"previewImg":"/images/components/selection-and-input/range-slider.png"}},"components/selection-and-input/select":{"frontMatter":{"title":"Select","category":"Selection and input","keywords":["on off","switch","adjuster","dropdown menu","drop-down menu","menu","form","combobox","combo box","choice list","choicelist","list","disabled select","field label","long list of options","long option list","separate error message"],"examples":[{"fileName":"select-default.tsx","title":"Default","description":"Presents a classic dropdown menu or equivalent picker as determined by merchants’ browsers."},{"fileName":"select-with-inline-label.tsx","title":"With inline label","description":"Use only for cases where the select must fit on a single line, such as in a toolbar."},{"fileName":"select-disabled.tsx","title":"Disabled","description":"Use for selections that aren’t currently available. The surrounding interface should make it clear why the select box is disabled and how to activate it."},{"fileName":"select-with-prefix.tsx","title":"With prefix","description":"Renders any React element to the left of individual select options. Does not show in the dropdown."},{"fileName":"select-with-validation-error.tsx","title":"With validation error","description":"Use to let merchants know if there’s a problem with their selection. For selects, a selection is typically invalid only when using a placeholder option (“Select”) and no other selection has been made."},{"fileName":"select-with-separate-validation-error.tsx","title":"With separate validation error","description":"Use to let merchants know when their select input is invalid in the context of a group of form inputs that the select depends on."}],"previewImg":"/images/components/selection-and-input/select.png"}},"components/selection-and-input/tag":{"frontMatter":{"title":"Tag","category":"Selection and input","keywords":["indicator","label","label objects","organize objects","categorize objects","categories","keywords"],"examples":[{"fileName":"tag-default.tsx","title":"Default","description":"Use to signify the attributes of an object."},{"fileName":"tag-removable.tsx","title":"Removable","description":"Use to allow merchants to remove attributes from an object."},{"fileName":"tag-clickable.tsx","title":"Clickable","description":"Use to allow merchants to add attributes to an object."},{"fileName":"tag-with-link.tsx","title":"With link","description":"Use to allow merchants to navigate to a resource. For example a customer segment or a smart collection"},{"fileName":"tag-with-custom-content.tsx","title":"With custom content","description":"Use when a tag needs to be visually distinguished from others, like when it\'s added automatically."},{"fileName":"tag-removable-with-link.tsx","title":"Removable with link","description":"A removable attribute to an object that allows merchants to navigate to a resource."}],"previewImg":"/images/components/selection-and-input/tag.png"}},"components/selection-and-input/text-field":{"frontMatter":{"title":"Text field","category":"Selection and input","keywords":["TextField","input","textarea","type","add info","form field","input forms","form input","field","active state","input active state","input state","input focus","focus","textbar","text bar","forms","form inputs","form text input","placeholder text","field placeholder text","optional fields","field help text","validation error messages","field labels","number fields","email fields","multiline","hidden label","label action","placeholder text","help text","prefix or suffix","connected fields","label actions","hidden labels","separate error message","icon action"],"examples":[{"fileName":"text-field-default.tsx","title":"Default","description":"Use to allow merchants to provide text input when the expected input is short. For longer input, use the auto grow or multiline options."},{"fileName":"text-field-number.tsx","title":"Number","description":"Use when input text should be a number."},{"fileName":"text-field-email.tsx","title":"Email","description":"Use when the text input should be an email address."},{"fileName":"text-field-multiline.tsx","title":"Multiline","description":"Use when the expected input could be more than one line. The field will automatically grow to accommodate additional text."},{"fileName":"text-field-with-hidden-label.tsx","title":"With hidden label","description":"Use to visually hide the label when the text field’s purpose is clear from context. The label will remain available to screen readers. Use this option with care. In almost all cases, show the label."},{"fileName":"text-field-with-label-action.tsx","title":"With label action","description":"Use when an optional, secondary action is closely associated with a text field. For example, on a field for entering a customs tariff code, a label action might be to look up the appropriate code from a table."},{"fileName":"text-field-with-right-aligned-text.tsx","title":"With right aligned text","description":"Use when input text should be aligned right."},{"fileName":"text-field-with-placeholder-text.tsx","title":"With placeholder text","description":"Use to provide a short, non-essential hint about the expected input. Placeholder text is low-contrast, so don’t rely on it for important information."},{"fileName":"text-field-with-help-text.tsx","title":"With help text","description":"Use to show short instructional content below the text field. Help text works to help merchants understand how to fix errors that result from incorrect formatting (such as dates or passwords with specific character requirements). If more explanation is needed, link to the Shopify Help Center."},{"fileName":"text-field-with-prefix-or-suffix.tsx","title":"With prefix or suffix","description":"Use as a special form of help text that works best inline. Use a prefix for things like currency symbols (“\\\\$”, “¥”, “£”). Use suffix for things like units of measure (“in”, “cm”)."},{"fileName":"text-field-with-vertical-content.tsx","title":"With vertical content","description":"Use to include custom vertical content above the input value, like selected tags."},{"fileName":"text-field-with-connected-fields.tsx","title":"With connected fields","description":"Use when a text field and several related fields make up a logical unit. If inputting weight as a number and a separate unit of measurement, use a text field with a [select dropdown menu](https://polaris.shopify.com/components/select) (for example “kg”, “lb”) as a connected field."},{"fileName":"text-field-with-validation-error.tsx","title":"With validation error","description":"Use to let merchants know if their input is valid or if there’s an error. Whenever possible, validate input as soon as merchants have finished interacting with a field (but not before). If a field already has an error, validate and remove errors as merchants type so they can immediately see when an error has been fixed."},{"fileName":"text-field-with-separate-validation-error.tsx","title":"With separate validation error","description":"Use to let merchants know when their text field input is invalid in the context of a group of form inputs that the text field depends on."},{"fileName":"text-field-disabled.tsx","title":"Disabled","description":"Use to show that a textfield is not available for interaction. Most often used in forms when information is required only in a particular state. For example, the text field next to Other in a choice list when Other is not selected."},{"fileName":"text-field-with-character-count.tsx","title":"With character count","description":"Use to display the current number of characters in a text field. Use in conjunction with max length to display the current remaining number of characters in the text field."},{"fileName":"text-field-with-clear-button.tsx","title":"With clear button","description":"Use to allow merchants to clear the content from a text field."},{"fileName":"text-field-with-monospaced-font.tsx","title":"With monospaced font","description":"Use to apply a monospaced font to the TextField"},{"fileName":"text-field-with-value-selected-on-focus.tsx","title":"With value selected on focus","description":"Use to select all text inside TextField on focus."},{"fileName":"text-field-with-inline-suggestion.tsx","title":"With inline suggestion","description":"Use to provide an autocomplete suggestion inline with the input value. See the combobox component\'s tag multi-select example for full implementation of the inline autocomplete pattern."}],"previewImg":"/images/components/selection-and-input/text-field.png"}},"components/tables":{"frontMatter":{"title":"Tables","expanded":true,"order":7,"previewImg":"/images/components/tables.png"}},"components/tables/data-table":{"frontMatter":{"title":"Data table","shortDescription":"Used to organize and display all information from a data set. Aimed to be as simple as possible for merchants.","category":"Tables","keywords":["DataTable","data","table","tabular","index"],"examples":[{"fileName":"data-table-default.tsx","title":"Default","description":"Use to present small amounts of data for merchants to view statically."},{"fileName":"data-table-sortable.tsx","title":"Sortable","description":"Use when clarity of the table’s content is needed. For example, to note the number of rows currently shown in a data table with pagination."},{"fileName":"data-table-with-footer.tsx","title":"With footer","description":"Use when clarity of the table’s content is needed. For example, to note the number of rows currently shown in a data table with pagination."},{"fileName":"data-table-with-custom-totals-heading.tsx","title":"With custom totals heading","description":"Use to provide a custom heading for the totals row."},{"fileName":"data-table-with-totals-in-footer.tsx","title":"With totals in footer","description":"Use to reposition the totals row in a more appropriate location based on the data stored in the table for merchants to better understand its meaning."},{"fileName":"data-table-with-row-heading-links.tsx","title":"With row heading links","description":"Use to help merchants find relevant, finer grained data sets."},{"fileName":"data-table-with-all-of-its-elements.tsx","title":"With all of its elements","description":"Use as a broad example that includes most props available to data table."},{"fileName":"data-table-with-fixed-first-columns.tsx","title":"With fixed first columns","description":"Use when the table contains many columns and it would benefit the merchant to see a set number of columns when scrolling to the right. For example, the first column in the \\"Sales by Product\\" report table is fixed because the product names are important to reference while analyzing the sales data in other columns.\\n\\nWhen fixing multiple columns, ensure other data within the table is visible and not limited on smaller screens."},{"fileName":"data-table-with-increased-density-and-zebra-striping.tsx","title":"With increased density and zebra striping","description":"Use as a broad example that includes most props available to data table."},{"fileName":"data-table-with-sticky-header-enabled.tsx","title":"With sticky header enabled","description":"Use as a broad example that includes most props available to data table."},{"fileName":"data-table-with-pagination.tsx","title":"With pagination","description":"Use when the table contains many rows and they need paginating."}],"previewImg":"/images/components/tables/data-table.png"}},"components/tables/index-table":{"frontMatter":{"title":"Index table","category":"Tables","keywords":["ResourceList","index","table","list","collections","items","objects","list of products","list of orders","product lists","order lists","collections lists","collection lists","list of collections","product listings list","channel lists","resource list attributes","list attributes","exceptions list","list secondary actions","secondary actions in a list","list of resources","filter","sort"],"examples":[{"fileName":"index-table-default.tsx","title":"Default","description":"An index table with simple items and no bulk actions, sorting, or filtering."},{"fileName":"index-table-with-views-search-filter-sorting.tsx","title":"With saved views, search, filtering, and sorting","description":"An index table with saved views, search, filtering, sorting, and bulk actions."},{"fileName":"index-filters-with-edit-colums-button.tsx","title":"With edit columns button","description":"An index table with edit columns, saved views, search, filtering, sorting, and bulk actions."},{"fileName":"index-table-with-disabled-rows.tsx","title":"With disabled rows","description":"An index table with saved views, search, filtering, sorting, and bulk actions."},{"fileName":"index-table-small-screen.tsx","title":"Small screen","description":"A small screen index table with simple items and no bulk actions, sorting, or filtering."},{"fileName":"index-table-condensed-with-views-search-filter-sorting.tsx","title":"Small screen with saved views, search, filtering, and sorting","description":"A small screen index table with saved views, search, filtering, sorting, and bulk actions."},{"fileName":"index-table-with-empty-state.tsx","title":"With empty state","description":"Use to explain the purpose of a index table when no resources exist yet. This allows a smooth transition from a list in a loading state to a list where zero, one, or many resources exist."},{"fileName":"index-table-with-bulk-actions.tsx","title":"With bulk actions","description":"Allows merchants to select items and perform an action on the selection."},{"fileName":"index-table-with-multiple-promoted-bulk-actions.tsx","title":"With multiple promoted bulk actions","description":"Allows merchants to select items and perform different actions on the selection."},{"fileName":"index-table-with-bulk-actions-and-selection-across-pages.tsx","title":"With bulk actions and selection across pages","description":"Allows merchants to select items, perform an action on the selection and select resources across pages."},{"fileName":"index-table-with-loading-state.tsx","title":"With loading state","description":"Notifies merchants that index table items are being processed."},{"fileName":"index-table-with-filtering.tsx","title":"With filtering","description":"Allows merchants to narrow the index table to a subset of the original items."},{"fileName":"index-table-with-sticky-last-column.tsx","title":"With sticky last column","description":"An index table with a sticky last column that stays visible on scroll. The last heading will also be sticky if not hidden."},{"fileName":"index-table-with-row-navigation-link.tsx","title":"With row navigation link","description":"Use when clicking the row should navigate merchants to another page, like the row item\'s detail page. When a row contains a `Link` with the `dataPrimaryLink` prop set to `true`, clicking the row will trigger navigation to the link\'s `url` instead of selecting the row as well as trigger the callback set on the `IndexTable` `onNavigation` prop if provided."},{"fileName":"index-table-without-checkboxes.tsx","title":"Without checkboxes","description":"An index table without checkboxes and bulk actions."},{"fileName":"index-table-with-subheaders.tsx","title":"With subheaders","description":"An index table with multiple table headers. Use to present merchants with resources grouped by a relevant data value to enable faster bulk selection."},{"fileName":"index-table-with-pagination.tsx","title":"With pagination","description":"Use when the table contains many rows and they need paginating."}],"previewImg":"/images/components/tables/index-table.png"}},"components/typography":{"frontMatter":{"title":"Typography","expanded":true,"order":6,"previewImg":"/images/components/typography.png"}},"components/typography/text":{"frontMatter":{"title":"Text","category":"Typography","keywords":["titles","text","typographic","spacing","display","heading","body","success","critical","warning","subdued","regular","medium","semibold","bold","list"],"examples":[{"fileName":"text-heading.tsx","title":"Heading","description":"Use to create various levels of hierarchy on the page."},{"fileName":"text-body.tsx","title":"Body","description":"Use to create a range of body text. These styles are primarily used within components and blocks of text."},{"fileName":"text-align.tsx","title":"Align","description":"Use to set text alignment."},{"fileName":"text-weight.tsx","title":"Weight","description":"Use to give text a range of font weights."},{"fileName":"text-tone.tsx","title":"Tone","description":"Use to set text tone (color)."},{"fileName":"text-inheritance.tsx","title":"Inheritance","description":"Inherits props from a parent Text container"},{"fileName":"text-decoration.tsx","title":"Decoration","description":"Use to define text decoration"}],"previewImg":"/images/components/typography/text.png"}},"components/utilities":{"frontMatter":{"title":"Utilities","expanded":true,"order":11,"previewImg":"/images/components/utilities.png"}},"components/utilities/app-provider":{"frontMatter":{"title":"App provider","category":"Utilities","keywords":["app","provider","appprovider","internationalization","i18n","localization","context","translate","translation","application wrapper","wrapper","sdk"],"examples":[{"fileName":"app-provider-default.tsx","title":"Default","description":"AppProvider works by default without any additional options passed to it."},{"fileName":"app-provider-with-i18n.tsx","title":"With i18n","description":"With an `i18n`, `AppProvider` will provide these translations to polaris components. See [using translations](https://polaris.shopify.com/components/app-provider#using-translations)"},{"fileName":"app-provider-with-link-component.tsx","title":"With linkComponent","description":"With a `linkComponent`, the app provider component will override the links used in other components. For example you may want to use the `Link` component provided by `react-router` throughout your application instead of the default `a` tag."}],"previewImg":"/images/components/utilities/app-provider.png"}},"components/utilities/collapsible":{"frontMatter":{"title":"Collapsible","shortDescription":"Hides content and allows merchants to expand it. Used to hide optional settings, information, and actions.","category":"Utilities","keywords":["hide","show","low priority","less important","disclosure","accordion","accordian","expand content","toggle","toggleable","reveal","show more","show all button","show hide","expanding view","collapse"],"examples":[{"fileName":"collapsible-default.tsx","title":"Default","description":"Use for a basic “show more” interaction when you need to display more content."}],"previewImg":"/images/components/utilities/collapsible.png"}},"components/utilities/frame":{"frontMatter":{"title":"Frame","shortDescription":"Creates the structure of the Shopify admin. All of the main sections of the admin are nested in the frame.","category":"Utilities","keywords":["navigation","nav","links","primary navigation","main navigation","global","frame","sidebar","side bar","loading","top bar","menu","toast"],"examples":[{"fileName":"frame-in-an-application.tsx","title":"In an application","description":"Use to present the frame structure and all of its elements."},{"fileName":"frame-with-an-offset.tsx","title":"With an offset","description":"Use to present the frame structure and all of its elements with an offset provided to the theme."}],"previewImg":"/images/components/utilities/frame.png"}},"components/utilities/scrollable":{"frontMatter":{"title":"Scrollable","shortDescription":"Used in components with too much content for the available vertical space. Embeds long-form content in components like modals and popovers.","category":"Utilities","keywords":["long form","text container","terms of service","long form container","scrolling","independently scrollable","modal scrolling","pane scrolling","scrolling in panes","below the fold","above the fold"],"examples":[{"fileName":"scrollable-default.tsx","title":"Default","description":"Use when you need to make a region within the page independently scrollable. It’s often used in modals and other panes where it’s helpful to provide an extra visual cue that content exists below or above the fold."},{"fileName":"scrollable-to-child-component.tsx","title":"To child component","description":"Use when you need to programmatically scroll a child component into view in the scrollable container."}],"previewImg":"/images/components/utilities/scrollable.png"}},"content":{"frontMatter":{"title":"Content","order":4,"description":"Thoughtful, consistent interface content is a core element of a well-designed user experience.","icon":"TextAlignmentLeftMajor"}},"content/actionable-language":{"frontMatter":{"title":"Actionable language","description":"Merchants use Shopify to get things done. Content should be written and structured to help them understand and take the most important actions.","icon":"CircleRightMajor","keywords":["button content","button copy","button terminology","writing for buttons","link content","link copy","link terminology","writing for links","action words","calls to action","calls-to-action","CTA","verbs","copy instructions","copy rules","copy guidelines","content instructions","content rules","save","done","ok","okay","o.k.","accept","close","select","choose","edit","manage","change","switch","create","add","view","see","need","must","export","download","import","upload","confirmation modals","disruptive","delete","deletions","cancel","leave page","stay","discard","dangerous actions","risky actions","irreversible actions","confirmation alerts","warnings","confirmation messaging","headings","subheadings","titles","directional language","directionality","above","below","right","left","up","down"]}},"content/alternative-text":{"frontMatter":{"title":"Alternative text","description":"Alternative text (alt text) helps provide an inclusive experience for merchants who use screen readers.","icon":"ImageAltMajor","keywords":["speech synthesis","alt HTML element attribute","alt text attribute","screen reader","a11y","universal design","inclusivity","disability","disabilities","people with disabilities","persons with disabilities","accessible markup","accessible mark up","accessible code","diversity","diverse","vision trouble","visual impairments","color blind","hearing trouble","physical disabilities","physical functioning difficulty","cognitive disabilities","limited vision","loss of vision","low vision","inclusive experiences","alternative text","alt text","accessibility feedback","accessible components","blind"]}},"content/error-messages":{"frontMatter":{"title":"Error messages","description":"Error messages can be scary. Make errors visible to merchants, easy to understand, and helpful.","icon":"DiamondAlertMajor","keywords":["error states","invalid",500,400,404,"error pages"]}},"content/grammar-and-mechanics":{"frontMatter":{"title":"Grammar and mechanics","description":"This guide is to help designers, developers, recruiters, UX-ers, product managers, support advisors, or anyone who writes public-facing text for Shopify.","icon":"GrammarMajor","keywords":["writing instructions","writing rules","writing guidelines","copy instructions","copy rules","copy guidelines","content instructions","content rules","content guidelines","writing public-facing text","public-facing text","writing public-facing copy","public-facing copy","writing public-facing content","public-facing content"]}},"content/help-content":{"frontMatter":{"title":"Help content","description":"Help content is educational text that describes interactive elements or offers information about concepts in the UI.","icon":"QuestionMarkInverseMajor","keywords":["help text","learn more","help center","help"]}},"content/help-documentation":{"frontMatter":{"title":"Help documentation","description":"After you build an app or other integration, writing help documentation will show merchants how to use it.","icon":"QuestionMarkInverseMajor","keywords":["writing instructions","writing guides","writing tutorials","writing how-to\'s","writing how to\'s","writing how to","writing step-by-steps","writing step by steps","writing technical documentation","technical documentation","linking to help documentation","linking to technical documentation","educating","teaching","explain apps","describe apps","educate about apps","merchant education","educational opportunity","educational opportunities","explain features","describe feature","educate about features","merchant education","educational opportunity","educational opportunities"]}},"content/inclusive-language":{"frontMatter":{"title":"Inclusive language","description":"Make commerce better for everyone by writing inclusively.","icon":"AccessibilityMajor","keywords":["copy instructions","copy rules","copy guidelines","content instructions","content rules","word list","language","race","racial","racist","racism","a11y","accessible","accessibility","disability","ableist","ableism","gender","gendered","ungendered","gender binary","sex","gender identity","gender-neutral","pronoun","inclusive content"]}},"content/merchant-to-customer":{"frontMatter":{"title":"Merchant-to-customer content","description":"Shopify creates content for different audiences. One of those audiences is merchants’ customers. A customer is a person or organization who interacts with a Shopify merchant or a merchant’s sales channel.","icon":"EmailNewsletterMajor","keywords":["merchant to buyer","buyer","shopper","buyer voice and tone","customer voice and tone","writing for checkout","checkout","check out"]}},"content/naming":{"frontMatter":{"title":"Naming","description":"The names we give our products and features teach merchants how to use Shopify and how to find the things they need to run their business.","icon":"ProductsMajor","keywords":["names","caps","capitalizations","capitalizing","how to name","naming at Shopify","naming guidelines","picking a name","product naming","feature naming","website naming","event naming","trademarked names","trademarks","branded names","capitalized names","abbreviation","acronym"]}},"content/product-content":{"frontMatter":{"title":"Product content","description":"Thoughtful, consistent interface content is a core element of a well-designed user experience.","icon":"ColumnWithTextMajor","keywords":["content standards","content guidelines","content strategy practices","interface content","strategic language","edit content","editing content","reading level","writes","writing","writing tips","language tips","content tips","designing","strategic designing","action","consistency","consistent","writing public-facing text","public-facing text","writing public-facing copy","public-facing copy","writing public-facing content","public-facing content"]}},"content/voice-and-tone":{"frontMatter":{"title":"Voice and tone","description":"Learn how to apply Shopify’s voice and choose the right tone, no matter what product, feature, or app you’re building.","icon":"ChatMajor","keywords":["sound like Shopify","personality of Shopify","brand personality","empathy","merchant feelings","merchant emotions","merchant context","content voice","content tone"]}},"contributing":{"frontMatter":{"title":"Contributing to Polaris","navTitle":"Contributing","description":"Polaris is built for merchants, by you.","keywords":["how to contribute to polaris","contribution","contribute"],"order":10,"newSection":true,"icon":"MobilePlusMajor","showTOC":true}},"contributing/components":{"frontMatter":{"title":"Contributing to Polaris React","navTitle":"Components","description":"Anyone is welcome to contribute to Polaris React components. There are several types of component contributions, but they typically fall under three categories; bug fix, enhancement, or new pattern.","keywords":["components","contributing to polaris react","how to add a prop","how to add a prop type","how to add a new component","bug fix","ux improvement","improve component","improve ux","improve accessibility","open source"],"order":1}},"contributing/documentation":{"frontMatter":{"title":"Documenting in Polaris","navTitle":"Documentation","keywords":["how to contribute to polaris documentation","how to contribute to the style guide","documenting in polaris","documentation guidelines"],"order":4,"hideChildren":true}},"contributing/documentation/creating-layout":{"frontMatter":{"title":"Creating layout","navTitle":"Creating layout","keywords":["how to contribute to polaris documentation","how to contribute to the style guide","documenting in polaris","documentation guidelines"],"order":1}},"contributing/figma-ui-kit":{"frontMatter":{"title":"Contributing to the Figma UI Kit","navTitle":"Figma UI Kit","keywords":["ui kit","figma","how to contribute to polaris ui kit","how to fix a figma component"],"order":2}},"contributing/icons":{"frontMatter":{"title":"Contributing to Polaris Icons","navTitle":"Icons","keywords":["icons","add a new icon","deprecate an icon","update an icon","how to contribute to polaris icons"],"order":3}},"design":{"frontMatter":{"title":"Design","description":"Design principles serve as guiding notions that shape the design of the Shopify admin, with Polaris providing support in implementing these principles effectively.","order":3,"status":"New","icon":"PaintBrushMajor"}},"design/colors":{"frontMatter":{"title":"Color","description":"Color highlights important areas, communicates status, urgency, and directs attention.","icon":"ColorsMajor","order":2,"keywords":["color role","color strategy","color use","black and white","grayscale"],"hideChildren":true,"showTOC":true,"status":"New"}},"design/colors/palettes-and-roles":{"frontMatter":{"title":"Palettes and roles","order":1,"description":"Color highlights important areas, communicates status, urgency, and directs attention.","keywords":["color role","color strategy","color use","black and white","grayscale"],"icon":"ColorsMajor"}},"design/colors/using-color":{"frontMatter":{"title":"Using color","order":2,"description":"Color highlights important areas, communicates status, urgency, and directs attention.","keywords":["using color","color use"],"icon":"PaintBrushMajor"}},"design/data-visualizations":{"frontMatter":{"title":"Data visualizations","description":"Visualizations surface patterns in data, and provide immediate answers to a single, specific question.","icon":"AnalyticsMajor","order":8,"keywords":["data viz"]}},"design/depth":{"frontMatter":{"title":"Depth","description":"Depth introduces a sense of realism, helps establish visual hierarchy, and creates focus.","order":3,"keywords":["depth","visual hierarchy","focus"],"icon":"CategoriesMajor","showTOC":true,"hideChildren":true,"status":"New"}},"design/depth/creating-depth":{"frontMatter":{"title":"Creating depth","icon":"VariantMajor","showTOC":true,"keywords":["depth","depth strategy","shadow use","bevel use"]}},"design/icons":{"frontMatter":{"title":"Icons","description":"Icons enhance an experience by providing intuitive and efficient navigation, conveying information concisely, and making it more visually appealing.","hideChildren":true,"showTOC":true,"order":4,"icon":"FaviconMajor","keywords":["shopify icons","icon sets","icon designs","icon guidelines","icon standards","iconography","visual helpers","minor icons","major icons","inline icons","in-line icons","main navigation icons","main nav icons","icons in nav","icons in main nav","icon colors"],"status":"New"}},"design/icons/creating-icons":{"frontMatter":{"title":"Creating icons","description":"Icons enhance an experience by providing intuitive and efficient navigation, conveying information concisely, and making it more visually appealing.","icon":"EditMinor","keywords":["icons","icon design","user interface design","visual navigation","consistent icon style","universally recognized symbols","icon creation","icon layout","2d icons","icon stroke weight","filled icons","outlined icons","icon navigation","iconography","icon visual weight","icon design guidelines","icon use in interface","icon and typography","icon size and weight","icon clarity","icon meaning","icon aesthetics","icon functionality","icon grid alignment","icon visual harmony."]}},"design/icons/using-icons":{"frontMatter":{"title":"Using icons","description":"Icons enhance an experience by providing intuitive and efficient navigation, conveying information concisely, and making it more visually appealing.","icon":"PaintBrushMajor","keywords":["shopify icons","icon sets","icon designs","icon guidelines","icon standards","iconography","visual helpers","minor icons","major icons","inline icons","in-line icons","main navigation icons","main nav icons","icons in nav","icons in main nav","icon colors"]}},"design/illustrations":{"frontMatter":{"title":"Illustrations","description":"The Shopify admin uses a precise illustration style to help merchants quickly and clearly understand how things work across every experience.","order":9,"keywords":["drawings","pictures"],"icon":"IllustrationMajor"}},"design/interaction-states":{"frontMatter":{"title":"Interaction states","description":"Interaction states communicate the status of an element in the interface, establish confidence once an action is taken, and suggest the ability (or inability) to interact with the element.","icon":"BuyButtonMajor","order":10,"keywords":["visual patterns","color strategy","interaction states","hover","focus","active","selected","disabled","subdued","state"]}},"design/layout":{"frontMatter":{"title":"Layout","icon":"TemplateMajor","order":5,"showTOC":true,"keywords":["layout","layout components","structure","position","stack","columns","bleed","card","box","inline","divider","responsive","spacing"],"description":"Layout determines the placement, positioning, and organization of various components within the UI, such as buttons, menus, content sections, and other visual elements.","hideChildren":true,"status":"New"}},"design/layout/density":{"frontMatter":{"title":"Density","order":2,"icon":"Columns3Minor","keywords":["layout","layout components","structure","position","stack","columns","bleed","card","box","inline","divider","responsive","spacing"],"description":"The admin is high density by default, but the level of density can range depending on the merchant\'s task."}},"design/layout/layout-tokens":{"frontMatter":{"title":"Tokens","order":3,"icon":"Hexagon","keywords":["layout","layout components","structure","position","stack","columns","bleed","card","box","inline","divider","responsive","spacing"],"description":"Apply consistent and harmonious space within and between ui elements."}},"design/layout/spacial-organization":{"frontMatter":{"title":"Spacial organization","order":1,"icon":"BuyButtonButtonLayoutMajor","keywords":["layout","layout components","structure","position","stack","columns","bleed","card","box","inline","divider","responsive","spacing"],"description":"Components, elements and surfaces are organized to create compositions that make the best use of space."}},"design/motion":{"frontMatter":{"title":"Motion","description":"Motion brings dynamism to an interface, offers visual feedback, and aids merchants understanding the outcomes of their actions.","order":6,"showTOC":true,"icon":"ShipmentMajor","keywords":["animation","motion","movement","interaction","transition"],"hideChildren":true,"status":"New"}},"design/motion/creating-motion":{"frontMatter":{"title":"Creating motion","description":"Motion brings dynamism to an interface, offers visual feedback and aids merchants understanding the outcomes of their actions.","keywords":["motion","animation","design"],"icon":"TransactionMajor"}},"design/motion/using-motion":{"frontMatter":{"title":"Using motion","description":"Motion brings dynamism to an interface, offers visual feedback and aids merchants understanding the outcomes of their actions.","keywords":["motion","animation","design"],"icon":"PlayMinor"}},"design/pro-design-language":{"frontMatter":{"title":"Pro design language","description":"Efficiency, intuition, and style combined to empower merchants with data-rich views, action-driven interfaces, and dynamic interactions.","order":1,"icon":"PaintBrushMajor","status":"New"}},"design/sounds":{"frontMatter":{"title":"Sounds","description":"We use sound to communicate information and to enhance how merchants experience the Shopify admin. Sound patterns make interactions easier and more predictable.","order":11,"keywords":["audio","sonic","noise"],"icon":"SoundMajor"}},"design/typography":{"frontMatter":{"title":"Typography","description":"Typography is the art of arranging type in ways that provides innate hierarchy to UI.","showTOC":true,"order":7,"keywords":["type styles","font sizes","fonts"],"icon":"TypeMajor","hideChildren":true,"status":"New"}},"design/typography/font-and-typescale":{"frontMatter":{"title":"Font and typescale","description":"Typography is the art of arranging type in ways that provides innate hierarchy to UI.","showTOC":true,"keywords":["type styles","font sizes","fonts"],"icon":"TextAlignmentLeftMajor","hideChildren":true,"order":1}},"design/typography/typography-tokens":{"frontMatter":{"title":"Tokens","description":"Typography is the art of arranging type in ways that provides innate hierarchy to UI.","showTOC":true,"keywords":["type styles","font sizes","fonts"],"icon":"Hexagon","hideChildren":true,"order":3}},"design/typography/using-type":{"frontMatter":{"title":"Using type","description":"Typography is the art of arranging type in ways that provides innate hierarchy to UI.","showTOC":true,"keywords":["type styles","font sizes","fonts"],"icon":"TypeMajor","hideChildren":true,"order":2}},"foundations":{"frontMatter":{"title":"Foundations","order":2,"description":"Polaris is the design system for the Shopify admin. It’s the shared language that guides how we build high-quality merchant experiences.","newSection":true,"icon":"VocabularyMajor"}},"foundations/accessibility":{"frontMatter":{"title":"Accessibility","description":"Making commerce better for everyone means caring deeply about making quality products. A quality product should have a fantastic user experience (UX).","icon":"AccessibilityMajor","keywords":["a11y","universal design","inclusive","inclusivity","disability","disabilities","people with disabilities","persons with disabilities","accessible markup","accessible mark up","accessible code","accessible","diversity","diverse"]}},"foundations/experience-values":{"frontMatter":{"title":"Shopify experience values","description":"At Shopify, we empower commerce at a global scale. We build products, tools, and services for people to start, manage, and scale their businesses. We manage enormous complexity for commerce giants, and give new entrepreneurs the best chance to succeed.","icon":"HeartMajor","keywords":["mission","approaches","design principles","design values","ux principles","ux values","user experience principles","user experience values","shopify mission","shopify approaches","shopify design principles","shopify ux principles","shopify principles","merchant first","merchant-first","empower","considerate","empowering","crafted","efficient","trustworthy","familiar","don’t overwhelm","cohesive experiences","polished"]}},"foundations/formatting-localized-currency":{"frontMatter":{"title":"Formatting localized currency","description":"Currencies are formatted differently in different countries and languages.","icon":"CashYenMajor","keywords":["internationalization","localization","currency","currencies","money","euro","dollar","formatting","short format","explicit format","internationalizing","localizing","locale","overseas","international","global","japan"]}},"foundations/information-architecture":{"frontMatter":{"title":"Information architecture","description":"Everything we create at Shopify has an underlying foundation of information architecture. If you’re a designer, a content strategist, or a UX developer, you’re already doing IA work.","icon":"AnalyticsCohortMinor","keywords":["IA principles","info architecture","wayfinding","way finding","navigation"]}},"foundations/internationalization":{"frontMatter":{"title":"Internationalization","description":"Make commerce better for everyone by building interfaces that work everywhere. These guidelines will help you design, write, and build products that can be used in every part of the world.","icon":"GlobeMajor","keywords":["internationalization","localization","translation","internationalizing","localizing","translating","locale","overseas","international","global","globalization","japan","germany","france"]}},"getting-started":{"frontMatter":{"title":"Getting Started","navTitle":"Getting started","description":"Polaris is the design system for the Shopify admin. If you’re just starting out with Polaris, here’s a list of recommended resources and guidance to get you started.","showTOC":true,"keywords":["about","polaris","design system","system","getting started","get started","downloads","begin","figma","ui kits","plugins"],"order":1,"icon":"HintMajor"}},"getting-started/components-lifecycle":{"frontMatter":{"title":"Component lifecycle","description":"Polaris components move through a series of stages throughout their lifecycle. Within each stage, a component must meet a set of requirements.","keywords":["components","component lifecycle","component stages","alpha","beta","stable","legacy","deprecated"],"order":1}},"getting-started/designing-with-a-system":{"frontMatter":{"title":"Building with Polaris","keywords":["systems thinking","contribution guide","designing with a system"],"order":3}},"getting-started/polaris-101":{"frontMatter":{"title":"Polaris 101","description":"The Polaris design system is used by designers and developers to build world-class Shopify admin experiences.","keywords":["polaris","shopify admin"],"order":0}},"icons":{"frontMatter":{"title":"Icons","description":"Use icons to increase visual appeal and improve navigation, comprehension, and engagement.","order":9,"icon":"IconsMajor"}},"patterns":{"frontMatter":{"title":"Patterns","description":"Preferred solutions to common merchant goals in the admin.","icon":"BehaviorMajor","order":6,"newSection":true}},"patterns-legacy/loading":{"frontMatter":{"title":"Loading","description":"Navigating the Shopify admin should be fast, meaningful, and focused. Intentional loading states deliver a continuous flow for merchants.","icon":"RefreshMajor","noIndex":true,"url":"/patterns-legacy/loading","keywords":["page loading","loading","load","performance","web performance","speed","focus","guidelines","principles"]}},"patterns-legacy/new-badge":{"frontMatter":{"title":"New badge","description":"The New badge can be used to inform merchants about the release of a feature that creates new value. It should be used sparingly and for a short time frame.","icon":"StarFilledMinor","noIndex":true,"url":"/patterns-legacy/new-badge","keywords":["new badge","new features","new feature announcements","launching new features","badge","guidelines","principles"]}},"patterns-legacy/pickers":{"frontMatter":{"title":"Pickers","description":"Picker experiences help merchants browse, find, and select from multiple options. Use them for selecting locations, customer segments, and more.","icon":"LocationMajor","noIndex":true,"url":"/patterns-legacy/pickers","keywords":["customer segments","locations","location picker","multiselect","multi-select","multi select","picker","resource picker","searchable listbox","searchable list","segment picker","segments","segementation","single select"]}},"patterns-legacy/text-fields":{"frontMatter":{"title":"Text fields","description":"Text fields combine the field label (the title) and the input area. Inputs can vary from typed text to URLs to date pickers.","icon":"FormsMajor","noIndex":true,"url":"/patterns-legacy/text-fields","keywords":["text fields","search","placeholder text"]}},"patterns/app-settings-layout":{"frontMatter":{"title":"App settings layout","description":"Scan and find groups of settings in apps","lede":"Lets merchants scan and find groups of settings in apps.","url":"/patterns/app-settings-layout","previewImg":"/images/patterns/app-settings-layout/pattern-thumbnail-app-settings.png","githubDiscussionsLink":"https://github.com/Shopify/polaris/discussions/8217","variants":["variants/default.mdx"]}},"patterns/date-picking":{"frontMatter":{"title":"Date picking","description":"Select a date or a date range","lede":"Lets merchants select a date or a date range","url":"/patterns/date-picking","previewImg":"/images/patterns/date-picking/pattern-thumbnail-date-picking.png","githubDiscussionsLink":"https://github.com/Shopify/polaris/discussions/7853","variants":["variants/single-date.mdx","variants/date-range.mdx","variants/date-list.mdx"]}},"patterns/new-features":{"frontMatter":{"title":"New features","description":"Highlight new features for merchants","lede":"Help merchants discover new and impactful features.","url":"/patterns/new-features","previewImg":"/images/patterns/new-feature/new-feature-cover.png","githubDiscussionsLink":"https://github.com/Shopify/polaris/discussions/6751","variants":["variants/default.mdx"]}},"patterns/resource-details-layout":{"frontMatter":{"title":"Resource details layout","description":"Create, view, and edit resource objects","lede":"Lets merchants create, view, and edit resource objects.","url":"/patterns/resource-details-layout","previewImg":"/images/patterns/resource-details-layout/pattern-thumbnail-resource-details.png","githubDiscussionsLink":"https://github.com/Shopify/polaris/discussions/8216","variants":["variants/default.mdx"]}},"patterns/resource-index-layout":{"frontMatter":{"title":"Resource index layout","description":"Organize and take action on resource objects","lede":"Lets merchants organize and take action on resource objects.","url":"/patterns/resource-index-layout","previewImg":"/images/patterns/resource-index-layout/pattern-thumbnail-resource-index.png","githubDiscussionsLink":"https://github.com/Shopify/polaris/discussions/8215","variants":["variants/default.mdx"]}},"tokens":{"frontMatter":{"title":"Tokens","description":"Tokens are variables that represent design decisions such as color, typography, and spacing, in a consistent and reusable way.","order":8,"icon":"EyeDropperMinor","url":"/tokens/color"}},"tools":{"frontMatter":{"title":"Tools","description":"Extensions, plugins, and other tools to help build with Polaris.","icon":"ToolsMajor","order":11}},"tools/polaris-for-vscode":{"frontMatter":{"title":"Polaris for VS Code","navTitle":"VS Code","description":"Official VS Code extension for building with the Shopify Polaris design system.","icon":"HintMajor","order":1}},"tools/polaris-migrator":{"frontMatter":{"title":"Polaris Migrator","navTitle":"Migrator","description":"Codemod transformations to help upgrade your Polaris codebase.","icon":"ReplaceMajor","order":3}},"tools/sandbox":{"frontMatter":{"title":"Sandbox","navTitle":"Sandbox","description":"Effortless prototyping with Polaris components.","order":5,"icon":"SandboxMajor","url":"/sandbox?code=N4Igxg9gJgpiBcIA8AZGBzAhmAngYUwCcoAdAOwAIKBnGSMqInAMQggBcZCBBMdgSwhlqAXmABtYBXqcy7eBRIgAIv2oBbNdSUUAvgF1d5KgAdC-dU1YcuvAULFSZMOQqUBRAB4mIhdhQAlGB8-HV0jMgA%2BYwpUDGx8IigAOgAJGExYQhiqbHthMXEcqgpgYpLpIVl5RRAAFQ5MABsKAGVmmG0QABpyvV7KEsNigXYmmBEldvGumOjBqiQABQgfADcuPrz%2BDbEAM2baCIrcvh3Mdl8xPsWAIQBXdkvKKDUwJohqe8IYChMmzD8KI3EoANX4MAA7m0OtoFickAB6B5PITzE56PpCPAfWhiAAUAEoKCJIqVwsV0Qi7IIyCg1OwQfxOOpRBInFUXDUlABxQifagwmZhbqlSpyLluEAAORg-mmnTCw3hVERVMWiJW6y4VKRaCwuAIxDSGSyuv1CSNKVadHy6tidRgnnYeCqgLIOr6AE0IPdpJhKPdaDRYRQfiF2ILLjQYL8gXtfJZ8hRMAAjX3%2BHC%2BwjSIOXdRcaiATAIscRCxRU5haFAKEJpOZOOZMDR7mAABYpwXUUMQDY5gQF0WpnDSNsBj1NUW%2BCs4PrUdiYPZ7ZLFJGO52uuTuz2DPXxQ1JZI2s5omJxA2JY3H5OjcaTeqNFoKwW3H6YADWUAgkLISntSCCahszAGB6XnPofiA74QOlTAC0cGggXQe4AUIKVu3GJRRX%2Bb5mnQ2EwmOE5mRgVlChBMoVRODDOilAB5MtCC6AYMQqODfVcWoAFVWmUAASAAGZIBIErCQSob4milABiMSqKoXQWNYyjWJKGjqClIJ2G%2BYQ5NU3J1A47kQAAWh4-iACYAFYhJEvT9MkmT7IxRS%2BmVDEfgYLgAEkWQJEj1GJUlShBeh5zFdTRXY%2B45FFSS9BJCgAoAbhBH5tMISh8XE2JAOA0CGWSXzSJyqh%2BCgMR1OSS4UAgMAOlqyEuAIWgiSI-SKEksRJPa-TsBA6hqH4VN%2BCaZkcBQNMYCaMQAANwShIVOgoBMcz44B1N0WbetU7ExrAd8CSCskwogcZkg%2BdBsvAfb3xgGsAqwpKWUJHaTntVTzwSVoFwOj79K%2B3Afuwd8ipZFbRqaSINthXQ9wvYGDrB0j-s%2Bi0gd%2B0HivUaHorkOHEXRnBEaxllUYRQn92JzHyY1PLoIK%2BdkZxkFCVSqiKXhNUz0pi8rSPW1aXNKn%2BevWkKFvCYlGUDIzjWC57rDYJfEjHQvlTKB7nu-8wPYf7UEK7HIiWTAs0eag9UNsm%2BgNpmjYaBcn1DW4RzwMcyAnS27et%2BEvb1nmidFwXT13QPDzFutJfvaUbD-Vd1xdN0gR3DE6jbX51KViNBSIX5MHl0a03GWsyCaEd%2BD2CgzZzedfDjQVI-Tto21WCvZyo-4A1rHM234dB08IFdfcRBPNwXZPCF1XnLXD4PgTIeGZ%2BIeYehAdh04LagEHEEAPnq8Z4BcEB9G6EBIXK9et-gcRDCAA","status":"Alpha"}},"tools/stylelint-polaris":{"frontMatter":{"title":"Stylelint Polaris","navTitle":"Stylelint","description":"A configuration of Stylelint rules that promote adoption of the Polaris design system in consuming apps.","icon":"WandMajor","collapseChildren":true,"order":4,"keywords":["stylelint","dev tools","developer tools","tools","tooling","development","plugin","rules","linter","linting","css"]}},"tools/stylelint-polaris/_postamble":{"frontMatter":{}},"tools/stylelint-polaris/_preamble":{"frontMatter":{}},"tools/stylelint-polaris/rules":{"frontMatter":{"title":"Rules","description":"There are over 40 rules configured in Stylelint Polaris to help you avoid errors and follow stylistic and non-stylistic conventions while building for the Shopify admin. These rules are grouped into categories that help us measure the Polaris design system\'s coverage in the Shopify admin code base.","hideChildren":true,"keywords":["rules","stylelint rules","css rules"]}},"tools/stylelint-polaris/rules/border-at-rule-disallowed-list":{"frontMatter":{"title":"border/at-rule-disallowed-list","description":"Disallows use of legacy Sass border mixins.","keywords":["stylelint","border","border rules"]}},"tools/stylelint-polaris/rules/border-custom-property-disallowed-list":{"frontMatter":{"title":"border/custom-property-disallowed-list","description":"Disallows use of legacy border custom properties.","keywords":["stylelint","border","border rules"]}},"tools/stylelint-polaris/rules/border-declaration-property-unit-disallowed-list":{"frontMatter":{"title":"border/declaration-property-unit-disallowed-list","description":"Disallows hard-coded `px`, `em`, and `rem` units in border property values.","keywords":["stylelint","border","border rules"]}},"tools/stylelint-polaris/rules/border-function-disallowed-list":{"frontMatter":{"title":"border/function-disallowed-list","description":"Disallows use of legacy Sass border functions.","keywords":["stylelint","border","border rules"]}},"tools/stylelint-polaris/rules/color-at-rule-disallowed-list":{"frontMatter":{"title":"color/at-rule-disallowed-list","description":"Disallows use of legacy color mixins.","keywords":["stylelint","color","color rules"]}},"tools/stylelint-polaris/rules/color-color-named":{"frontMatter":{"title":"color/color-named","description":"Disallows named colors.","keywords":["stylelint","color","color rules"]}},"tools/stylelint-polaris/rules/color-color-no-hex":{"frontMatter":{"title":"color/color-no-hex","description":"Disallows hex colors.","keywords":["stylelint","color","color rules"]}},"tools/stylelint-polaris/rules/color-custom-property-disallowed-list":{"frontMatter":{"title":"color/custom-property-disallowed-list","description":"Disallows use of legacy color custom properties.","keywords":["stylelint","color","color rules"]}},"tools/stylelint-polaris/rules/color-function-disallowed-list":{"frontMatter":{"title":"color/function-disallowed-list","description":"Disallows allows use of built in and legacy color functions.","keywords":["stylelint","color","color rules"]}},"tools/stylelint-polaris/rules/color-global-disallowed-list":{"frontMatter":{"title":"color/global-disallowed-list","description":"Disallows use of legacy color Sass APIs.","keywords":["stylelint","color","color rules"]}},"tools/stylelint-polaris/rules/conventions-custom-property-allowed-list":{"frontMatter":{"title":"conventions/custom-property-allowed-list","description":"Allows definition of custom properties not using Polaris prefixes, flags declaration property values that are not valid Polaris tokens, flags declaration property values using private tokens.","keywords":["stylelint","conventions","conventions rules","CSS custom properties"]}},"tools/stylelint-polaris/rules/conventions-selector-disallowed-list":{"frontMatter":{"title":"conventions/selector-disallowed-list","description":"Disallows overrides of Polaris component styles.","keywords":["stylelint","conventions","conventions rules","selectors"]}},"tools/stylelint-polaris/rules/layout-at-rule-disallowed-list":{"frontMatter":{"title":"layout/at-rule-disallowed-list","description":"Disallows use of legacy Sass mixins.","keywords":["stylelint","layout","layout rules"]}},"tools/stylelint-polaris/rules/layout-custom-property-disallowed-list":{"frontMatter":{"title":"layout/custom-property-disallowed-list","description":"Disallows use of legacy layout custom properties.","keywords":["stylelint","layout","layout rules"]}},"tools/stylelint-polaris/rules/layout-declaration-property-value-disallowed-list":{"frontMatter":{"title":"layout/declaration-property-value-disallowed-list","description":"Disallows declaration of positioning and dimension property values with Polaris tokens.","keywords":["stylelint","layout","layout rules"]}},"tools/stylelint-polaris/rules/layout-function-disallowed-list":{"frontMatter":{"title":"layout/function-disallowed-list","description":"Disallows use of internal Sass layout functions.","keywords":["stylelint","layout","layout rules"]}},"tools/stylelint-polaris/rules/layout-global-disallowed-list":{"frontMatter":{"title":"layout/global-disallowed-list","description":"Disallows use of legacy layout Sass APIs.","keywords":["stylelint","layout","layout rules"]}},"tools/stylelint-polaris/rules/layout-property-disallowed-list":{"frontMatter":{"title":"layout/property-disallowed-list","description":"Disallows declarations of layout properties.","keywords":["stylelint","layout","layout rules"]}},"tools/stylelint-polaris/rules/legacy-at-rule-disallowed-list":{"frontMatter":{"title":"legacy/at-rule-disallowed-list","description":"Disallows use of legacy Sass mixins.","keywords":["stylelint","legacy","legacy rules"]}},"tools/stylelint-polaris/rules/legacy-function-disallowed-list":{"frontMatter":{"title":"legacy/function-disallowed-list","description":"Disallows use off legacy Sass functions.","keywords":["stylelint","legacy","legacy rules"]}},"tools/stylelint-polaris/rules/legacy-global-disallowed-list":{"frontMatter":{"title":"legacy/global-disallowed-list","description":"Disallows use of legacy custom properties and Sass mixin map data.","keywords":["stylelint","legacy","legacy rules"]}},"tools/stylelint-polaris/rules/media-queries-at-rule-disallowed-list":{"frontMatter":{"title":"media-queries/at-rule-disallowed-list","description":"Disallows use of legacy breakpoint Sass mixins.","keywords":["stylelint","media queries","media queries rules"]}},"tools/stylelint-polaris/rules/media-queries-function-disallowed-list":{"frontMatter":{"title":"media-queries/function-disallowed-list","description":"Disallows use of legacy breakpoint sass functions.","keywords":["stylelint","media queries","media queries rules"]}},"tools/stylelint-polaris/rules/media-queries-media-queries-allowed-list":{"frontMatter":{"title":"media-queries/media-queries-allowed-list","description":"Allows declaration of `print` and `screen` `@media` queries, allows `@media` queries for `forced-colors` and `ms-high-contrast` features, allows `@media` queries using Polaris breakpoints.","keywords":["stylelint","media queries","media queries rules"]}},"tools/stylelint-polaris/rules/motion-at-rule-disallowed-list":{"frontMatter":{"title":"motion/at-rule-disallowed-list","description":"Disallows use of CSS @keyframes.","keywords":["stylelint","motion","motion rules"]}},"tools/stylelint-polaris/rules/motion-custom-property-disallowed-list":{"frontMatter":{"title":"motion/custom-property-disallowed-list","description":"Disallows use of legacy motion custom properties.","keywords":["stylelint","motion","motion rules"]}},"tools/stylelint-polaris/rules/motion-declaration-property-unit-disallowed-list":{"frontMatter":{"title":"motion/declaration-property-unit-disallowed-list","description":"Disallows use of hard-coded millisecond `ms` and second `s` values on transition and animation properties.","keywords":["stylelint","motion","motion rules"]}},"tools/stylelint-polaris/rules/motion-function-disallowed-list":{"frontMatter":{"title":"motion/function-disallowed-list","description":"Disallows use of legacy Sass motion functions.","keywords":["stylelint","motion","motion rules"]}},"tools/stylelint-polaris/rules/motion-global-disallowed-list":{"frontMatter":{"title":"motion/global-disallowed-list","description":"Disallows use of legacy motion Sass APIs.","keywords":["stylelint","motion","motion rules"]}},"tools/stylelint-polaris/rules/shadow-custom-property-disallowed-list":{"frontMatter":{"title":"shadow/custom-property-disallowed-list","description":"Disallows use of legacy shadow custom properties.","keywords":["stylelint","shadow","shadow rules"]}},"tools/stylelint-polaris/rules/shadow-declaration-property-unit-disallowed-list":{"frontMatter":{"title":"shadow/declaration-property-unit-disallowed-list","description":"Disallows box-shadow declarations with hard coded px, rem, or em units.","keywords":["stylelint","shadow","shadow rules"]}},"tools/stylelint-polaris/rules/shadow-function-disallowed-list":{"frontMatter":{"title":"shadow/function-disallowed-list","description":"Disallows use of built-in and legacy shadow functions.","keywords":["stylelint","shadow","shadow rules"]}},"tools/stylelint-polaris/rules/shadow-global-disallowed-list":{"frontMatter":{"title":"shadow/global-disallowed-list","description":"Disallows use of legacy shadow Sass APIs.","keywords":["stylelint","shadow","shadow rules"]}},"tools/stylelint-polaris/rules/shadow-property-disallowed-list":{"frontMatter":{"title":"shadow/property-disallowed-list","description":"Disallows text shadow property.","keywords":["stylelint","shadow","shadow rules"]}},"tools/stylelint-polaris/rules/space-custom-property-disallowed-list":{"frontMatter":{"title":"space/custom-property-disallowed-list","description":"Disallows use of legacy space custom properties.","keywords":["stylelint","space","space rules"]}},"tools/stylelint-polaris/rules/space-declaration-property-unit-disallowed-list":{"frontMatter":{"title":"space/declaration-property-unit-disallowed-list","description":"Disallows use of hard-coded px, em, and rem values on gap, margin, and padding properties.","keywords":["stylelint","space","space rules"]}},"tools/stylelint-polaris/rules/space-function-disallowed-list":{"frontMatter":{"title":"space/function-disallowed-list","description":"Disallows use of legacy Sass space functions.","keywords":["stylelint","space","space rules"]}},"tools/stylelint-polaris/rules/space-global-disallowed-list":{"frontMatter":{"title":"space/global-disallowed-list","description":"Disallows use of legacy spacing Sass APIs.","keywords":["stylelint","space","space rules"]}},"tools/stylelint-polaris/rules/typography-at-rule-disallowed-list":{"frontMatter":{"title":"typography/at-rule-disallowed-list","description":"Disallows use of legacy Sass typography mixins.","keywords":["stylelint","typography","typography rules"]}},"tools/stylelint-polaris/rules/typography-declaration-property-unit-disallowed-list":{"frontMatter":{"title":"typography/declaration-property-unit-disallowed-list","description":"Disallows hard-coded `px`, `em`, and `rem` values for font-size and line-height properties.","keywords":["stylelint","typography","typography rules"]}},"tools/stylelint-polaris/rules/typography-declaration-property-value-disallowed-list":{"frontMatter":{"title":"typography/declaration-property-value-disallowed-list","description":"Disallows hard-coded alphanumeric font-weight values.","keywords":["stylelint","typography","typography rules"]}},"tools/stylelint-polaris/rules/typography-function-disallowed-list":{"frontMatter":{"title":"typography/function-disallowed-list","description":"Disallows use of legacy Sass typography functions.","keywords":["stylelint","typography","typography rules"]}},"tools/stylelint-polaris/rules/typography-global-disallowed-list":{"frontMatter":{"title":"typography/global-disallowed-list","description":"Disallows use of legacy typography Sass APIs.","keywords":["stylelint","typography","typography rules"]}},"tools/stylelint-polaris/rules/z-index-custom-property-disallowed-list":{"frontMatter":{"title":"z-index/custom-property-disallowed-list","description":"Disallows use of legacy z-index custom properties.","keywords":["stylelint","z-index","z-index rules"]}},"tools/stylelint-polaris/rules/z-index-declaration-property-value-allowed-list":{"frontMatter":{"title":"z-index/declaration-property-value-allowed-list","description":"Disallows declaration of `z-index` values that are not Polaris z-index tokens.","keywords":["stylelint","z-index","z-index rules"]}},"tools/stylelint-polaris/rules/z-index-function-disallowed-list":{"frontMatter":{"title":"z-index/function-disallowed-list","description":"Disallows use of the legacy z-index Sass function.","keywords":["stylelint","z-index","z-index rules"]}},"tools/stylelint-polaris/rules/z-index-global-disallowed-list":{"frontMatter":{"title":"z-index/global-disallowed-list","description":"Disallows use of legacy z-index Sass APIs.","keywords":["stylelint","z-index","z-index rules"]}},"version-guides":{"frontMatter":{"title":"Version guides","description":"Guides for upgrading apps to major versions.","order":12}},"version-guides/migrating-from-v11-to-v12":{"frontMatter":{"title":"Migrating from v11 to v12","description":"Polaris v12.0.0 prop replacement, removal of components, renamed components, and token changes.","navTitle":"v12","icon":"ColorsMajor","collapsibleTOC":true,"order":1}},"whats-new":{"frontMatter":{"title":"What’s new","description":"Learn about the latest Polaris updates","order":0,"hideChildren":true,"icon":"EmailNewsletterMajor"}},"whats-new/uplifting-shopify-polaris":{"frontMatter":{"title":"Uplifting Shopify Polaris","description":"The process of evolving a large scale design system.","previewImg":"/images/updates/uplift-blogpost@2x.png","order":1,"url":"https://ux.shopify.com/uplifting-shopify-polaris-7c54fc6564d9","keywords":["layout","bleed","box","card","divider","grid","horizontal grid","horizontal stack","vertical stack"]}},"whats-new/version-10-typography":{"frontMatter":{"title":"Version 10 Typography","description":"Learn about what changes are coming to Polaris typography.","previewImg":"/images/updates/type-new-to-old@2x.png","keywords":["typography","type","fonts","text","type styles"]}},"whats-new/version-11-color":{"frontMatter":{"title":"Version 11 Color","description":"Learn about what changes were introduced to color in Polaris v11.","previewImg":"/images/updates/new-colors-cover.png","keywords":["color","tokens"]}},"whats-new/version-11-layout":{"frontMatter":{"title":"Version 11 Layout","description":"Start using the new Polaris layout components.","previewImg":"/images/design/layout/layout-banner.png","keywords":["layout","bleed","box","card","divider","grid","horizontal grid","horizontal stack","vertical stack"]}},"whats-new/version-11-tokens":{"frontMatter":{"title":"Version 11 Tokens","description":"Crafting a more robust and cohesive token system in Polaris.","previewImg":"/images/updates/alias-tokens.png","keywords":["tokens","color","colors","depth","shadow","legacy","motion","shape","border","spacing","space","z-index"]}},"whats-new/version-12":{"frontMatter":{"title":"Version 12","description":"This version introduces Shopify\'s new admin design language, refined tokens, aligned component APIs, and an updated Figma UI kit.","previewImg":"/images/updates/uplift-beta@2x.png","keywords":["new design language","uplift","v12","version 12","redesign","admin design language","new design","black button","How to migrate to the new design language"],"order":0}}}');
// EXTERNAL MODULE: ../polaris-tokens/dist/esm/build/index.mjs + 21 modules
var build = __webpack_require__(53571);
;// CONCATENATED MODULE: ./src/utils/various.ts


function isObject(value) {
    const type = typeof value;
    return value != null && (type === "object" || type === "function");
}
const pages = site_namespaceObject;
const patterns = Object.keys(pages).filter((slug)=>slug.startsWith("patterns/")).sort((a, b)=>a.localeCompare(b)).reduce((memo, key)=>{
    // @ts-expect-error Yes it is compatible Typescript. Shhhh.
    memo[key] = pages[key];
    return memo;
}, {});
const legacyPatterns = Object.keys(pages).filter((slug)=>slug.startsWith("patterns-legacy/")).sort((a, b)=>a.localeCompare(b)).reduce((memo, key)=>{
    // @ts-expect-error Yes it is compatible Typescript. Shhhh.
    memo[key] = pages[key];
    return memo;
}, {});
const slugify = (str)=>{
    return str// Camel to hyphen case
    .replace(/([a-z])([A-Z])/g, "$1-$2")// Replace spaces with hyphens
    .replace(/[^a-z0-9]/gi, "-").toLowerCase();
};
const stripMarkdownLinks = (markdown)=>{
    const linkRegex = /\[([a-z ]+)\]([^\)]+)\)/gi;
    return markdown.replace(linkRegex, (_, linkText)=>{
        return linkText;
    });
};
const className = (...classNames)=>{
    return classNames.filter((c)=>Boolean(c)).flatMap((c)=>Array.isArray(c) ? className(...c) : c).join(" ");
};
const toPascalCase = (str)=>(str.match(/[a-zA-Z0-9]+/g) || []).map((w)=>`${w.charAt(0).toUpperCase()}${w.slice(1)}`).join("");
const uppercaseFirst = (str)=>str.charAt(0).toUpperCase() + str.slice(1);
const deslugify = (str)=>uppercaseFirst(str.replace(/-+/g, " "));
const capitalize = (str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
};
function getResponsiveProps(componentName, componentProp, tokenSubgroup, responsiveProp) {
    if (!responsiveProp) return {};
    let result;
    if (!isObject(responsiveProp)) {
        result = {
            [build/* breakpointsAliases.0 */.vi[0]]: `var(--p-${tokenSubgroup}-${responsiveProp})`
        };
    } else {
        result = Object.fromEntries(Object.entries(responsiveProp).map(([breakpointAlias, aliasOrScale])=>[
                breakpointAlias,
                `var(--p-${tokenSubgroup}-${aliasOrScale})`
            ]));
    }
    // Prefix each responsive key with the correct token name
    return Object.fromEntries(Object.entries(result).map(([breakpointAlias, value])=>[
            `--pc-${componentName}-${componentProp}-${breakpointAlias}`,
            value
        ]));
}
const viewTransition = (callback)=>{
    // @ts-ignore is experimental and not typed yet
    if (document.startViewTransition) {
        // @ts-ignore exists in Chrome 111+
        return document.startViewTransition(callback);
    } else {
        callback();
        const resolved = Promise.resolve();
        return {
            ready: resolved,
            finished: resolved
        };
    }
};


/***/ }),

/***/ 53571:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "vi": () => (/* reexport */ breakpointsAliases),
  "TY": () => (/* reexport */ metaThemeDefault),
  "Zs": () => (/* reexport */ toPxs)
});

// UNUSED EXPORTS: createThemeClassName, createVar, createVarName, getMediaConditions, getThemeVarNames, isTokenName, metaThemes, themeDefault, themeNameDefault, themeNames, themes, toPx, toRem

;// CONCATENATED MODULE: ../polaris-tokens/dist/esm/src/themes/base/breakpoints.mjs
// NOTE: Order is important here: smallest -> largest
// Exporting as const means it will be typed as a Tuple instead of string[]
var breakpointsAliases = ['xs', 'sm', 'md', 'lg', 'xl'];

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
var cjs = __webpack_require__(10579);
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