/* global requirejs cprequire cpdefine chilipeppr THREE */
// Defining the globals above helps Cloud9 not show warnings for those variables

// ChiliPeppr Widget/Element Javascript

requirejs.config({
    /*
    Dependencies can be defined here. ChiliPeppr uses require.js so
    please refer to http://requirejs.org/docs/api.html for info.
    
    Most widgets will not need to define Javascript dependencies.
    
    Make sure all URLs are https and http accessible. Try to use URLs
    that start with // rather than http:// or https:// so they simply
    use whatever method the main page uses.
    
    Also, please make sure you are not loading dependencies from different
    URLs that other widgets may already load like jquery, bootstrap,
    three.js, etc.
    
    You may slingshot content through ChiliPeppr's proxy URL if you desire
    to enable SSL for non-SSL URL's. ChiliPeppr's SSL URL is
    https://i2dcui.appspot.com which is the SSL equivalent for
    http://chilipeppr.com
    */
    paths: {
        // Example of how to define the key (you make up the key) and the URL
        // Make sure you DO NOT put the .js at the end of the URL
        // SmoothieCharts: '//smoothiecharts.org/smoothie',
        Three: '//i2dcui.appspot.com/slingshot?url=http://threejs.org/build/three.min.js',
        Clipper: '//i2dcui.appspot.com/js/clipper/clipper_unminified',
        WrapVirtualDom: '//i2dcui.appspot.com/slingshot?url=https://raw.githubusercontent.com/tbfleming/wrap-virtual-dom/master/wrap-virtual-dom.js',
    },
    shim: {
        // See require.js docs for how to define dependencies that
        // should be loaded before your script/widget.
    }
});

cprequire_test(["inline:org-jscut-widget-cam2d"], function(myWidget) {

    // Test this element. This code is auto-removed by the chilipeppr.load()
    // when using this widget in production. So use the cpquire_test to do things
    // you only want to have happen during testing, like loading other widgets or
    // doing unit tests. Don't remove end_test at the end or auto-remove will fail.

    // Please note that if you are working on multiple widgets at the same time
    // you may need to use the ?forcerefresh=true technique in the URL of
    // your test widget to force the underlying chilipeppr.load() statements
    // to referesh the cache. For example, if you are working on an Add-On
    // widget to the Eagle BRD widget, but also working on the Eagle BRD widget
    // at the same time you will have to make ample use of this technique to
    // get changes to load correctly. If you keep wondering why you're not seeing
    // your changes, try ?forcerefresh=true as a get parameter in your URL.

    console.log("test running of " + myWidget.id);

    $('body').prepend('<div id="testDivForFlashMessageWidget"></div>');

    chilipeppr.load(
        "#testDivForFlashMessageWidget",
        "http://fiddle.jshell.net/chilipeppr/90698kax/show/light/",
        function() {
            console.log("mycallback got called after loading flash msg module");
            cprequire(["inline:com-chilipeppr-elem-flashmsg"], function(fm) {
                //console.log("inside require of " + fm.id);
                fm.init();
            });
        }
    );

    // init my widget
    myWidget.init();
    $('#' + myWidget.id).css('margin', '20px');
    $('title').html(myWidget.name);

} /*end_test*/ );

// This is the main definition of your widget. Give it a unique name.
cpdefine("inline:org-jscut-widget-cam2d", ["chilipeppr_ready", "Three", "ThreeSTLLoader", "Clipper", "WrapVirtualDom"], function () {
    'use strict';
    return {
        /**
         * The ID of the widget. You must define this and make it unique.
         */
        id: "org-jscut-widget-cam2d", // Make the id the same as the cpdefine id
        name: "Widget / Template", // The descriptive name of your widget.
        desc: "This example widget gives you a framework for creating your own widget. Please change this description once you fork this template and create your own widget. Make sure to run runme.js every time you are done editing your code so you can regenerate your README.md file, regenerate your auto-generated-widget.html, and automatically push your changes to Github.", // A description of what your widget does
        url: "(auto fill by runme.js)",       // The final URL of the working widget as a single HTML file with CSS and Javascript inlined. You can let runme.js auto fill this if you are using Cloud9.
        fiddleurl: "(auto fill by runme.js)", // The edit URL. This can be auto-filled by runme.js in Cloud9 if you'd like, or just define it on your own to help people know where they can edit/fork your widget
        githuburl: "(auto fill by runme.js)", // The backing github repo
        testurl: "(auto fill by runme.js)",   // The standalone working widget so can view it working by itself
        /**
         * Define pubsub signals below. These are basically ChiliPeppr's event system.
         * ChiliPeppr uses amplify.js's pubsub system so please refer to docs at
         * http://amplifyjs.com/api/pubsub/
         */
        /**
         * Define the publish signals that this widget/element owns or defines so that
         * other widgets know how to subscribe to them and what they do.
         */
        publish: {
            // Define a key:value pair here as strings to document what signals you publish.
            //'/onExampleGenerate': 'Example: Publish this signal when we go to generate gcode.'
        },
        /**
         * Define the subscribe signals that this widget/element owns or defines so that
         * other widgets know how to subscribe to them and what they do.
         */
        subscribe: {
            // Define a key:value pair here as strings to document what signals you subscribe to
            // so other widgets can publish to this widget to have it do something.
            // '/onExampleConsume': 'Example: This widget subscribe to this signal so other widgets can send to us and we'll do something with it.'
        },
        /**
         * Document the foreign publish signals, i.e. signals owned by other widgets
         * or elements, that this widget/element publishes to.
         */
        foreignPublish: {
            // Define a key:value pair here as strings to document what signals you publish to
            // that are owned by foreign/other widgets.
            // '/jsonSend': 'Example: We send Gcode to the serial port widget to do stuff with the CNC controller.'
        },
        /**
         * Document the foreign subscribe signals, i.e. signals owned by other widgets
         * or elements, that this widget/element subscribes to.
         */
        foreignSubscribe: {
            // Define a key:value pair here as strings to document what signals you subscribe to
            // that are owned by foreign/other widgets.
            // '/com-chilipeppr-elem-dragdrop/ondropped': 'Example: We subscribe to this signal at a higher priority to intercept the signal. We do not let it propagate by returning false.'
        },
        /**
         * All widgets should have an init method. It should be run by the
         * instantiating code like a workspace or a different widget.
         */
        init: function () {
            this.setupUiFromLocalStorage();
            this.forkSetup();
            this.initRenderBody();
            this.requestMeshWidget();
        },

        operations: [],

        createOperation: function () {
            this.operations.push({
                expanded: false,
                enabled: true,
                camOp: "Pocket",
                mesh: null,
                meshSelection: {},
                topZ: 0,
                botZ: 0,
                ramp: true,
                direction: "Conventional",
            });
            this.changed = true;
        },

        renderEditNumber: function (object, field) {
            let h = WrapVirtualDom.h;
            return h('input', {
                type: 'number',
                value: object[field],
                style: { width: '80px' },
                onchange: e => {
                    let v = Number(e.target.value);
                    if (isNaN(v))
                        v = 0;
                    object[field] = v;
                    e.target.value = v;
                    this.changed = true;
                },
            });
        },

        renderOperation: function (op, rows) {
            let h = WrapVirtualDom.h;
            rows.push(h('tr', [
                h('td.cell-small', {
                    onclick: e => { op.expanded = !op.expanded; this.changed = true; },
                }, op.expanded ? '\u25BC' : '\u25BA'),
                h('td.cell-small', h('input', {
                    type: 'checkbox',
                    checked: op.enabled,
                    onclick: e=> { op.enabled = e.target.checked; this.changed = true; },
                })),
                h('td.cell-small', this.renderEditNumber(op, 'topZ')),
                h('td.cell-small', this.renderEditNumber(op, 'botZ')),
                h('td.cell-large',
                    this.meshWidget.renderMeshSelection(
                        op.meshSelection,
                        op.mesh,
                        () => this.changed = true,
                        mesh => { op.mesh = mesh; this.changed = true; })),
            ]));
            if (op.expanded) {
                rows.push(h('tr', [
                    h('td.cell-small'),
                    h('td', { colSpan: '4' }, [
                        h('table', { style: { width: '100%' } }, [
                            h('tr', [
                                h('th.cell-small', '...:'),
                                h('td.cell-large', '...'),
                            ]),
                        ]),
                    ]),
                ]));
            }
        },

        // Render widget body
        renderBody: function () {
            let h = WrapVirtualDom.h;
            if (!this.meshWidget)
                return h('div', 'Waiting for Mesh Widget to load.');
            let rows = [];
            for(let op of this.operations) {
                this.renderOperation(op, rows);
            }
            return h('div', [
                h('button', { onclick: e => this.createOperation() }, 'Create Operation'),
                h('table.noselect.arrow', rows),
            ]);
        },

        // Set this to true to eventually trigger a rerender
        changed: false,

        // Set up renderBody's render loop
        initRenderBody: function () {
            let body = document.getElementById('org-jscut-widget-cam2d-body');
            body.removeChild(body.firstChild);
            let tree = this.renderBody();
            let rootNode = WrapVirtualDom.createElement(tree);
            body.appendChild(rootNode);

            let rerender = () => {
                if (this.changed) {
                    let newTree = this.renderBody();
                    let patches = WrapVirtualDom.diff(tree, newTree);
                    rootNode = WrapVirtualDom.patch(rootNode, patches);
                    tree = newTree;
                    this.changed = false;
                }
                requestAnimationFrame(rerender);
            };
            requestAnimationFrame(rerender);
        },

        meshWidget: null,
        requestMeshWidget: function () {
            let f = () => {
                chilipeppr.publish('/org-jscut-widget-mesh/getWidget', widget => {
                    this.meshWidget = widget;
                    this.changed = true;
                });
                if (!this.meshWidget)
                    requestAnimationFrame(f);
            };
            f();
        },

        /**
         * User options are available in this property for reference by your
         * methods. If any change is made on these options, please call
         * saveOptionsLocalStorage()
         */
        options: null,
        /**
         * Call this method on init to setup the UI by reading the user's
         * stored settings from localStorage and then adjust the UI to reflect
         * what the user wants.
         */
        setupUiFromLocalStorage: function() {

            // Read vals from localStorage. Make sure to use a unique
            // key specific to this widget so as not to overwrite other
            // widgets' options. By using this.id as the prefix of the
            // key we're safe that this will be unique.

            // Feel free to add your own keys inside the options 
            // object for your own items

            var options = localStorage.getItem(this.id + '-options');

            if (options) {
                options = $.parseJSON(options);
                console.log("just evaled options: ", options);
            }
            else {
                options = {
                    showBody: true,
                    tabShowing: 1,
                    customParam1: null,
                    customParam2: 1.0
                };
            }

            this.options = options;
            console.log("options:", options);

            // show/hide body
            if (options.showBody) {
                this.showBody();
            }
            else {
                this.hideBody();
            }

        },
        /**
         * When a user changes a value that is stored as an option setting, you
         * should call this method immediately so that on next load the value
         * is correctly set.
         */
        saveOptionsLocalStorage: function() {
            // You can add your own values to this.options to store them
            // along with some of the normal stuff like showBody
            var options = this.options;

            var optionsStr = JSON.stringify(options);
            console.log("saving options:", options, "json.stringify:", optionsStr);
            // store settings to localStorage
            localStorage.setItem(this.id + '-options', optionsStr);
        },
        /**
         * Show the body of the panel.
         * @param {jquery_event} evt - If you pass the event parameter in, we 
         * know it was clicked by the user and thus we store it for the next 
         * load so we can reset the user's preference. If you don't pass this 
         * value in we don't store the preference because it was likely code 
         * that sent in the param.
         */
        showBody: function(evt) {
            $('#' + this.id + ' .panel-body').removeClass('hidden');
            $('#' + this.id + ' .panel-footer').removeClass('hidden');
            $('#' + this.id + ' .hidebody span').addClass('glyphicon-chevron-up');
            $('#' + this.id + ' .hidebody span').removeClass('glyphicon-chevron-down');
            if (!(evt == null)) {
                this.options.showBody = true;
                this.saveOptionsLocalStorage();
            }
            // this will send an artificial event letting other widgets know to resize
            // themselves since this widget is now taking up more room since it's showing
            $(window).trigger("resize");
        },
        /**
         * Hide the body of the panel.
         * @param {jquery_event} evt - If you pass the event parameter in, we 
         * know it was clicked by the user and thus we store it for the next 
         * load so we can reset the user's preference. If you don't pass this 
         * value in we don't store the preference because it was likely code 
         * that sent in the param.
         */
        hideBody: function(evt) {
            $('#' + this.id + ' .panel-body').addClass('hidden');
            $('#' + this.id + ' .panel-footer').addClass('hidden');
            $('#' + this.id + ' .hidebody span').removeClass('glyphicon-chevron-up');
            $('#' + this.id + ' .hidebody span').addClass('glyphicon-chevron-down');
            if (!(evt == null)) {
                this.options.showBody = false;
                this.saveOptionsLocalStorage();
            }
            // this will send an artificial event letting other widgets know to resize
            // themselves since this widget is now taking up less room since it's hiding
            $(window).trigger("resize");
        },
        /**
         * This method loads the pubsubviewer widget which attaches to our 
         * upper right corner triangle menu and generates 3 menu items like
         * Pubsub Viewer, View Standalone, and Fork Widget. It also enables
         * the modal dialog that shows the documentation for this widget.
         * 
         * By using chilipeppr.load() we can ensure that the pubsubviewer widget
         * is only loaded and inlined once into the final ChiliPeppr workspace.
         * We are given back a reference to the instantiated singleton so its
         * not instantiated more than once. Then we call it's attachTo method
         * which creates the full pulldown menu for us and attaches the click
         * events.
         */
        forkSetup: function() {
            var topCssSelector = '#' + this.id;

            $(topCssSelector + ' .panel-title').popover({
                title: this.name,
                content: this.desc,
                html: true,
                delay: 1000,
                animation: true,
                trigger: 'hover',
                placement: 'auto'
            });

            var that = this;
            chilipeppr.load("http://fiddle.jshell.net/chilipeppr/zMbL9/show/light/", function() {
                require(['inline:com-chilipeppr-elem-pubsubviewer'], function(pubsubviewer) {
                    pubsubviewer.attachTo($(topCssSelector + ' .panel-heading .dropdown-menu'), that);
                });
            });

        },

    }
});