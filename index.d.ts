// Type definitions for uikit 2.27
// Project: https://getuikit.com
// Definitions by: Giovanni Silva <https://github.com/giovannicandido>, Ivo Senner <https://github.com/s0x>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Type definitions for uikit 3.0.0-beta.21
// Definitions by: Talalaev Mikhail <https://github.com/talalaev>

declare namespace UIkit {
    interface DropdownElement {
        /**
         * Shows the Dropdown.
         * @param {object} toggle
         * @param {boolean} delay
         */
        show(toggle?: object, delay?: boolean): void;
        /**
         * Hides the Dropdown.
         * @param {boolean} delay
         */
        hide(delay?: boolean): void;
    }
    type DropdownPosition =
        'bottom-left' |
        'bottom-center' |
        'bottom-right' |
        'bottom-justify' |
        'top-left' |
        'top-center' |
        'top-right' |
        'top-justify' |
        'left-top' |
        'left-center' |
        'left-bottom' |
        'right-top' |
        'right-center' |
        'right-bottom';
    interface DropdownOptions {
        /**
         * CSS selector for the element to be used as toggle. By default, the preceding element is used.
         * @default '- *'
         */
        toggle?: string | boolean;
        /**
         * The position of the dropdown.
         * @default 'bottom-left'
         */
        pos?: DropdownPosition;
        /**
         * Comma separated list of dropdown trigger behaviour modes: hover, click
         * @default 'click, hover'
         */
        mode?: 'hover'|'click'|'click, hover'|'hover, click';
        /**
         * Delay time in milliseconds before a dropdown is displayed in hover mode.
         * @default 0
         */
        delayShow?: number;
        /**
         * Delay time in milliseconds before a dropdown is hidden in hover mode.
         * @default 800
         */
        delayHide?: number;
        /**
         * CSS selector of the element to maintain the drop's visibility.
         * @default 'window'
         */
        boundary?: string;
        /**
         * Align the dropdown to its boundary.
         * @default false
         */
        boundaryAlign?: boolean;
        /**
         * Automatically flip the drop. Possible values are false, true, x or y.
         * @default true
         */
        flip?: boolean | string;
        /**
         * The offset of the dropdown's container.
         * @default 0
         */
        offset?: number;
        /**
         * Space separated names of animations to apply.
         * @default false
         */
        animation?: string | boolean;
        /**
         * Animation duration in milliseconds.
         * @default 200
         */
        duration?: number;
    }
    /**
     * Defines different styles for a toggleable dropdown.
     * Documentation: {@link https://getuikit.com/docs/dropdown}
     *
     * Events:
     * Name        Description
     * toggle	     Fires before an item is toggled.
     * beforeshow  Fires before an item is shown. Can prevent showing by calling preventDefault() on the event.
     * show        Fires after an item is shown.
     * shown       Fires after the item's show animation has completed.
     * beforehide  Fires before an item is hidden. Can prevent hiding by calling preventDefault() on the event.
     * hide        Fires after an item is hidden.
     * hidden      Fires after an item is hidden.
     * stack       Fires when the drop-stackclass is applied.
     */
    type Dropdown = (element: string | HTMLElement, options?: DropdownOptions) => DropdownElement;

    /**
     * Modal element
     */
    interface ModalElement {
        /**
         * Shows the Modal.
         */
        show(): Promise;
        /**
         * Hides the Modal.
         */
        hide(): Promise;
        /**
         * Toggle the Modal.
         */
        toggle(): Promise;
    }
    interface ModalOptions {
        /**
         * Close the modal when the Esc key is pressed.
         * @default true
         */
        escClose?: boolean;
        /**
         * Close the modal when the background is clicked.
         * @default true
         */
        bgClose?: boolean;
        /**
         * Stack modals, when more than one is open. By default, the previous modal will be hidden.
         * @default false
         */
        stack?: boolean;
        /**
         * Define a target container via a selector to specify where the modal should be appended in the DOM. Setting it to false will prevent this behavior.
         * @default true
         */
        container?: string | boolean;
        /**
         * Class to add to <body> when modal is active
         * @default 'uk-modal-page'
         */
        clsPage?: string;
        /**
         * Class of the element to be considered the panel of the modal
         * @default 'uk-modal-dialog'
         */
        clsPanel?: string;
        /**
         * CSS selector for all elements that should trigger the closing of the modal
         * @default '.uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full'
         */
        selClose?: string;
        /**
         * Labels
         * @default {ok: 'Ok', cancel: 'Cancel'}
         */
        labels?: {
          ok?: string;
          cancel?: string;
        }
    }
    /**
     * Create modal dialogs with different styles and transitions.
     * Documentation: {@link https://getuikit.com/docs/modal}
     *
     * Events:
     * Name        Description
     * beforeshow	 Fires before an item is shown.
     * show        Fires after an item is shown.
     * shown       Fires after the item's show animation has completed.
     * beforehide  Fires before an item is hidden.
     * hide        Fires after an item's hide animation has started.
     * hidden      Fires after an item is hidden.
     *
     * @example
     * <pre><code>
     * UIkit.modal(element).show();
     * </code></pre>
     */
    interface Modal {
        /**
         * Show an alert box with one button.
         * @param  {string} message The message to display. Can be Html
         * @param  {ModalOptions} [options={bgClose: false, escClose: true, labels: {}}] The modal options
         */
        alert(message: string, options?: ModalOptions): Promise;
        /**
         * Show a confirm dialog with your message and two buttons.
         * @param  {string} message The message to display. Can be Html
         * @param  {ModalOptions} [options={bgClose: false, escClose: true, labels: {}}] The modal options
         */
        confirm(message: string, options?: ModalOptions): Promise;
        /**
         * Show a dialog asking for a text input.
         * @param  {string} message The message to display. Can be Html
         * @param  {string} value   A value to init the input
         * @param  {ModalOptions} [options={bgClose: false, escClose: true, labels: {}}] The modal options
         */
        prompt(message: string, value: string, options?: ModalOptions): Promise<string | null>;
        /**
         * Show dialog with any HTML content.
         * @param {string} message       The message to display. Can be Html
         * @param {ModalOptions} options The modal options
         */
        dialog(message: string, options?: ModalOptions): Modal;
        /**
         * Select a modal element on page and return it.
         * @example
         * <pre><code>
         * var modal = UIkit.modal(".modalSelector");
         * modal.show();
         * </code></pre>
         */
        (element: HTMLElement | string, options?: ModalOptions): ModalElement;
    }

    /**
     * Create a smooth off-canvas sidebar that slides in and out of the page
     * Documentation: {@link http://getuikit.org/docs/offcanvas.html}
     * <h2>Events:</h2>
     * <table class="uk-table uk-table-striped uk-text-nowrap">
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>show.uk.offcanvas</code></td>
     * <td>event, panel, bar</td>
     * <td>On offcanvas show</td>
     * </tr>
     * <tr>
     * <td><code>hide.uk.offcanvas</code></td>
     * <td>event, panel, bar</td>
     * <td>On offcanvas hide</td>
     * </tr>
     * </table>
     */
    interface OffCanvas {
        /**
         * Show an off-canvas matching the passed CSS selector
         * @param  {string} selector A CSS selector
         */
        show(selector: string): void;
        /**
         * Hide any active offcanvas. Set force to true, if you don't want any
         * animation
         * @param  {boolean} force When seted to true do not run animations.
         * @default false
         */
        hide(force?: boolean): void;
    }
    interface LightBoxOptions {
        /**
         * Group name to group elements as a gallery to show.
         * @default false
         */
        group?: string;
        /**
         * Animation duration between gallery item change
         * @default 400
         */
        duration?: number;
        /**
         * Allow keyboard navigation
         * @default true
         */
        keyboard?: boolean;
    }
    interface LightBoxItem {
        source: string;
        type: string;
    }
    interface LightBoxElement {
        /**
         * Open the lightbox
         */
        show(): void;
    }
    /**
     * Create a fancy lightbox for images and videos utilizing the @see {@link modal|Modal Component}
     * Documentation {@link http://getuikit.org/docs/lightbox.html}
     * <h2>Events:</h2>
     * <table>
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>showitem.uk.lightbox</code></td>
     * <td>event, data</td>
     * <td>On lightbox show</td>
     * </tr>
     * </table>
     */
    interface LightBox {
        /**
         * Create dynamic lightbox
         * @param  {LightBoxItem[]} items Group of items on the lightbox
         * @return {LightBoxElement}           The lightbox element to show
         */
        create(items: LightBoxItem[]): LightBoxElement;
        /**
         * Init element manually
         */
        (element: string|JQuery, options?: LightBoxOptions): LightBoxElement;
    }
    type CallbackAutoComplete = () => string;
    interface AutoCompleteOptions {
        /**
         * Data source
         * @default []
         */
        source?: string|string[]|CallbackAutoComplete;
        /**
         * Min. input length before triggering autocomplete
         * @default 3
         */
        minLength?: number;
        /**
         * Query name when sending ajax request
         * @default search
         */
        param?: string;
        /**
         * Delay time after stop typing
         * @default 300
         */
        delay?: number;
    }
    /**
     * Create inputs that allow users to choose from a list of pre-generated values while typing
     * Documentation {@link http://getuikit.org/docs/autocomplete.html}
     * <h2>Events</h2>
     * <table>
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>selectitem.uk.autocomplete</code></td>
     * <td>event, data, acobject</td>
     * <td>On item selected</td>
     * </tr>
     * <tr>
     * <td><code>show.uk.autocomplete</code></td>
     * <td>event</td>
     * <td>On autocomplete dropdown show</td>
     * </tr>
     * </table>
     * @param element
     * @param options
     */
    type AutoComplete = (element: string|JQuery, options?: AutoCompleteOptions) => any;
    interface DatePickerOptions {
        /**
         * Start of the week
         * integer (0..6)
         * @default 1
         */
        weekstart?: number;
        /**
         * Language string definitions
         * @default { months:['January',...], weekdays:['Sun',..,'Sat'] }
         */
        i18n?: {};
        /**
         * Date format string
         * @default 'DD.MM.YYYY'
         */
        format?: string;
        /**
         * Offset to the input value
         * @default 5
         */
        offsettop?: number;
        /**
         * Min. date
         * bool (false to ignore the option)
         * string (date as in format)
         * integer (offset in days from current date)
         * @default false
         */
        minDate?: string|boolean|number;
        /**
         * Max. date
         * bool (false to ignore the option)
         * string (date as in format)
         * integer (offset in days from current date)
         * @default false
         */
        maxDate?: string|boolean|number;
        /**
         * Position of the datepicker
         * 'auto', 'top', 'bottom'
         * @default 'auto'
         */
        pos?: string;
    }
    /**
     * Create a toggleable dropdown with an datepicker
     * Documentation {@link http://getuikit.org/docs/datepicker.html}
     * <h2>Events</h2>
     * <table>
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>show.uk.datepicker</code></td>
     * <td>event</td>
     * <td>On datepicker dropdown show</td>
     * </tr>
     * <tr>
     * <td><code>hide.uk.datepicker</code></td>
     * <td>event</td>
     * <td>On datepicker dropdown hide</td>
     * </tr>
     * <tr>
     * <td><code>update.uk.datepicker</code></td>
     * <td>event</td>
     * <td>On calendar rendering</td>
     * </tr>
     * </table>
     */
    type DatePicker = (element: string|JQuery, options?: DatePickerOptions) => any;
    interface HtmlEditorOptions {
        /**
         * View mode
         * Possible values 'split','tab'
         * @default 'split'
         */
        mode?: string;
        /**
         * Button list to appear in the toolbar
         * @default [ "bold", "italic", "strike", "link", "picture", ... ]
         */
        toolbar?: string[];
        /**
         * Min. browser width when to switch to responsive tab mode when in split mode
         * @default 1000
         */
        maxsplitsize?: number;
        /**
         * Label string for preview mode
         * @default 'Preview'
         */
        lblPreview?: string;
        /**
         * Label string for code mode
         * @default 'Markdown'
         */
        lblCodeview?: string;
    }
    /**
     * Create a rich HTML or markdown editor with an immediate preview and syntax highlighting
     * Documentation {@link http://getuikit.org/docs/htmleditor.html}
     */
    type HtmlEditor = (element: string|JQuery, options?: HtmlEditorOptions) => any;
    interface SliderOptions {
        /**
         * Center items mode
         * @default false
         */
        center?: boolean;
        /**
         * Mouse movement threshold in pixel until trigger element dragging
         * @default true
         */
        threshold?: boolean;
        /**
         * Infinite scrolling
         * @default true
         */
        infinite?: boolean;
        /**
         * Class added on active item in center mode
         * @default uk-active
         */
        activecls?: string;
        /**
         * Defines whether or not the slider items should switch automatically
         * @default false
         */
        autoplay?: boolean;
        /**
         * Pause autoplay when hovering a slider
         * @default true
         */
        pauseOnHover?: boolean;
        /**
         * Defines the timespan between switching slider items
         * @default 7000
         */
        autoplayInterval?: number;
    }
    /**
     * Create a list of items to use as a responsive carousel slider
     * Documentation {@link http://getuikit.org/docs/slider.html}
     * <h2>Events</h2>
     * <table class="uk-table uk-table-striped uk-text-nowrap">
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>focusitem.uk.slider</code></td>
     * <td>event, index, item</td>
     * <td>On item focus</td>
     * </tr>
     * </table>
     */
    type Slider = (element: string|JQuery, options?: SliderOptions) => any;
    interface SlideSetOptions {
        /**
         * Default visible items in a set
         * @default 1
         */
        default?: number;
        /**
         * Visible items in a set at small breakpoint
         * @default null
         */
        small?: number;
        /**
         * Visible items in a set at medium breakpoint
         * @default null
         */
        medium?: number;
        /**
         * Visible items in a set at large breakpoint
         * @default null
         */
        large?: number;
        /**
         * Visible items in a set at xlarge breakpoint
         * @default null
         */
        xlarge?: number;
        /**
         * Animation name
         * @default 'fade'
         */
        animation?: string;
        /**
         * Animation duration in ms
         * @default 200
         */
        duration?: number;
        /**
         * Animation delay between items in a set
         * @default 100
         */
        delay?: number;
        /**
         * Items filter
         * @default ""
         */
        filter?: string;
        /**
         * Defines whether or not the slideset items should switch automatically.
         * @default false
         */
        autoplay?: boolean;
        /**
         * Pause autoplay when hovering a slideset.
         * @default true
         */
        pauseOnHover?: boolean;
        /**
         * Defines the timespan between switching slideset items.
         * @default 7000
         */
        autoplayInterval?: number;
    }
    /**
     * Create sets and groups of items, allowing to loop through the sets.
     * Documentation {@link http://getuikit.org/docs/slideset.html}
     * <h2>Events</h2>
     * <table>
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>show.uk.slideset</code></td>
     * <td>event, set</td>
     * <td>On set show</td>
     * </tr>
     * </table>
     */
    type SlideSet = (element: string|JQuery, options?: SlideSetOptions) => any;
    interface SlideShowOptions {
        /**
         * Defines the preferred transition between items.
         * @default 'fade
         */
        animation?: string;

        /**
         * Defines the transition duration.
         * @default 500
         */
        duration?: number;

        /**
         * Defines the slideshow height.
         * @default 'auto'
         */
        height?: string;

        /**
         * Defines the first slideshow item to be displayed.
         * @default 0
         */
        start?: number;

        /**
         * Defines whether or not the slideshow items should switch automatically.
         * @default false
         */
        autoplay?: boolean;

        /**
         * Pause autoplay when hovering a slideshow.
         * @default true
         */
        pauseOnHover?: boolean;

        /**
         * Defines the timespan between switching slideshow items.
         * @default 7000
         */
        autoplayInterval?: number;

        /**
         * Defines whether or not a video starts automatically.
         * @default true
         */
        videoautoplay?: boolean;

        /**
         * Defines whether or not a video is muted.
         * @default false
         */
        videomute?: boolean;

        /**
         * Defines whether or not the Ken Burns effect is active. If kenburns is a numeric value, it will be used as
         * the animation duration.
         * @default false
         */
        kenburns?: boolean;

        /**
         * Animation series.
         * @default 'uk-animation-middle-left, uk-animation-top-right, uk-animation-bottom-left, uk-animation-top-center,uk-animation-bottom-right'
         */
        kenburnsanimations?: string;

        /**
         * Defines the number of slices, if a "Slice" transition is set.
         * @default 15
         */
        slices?: number;
    }
    /**
     * Create a responsive image or video slideshow with stunning transition effects, fullscreen mode and overlays.
     * Documentation {@link http://getuikit.org/docs/slideshow.html}
     * <h2>Events</h2>
     * <table>
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>show.uk.slideshow</code></td>
     * <td>event, next slide</td>
     * <td>On showing a new slide (after animation is finished)</td>
     * </tr>
     * </table>
     */
    type SlideShow = (element: string|JQuery, options: SlideShowOptions) => any;
    interface ParallaxOptions {
        /**
         * Animation velocity during scrolling
         * @default 0.5
         */
        velocity?: number;
        /**
         * Element dimension reference for animation duration.
         * @default false
         */
        target?: boolean;
        /**
         * Animation range depending on the viewport.
         * <h2>Possible value</h2>
         * float (0 to 1)
         * @default false
         */
        viewport?: number;
        /**
         * Condition for the active status with a width as integer (e.g. 640) or a css media query
         * @default false
         * <h2>Possible Value</h2>
         * integer / string
         */
        media?: number|string;
    }
    /**
     * Animate CSS properties depending on the scroll position of the document.
     * Documentation {@link http://getuikit.org/docs/parallax.html}
     */
    type Parallax = (element: string|JQuery, options: ParallaxOptions) => any;
    interface AccordionOptions {
        /**
         * Show first item on init
         * @default true
         * <h2>Possible value</h2>
         * boolean
         */
        showfirst?: boolean;
        /**
         * Allow multiple open items
         * @default true
         * <h2>Possible value</h2>
         * boolean
         */
        collapse?: boolean;
        /**
         * Animate toggle
         * @default true
         * <h2>Possible value</h2>
         * boolean
         */
        animate?: boolean;
        /**
         * Animation function
         * @default swing
         * <h2>Possible value</h2>
         * string
         */
        easing?: string;
        /**
         * Animation duration
         * @default 300
         * <h2>Possible value</h2>
         * integer
         */
        duration?: number;
        /**
         * Css selector for toggles
         * @default .uk-accordion-title
         * <h2>Possible value</h2>
         * string
         */
        toggle?: string;
        /**
         * Css selector for content containers
         * @default .uk-accordion-content
         * <h2>Possible value</h2>
         * string
         */
        containers?: string;
        /**
         * Class to add when an item is active
         * @default uk-active
         * <h2>Possible value</h2>
         * string
         */
        clsactive?: string;
    }
    /**
     * Create a list of items, allowing each item's content to be expanded and collapsed by clicking its header.
     * Documentation {@link http://getuikit.org/docs/accordion.html}
     * <h2>Events</h2>
     * <table class="uk-table uk-table-striped uk-text-nowrap">
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>toggle.uk.accordion</code></td>
     * <td>event, active, toggle, content</td>
     * <td>On item toggle</td>
     * </tr>
     * </table>
     */
    type Accordion = (element: string|JQuery, options: AccordionOptions) => any;
    interface NotifyOptions {
        /**
         * The message to display
         */
        message?: string;

        /**
         * A notification can be styled by adding a status to the message to indicate an info, success, warning or a
         * danger status.
         * <h2>Possible values</h2>
         * info, sucess, warning, danger
         * If you want to create one set its style with the CSS class uk-notify-message-yourStatus
         * @default 'info'
         */
        status?: string;

        /**
         * Amount of tiem in milliseconds a messa is visible. Set to 0 for sticky message
         * @default 5000
         */
        timeout?: number;

        /**
         * Adjust the notification's position to different corners.
         * @default  'top-center'
         * <h2>Possible values</h2>
         * top-center, top-left, top-right, bottom-center, bottom-left, bottom-right
         * If you want to create one value set its style with the CSS uk-notify-yourPosition
         */
        pos?: string;
    }
    /**
     * Create toggleable notifications that fade out automatically
     * Documentation {@link http://getuikit.org/docs/notify.html}
     */
    interface Notify {
        /**
         * Show a notification
         * @param message The html message
         * @param {string|NotifyOptions} [status] The status or options
         */
        (message: string, status?: string|NotifyOptions): any;
        /**
         * Show a notification
         * @param options Options
         */
        (options: NotifyOptions): any;
    }
    interface SearchOptions {
        /**
         * Data source url
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        source?: string;

        /**
         * Min. input length before triggering autocomplete
         * @default 3
         * <h2>Possible value</h2>
         * integer
         */
        minLength?: number;

        /**
         * Query name when sending ajax request
         * @default search
         * <h2>Possible value</h2>
         * string
         */
        param?: string;

        /**
         * Delay time after stop typing
         * @default 300
         * <h2>Possible value</h2>
         * integer
         */
        delay?: number;
    }
    /**
     * Easily create a nicely looking search.
     * Documentation {@link http://getuikit.org/docs/search.html}
     */
    type Search = (element: string|JQuery, options: SearchOptions) => any;
    interface NestableOptions {
        /**
         * List group
         * @default false
         * <h2>Possible value</h2>
         * string
         */
        group?: string;
        /**
         * Max nesting level
         * @default 10
         * <h2>Possible value</h2>
         * integer
         */
        maxDepth?: number;
        /**
         * Pixel threshold before starting to drag
         * @default 20
         * <h2>Possible value</h2>
         * integer
         */
        threshold?: number;
        /**
         * List node name
         * @default ul
         * <h2>Possible value</h2>
         * string
         */
        listNodeName?: string;
        /**
         * Item node name
         * @default li
         * <h2>Possible value</h2>
         * string
         */
        itemNodeName?: string;
        /**
         * List base class
         * @default uk-nestable
         * <h2>Possible value</h2>
         * string
         */
        listBaseClass?: string;
        /**
         * List class
         * @default uk-nestable-list
         * <h2>Possible value</h2>
         * string
         */
        listClass?: string;
        /**
         * List item class
         * @default uk-nestable-list-item
         * <h2>Possible value</h2>
         * string
         */
        listitemClass?: string;
        /**
         * Item class
         * @default uk-nestable-item
         * <h2>Possible value</h2>
         * string
         */
        itemClass?: string;
        /**
         * Class added to dragged list
         * @default uk-nestable-list-dragged
         * <h2>Possible value</h2>
         * string
         */
        dragClass?: string;
        /**
         * Class added to <code>&lt;html&gt;</code> when moving
         * @default uk-nestable-moving
         * <h2>Possible value</h2>
         * string
         */
        movingClass?: string;
        /**
         * Class for drag handle
         * @default uk-nestable-handle
         * <h2>Possible value</h2>
         * string
         */
        handleClass?: string;
        /**
         * Class for collapsed items
         * @default uk-nestable-collapsed
         * <h2>Possible value</h2>
         * string
         */
        collapsedClass?: string;
        /**
         * Class for placeholder of currently dragged element
         * @default uk-nestable-placeholder
         * <h2>Possible value</h2>
         * string
         */
        placeClass?: string;
        /**
         * Elements with this class will not trigger dragging. Useful when having the complete item draggable and not
         * just the handle.
         * @default uk-nestable-nodrag
         * <h2>Possible value</h2>
         * string
         */
        noDragClass?: string;
        /**
         * Class for empty lists
         * @default uk-nestable-empty
         * <h2>Possible value</h2>
         * string
         */
        emptyClass?: string;
    }
    /**
     * Create nestable lists that can be sorted by drag and drop.
     * Documentation {@link http://getuikit.org/docs/nestable.html}
     * <h2>Events</h2>
     * <table>
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>start.uk.nestable</code></td>
     * <td>event, nestable object</td>
     * <td>On nestable drag start</td>
     * </tr>
     * <tr>
     * <td><code>move.uk.nestable</code></td>
     * <td>event, nestable object</td>
     * <td>On nestable move item</td>
     * </tr>
     * <tr>
     * <td><code>stop.uk.nestable</code></td>
     * <td>event, nestable object</td>
     * <td>On nestable stop dragging</td>
     * </tr>
     * <tr>
     * <td><code>change.uk.nestable</code></td>
     * <td>event, sortable object, dragged element, action</td>
     * <td>On nestable change item</td>
     * </tr>
     * </table>
     */
    type Nestable = (element: string|JQuery, options: NestableOptions) => any;
    interface SortableOptions {
        /**
         * List group
         * @default false
         * <h2>Possible value</h2>
         * string
         */
        group?: string;
        /**
         * Animation speed in ms
         * @default 150
         * <h2>Possible value</h2>
         * integer
         */
        animation?: string;
        /**
         * Mouse movement threshold in pixel until trigger element dragging
         * @default 10
         * <h2>Possible value</h2>
         * integer
         */
        threshold?: string;
        /**
         * Custom class to define elements which can trigger sorting
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        handleClass?: string;
        /**
         * Custom class added to the dragged element
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        dragCustomClass?: string;
    }
    /**
     * Create sortable grids and lists to rearrange the order of its elements.
     * Documentation {@link http://getuikit.org/docs/sortable.html}
     * <h2>Events</h2>
     * <table class="uk-table uk-table-striped uk-text-nowrap">
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>start.uk.sortable</code></td>
     * <td>event, sortable object, dragged element</td>
     * <td>On sortable drag start</td>
     * </tr>
     * <tr>
     * <td><code>move.uk.sortable</code></td>
     * <td>event, sortable object</td>
     * <td>On sortable move item</td>
     * </tr>
     * <tr>
     * <td><code>stop.uk.sortable</code></td>
     * <td>event, sortable object, dragged element</td>
     * <td>On sortable stop dragging</td>
     * </tr>
     * <tr>
     * <td><code>change.uk.sortable</code></td>
     * <td>event, sortable object, dragged element, action</td>
     * <td>On sortable change item</td>
     * </tr>
     * </table>
     */
    type Sortable = (element: string|JQuery, options: SortableOptions) => any;
    interface StickyOptions {
        /**
         * Top offset whent sticky should be triggered
         * @default 0
         * <h2>Possible value</h2>
         * integer
         */
        top?: number;
        /**
         * UIkit animation class
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        animation?: string;
        /**
         * Init class when the element is sticky for the first time
         * @default uk-sticky-init
         * <h2>Possible value</h2>
         * string
         */
        clsinit?: string;
        /**
         * Active class to add, when element is sticky
         * @default uk-active
         * <h2>Possible value</h2>
         * string
         */
        clsactive?: string;
        /**
         * Class to add, when element is not sticky
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        clsinactive?: string;
        /**
         * Css selector where to get the width from in sticky mode. By default it takes the width from the created wrapper element.
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        getWidthFrom?: string;
        /**
         * Condition for the active status with a width as integer (e.g. 640) or a css media query
         * @default false
         * <h2>Possible value</h2>
         * integer / string
         */
        media?: number|string;
        /**
         * Make sure that a sticky element is not over a targeted element via location hash on dom-ready.
         * @default false
         * <h2>Possible value</h2>
         * boolean
         */
        target?: boolean;
        /**
         * Show sticky element only when scrolling up.
         * @default false
         * <h2>Possible value</h2>
         * boolean
         */
        showup?: boolean;
        /**
         * Set to <code>true</code> to bind sticky to the parent or a Css selector to bind sticky to a specific element.
         * @default false
         * <h2>Possible value</h2>
         * mixed
         */
        boundary?: boolean|string;
    }
    /**
     * Make elements remain at the top of the viewport, like a sticky navbar.
     * Documentation {@link http://getuikit.org/docs/sticky.html}
     * <h2>Events</h2>
     * <table class="uk-table uk-table-striped uk-text-nowrap">
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>active.uk.sticky</code></td>
     * <td>event</td>
     * <td>Element getting sticky</td>
     * </tr>
     * <tr>
     * <td><code>inactive.uk.sticky</code></td>
     * <td>event</td>
     * <td>Element leaving sticky mode</td>
     * </tr>
     * </table>
     */
    type Sticky = (element: string|JQuery, options: StickyOptions) => any;
    interface TimepickerOptions {
        /**
         * Defines the preferred time notation
         * @default '24h'
         * <h2>Possible value</h2>
         * '24h' or '12h'
         */
        format?: string;
        /**
         * Start time
         * @default 0
         * <h2>Possible value</h2>
         * Integer between 0 and 24
         */
        start?: number;
        /**
         * End time
         * @default 24
         * <h2>Possible value</h2>
         * Integer between 0 and 24
         */
        end?: number;
    }
    /**
     * Create a timepicker which can easily be used by selecting a time value from a pre filled dropdown.
     * Documentation {@link http://getuikit.org/docs/timepicker.html}
     */
    type Timepicker = (element: string|JQuery, options: TimepickerOptions) => any;
    interface TooltipOptions {
        /**
         * Offset to the source element
         * @default 5
         * <h2>Possible value</h2>
         * integer
         */
        offset?: number;
        /**
         * Tooltip position
         * @default 'top'
         * <h2>Possible value</h2>
         * string
         */
        pos?: string;
        /**
         * Fade in tooltip
         * @default false
         * <h2>Possible value</h2>
         * boolean
         */
        animation?: boolean;
        /**
         * Delay tooltip show in ms
         * @default 0
         * <h2>Possible value</h2>
         * integer
         */
        delay?: number;
        /**
         * Custom class to add on show
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        cls?: string;
        /**
         * Toggled active class
         * @default 'uk-active'
         * <h2>Possible value</h2>
         * string
         */
        activeClass?: string;
    }
    /**
     * Easily create a nicely looking tooltip.
     * Documentation {@link http://getuikit.org/docs/tooltip.html}
     */
    type Tooltip = (element: string|JQuery, options: TooltipOptions) => any;
    interface UploadOptions {
        /**
         * Target url for the upload
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        action?: string;
        /**
         * Send each file one by one
         * @default true
         * <h2>Possible value</h2>
         * boolean
         */
        single?: boolean;
        /**
         * Post query name
         * @default files[]
         * <h2>Possible value</h2>
         * string
         */
        param?: string;
        /**
         * Additional request parameters
         * @default {}
         * <h2>Possible value</h2>
         * JSON Object
         */
        params?: {};
        /**
         * File filter
         * @default *.*
         * <h2>Possible value</h2>
         * string
         */
        allow?: string;
        /**
         * Limit the number of files to upload
         * @default false
         * <h2>Possible value</h2>
         * integer
         */
        filelimit?: number;
        /**
         * Response type from server
         * @default text
         * <h2>Possible Value</h2>
         * (text|json)
         */
        "type"?: string;
        before?(settings: UploadOptions, files: string|string[]): any;
        beforeAll?(files: string|string[]): any;
        beforeSend?(xhr: XMLHttpRequest): any;
        progress?(percent: number): any;
        complete?(response: any, xhr: XMLHttpRequest): any;
        allcomplete?(response: any, xhr: XMLHttpRequest): any;
        notallowed?(file: string|string[], settings: UploadOptions): any;
        loadstart?(event: any): any;
        load?(event: any): any;
        loadend?(event: any): any;
        error?(event: any): any;
        abort?(event: any): any;
        readystatechange?(event: any): any;
    }

    /**
     * Allow users to upload files through a file input form element or a placeholder area.
     * Documentation {@link http://getuikit.org/docs/upload.html}
     * <h2>Callbacks</h2>
     * <table class="uk-table uk-table-striped">
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * </tr>
     * <tr>
     * <td><code>before</code></td>
     * <td>settings, files</td>
     * </tr>
     * <tr>
     * <td><code>beforeAll</code></td>
     * <td>files</td>
     * </tr>
     * <tr>
     * <td><code>beforeSend</code></td>
     * <td>xhr</td>
     * </tr>
     * <tr>
     * <td><code>progress</code></td>
     * <td>percent</td>
     * </tr>
     * <tr>
     * <td><code>complete</code></td>
     * <td>response, xhr</td>
     * </tr>
     * <tr>
     * <td><code>allcomplete</code></td>
     * <td>response, xhr</td>
     * </tr>
     * <tr>
     * <td><code>notallowed</code></td>
     * <td>file, settings</td>
     * </tr>
     * <tr>
     * <td><code>loadstart</code></td>
     * <td>event</td>
     * </tr>
     * <tr>
     * <td><code>load</code></td>
     * <td>event</td>
     * </tr>
     * <tr>
     * <td><code>loadend</code></td>
     * <td>event</td>
     * </tr>
     * <tr>
     * <td><code>error</code></td>
     * <td>event</td>
     * </tr>
     * <tr>
     * <td><code>abort</code></td>
     * <td>event</td>
     * </tr>
     * <tr>
     * <td><code>readystatechange</code></td>
     * <td>event</td>
     * </tr>
     * </table>
     */
    type Upload = (element: string|JQuery, options: UploadOptions) => any;
    const dropdown: Dropdown;
    const modal: Modal;
    const lightbox: LightBox;
    const offcanvas: OffCanvas;
    const autocomplete: AutoComplete;
    const datepicker: DatePicker;
    const htmleditor: HtmlEditor;
    const slider: Slider;
    const slideset: SlideSet;
    const slideshow: SlideShow;
    const parallax: Parallax;
    const accordion: Accordion;
    const notify: Notify;
    const search: Search;
    const nestable: Nestable;
    const sortable: Sortable;
    const sticky: Sticky;
    const timepicker: Timepicker;
    const tooltip: Tooltip;
    const uploadSelect: Upload;
    const uploadDrop: Upload;
}

type fn = (arg: any) => any;

interface Icons {
    album: HTMLObjectElement;
    ban: HTMLObjectElement;
    behance: HTMLObjectElement;
    bell: HTMLObjectElement;
    bold: HTMLObjectElement;
    bolt: HTMLObjectElement;
    bookmark: HTMLObjectElement;
    calendar: HTMLObjectElement;
    camera: HTMLObjectElement;
    cart: HTMLObjectElement;
    check: HTMLObjectElement;
    clock: HTMLObjectElement;
    close: HTMLObjectElement;
    code: HTMLObjectElement;
    cog: HTMLObjectElement;
    comment: HTMLObjectElement;
    commenting: HTMLObjectElement;
    comments: HTMLObjectElement;
    copy: HTMLObjectElement;
    database: HTMLObjectElement;
    desktop: HTMLObjectElement;
    download: HTMLObjectElement;
    dribbble: HTMLObjectElement;
    expand: HTMLObjectElement;
    facebook: HTMLObjectElement;
    file: HTMLObjectElement;
    flickr: HTMLObjectElement;
    folder: HTMLObjectElement;
    forward: HTMLObjectElement;
    foursquare: HTMLObjectElement;
    future: HTMLObjectElement;
    github: HTMLObjectElement;
    gitter: HTMLObjectElement;
    google: HTMLObjectElement;
    grid: HTMLObjectElement;
    happy: HTMLObjectElement;
    hashtag: HTMLObjectElement;
    heart: HTMLObjectElement;
    history: HTMLObjectElement;
    home: HTMLObjectElement;
    image: HTMLObjectElement;
    info: HTMLObjectElement;
    instagram: HTMLObjectElement;
    italic: HTMLObjectElement;
    joomla: HTMLObjectElement;
    laptop: HTMLObjectElement;
    lifesaver: HTMLObjectElement;
    link: HTMLObjectElement;
    linkedin: HTMLObjectElement;
    list: HTMLObjectElement;
    location: HTMLObjectElement;
    lock: HTMLObjectElement;
    mail: HTMLObjectElement;
    menu: HTMLObjectElement;
    minus: HTMLObjectElement;
    more: HTMLObjectElement;
    move: HTMLObjectElement;
    nut: HTMLObjectElement;
    pagekit: HTMLObjectElement;
    pencil: HTMLObjectElement;
    phone: HTMLObjectElement;
    pinterest: HTMLObjectElement;
    play: HTMLObjectElement;
    plus: HTMLObjectElement;
    pull: HTMLObjectElement;
    push: HTMLObjectElement;
    question: HTMLObjectElement;
    receiver: HTMLObjectElement;
    refresh: HTMLObjectElement;
    reply: HTMLObjectElement;
    rss: HTMLObjectElement;
    search: HTMLObjectElement;
    server: HTMLObjectElement;
    settings: HTMLObjectElement;
    shrink: HTMLObjectElement;
    social: HTMLObjectElement;
    soundcloud: HTMLObjectElement;
    star: HTMLObjectElement;
    strikethrough: HTMLObjectElement;
    table: HTMLObjectElement;
    tablet: HTMLObjectElement;
    tag: HTMLObjectElement;
    thumbnails: HTMLObjectElement;
    trash: HTMLObjectElement;
    tripadvisor: HTMLObjectElement;
    tumblr: HTMLObjectElement;
    tv: HTMLObjectElement;
    twitter: HTMLObjectElement;
    uikit: HTMLObjectElement;
    unlock: HTMLObjectElement;
    upload: HTMLObjectElement;
    user: HTMLObjectElement;
    users: HTMLObjectElement;
    vimeo: HTMLObjectElement;
    warning: HTMLObjectElement;
    whatsapp: HTMLObjectElement;
    wordpress: HTMLObjectElement;
    world: HTMLObjectElement;
    xing: HTMLObjectElement;
    yelp: HTMLObjectElement;
    youtube: HTMLObjectElement;
    "arrow-down": HTMLObjectElement;
    "arrow-left": HTMLObjectElement;
    "arrow-right": HTMLObjectElement;
    "arrow-up": HTMLObjectElement;
    "chevron-down": HTMLObjectElement;
    "chevron-left": HTMLObjectElement;
    "chevron-right": HTMLObjectElement;
    "chevron-up": HTMLObjectElement;
    "cloud-download": HTMLObjectElement;
    "cloud-upload": HTMLObjectElement;
    "credit-card": HTMLObjectElement;
    "file-edit": HTMLObjectElement;
    "git-branch": HTMLObjectElement;
    "git-fork": HTMLObjectElement;
    "github-alt": HTMLObjectElement;
    "google-plus": HTMLObjectElement;
    "minus-circle": HTMLObjectElement;
    "more-vertical": HTMLObjectElement;
    "paint-bucket": HTMLObjectElement;
    "phone-landscape": HTMLObjectElement;
    "play-circle": HTMLObjectElement;
    "plus-circle": HTMLObjectElement;
    "quote-right": HTMLObjectElement;
    "sign-in": HTMLObjectElement;
    "sign-out": HTMLObjectElement;
    "tablet-landscape": HTMLObjectElement;
    "triangle-down": HTMLObjectElement;
    "triangle-left": HTMLObjectElement;
    "triangle-right": HTMLObjectElement;
    "triangle-up": HTMLObjectElement;
    "video-camera": HTMLObjectElement;
}

declare namespace UIkit {
    const use: fn;
    const notification: fn;
}

declare let Icons: Icons;

declare module "uikit" {
    export = UIkit;
}

declare module "uikit/dist/js/uikit" {
    export = UIkit;
}

declare module "uikit/dist/js/uikit-icons" {
    export = Icons;
}
