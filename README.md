# org-jscut-widget-cam2d
This example widget gives you a framework for creating your own widget. Please change this description once you fork this template and create your own widget. Make sure to run runme.js every time you are done editing your code so you can regenerate your README.md file, regenerate your auto-generated-widget.html, and automatically push your changes to Github.

![alt text](screenshot.png "Screenshot")

## ChiliPeppr Widget / Template

All ChiliPeppr widgets/elements are defined using cpdefine() which is a method
that mimics require.js. Each defined object must have a unique ID so it does
not conflict with other ChiliPeppr widgets.

| Item                  | Value           |
| -------------         | ------------- | 
| ID                    | org-jscut-widget-cam2d |
| Name                  | Widget / Template |
| Description           | This example widget gives you a framework for creating your own widget. Please change this description once you fork this template and create your own widget. Make sure to run runme.js every time you are done editing your code so you can regenerate your README.md file, regenerate your auto-generated-widget.html, and automatically push your changes to Github. |
| chilipeppr.load() URL | http://raw.githubusercontent.com/tbfleming/widget-cam2d/master/auto-generated-widget.html |
| Edit URL              | http://ide.c9.io/undefined/undefined |
| Github URL            | http://github.com/tbfleming/widget-cam2d |
| Test URL              | https://preview.c9users.io/undefined/undefined/widget-cam2d.html |

## Example Code for chilipeppr.load() Statement

You can use the code below as a starting point for instantiating this widget 
inside a workspace or from another widget. The key is that you need to load 
your widget inlined into a div so the DOM can parse your HTML, CSS, and 
Javascript. Then you use cprequire() to find your widget's Javascript and get 
back the instance of it.

```javascript
// Inject new div to contain widget or use an existing div with an ID
$("body").append('<' + 'div id="myDivOrgJscutWidgetCam2d"><' + '/div>');

chilipeppr.load(
  "#myDivOrgJscutWidgetCam2d",
  "http://raw.githubusercontent.com/tbfleming/widget-cam2d/master/auto-generated-widget.html",
  function() {
    // Callback after widget loaded into #myDivOrgJscutWidgetCam2d
    // Now use require.js to get reference to instantiated widget
    cprequire(
      ["inline:org-jscut-widget-cam2d"], // the id you gave your widget
      function(myObjOrgJscutWidgetCam2d) {
        // Callback that is passed reference to the newly loaded widget
        console.log("Widget / Template just got loaded.", myObjOrgJscutWidgetCam2d);
        myObjOrgJscutWidgetCam2d.init();
      }
    );
  }
);

```

## Publish

This widget/element publishes the following signals. These signals are owned by this widget/element and are published to all objects inside the ChiliPeppr environment that listen to them via the 
chilipeppr.subscribe(signal, callback) method. 
To better understand how ChiliPeppr's subscribe() method works see amplify.js's documentation at http://amplifyjs.com/api/pubsub/

  <table id="com-chilipeppr-elem-pubsubviewer-pub" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Signal</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr><td colspan="2">(No signals defined in this widget/element)</td></tr>    
      </tbody>
  </table>

## Subscribe

This widget/element subscribes to the following signals. These signals are owned by this widget/element. Other objects inside the ChiliPeppr environment can publish to these signals via the chilipeppr.publish(signal, data) method. 
To better understand how ChiliPeppr's publish() method works see amplify.js's documentation at http://amplifyjs.com/api/pubsub/

  <table id="com-chilipeppr-elem-pubsubviewer-sub" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Signal</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr><td colspan="2">(No signals defined in this widget/element)</td></tr>    
      </tbody>
  </table>

## Foreign Publish

This widget/element publishes to the following signals that are owned by other objects. 
To better understand how ChiliPeppr's subscribe() method works see amplify.js's documentation at http://amplifyjs.com/api/pubsub/

  <table id="com-chilipeppr-elem-pubsubviewer-foreignpub" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Signal</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr><td colspan="2">(No signals defined in this widget/element)</td></tr>    
      </tbody>
  </table>

## Foreign Subscribe

This widget/element publishes to the following signals that are owned by other objects.
To better understand how ChiliPeppr's publish() method works see amplify.js's documentation at http://amplifyjs.com/api/pubsub/

  <table id="com-chilipeppr-elem-pubsubviewer-foreignsub" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Signal</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr><td colspan="2">(No signals defined in this widget/element)</td></tr>    
      </tbody>
  </table>

## Methods / Properties

The table below shows, in order, the methods and properties inside the widget/element.

  <table id="com-chilipeppr-elem-methodsprops" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Method / Property</th>
              <th>Type</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr valign="top"><td>id</td><td>string</td><td>"org-jscut-widget-cam2d"<br><br>The ID of the widget. You must define this and make it unique.</td></tr><tr valign="top"><td>name</td><td>string</td><td>"Widget / Template"</td></tr><tr valign="top"><td>desc</td><td>string</td><td>"This example widget gives you a framework for creating your own widget. Please change this description once you fork this template and create your own widget. Make sure to run runme.js every time you are done editing your code so you can regenerate your README.md file, regenerate your auto-generated-widget.html, and automatically push your changes to Github."</td></tr><tr valign="top"><td>url</td><td>string</td><td>"http://raw.githubusercontent.com/tbfleming/widget-cam2d/master/auto-generated-widget.html"</td></tr><tr valign="top"><td>fiddleurl</td><td>string</td><td>"http://ide.c9.io/undefined/undefined"</td></tr><tr valign="top"><td>githuburl</td><td>string</td><td>"http://github.com/tbfleming/widget-cam2d"</td></tr><tr valign="top"><td>testurl</td><td>string</td><td>"http://undefined-undefined.c9users.io/widget-cam2d.html"</td></tr><tr valign="top"><td>publish</td><td>object</td><td>Please see docs above.<br><br>Define the publish signals that this widget/element owns or defines so that
other widgets know how to subscribe to them and what they do.</td></tr><tr valign="top"><td>subscribe</td><td>object</td><td>Please see docs above.<br><br>Define the subscribe signals that this widget/element owns or defines so that
other widgets know how to subscribe to them and what they do.</td></tr><tr valign="top"><td>foreignPublish</td><td>object</td><td>Please see docs above.<br><br>Document the foreign publish signals, i.e. signals owned by other widgets
or elements, that this widget/element publishes to.</td></tr><tr valign="top"><td>foreignSubscribe</td><td>object</td><td>Please see docs above.<br><br>Document the foreign subscribe signals, i.e. signals owned by other widgets
or elements, that this widget/element subscribes to.</td></tr><tr valign="top"><td>init</td><td>function</td><td>function () <br><br>All widgets should have an init method. It should be run by the
instantiating code like a workspace or a different widget.</td></tr><tr valign="top"><td>operations</td><td>object</td><td></td></tr><tr valign="top"><td>global</td><td>object</td><td></td></tr><tr valign="top"><td>createOperation</td><td>function</td><td>function () </td></tr><tr valign="top"><td>removedMesh</td><td>function</td><td>function (mesh, meshes) </td></tr><tr valign="top"><td>getMeshZ</td><td>function</td><td>function (mesh, minmax) </td></tr><tr valign="top"><td>createFromMeshes</td><td>function</td><td>function (meshes) </td></tr><tr valign="top"><td>renderEditNumber</td><td>function</td><td>function (object, field, units) </td></tr><tr valign="top"><td>renderDropdown</td><td>function</td><td>function (object, field, options) </td></tr><tr valign="top"><td>renderZSelect</td><td>function</td><td>function (object, field, state, minmax) </td></tr><tr valign="top"><td>renderCheckbox</td><td>function</td><td>function (object, field) </td></tr><tr valign="top"><td>renderOperation</td><td>function</td><td>function (op, rows) </td></tr><tr valign="top"><td>errors</td><td>object</td><td></td></tr><tr valign="top"><td>renderBody</td><td>function</td><td>function () </td></tr><tr valign="top"><td>changed</td><td>boolean</td><td></td></tr><tr valign="top"><td>initRenderBody</td><td>function</td><td>function () </td></tr><tr valign="top"><td>meshWidget</td><td>object</td><td></td></tr><tr valign="top"><td>requestMeshWidget</td><td>function</td><td>function () </td></tr><tr valign="top"><td>generateGCode</td><td>function</td><td>function () </td></tr><tr valign="top"><td>options</td><td>object</td><td>User options are available in this property for reference by your
methods. If any change is made on these options, please call
saveOptionsLocalStorage()</td></tr><tr valign="top"><td>setupUiFromLocalStorage</td><td>function</td><td>function () <br><br>Call this method on init to setup the UI by reading the user's
stored settings from localStorage and then adjust the UI to reflect
what the user wants.</td></tr><tr valign="top"><td>saveOptionsLocalStorage</td><td>function</td><td>function () <br><br>When a user changes a value that is stored as an option setting, you
should call this method immediately so that on next load the value
is correctly set.</td></tr><tr valign="top"><td>showBody</td><td>function</td><td>function (evt) <br><br>Show the body of the panel.
<br><br><b>evt</b> ({jquery_event})  - If you pass the event parameter in, we 
know it was clicked by the user and thus we store it for the next 
load so we can reset the user's preference. If you don't pass this 
value in we don't store the preference because it was likely code 
that sent in the param.</td></tr><tr valign="top"><td>hideBody</td><td>function</td><td>function (evt) <br><br>Hide the body of the panel.
<br><br><b>evt</b> ({jquery_event})  - If you pass the event parameter in, we 
know it was clicked by the user and thus we store it for the next 
load so we can reset the user's preference. If you don't pass this 
value in we don't store the preference because it was likely code 
that sent in the param.</td></tr><tr valign="top"><td>forkSetup</td><td>function</td><td>function () <br><br>This method loads the pubsubviewer widget which attaches to our 
upper right corner triangle menu and generates 3 menu items like
Pubsub Viewer, View Standalone, and Fork Widget. It also enables
the modal dialog that shows the documentation for this widget.<br><br>By using chilipeppr.load() we can ensure that the pubsubviewer widget
is only loaded and inlined once into the final ChiliPeppr workspace.
We are given back a reference to the instantiated singleton so its
not instantiated more than once. Then we call it's attachTo method
which creates the full pulldown menu for us and attaches the click
events.</td></tr>
      </tbody>
  </table>


## About ChiliPeppr

[ChiliPeppr](http://chilipeppr.com) is a hardware fiddle, meaning it is a 
website that lets you easily
create a workspace to fiddle with your hardware from software. ChiliPeppr provides
a [Serial Port JSON Server](https://github.com/johnlauer/serial-port-json-server) 
that you run locally on your computer, or remotely on another computer, to connect to 
the serial port of your hardware like an Arduino or other microcontroller.

You then create a workspace at ChiliPeppr.com that connects to your hardware 
by starting from scratch or forking somebody else's
workspace that is close to what you are after. Then you write widgets in
Javascript that interact with your hardware by forking the base template 
widget or forking another widget that
is similar to what you are trying to build.

ChiliPeppr is massively capable such that the workspaces for 
[TinyG](http://chilipeppr.com/tinyg) and [Grbl](http://chilipeppr.com/grbl) CNC 
controllers have become full-fledged CNC machine management software used by
tens of thousands.

ChiliPeppr has inspired many people in the hardware/software world to use the
browser and Javascript as the foundation for interacting with hardware. The
Arduino team in Italy caught wind of ChiliPeppr and now
ChiliPeppr's Serial Port JSON Server is the basis for the 
[Arduino's new web IDE](https://create.arduino.cc/). If the Arduino team is excited about building on top
of ChiliPeppr, what
will you build on top of it?

