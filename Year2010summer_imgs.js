//---UTF8---
//author-greatfir
//get messages of other years or seasons in OneNote to get the correct filter constraint.
//Year 2010 summer
var area = ee.FeatureCollection("projects/ee-greatfir000/assets/boundary");

var imgs0 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2')
             .filterBounds(area);
 
//mian images in 2010
var imgs1 = ee.ImageCollection(imgs0)
            .filterDate('2010-06-01','2010-08-31')
            .filterMetadata('CLOUD_COVER','less_than',12)
            .filterMetadata('CLOUD_COVER_LAND','less_than',12);

//query other images in 2009
  //WSR:126036,130036,129036,127032,127032,127033
  var imgs2 = ee.ImageCollection(imgs0)
              .filterDate('2009-05-01','2009-08-31')
              .filterMetadata('LANDSAT_PRODUCT_ID','contains','126036')
              .filterMetadata('CLOUD_COVER','less_than',50),
              
      imgs3 = ee.ImageCollection(imgs0)
              .filterDate('2009-05-01','2009-08-31')
              .filterMetadata('LANDSAT_PRODUCT_ID','contains','130036')
              .filterMetadata('CLOUD_COVER','less_than',10),
      
      imgs4 = ee.ImageCollection(imgs0)
              .filterDate('2009-05-01','2009-08-31')
              .filterMetadata('LANDSAT_PRODUCT_ID','contains','129036')
              .filterMetadata('CLOUD_COVER','less_than',10),
  
      imgs5 = ee.ImageCollection(imgs0)
              .filterDate('2009-05-01','2009-08-31')
              .filterMetadata('LANDSAT_PRODUCT_ID','contains','127032')
              .filterMetadata('CLOUD_COVER','less_than',10),
  
      imgs6 = ee.ImageCollection(imgs0)
              .filterDate('2009-05-01','2009-08-31')
              .filterMetadata('LANDSAT_PRODUCT_ID','contains','127033')
              .filterMetadata('CLOUD_COVER','less_than',10);

//show in web
Map.centerObject(area,5);
Map.addLayer(imgs0);
Map.addLayer(imgs2);
Map.addLayer(area,{color:'white'},'area');

//know properties
var property = imgs1.first().propertyNames();
print('properties',property);

//query properties
var list0 = imgs0.aggregate_array('LANDSAT_PRODUCT_ID'),
    list1 = imgs1.aggregate_array('LANDSAT_PRODUCT_ID'),
    list2 = imgs2.aggregate_array('LANDSAT_PRODUCT_ID'),
    list3 = imgs3.aggregate_array('LANDSAT_PRODUCT_ID'),
    list4 = imgs3.aggregate_array('LANDSAT_PRODUCT_ID'),
    list5 = imgs3.aggregate_array('LANDSAT_PRODUCT_ID'),
    list6 = imgs3.aggregate_array('LANDSAT_PRODUCT_ID');  

print('images ID list to select',list0,list1,list2,list3,list4,list5,list6);

//select images manually from list above

//selected images ID:
// LT05_L2SP_124032_20100815_20200823_02_T1
// LT05_L2SP_124033_20100815_20200824_02_T1
// LT05_L2SP_124034_20100815_20200823_02_T1
// LT05_L2SP_124035_20100730_20200823_02_T1
// LT05_L2SP_124036_20100628_20200824_02_T1
// LE07_L2SP_124037_20100706_20200911_02_T1
// LT05_L2SP_125032_20100822_20200823_02_T1
// LT05_L2SP_125033_20100619_20200823_02_T1
// LT05_L2SP_125034_20100619_20200824_02_T1
// LT05_L2SP_125035_20100705_20200823_02_T1
// LT05_L2SP_125036_20090702_20200827_02_T1
// LT05_L2SP_125037_20110708_20200822_02_T1
// LT05_L2SP_126031_20100728_20200824_02_T1
// LT05_L2SP_126032_20100728_20200823_02_T1
// LT05_L2SP_126033_20100728_20200823_02_T1
// LT05_L2SP_126034_20100728_20200824_02_T1
// LT05_L2SP_126035_20100728_20200823_02_T1
// LT05_L2SP_126036_20090709_20200827_02_T1
// LT05_L2SP_127032_20090630_20200827_02_T1
// LT05_L2SP_127033_20090630_20200827_02_T1
// LT05_L2SP_127034_20100617_20200823_02_T1
// LT05_L2SP_127035_20100617_20200823_02_T1
// LT05_L2SP_127036_20100617_20200823_02_T1
// LT05_L2SP_127037_20100617_20200823_02_T1
// LT05_L2SP_128031_20100624_20200824_02_T1
// LT05_L2SP_128032_20100726_20200823_02_T1
// LT05_L2SP_128033_20100726_20200823_02_T1
// LT05_L2SP_128034_20100710_20200824_02_T1
// LT05_L2SP_128035_20100710_20200823_02_T1
// LT05_L2SP_128036_20090723_20200827_02_T1
// LT05_L2SP_128037_20090605_20200827_02_T1
// LT05_L2SP_129031_20100701_20200823_02_T1
// LT05_L2SP_129032_20100717_20200824_02_T1
// LT05_L2SP_129033_20100701_20200823_02_T1
// LT05_L2SP_129034_20100717_20200823_02_T1
// LT05_L2SP_129035_20100717_20200823_02_T1
// LT05_L2SP_129036_20100717_20200824_02_T1
// LT05_L2SP_129036_20090612_20200827_02_T1
// LT05_L2SP_130031_20100809_20200823_02_T1
// LT05_L2SP_130032_20100724_20200823_02_T1
// LT05_L2SP_130033_20100825_20200823_02_T1
// LT05_L2SP_130034_20100622_20200823_02_T1
// LT05_L2SP_130035_20100825_20200823_02_T1
// LT05_L2SP_130036_20090806_20200827_02_T1
// LT05_L2SP_131034_20100715_20200823_02_T1
// LT05_L2SP_131035_20100731_20200823_02_T1
// LT05_L2SP_132034_20100519_20200824_02_T1
// LT05_L2SP_132035_20100807_20200823_02_T1
// LT05_L2SP_132036_20100807_20200823_02_T1
// LT05_L2SP_133034_20100814_20200824_02_T1
// LT05_L2SP_133035_20100729_20200823_02_T1