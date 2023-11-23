//---UTF-8---
//author-rensiqing
/*
//1 add images MCD12Q1.061 MODIS Land Cover Type Yearly Global 500m
var dataset = ee.ImageCollection('MODIS/061/MCD12Q1');
var igbpLandCover = dataset.select('LC_Type1');
var igbpLandCoverVis = {
  min: 1.0,
  max: 17.0,
  palette: [
    '05450a', '086a10', '54a708', '78d203', '009900', 'c6b044', 'dcd159',
    'dade48', 'fbff13', 'b6ff05', '27ff87', 'c24f44', 'a5a5a5', 'ff6d4c',
    '69fff8', 'f9ffa4', '1c0dff'
  ],
};
Map.setCenter(108,37,6);
Map.addLayer(igbpLandCover, igbpLandCoverVis, 'IGBP Land Cover');

//add middle yellow river basin
var boundary = ee.FeatureCollection('projects/ee-greatfir000/assets/boundary_midYellowRiverbasin')
Map.addLayer(boundary)

//add uploaded cropland points
var cropland = ee.FeatureCollection('projects/ee-greatfir000/assets/choose_points_cropland');
Map.addLayer(cropland)
*/


//2
var dataset = ee.ImageCollection('MODIS/006/MCD12Q1');
var igbpLandCover = dataset.select('LC_Type1');
var igbpLandCoverVis = {
  min: 1.0,
  max: 17.0,
  palette: [
    '05450a', '086a10', '54a708', '78d203', '009900', 'c6b044', 'dcd159',
    'dade48', 'fbff13', 'b6ff05', '27ff87', 'c24f44', 'a5a5a5', 'ff6d4c',
    '69fff8', 'f9ffa4', '1c0dff'
  ],
};
Map.setCenter(108, 36, 8);
Map.addLayer(igbpLandCover, igbpLandCoverVis, 'IGBP Land Cover');

var boundary = ee.FeatureCollection('projects/ee-greatfir000/assets/boundary_midYellowRiverbasin')
Map.addLayer(boundary);

var cropland = ee.FeatureCollection('projects/ee-greatfir000/assets/choose_points_cropland');
Map.addLayer(cropland);