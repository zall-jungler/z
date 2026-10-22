var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_RTRWReproject_1 = new ol.format.GeoJSON();
var features_RTRWReproject_1 = format_RTRWReproject_1.readFeatures(json_RTRWReproject_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTRWReproject_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTRWReproject_1.addFeatures(features_RTRWReproject_1);
var lyr_RTRWReproject_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTRWReproject_1, 
                style: style_RTRWReproject_1,
                popuplayertitle: 'RTRW Reproject',
                interactive: true,
    title: 'RTRW Reproject<br />\
    <img src="styles/legend/RTRWReproject_1_0.png" /> Kawasan Danau<br />\
    <img src="styles/legend/RTRWReproject_1_1.png" /> Kawasan Hankam<br />\
    <img src="styles/legend/RTRWReproject_1_2.png" /> Kawasan Hutan Produksi Tetap<br />\
    <img src="styles/legend/RTRWReproject_1_3.png" /> Kawasan Pariwisata<br />\
    <img src="styles/legend/RTRWReproject_1_4.png" /> Kawasan Perlindungan Setempat<br />\
    <img src="styles/legend/RTRWReproject_1_5.png" /> Kawasan Permukiman<br />\
    <img src="styles/legend/RTRWReproject_1_6.png" /> Kawasan Pertanian Pangan<br />\
    <img src="styles/legend/RTRWReproject_1_7.png" /> Kawasan Peruntukan Industri<br />\
    <img src="styles/legend/RTRWReproject_1_8.png" /> Kawasan Peruntukan Lainnya<br />\
    <img src="styles/legend/RTRWReproject_1_9.png" /> Kawasan Peruntukan Umum Dan Sosial Lainnya<br />\
    <img src="styles/legend/RTRWReproject_1_10.png" /> Kawasan Sungai<br />\
    <img src="styles/legend/RTRWReproject_1_11.png" /> Kawasan Yang Memberikan Perlindungan Terhadap Bawahannya<br />\
    <img src="styles/legend/RTRWReproject_1_12.png" /> Perdagangan Dan Jasa<br />\
    <img src="styles/legend/RTRWReproject_1_13.png" /> Perkantoran<br />\
    <img src="styles/legend/RTRWReproject_1_14.png" /> Permukiman Perkotaan<br />\
    <img src="styles/legend/RTRWReproject_1_15.png" /> Pertanian Holtikultura<br />\
    <img src="styles/legend/RTRWReproject_1_16.png" /> Pertanian Pangan Lahan Basah<br />\
    <img src="styles/legend/RTRWReproject_1_17.png" /> Pertanian Pangan Lahan Kering<br />\
    <img src="styles/legend/RTRWReproject_1_18.png" /> Sempadan Pantai<br />\
    <img src="styles/legend/RTRWReproject_1_19.png" /> Sempadan Sungai<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_RTRWReproject_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_RTRWReproject_1];
lyr_RTRWReproject_1.set('fieldAliases', {'fid': 'fid', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'fcode': 'fcode', 'lcode': 'lcode', 'namobj': 'namobj', 'remark': 'remark', 'srs_id': 'srs_id', 'metadata': 'metadata', 'wadmkk': 'wadmkk', 'wadmpr': 'wadmpr', 'rtrkaw': 'rtrkaw', 'rtrpkk': 'rtrpkk', 'rtrppr': 'rtrppr', 'nothpd': 'nothpd', 'shape_leng': 'shape_leng', 'rtrsys': 'rtrsys', 'ruleid': 'ruleid', 'Rating': 'Rating', 'Nilai': 'Nilai', 'Value': 'Value', });
lyr_RTRWReproject_1.set('fieldImages', {'fid': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'fcode': 'TextEdit', 'lcode': 'TextEdit', 'namobj': 'TextEdit', 'remark': 'TextEdit', 'srs_id': 'TextEdit', 'metadata': 'TextEdit', 'wadmkk': 'TextEdit', 'wadmpr': 'TextEdit', 'rtrkaw': 'TextEdit', 'rtrpkk': 'TextEdit', 'rtrppr': 'TextEdit', 'nothpd': 'TextEdit', 'shape_leng': 'TextEdit', 'rtrsys': 'TextEdit', 'ruleid': 'TextEdit', 'Rating': 'TextEdit', 'Nilai': 'TextEdit', 'Value': 'TextEdit', });
lyr_RTRWReproject_1.set('fieldLabels', {'fid': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'fcode': 'no label', 'lcode': 'no label', 'namobj': 'no label', 'remark': 'no label', 'srs_id': 'no label', 'metadata': 'no label', 'wadmkk': 'no label', 'wadmpr': 'no label', 'rtrkaw': 'no label', 'rtrpkk': 'no label', 'rtrppr': 'no label', 'nothpd': 'no label', 'shape_leng': 'no label', 'rtrsys': 'no label', 'ruleid': 'no label', 'Rating': 'no label', 'Nilai': 'no label', 'Value': 'no label', });
lyr_RTRWReproject_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});