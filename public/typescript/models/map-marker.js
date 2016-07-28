System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MapMarker;
    return {
        setters:[],
        execute: function() {
            MapMarker = (function () {
                function MapMarker(lat, lng, label, draggable) {
                    this.lat = lat;
                    this.lng = lng;
                    this.label = label;
                    this.draggable = draggable;
                }
                return MapMarker;
            }());
            exports_1("MapMarker", MapMarker);
        }
    }
});
