# SVG-Editor

This application is a modified version of Method-Draw: https://github.com/duopixel/Method-Draw

It gives the user the ability to add beacon shapes(with unique IDs) , beacon UUIDs and store the SVG file in CouchDB. This results in a map that can be used for android localisation .

The following files were modified to support these actions : 

- method-draw.js located in /src  ->  added clickSaveCouch() for CouchDB storage
- index.html + added beaconsList.js in /lib  -> new menu that allows a user to add/delete beacon UUIDs before saving the file in CouchDB
- ext-shapes.js in /extensions + added beacon.json in /extensions/shapelib ->  new Beacons menu and beacon shape in the Shape Library

SVG-Editor must be stored in CouchDB using Couchapp .
