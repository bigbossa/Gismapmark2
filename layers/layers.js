var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'GoogleSatellite:',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_station_coordinates_1 = new ol.format.GeoJSON();
var features_station_coordinates_1 = format_station_coordinates_1.readFeatures(json_station_coordinates_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_station_coordinates_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_station_coordinates_1.addFeatures(features_station_coordinates_1);
cluster_station_coordinates_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_station_coordinates_1
});
var lyr_station_coordinates_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_station_coordinates_1, 
                style: style_station_coordinates_1,
                popuplayertitle: 'station_coordinates',
                interactive: true,
                title: '<img src="styles/legend/station_coordinates_1.png" /> station_coordinates'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_station_coordinates_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_station_coordinates_1];
lyr_station_coordinates_1.set('fieldAliases', {'No': 'No', 'Station_Name': 'Station_Name', 'Address': 'Address', 'Coordinate': 'Coordinate', 'Type': 'Type', 'Longtitude': 'Longtitude', 'Latitude': 'Latitude', });
lyr_station_coordinates_1.set('fieldImages', {'No': 'Range', 'Station_Name': 'TextEdit', 'Address': 'TextEdit', 'Coordinate': 'TextEdit', 'Type': 'TextEdit', 'Longtitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_station_coordinates_1.set('fieldLabels', {'No': 'inline label - always visible', 'Station_Name': 'inline label - always visible', 'Address': 'inline label - always visible', 'Coordinate': 'inline label - always visible', 'Type': 'inline label - always visible', 'Longtitude': 'no label', 'Latitude': 'no label', });
lyr_station_coordinates_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});