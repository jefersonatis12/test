var wms_layers = [];


        var lyr_EsriWorldImagery_0 = new ol.layer.Tile({
            'title': 'Esri World Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://wiki.openstreetmap.org/wiki/Esri">Terms & Feedback</a>',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SETs_2 = new ol.format.GeoJSON();
var features_SETs_2 = format_SETs_2.readFeatures(json_SETs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SETs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SETs_2.addFeatures(features_SETs_2);
var lyr_SETs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SETs_2, 
                style: style_SETs_2,
                popuplayertitle: 'SETs',
                interactive: true,
                title: '<img src="styles/legend/SETs_2.png" /> SETs'
            });
var format_MurosPatioTaller_3 = new ol.format.GeoJSON();
var features_MurosPatioTaller_3 = format_MurosPatioTaller_3.readFeatures(json_MurosPatioTaller_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MurosPatioTaller_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MurosPatioTaller_3.addFeatures(features_MurosPatioTaller_3);
var lyr_MurosPatioTaller_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MurosPatioTaller_3, 
                style: style_MurosPatioTaller_3,
                popuplayertitle: 'Muros Patio Taller',
                interactive: true,
                title: '<img src="styles/legend/MurosPatioTaller_3.png" /> Muros Patio Taller'
            });
var format_MurosT1_4 = new ol.format.GeoJSON();
var features_MurosT1_4 = format_MurosT1_4.readFeatures(json_MurosT1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MurosT1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MurosT1_4.addFeatures(features_MurosT1_4);
var lyr_MurosT1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MurosT1_4, 
                style: style_MurosT1_4,
                popuplayertitle: 'Muros T1',
                interactive: true,
                title: '<img src="styles/legend/MurosT1_4.png" /> Muros T1'
            });
var format_SoterradoSanGermn_5 = new ol.format.GeoJSON();
var features_SoterradoSanGermn_5 = format_SoterradoSanGermn_5.readFeatures(json_SoterradoSanGermn_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SoterradoSanGermn_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoterradoSanGermn_5.addFeatures(features_SoterradoSanGermn_5);
var lyr_SoterradoSanGermn_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SoterradoSanGermn_5, 
                style: style_SoterradoSanGermn_5,
                popuplayertitle: 'Soterrado San Germán',
                interactive: true,
                title: '<img src="styles/legend/SoterradoSanGermn_5.png" /> Soterrado San Germán'
            });
var format_SoterradoPatioTaller_6 = new ol.format.GeoJSON();
var features_SoterradoPatioTaller_6 = format_SoterradoPatioTaller_6.readFeatures(json_SoterradoPatioTaller_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SoterradoPatioTaller_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoterradoPatioTaller_6.addFeatures(features_SoterradoPatioTaller_6);
var lyr_SoterradoPatioTaller_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SoterradoPatioTaller_6, 
                style: style_SoterradoPatioTaller_6,
                popuplayertitle: 'Soterrado Patio Taller',
                interactive: true,
                title: '<img src="styles/legend/SoterradoPatioTaller_6.png" /> Soterrado Patio Taller'
            });
var format_PuenteLaIguan_7 = new ol.format.GeoJSON();
var features_PuenteLaIguan_7 = format_PuenteLaIguan_7.readFeatures(json_PuenteLaIguan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuenteLaIguan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuenteLaIguan_7.addFeatures(features_PuenteLaIguan_7);
var lyr_PuenteLaIguan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuenteLaIguan_7, 
                style: style_PuenteLaIguan_7,
                popuplayertitle: 'Puente La Iguaná',
                interactive: true,
                title: '<img src="styles/legend/PuenteLaIguan_7.png" /> Puente La Iguaná'
            });
var format_EstacinCaribe_8 = new ol.format.GeoJSON();
var features_EstacinCaribe_8 = format_EstacinCaribe_8.readFeatures(json_EstacinCaribe_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstacinCaribe_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacinCaribe_8.addFeatures(features_EstacinCaribe_8);
var lyr_EstacinCaribe_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstacinCaribe_8, 
                style: style_EstacinCaribe_8,
                popuplayertitle: 'Estación Caribe',
                interactive: true,
                title: '<img src="styles/legend/EstacinCaribe_8.png" /> Estación Caribe'
            });
var format_Bordes_vias_9 = new ol.format.GeoJSON();
var features_Bordes_vias_9 = format_Bordes_vias_9.readFeatures(json_Bordes_vias_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bordes_vias_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bordes_vias_9.addFeatures(features_Bordes_vias_9);
var lyr_Bordes_vias_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bordes_vias_9, 
                style: style_Bordes_vias_9,
                popuplayertitle: 'Bordes_vias',
                interactive: true,
                title: '<img src="styles/legend/Bordes_vias_9.png" /> Bordes_vias'
            });
var format_LimiteIntervencinM80_10 = new ol.format.GeoJSON();
var features_LimiteIntervencinM80_10 = format_LimiteIntervencinM80_10.readFeatures(json_LimiteIntervencinM80_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteIntervencinM80_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteIntervencinM80_10.addFeatures(features_LimiteIntervencinM80_10);
var lyr_LimiteIntervencinM80_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteIntervencinM80_10, 
                style: style_LimiteIntervencinM80_10,
                popuplayertitle: 'Limite Intervención M80',
                interactive: true,
                title: '<img src="styles/legend/LimiteIntervencinM80_10.png" /> Limite Intervención M80'
            });
var group_PAF = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'PAF'});
var group_EstacionesyParadas = new ol.layer.Group({
                                layers: [lyr_EstacinCaribe_8,],
                                fold: 'close',
                                title: 'Estaciones y Paradas'});
var group_Puentes = new ol.layer.Group({
                                layers: [lyr_PuenteLaIguan_7,],
                                fold: 'close',
                                title: 'Puentes'});
var group_Soterreados = new ol.layer.Group({
                                layers: [lyr_SoterradoSanGermn_5,lyr_SoterradoPatioTaller_6,],
                                fold: 'close',
                                title: 'Soterreados'});
var group_Muros = new ol.layer.Group({
                                layers: [lyr_MurosPatioTaller_3,lyr_MurosT1_4,],
                                fold: 'close',
                                title: 'Muros'});
var group_SETs = new ol.layer.Group({
                                layers: [lyr_SETs_2,],
                                fold: 'close',
                                title: 'SETs'});
var group_Predios = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Predios'});

lyr_EsriWorldImagery_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_SETs_2.setVisible(true);lyr_MurosPatioTaller_3.setVisible(true);lyr_MurosT1_4.setVisible(true);lyr_SoterradoSanGermn_5.setVisible(true);lyr_SoterradoPatioTaller_6.setVisible(true);lyr_PuenteLaIguan_7.setVisible(true);lyr_EstacinCaribe_8.setVisible(true);lyr_Bordes_vias_9.setVisible(true);lyr_LimiteIntervencinM80_10.setVisible(true);
var layersList = [lyr_EsriWorldImagery_0,lyr_GoogleSatellite_1,group_SETs,group_Muros,group_Soterreados,group_Puentes,group_EstacionesyParadas,lyr_Bordes_vias_9,lyr_LimiteIntervencinM80_10];
lyr_SETs_2.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_MurosPatioTaller_3.set('fieldAliases', {});
lyr_MurosT1_4.set('fieldAliases', {});
lyr_SoterradoSanGermn_5.set('fieldAliases', {});
lyr_SoterradoPatioTaller_6.set('fieldAliases', {});
lyr_PuenteLaIguan_7.set('fieldAliases', {'Obra': 'Obra', 'Subtramo': 'Subtramo', 'Estado': 'Estado', 'LinkDiseñ': 'LinkDiseñ', 'ModeloBIM': 'ModeloBIM', 'Imagen': 'Imagen', });
lyr_EstacinCaribe_8.set('fieldAliases', {'FID': 'FID', });
lyr_Bordes_vias_9.set('fieldAliases', {});
lyr_LimiteIntervencinM80_10.set('fieldAliases', {});
lyr_SETs_2.set('fieldImages', {'Nombre': 'TextEdit', });
lyr_MurosPatioTaller_3.set('fieldImages', {});
lyr_MurosT1_4.set('fieldImages', {});
lyr_SoterradoSanGermn_5.set('fieldImages', {});
lyr_SoterradoPatioTaller_6.set('fieldImages', {});
lyr_PuenteLaIguan_7.set('fieldImages', {'Obra': 'TextEdit', 'Subtramo': 'TextEdit', 'Estado': 'TextEdit', 'LinkDiseñ': 'TextEdit', 'ModeloBIM': 'TextEdit', 'Imagen': '', });
lyr_EstacinCaribe_8.set('fieldImages', {'FID': 'TextEdit', });
lyr_Bordes_vias_9.set('fieldImages', {});
lyr_LimiteIntervencinM80_10.set('fieldImages', {});
lyr_SETs_2.set('fieldLabels', {'Nombre': 'no label', });
lyr_MurosPatioTaller_3.set('fieldLabels', {});
lyr_MurosT1_4.set('fieldLabels', {});
lyr_SoterradoSanGermn_5.set('fieldLabels', {});
lyr_SoterradoPatioTaller_6.set('fieldLabels', {});
lyr_PuenteLaIguan_7.set('fieldLabels', {'Obra': 'header label - visible with data', 'Subtramo': 'inline label - always visible', 'Estado': 'inline label - always visible', 'LinkDiseñ': 'inline label - always visible', 'ModeloBIM': 'inline label - always visible', 'Imagen': 'no label', });
lyr_EstacinCaribe_8.set('fieldLabels', {'FID': 'no label', });
lyr_Bordes_vias_9.set('fieldLabels', {});
lyr_LimiteIntervencinM80_10.set('fieldLabels', {});
lyr_LimiteIntervencinM80_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});