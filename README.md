# SVG-Editor

This application is a modified version of Method-Draw: https://github.com/duopixel/Method-Draw

It gives the user the ability to add beacon shapes(with the submitted UUIDs as IDs) and store the SVG file in CouchDB. This results in a map that can be used for android localisation .

The following files were modified to support these actions : 

- method-draw.js located in /src  ->  added clickSaveCouch() for CouchDB storage
- index.html + added beaconsList.js in /lib  -> functionality for adding / deleting beacon UUIDs from the beacon array used when saving the SVG in CouchDB (Beacons menu kept for debugging purposes)
- ext-shapes.js in /extensions + added beacon.json in /extensions/shapelib ->  new Beacons menu and beacon shape in the Shape Library

SVG-Editor must be stored in CouchDB using Couchapp .
