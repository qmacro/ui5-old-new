# ui5-old-new
A quick comparison of some 1.28/1.30 features with the older equivalents, from a session at #SITsheff 2015

I gave a session at SAP Inside Track Sheffield 2015, looking at recent innovations with 1.28 and 1.30 of UI5.
To highlight some of the new features I created a very simple app. The old/ folder contains a version of the app built in the 
'traditional' way, and the new/ folder contains a version using a small number of the new features.

Some of the features to look out for in the app are:

- new parameters in the UI5 bootstrap (in `index.html`)
- the new app descriptor file (`manifest.json`)
- the new module definition syntax with `sap.ui.define` (in `Component.js` and `App.controller.js`)
- the cut down `Component.js` file
- expression bindings (in `App.view.xml`)
