//---UTF8---
//author-greatfir
//show single image demo
var area = ee.FeatureCollection("projects/ee-greatfir000/assets/boundary");

var img = ee.Image('LANDSAT/LT05/C02/T1_L2/LT05_124037_20010110');//query name different from 'LANDSAT PRODUCT ID'


//show in web
Map.centerObject(area,5);
Map.addLayer(img);
Map.addLayer(area,{color:'white'},'area');

//know properties
var property = img.propertyNames();
print('properties',property);
print(img)
//select images manually from list above

