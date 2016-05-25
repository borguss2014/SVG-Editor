# SVG-Editor

This app is a modified version of Method-Draw: https://github.com/duopixel/Method-Draw

It allows a user to store a SVG into CouchDB, alongside beacon UUIDs. 

The method-draw.js file located in /src was modified to support CouchDB file saving (clickSaveCouch() function ) .
There's also added a new menu that allows the user to store beacon UUIDs in the same couchdb document (index.html was modified + added beaconsList.js in /lib)
