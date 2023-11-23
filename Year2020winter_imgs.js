//---UTF8---
//author-greatfir
//get messages of years or seasons in OneNote to get the correct filter constraint.
//Year 2020 winter

var area = ee.FeatureCollection('projects/ee-greatfir000/assets/boundary');

var imgs0 = ee.ImageCollection("LANDSAT/LC08/C02/T1_L2")
            .filterBounds(area)
            .filterDate('2019-12-01','2020-03-01')
            .filterMetadata('CLOUD_COVER','less_than',10)
            
            