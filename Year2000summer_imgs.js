//---UTF8---
//author-greatfir
//get messages of years or seasons in OneNote to get the correct filter constraint.
//Year 2000 winter

var area = ee.FeatureCollection("projects/ee-greatfir000/assets/boundary");

//images in landsat7 
var imgs0 = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2')
            .filterBounds(area),
    imgs01 = imgs0
            .filterDate('2000-05-01','2000-08-31')
            .filterMetadata('CLOUD_COVER','less_than',10),
    imgs02 = imgs0
            .filterDate('1999-05-01','1999-08-31')
            .filterMetadata('CLOUD_COVER','less_than',10)
            .filterMetadata('LANDSAT_PRODUCT_ID','contains','131034'),
    imgs03 = imgs0
            .filterDate('1999-05-01','1999-08-31')
            .filterMetadata('CLOUD_COVER','less_than',10)
            .filterMetadata('LANDSAT_PRODUCT_ID','contains','129036');
     
//images in landsat5
var imgs1 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2')
            .filterBounds(area),
    imgs11 = imgs1
            .filterDate('2000-05-01','2000-08-31')
            .filterMetadata('CLOUD_COVER','less_than',10),
    imgs12 = imgs1
            .filterDate('1999-05-01','1999-08-31')
            .filterMetadata('CLOUD_COVER','less_than',10)
            .filterMetadata('LANDSAT_PRODUCT_ID','contains','127034'),
    imgs13 = imgs1
            .filterDate('1999-05-01','1999-08-31')
            .filterMetadata('CLOUD_COVER','less_than',10)
            .filterMetadata('LANDSAT_PRODUCT_ID','contains','127035'),
    imgs14 = imgs1
            .filterDate('1999-05-01','1999-08-31')
            .filterMetadata('CLOUD_COVER','less_than',10)
            .filterMetadata('LANDSAT_PRODUCT_ID','contains','127036'),
    imgs15 = imgs1
            .filterDate('1999-05-01','1999-08-31')
            .filterMetadata('CLOUD_COVER','less_than',10)
            .filterMetadata('LANDSAT_PRODUCT_ID','contains','127037'),
    imgs16 = imgs1
            .filterDate('2001-05-01','2001-08-31')
            .filterMetadata('CLOUD_COVER','less_than',10)
            .filterMetadata('LANDSAT_PRODUCT_ID','contains','130035'),
    imgs17 = imgs1
            .filterDate('2001-05-01','2001-08-31')
            .filterMetadata('CLOUD_COVER','less_than',10)
            .filterMetadata('LANDSAT_PRODUCT_ID','contains','130036'),
    imgs18 = imgs1
            .filterDate('2001-05-01','2001-08-31')
            .filterMetadata('CLOUD_COVER','less_than',10)
            .filterMetadata('LANDSAT_PRODUCT_ID','contains','124033'),
    imgs19 = imgs1
            .filterDate('2001-05-01','2001-08-31')
            .filterMetadata('CLOUD_COVER','less_than',10)
            .filterMetadata('LANDSAT_PRODUCT_ID','contains','124034');

//show in web
Map.centerObject(area,5);
Map.addLayer(imgs01,{bands:['SR_B3','SR_B2','SR_B1'],min:8000,max:17000},'mian images of Landsat7');
Map.addLayer(imgs11,{bands:['SR_B3','SR_B2','SR_B1'],min:8000,max:17000},'mian images of Landsat5');
Map.addLayer(area,{color:'white'},'area');

// //know properties
// var property = imgs0.first().propertyNames();
// print('properties',property);

//query properties
var list0 = imgs0.aggregate_array('LANDSAT_PRODUCT_ID'),
    list01 = imgs01.aggregate_array('LANDSAT_PRODUCT_ID'),
    list02 = imgs02.aggregate_array('LANDSAT_PRODUCT_ID'),
    list03 = imgs03.aggregate_array('LANDSAT_PRODUCT_ID'),
    list1 = imgs1.aggregate_array('LANDSAT_PRODUCT_ID'),
    list11 = imgs11.aggregate_array('LANDSAT_PRODUCT_ID'),
    list12 = imgs12.aggregate_array('LANDSAT_PRODUCT_ID'),
    list13 = imgs13.aggregate_array('LANDSAT_PRODUCT_ID'),
    list14 = imgs14.aggregate_array('LANDSAT_PRODUCT_ID'),
    list15 = imgs15.aggregate_array('LANDSAT_PRODUCT_ID'),
    list16 = imgs16.aggregate_array('LANDSAT_PRODUCT_ID'),
    list17 = imgs17.aggregate_array('LANDSAT_PRODUCT_ID'),
    list18 = imgs18.aggregate_array('LANDSAT_PRODUCT_ID'),
    list19 = imgs19.aggregate_array('LANDSAT_PRODUCT_ID');

print('images ID list to select',list01,list02,list03,
    list11,list12,list13,list14,list15,list16,list18,list19);

//select images manually
//selected images ID
