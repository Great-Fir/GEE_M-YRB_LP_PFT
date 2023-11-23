//---UTF8---
//author-greatfir
//get messages of other years or seasons in OneNote to get the correct filter constraint.
//Year 2000 winter
var area = ee.FeatureCollection("projects/ee-greatfir000/assets/boundary");

//images in landsat7 
var imgs0 = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2')
            .filterBounds(area)
            .filterDate('2000-11-01','2001-03-01')
            .filterMetadata('CLOUD_COVER','less_than',10)
            .filterMetadata('CLOUD_COVER_LAND','less_than',12);

//images in landsat5
var imgs1 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2')
            .filterBounds(area)
            .filterDate('2000-11-01','2001-03-01')
            .filterMetadata('CLOUD_COVER','less_than',10)
            .filterMetadata('CLOUD_COVER_LAND','less_than',12);
//show in web
Map.centerObject(area,5);
Map.addLayer(imgs0);
Map.addLayer(imgs1);
Map.addLayer(area,{color:'white'},'area');

// //know properties
// var property = imgs0.first().propertyNames();
// print('properties',property);

//query properties
var list0 = imgs0.aggregate_array('LANDSAT_PRODUCT_ID'),
    list1 = imgs1.aggregate_array('LANDSAT_PRODUCT_ID');

print('images ID list to select',list0,list1);

//select images manually from list above
//selected images ID
// LE07_L2SP_124032_20010219_20200917_02_T1
// LT05_L2SP_124033_20001123_20200906_02_T1
// LE07_L2SP_124034_20010102_20200917_02_T1
// LE07_L2SP_124035_20010102_20200917_02_T1
// LT05_L2SP_124036_20010126_20200906_02_T1
// LE07_L2SP_124037_20010219_20200917_02_T1
// LT05_L2SP_125032_20010117_20200906_02_T1
// LT05_L2SP_125033_20010117_20200906_02_T1
// LT05_L2SP_125034_20010117_20200906_02_T1
// LT05_L2SP_125035_20010117_20200906_02_T1
// LE07_L2SP_125036_20001224_20200917_02_T1
// LE07_L2SP_125037_20010210_20200917_02_T1
// LT05_L2SP_126031_20010209_20200906_02_T1
// LT05_L2SP_126032_20010209_20200906_02_T1
// LE07_L2SP_126033_20010201_20200917_02_T1
// LE07_L2SP_126034_20010201_20200917_02_T1
// LE07_L2SP_126035_20010116_20200917_02_T1
// LT05_L2SP_126036_20010209_20200906_02_T1
// LE07_L2SP_126037_20010217_20200917_02_T1
// LT05_L2SP_127031_20010115_20200906_02_T1
// LT05_L2SP_127032_20010115_20200906_02_T1
// LT05_L2SP_127033_20001230_20200906_02_T1
// LT05_L2SP_127034_20001230_20200906_02_T1
// LT05_L2SP_127035_20001230_20200906_02_T1
// LT05_L2SP_127036_20010115_20200906_02_T1
// LT05_L2SP_127037_20001214_20200906_02_T1
// LE07_L2SP_128031_20010114_20200917_02_T1
// LE07_L2SP_128032_20010114_20200917_02_T1
// LT05_L2SP_128033_20001221_20200906_02_T1
// LT05_L2SP_128034_20001221_20200906_02_T1
// LT05_L2SP_128035_20001221_20200906_02_T1
// LE07_L2SP_128036_20010114_20200917_02_T1
// LT05_L2SP_129031_20010113_20200906_02_T1
// LE07_L2SP_129032_20010121_20200917_02_T1
// LE07_L2SP_129033_20001220_20200917_02_T1
// LE07_L2SP_129034_20001220_20200917_02_T1
// LE07_L2SP_129035_20001220_20200917_02_T1
// LE07_L2SP_129036_20001220_20200917_02_T1
// LT05_L2SP_130031_20010104_20200906_02_T1
// LE07_L2SP_130032_20010128_20200917_02_T1
// LT05_L2SP_130033_20010104_20200906_02_T1
// LT05_L2SP_130034_20010104_20200906_02_T1
// LT05_L2SP_130035_20010104_20200906_02_T1
// LT05_L2SP_130036_20010104_20200906_02_T1
// LT05_L2SP_131034_20010228_20200906_02_T1
// LT05_L2SP_131035_20010111_20200906_02_T1
// LT05_L2SP_131036_20010111_20200906_02_T1
// LE07_L2SP_132034_20010110_20200917_02_T1
// LE07_L2SP_132035_20010110_20200917_02_T1
// LT05_L2SP_132036_20010118_20200906_02_T1
// LT05_L2SP_133034_20010109_20200906_02_T1
// LT05_L2SP_133035_20010109_20200906_02_T1