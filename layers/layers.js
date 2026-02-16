var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SoterradoSanGermn_1 = new ol.format.GeoJSON();
var features_SoterradoSanGermn_1 = format_SoterradoSanGermn_1.readFeatures(json_SoterradoSanGermn_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SoterradoSanGermn_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoterradoSanGermn_1.addFeatures(features_SoterradoSanGermn_1);
var lyr_SoterradoSanGermn_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SoterradoSanGermn_1, 
                style: style_SoterradoSanGermn_1,
                popuplayertitle: 'Soterrado San Germán',
                interactive: true,
                title: '<img src="styles/legend/SoterradoSanGermn_1.png" /> Soterrado San Germán'
            });
var format_PuenteLaIguan_2 = new ol.format.GeoJSON();
var features_PuenteLaIguan_2 = format_PuenteLaIguan_2.readFeatures(json_PuenteLaIguan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuenteLaIguan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuenteLaIguan_2.addFeatures(features_PuenteLaIguan_2);
var lyr_PuenteLaIguan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuenteLaIguan_2, 
                style: style_PuenteLaIguan_2,
                popuplayertitle: 'Puente La Iguaná',
                interactive: true,
                title: '<img src="styles/legend/PuenteLaIguan_2.png" /> Puente La Iguaná'
            });
var format_EstacinCaribe_3 = new ol.format.GeoJSON();
var features_EstacinCaribe_3 = format_EstacinCaribe_3.readFeatures(json_EstacinCaribe_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstacinCaribe_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacinCaribe_3.addFeatures(features_EstacinCaribe_3);
var lyr_EstacinCaribe_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstacinCaribe_3, 
                style: style_EstacinCaribe_3,
                popuplayertitle: 'Estación Caribe',
                interactive: true,
                title: '<img src="styles/legend/EstacinCaribe_3.png" /> Estación Caribe'
            });
var format_Inventario_T2_T3_2910_4 = new ol.format.GeoJSON();
var features_Inventario_T2_T3_2910_4 = format_Inventario_T2_T3_2910_4.readFeatures(json_Inventario_T2_T3_2910_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inventario_T2_T3_2910_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inventario_T2_T3_2910_4.addFeatures(features_Inventario_T2_T3_2910_4);
var lyr_Inventario_T2_T3_2910_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inventario_T2_T3_2910_4, 
                style: style_Inventario_T2_T3_2910_4,
                popuplayertitle: 'Inventario_T2_T3_2910',
                interactive: true,
    title: 'Inventario_T2_T3_2910<br />\
    <img src="styles/legend/Inventario_T2_T3_2910_4_0.png" /> Conservación<br />\
    <img src="styles/legend/Inventario_T2_T3_2910_4_1.png" /> Tala<br />\
    <img src="styles/legend/Inventario_T2_T3_2910_4_2.png" /> Trasplante<br />' });
var format_inventarioT1_rev_pred_5 = new ol.format.GeoJSON();
var features_inventarioT1_rev_pred_5 = format_inventarioT1_rev_pred_5.readFeatures(json_inventarioT1_rev_pred_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_inventarioT1_rev_pred_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_inventarioT1_rev_pred_5.addFeatures(features_inventarioT1_rev_pred_5);
var lyr_inventarioT1_rev_pred_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_inventarioT1_rev_pred_5, 
                style: style_inventarioT1_rev_pred_5,
                popuplayertitle: 'inventarioT1_rev_pred',
                interactive: true,
    title: 'inventarioT1_rev_pred<br />\
    <img src="styles/legend/inventarioT1_rev_pred_5_0.png" /> Conservacion<br />\
    <img src="styles/legend/inventarioT1_rev_pred_5_1.png" /> Ninguno<br />\
    <img src="styles/legend/inventarioT1_rev_pred_5_2.png" /> Tala<br />\
    <img src="styles/legend/inventarioT1_rev_pred_5_3.png" /> Trasplante<br />' });
var format_LimiteIntervencinM80_6 = new ol.format.GeoJSON();
var features_LimiteIntervencinM80_6 = format_LimiteIntervencinM80_6.readFeatures(json_LimiteIntervencinM80_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteIntervencinM80_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteIntervencinM80_6.addFeatures(features_LimiteIntervencinM80_6);
var lyr_LimiteIntervencinM80_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteIntervencinM80_6, 
                style: style_LimiteIntervencinM80_6,
                popuplayertitle: 'Limite Intervención M80',
                interactive: true,
                title: '<img src="styles/legend/LimiteIntervencinM80_6.png" /> Limite Intervención M80'
            });
var group_PAF = new ol.layer.Group({
                                layers: [lyr_Inventario_T2_T3_2910_4,lyr_inventarioT1_rev_pred_5,],
                                fold: 'open',
                                title: 'PAF'});
var group_Tramo1 = new ol.layer.Group({
                                layers: [lyr_EstacinCaribe_3,],
                                fold: 'open',
                                title: 'Tramo 1'});
var group_Puentes = new ol.layer.Group({
                                layers: [lyr_PuenteLaIguan_2,],
                                fold: 'close',
                                title: 'Puentes'});
var group_Soterreados = new ol.layer.Group({
                                layers: [lyr_SoterradoSanGermn_1,],
                                fold: 'open',
                                title: 'Soterreados'});
var group_Predios = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Predios'});

lyr_GoogleSatellite_0.setVisible(true);lyr_SoterradoSanGermn_1.setVisible(true);lyr_PuenteLaIguan_2.setVisible(true);lyr_EstacinCaribe_3.setVisible(true);lyr_Inventario_T2_T3_2910_4.setVisible(true);lyr_inventarioT1_rev_pred_5.setVisible(true);lyr_LimiteIntervencinM80_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Soterreados,group_Puentes,group_Tramo1,group_PAF,lyr_LimiteIntervencinM80_6];
lyr_SoterradoSanGermn_1.set('fieldAliases', {});
lyr_PuenteLaIguan_2.set('fieldAliases', {'Obra': 'Obra', 'Subtramo': 'Subtramo', 'Estado': 'Estado', 'LinkDiseñ': 'LinkDiseñ', 'ModeloBIM': 'ModeloBIM', });
lyr_EstacinCaribe_3.set('fieldAliases', {'FID': 'FID', });
lyr_Inventario_T2_T3_2910_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TRAMO': 'TRAMO', 'X': 'X', 'Y': 'Y', 'ID_arbol': 'ID_arbol', 'Nombre_com': 'Nombre_com', 'Nombre_cie': 'Nombre_cie', 'Tipo_Espac': 'Tipo_Espac', 'Estado_fit': 'Estado_fit', 'AIEV': 'AIEV', 'Cal_AIEV': 'Cal_AIEV', 'SUMA_DAP': 'SUMA_DAP', 'HT_M': 'HT_M', 'HC_M': 'HC_M', 'AB_INDIV': 'AB_INDIV', 'VT_m3_': 'VT_m3_', 'VC_m3_': 'VC_m3_', 'BIOMASA': 'BIOMASA', 'ESTADO_FEN': 'ESTADO_FEN', 'RIESGO': 'RIESGO', 'CAL_DAP': 'CAL_DAP', 'CAL_AIEV1': 'CAL_AIEV1', 'CAL_APE': 'CAL_APE', 'T': 'T', 'UVE__2025_': 'UVE__2025_', 'Trta_valid': 'Trta_valid', 'Retiro': 'Retiro', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'Inter_vali': 'Inter_vali', 'Obser': 'Obser', 'CATE_PATRI': 'CATE_PATRI', });
lyr_inventarioT1_rev_pred_5.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'ID_arbol': 'ID_arbol', 'Familia': 'Familia', 'Genero': 'Genero', 'NOM_CIEN': 'NOM_CIEN', 'NOM_COM': 'NOM_COM', 'Tipo_creci': 'Tipo_creci', 'Hábito': 'Hábito', 'Origen': 'Origen', 'Suma_DAP': 'Suma_DAP', 'G__m2_': 'G__m2_', 'HT__m_': 'HT__m_', 'HC__m_': 'HC__m_', 'VT__m3_': 'VT__m3_', 'VC__m3_': 'VC__m3_', 'ESTADO_FIT': 'ESTADO_FIT', 'CAL_DAP': 'CAL_DAP', 'AIEV': 'AIEV', 'CAL_AIEV': 'CAL_AIEV', 'CAL_APE': 'CAL_APE', 'T_UVE_': 'T_UVE_', 'T_SMLV_': 'T_SMLV_', 'Cate_Patri': 'Cate_Patri', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'Interferen': 'Interferen', 'Mat_Inmo': 'Mat_Inmo', 'Propietari': 'Propietari', 'Identif': 'Identif', 'Direccion': 'Direccion', 'Barrio': 'Barrio', 'Comuna': 'Comuna', 'Est_Permis': 'Est_Permis', 'Cobama': 'Cobama', 'Act_Fijo': 'Act_Fijo', 'Uso_Esp_Pu': 'Uso_Esp_Pu', 'Observacio': 'Observacio', 'ttamto_202': 'ttamto_202', });
lyr_LimiteIntervencinM80_6.set('fieldAliases', {});
lyr_SoterradoSanGermn_1.set('fieldImages', {});
lyr_PuenteLaIguan_2.set('fieldImages', {'Obra': 'TextEdit', 'Subtramo': 'TextEdit', 'Estado': 'TextEdit', 'LinkDiseñ': 'TextEdit', 'ModeloBIM': 'TextEdit', });
lyr_EstacinCaribe_3.set('fieldImages', {'FID': 'TextEdit', });
lyr_Inventario_T2_T3_2910_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'TRAMO': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'ID_arbol': 'TextEdit', 'Nombre_com': 'TextEdit', 'Nombre_cie': 'TextEdit', 'Tipo_Espac': 'TextEdit', 'Estado_fit': 'TextEdit', 'AIEV': 'TextEdit', 'Cal_AIEV': 'TextEdit', 'SUMA_DAP': 'TextEdit', 'HT_M': 'TextEdit', 'HC_M': 'TextEdit', 'AB_INDIV': 'TextEdit', 'VT_m3_': 'TextEdit', 'VC_m3_': 'TextEdit', 'BIOMASA': 'TextEdit', 'ESTADO_FEN': 'TextEdit', 'RIESGO': 'TextEdit', 'CAL_DAP': 'TextEdit', 'CAL_AIEV1': 'TextEdit', 'CAL_APE': 'TextEdit', 'T': 'TextEdit', 'UVE__2025_': 'TextEdit', 'Trta_valid': 'TextEdit', 'Retiro': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'Inter_vali': 'TextEdit', 'Obser': 'TextEdit', 'CATE_PATRI': 'TextEdit', });
lyr_inventarioT1_rev_pred_5.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'ID_arbol': 'TextEdit', 'Familia': 'TextEdit', 'Genero': 'TextEdit', 'NOM_CIEN': 'TextEdit', 'NOM_COM': 'TextEdit', 'Tipo_creci': 'TextEdit', 'Hábito': 'TextEdit', 'Origen': 'TextEdit', 'Suma_DAP': 'TextEdit', 'G__m2_': 'TextEdit', 'HT__m_': 'TextEdit', 'HC__m_': 'TextEdit', 'VT__m3_': 'TextEdit', 'VC__m3_': 'TextEdit', 'ESTADO_FIT': 'TextEdit', 'CAL_DAP': 'TextEdit', 'AIEV': 'TextEdit', 'CAL_AIEV': 'TextEdit', 'CAL_APE': 'TextEdit', 'T_UVE_': 'TextEdit', 'T_SMLV_': 'TextEdit', 'Cate_Patri': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'Interferen': 'TextEdit', 'Mat_Inmo': 'TextEdit', 'Propietari': 'TextEdit', 'Identif': 'TextEdit', 'Direccion': 'TextEdit', 'Barrio': 'TextEdit', 'Comuna': 'TextEdit', 'Est_Permis': 'TextEdit', 'Cobama': 'TextEdit', 'Act_Fijo': 'TextEdit', 'Uso_Esp_Pu': 'TextEdit', 'Observacio': 'TextEdit', 'ttamto_202': 'TextEdit', });
lyr_LimiteIntervencinM80_6.set('fieldImages', {});
lyr_SoterradoSanGermn_1.set('fieldLabels', {});
lyr_PuenteLaIguan_2.set('fieldLabels', {'Obra': 'header label - visible with data', 'Subtramo': 'inline label - always visible', 'Estado': 'inline label - always visible', 'LinkDiseñ': 'inline label - always visible', 'ModeloBIM': 'inline label - always visible', });
lyr_EstacinCaribe_3.set('fieldLabels', {'FID': 'no label', });
lyr_Inventario_T2_T3_2910_4.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'TRAMO': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'ID_arbol': 'inline label - always visible', 'Nombre_com': 'inline label - always visible', 'Nombre_cie': 'inline label - always visible', 'Tipo_Espac': 'inline label - always visible', 'Estado_fit': 'inline label - always visible', 'AIEV': 'inline label - always visible', 'Cal_AIEV': 'inline label - always visible', 'SUMA_DAP': 'inline label - always visible', 'HT_M': 'inline label - always visible', 'HC_M': 'inline label - always visible', 'AB_INDIV': 'inline label - always visible', 'VT_m3_': 'inline label - always visible', 'VC_m3_': 'inline label - always visible', 'BIOMASA': 'inline label - always visible', 'ESTADO_FEN': 'inline label - always visible', 'RIESGO': 'inline label - always visible', 'CAL_DAP': 'inline label - always visible', 'CAL_AIEV1': 'inline label - always visible', 'CAL_APE': 'inline label - always visible', 'T': 'inline label - always visible', 'UVE__2025_': 'inline label - always visible', 'Trta_valid': 'inline label - always visible', 'Retiro': 'inline label - always visible', 'POINT_X': 'inline label - always visible', 'POINT_Y': 'inline label - always visible', 'Inter_vali': 'inline label - always visible', 'Obser': 'inline label - always visible', 'CATE_PATRI': 'inline label - always visible', });
lyr_inventarioT1_rev_pred_5.set('fieldLabels', {'latitude': 'inline label - always visible', 'longitude': 'inline label - always visible', 'ID_arbol': 'inline label - always visible', 'Familia': 'inline label - always visible', 'Genero': 'inline label - always visible', 'NOM_CIEN': 'inline label - always visible', 'NOM_COM': 'inline label - always visible', 'Tipo_creci': 'inline label - always visible', 'Hábito': 'inline label - always visible', 'Origen': 'inline label - always visible', 'Suma_DAP': 'inline label - always visible', 'G__m2_': 'inline label - always visible', 'HT__m_': 'inline label - always visible', 'HC__m_': 'inline label - always visible', 'VT__m3_': 'inline label - always visible', 'VC__m3_': 'inline label - always visible', 'ESTADO_FIT': 'inline label - always visible', 'CAL_DAP': 'inline label - always visible', 'AIEV': 'inline label - always visible', 'CAL_AIEV': 'inline label - always visible', 'CAL_APE': 'inline label - always visible', 'T_UVE_': 'inline label - always visible', 'T_SMLV_': 'inline label - always visible', 'Cate_Patri': 'inline label - always visible', 'POINT_X': 'inline label - always visible', 'POINT_Y': 'inline label - always visible', 'Interferen': 'inline label - always visible', 'Mat_Inmo': 'inline label - always visible', 'Propietari': 'inline label - always visible', 'Identif': 'inline label - always visible', 'Direccion': 'inline label - always visible', 'Barrio': 'inline label - always visible', 'Comuna': 'inline label - always visible', 'Est_Permis': 'inline label - always visible', 'Cobama': 'inline label - always visible', 'Act_Fijo': 'inline label - always visible', 'Uso_Esp_Pu': 'inline label - always visible', 'Observacio': 'inline label - always visible', 'ttamto_202': 'inline label - visible with data', });
lyr_LimiteIntervencinM80_6.set('fieldLabels', {});
lyr_LimiteIntervencinM80_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});