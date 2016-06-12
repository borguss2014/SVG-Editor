# SVG-Editor

This application is a modified version of Method-Draw: https://github.com/duopixel/Method-Draw

It gives the user the ability to add beacon shapes(with the submitted UUIDs as IDs) and store the SVG file in CouchDB. This results in a map that can be used for android localisation .

The following files were modified to support these actions : 

- method-draw.js located in /src  ->  added clickSaveCouch() for CouchDB storage
- index.html + added beaconsList.js in /lib  -> functionality for adding / deleting beacon UUIDs from the beacon array used when saving the SVG in CouchDB (Beacons menu kept for debugging purposes)
- ext-shapes.js in /extensions + added beacon.json in /extensions/shapelib ->  new Beacons menu and beacon shape in the Shape Library

SVG-Editor must be stored in CouchDB .

--------------------------------------------

SVG-Editor Copyright (c) 2016 Spoiala Viorel Cristian 

Method Draw is Copyright (c) Mark MacKay mark@method.ac

Based on SVG Edit: http://code.google.com/p/svg-edit/

SVG Edit is Copyright (c) Narendra Sisodiya narendra.sisodiya@gmail.com Pavol Rusnak rusnakp@gmail.com Jeff Schiller codedread@gmail.com Vidar Hokstad vidar.hokstad@gmail.com Alexis Deveria adeveria@gmail.com

For more details check the LICENSE and AUTHORS files . A copy of these files should be provided with the application
