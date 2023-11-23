//---UTF-8---
//author-others taoabao pay
var table = ee.FeatureCollection("projects/ee-greatfir000/assets/ROI");
var roi = table;

var col_row = ee.ImageCollection("WORLDCLIM/V1/MONTHLY")
                // .filterDate('2021-1-1', '2022-1-1')

print('col_row',col_row)

var tmin = col_row.select('tmin').first().multiply(0.1)
var tmax = col_row.select('tmax').first().multiply(0.1)

var dataset_tem = ee.ImageCollection("ECMWF/ERA5/MONTHLY")
                 .filterDate('2019-6-1', '2020-6-1')//只能是2019年的  
                 .mean();   
var temperature = dataset_tem.select('mean_2m_air_temperature').clip(roi)
var precipitation = dataset_tem.select('total_precipitation').clip(roi)

//输出最高温度
Export.image.toDrive({
  image : tmax,
  description : "tmax",
  fileNamePrefix : "tmax",
  folder:"tmax",
  scale : 1000,
  region : roi,
  crs : "EPSG:4326",
  maxPixels : 1e13
})
//输出最低温度
Export.image.toDrive({
  image : tmin,
  description : "tmin",
  fileNamePrefix : "tmin",
  folder:"tmin",
  scale : 1000,
  region : roi,
  crs : "EPSG:4326",
  maxPixels : 1e13
})
//输出平均温度
Export.image.toDrive({
  image : temperature,
  description : "temperature",
  fileNamePrefix : "temperature",
  folder:"temperature",
  scale : 1000,
  region : roi,
  crs : "EPSG:4326",
  maxPixels : 1e13
})
//输出降水
Export.image.toDrive({
  image : precipitation,
  description : "precipitation",
  fileNamePrefix : "precipitation",
  folder:"precipitation",
  scale : 1000,
  region : roi,
  crs : "EPSG:4326",
  maxPixels : 1e13
})






