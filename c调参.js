//---UTF-8---
//author-haomenglu
//����
var points = ee.FeatureCollection("users/Nah/10Group/Points_all0501");
var ROI1 = ee.FeatureCollection('users/Nah/bound_TP/HH_newmake1').merge(ee.FeatureCollection('users/Nah/bound_TP/ChaiDaMu'))
var ROI3 = ee.FeatureCollection('users/Nah/Cropland_forclassify/CL2021_HC')
var ROI2 = ee.FeatureCollection('users/Nah/bound_TP/TPplus')
//print(points,'points')

//var bands1 = ['NDVI_0407','NDVI_0423','NDVI_0509','NDVI_0525','NDVI_0610','NDVI_0626','NDVI_0712','NDVI_0728','NDVI_0813','NDVI_0829','NDVI_0914','NDVI_0930','EVI_0407','EVI_0423','EVI_0509','EVI_0525','EVI_0610','EVI_0626','EVI_0712','EVI_0728','EVI_0813','EVI_0829','EVI_0914','EVI_0930']
var bands1 = ee.List(['NDVI_0407', 'NDVI_0423', 'NDVI_0509', 'NDVI_0525', 'NDVI_0610', 'NDVI_0626', 'NDVI_0712', 'NDVI_0728', 'NDVI_0813', 'NDVI_0829', 'NDVI_0914', 'NDVI_0930', 'EVI_0407', 'EVI_0423', 'EVI_0509', 'EVI_0525', 'EVI_0610', 'EVI_0626', 'EVI_0712', 'EVI_0728', 'EVI_0813', 'EVI_0829', 'EVI_0914', 'EVI_0930']);
var bands2 = ['elevation', 'slope', 'aspect', 'hillshade'];
var bands3 = ['tavg_01', 'tavg_02', 'tavg_03', 'tavg_04', 'tavg_05', 'tavg_06', 'tavg_07', 'tavg_08', 'tavg_09', 'tavg_10', 'tavg_11', 'tavg_12']
var bands4 = ['tmin_01', 'tmin_02', 'tmin_03', 'tmin_04', 'tmin_05', 'tmin_06', 'tmin_07', 'tmin_08', 'tmin_09', 'tmin_10', 'tmin_11', 'tmin_12']
var bands5 = ['tmax_01', 'tmax_02', 'tmax_03', 'tmax_04', 'tmax_05', 'tmax_06', 'tmax_07', 'tmax_08', 'tmax_09', 'tmax_10', 'tmax_11', 'tmax_12']
var bands6 = ['prec_01', 'prec_02', 'prec_03', 'prec_04', 'prec_05', 'prec_06', 'prec_07', 'prec_08', 'prec_09', 'prec_10', 'prec_11', 'prec_12', 'SR', 'pop']
var bands = bands1.cat(bands2).cat(bands3).cat(bands4).cat(bands5).cat(bands6)
//print(bands,'bands')

////////////////////////////MODIS NDVI EVI/////////////////////////////////////////////////////////
// var dataset = ee.ImageCollection("MODIS/006/MOD13Q1")
//         .filter(ee.Filter.date('2021-04-01', '2021-10-01'))
//         //.filterBounds(ROI)
// var data = dataset.select(bands)   
//print(data,'data')
var ndvi1 = ee.Image('MODIS/006/MOD13Q1/2021_04_07').select('NDVI').rename('NDVI_0407')
var ndvi2 = ee.Image('MODIS/006/MOD13Q1/2021_04_23').select('NDVI').rename('NDVI_0423')
var ndvi3 = ee.Image('MODIS/006/MOD13Q1/2021_05_09').select('NDVI').rename('NDVI_0509')
var ndvi4 = ee.Image('MODIS/006/MOD13Q1/2021_05_25').select('NDVI').rename('NDVI_0525')
var ndvi5 = ee.Image('MODIS/006/MOD13Q1/2021_06_10').select('NDVI').rename("NDVI_0610")
var ndvi6 = ee.Image('MODIS/006/MOD13Q1/2021_06_26').select('NDVI').rename('NDVI_0626')
var ndvi7 = ee.Image('MODIS/006/MOD13Q1/2021_07_12').select('NDVI').rename('NDVI_0712')
var ndvi8 = ee.Image('MODIS/006/MOD13Q1/2021_07_28').select('NDVI').rename('NDVI_0728')
var ndvi9 = ee.Image('MODIS/006/MOD13Q1/2021_08_13').select('NDVI').rename('NDVI_0813')
var ndvi10 = ee.Image('MODIS/006/MOD13Q1/2021_08_29').select('NDVI').rename('NDVI_0829')
var ndvi11 = ee.Image('MODIS/006/MOD13Q1/2021_09_14').select('NDVI').rename('NDVI_0914')
var ndvi12 = ee.Image('MODIS/006/MOD13Q1/2021_09_30').select('NDVI').rename('NDVI_0930')
////////////////////evi///////////////////////////////////////////////////////////////
var evi1 = ee.Image('MODIS/006/MOD13Q1/2021_04_07').select('EVI').rename('EVI_0407')
var evi2 = ee.Image('MODIS/006/MOD13Q1/2021_04_23').select('EVI').rename('EVI_0423')
var evi3 = ee.Image('MODIS/006/MOD13Q1/2021_05_09').select('EVI').rename('EVI_0509')
var evi4 = ee.Image('MODIS/006/MOD13Q1/2021_05_25').select('EVI').rename('EVI_0525')
var evi5 = ee.Image('MODIS/006/MOD13Q1/2021_06_10').select('EVI').rename('EVI_0610')
var evi6 = ee.Image('MODIS/006/MOD13Q1/2021_06_26').select('EVI').rename('EVI_0626')
var evi7 = ee.Image('MODIS/006/MOD13Q1/2021_07_12').select('EVI').rename('EVI_0712')
var evi8 = ee.Image('MODIS/006/MOD13Q1/2021_07_28').select('EVI').rename('EVI_0728')
var evi9 = ee.Image('MODIS/006/MOD13Q1/2021_08_13').select('EVI').rename('EVI_0813')
var evi10 = ee.Image('MODIS/006/MOD13Q1/2021_08_29').select('EVI').rename('EVI_0829')
var evi11 = ee.Image('MODIS/006/MOD13Q1/2021_09_14').select('EVI').rename('EVI_0914')
var evi12 = ee.Image('MODIS/006/MOD13Q1/2021_09_30').select('EVI').rename('EVI_0930')
var image1 = ee.Image([ndvi1, ndvi2, ndvi3, ndvi4, ndvi5, ndvi6, ndvi7, ndvi8, ndvi9, ndvi10, ndvi11, ndvi12, evi1, evi2, evi3, evi4, evi5, evi6, evi7, evi8, evi9, evi10, evi11, evi12]);
//(image1,'image1') 
///////////////////////////dem///////////////////
var dem = ee.Image("USGS/SRTMGL1_003")
var dem_4 = ee.Terrain.products(dem);
var image2 = image1.addBands(dem_4)
//print(image2,'image2')
///////////////////////////////////////////////WorldClim////////////////////////
////////////////////////////////////tavg///////////////////////////////////////////////////////////////////////////
var tavg1 = ee.Image("WORLDCLIM/V1/MONTHLY/01").select('tavg').rename('tavg_01')
var tavg2 = ee.Image("WORLDCLIM/V1/MONTHLY/02").select('tavg').rename('tavg_02')
var tavg3 = ee.Image("WORLDCLIM/V1/MONTHLY/03").select('tavg').rename('tavg_03')
var tavg4 = ee.Image("WORLDCLIM/V1/MONTHLY/04").select('tavg').rename('tavg_04')
var tavg5 = ee.Image("WORLDCLIM/V1/MONTHLY/05").select('tavg').rename('tavg_05')
var tavg6 = ee.Image("WORLDCLIM/V1/MONTHLY/06").select('tavg').rename('tavg_06')
var tavg7 = ee.Image("WORLDCLIM/V1/MONTHLY/07").select('tavg').rename('tavg_07')
var tavg8 = ee.Image("WORLDCLIM/V1/MONTHLY/08").select('tavg').rename('tavg_08')
var tavg9 = ee.Image("WORLDCLIM/V1/MONTHLY/09").select('tavg').rename('tavg_09')
var tavg10 = ee.Image("WORLDCLIM/V1/MONTHLY/10").select('tavg').rename('tavg_10')
var tavg11 = ee.Image("WORLDCLIM/V1/MONTHLY/11").select('tavg').rename('tavg_11')
var tavg12 = ee.Image("WORLDCLIM/V1/MONTHLY/12").select('tavg').rename('tavg_12')
var image3 = image2.addBands([tavg1, tavg2, tavg3, tavg4, tavg5, tavg6, tavg7, tavg8, tavg9, tavg10, tavg11, tavg12])
//print(image3,'image3')
///////////////////////////tmin/////////////////////////////////////
var tmin1 = ee.Image("WORLDCLIM/V1/MONTHLY/01").select('tmin').rename('tmin_01')
var tmin2 = ee.Image("WORLDCLIM/V1/MONTHLY/02").select('tmin').rename('tmin_02')
var tmin3 = ee.Image("WORLDCLIM/V1/MONTHLY/03").select('tmin').rename('tmin_03')
var tmin4 = ee.Image("WORLDCLIM/V1/MONTHLY/04").select('tmin').rename('tmin_04')
var tmin5 = ee.Image("WORLDCLIM/V1/MONTHLY/05").select('tmin').rename('tmin_05')
var tmin6 = ee.Image("WORLDCLIM/V1/MONTHLY/06").select('tmin').rename('tmin_06')
var tmin7 = ee.Image("WORLDCLIM/V1/MONTHLY/07").select('tmin').rename('tmin_07')
var tmin8 = ee.Image("WORLDCLIM/V1/MONTHLY/08").select('tmin').rename('tmin_08')
var tmin9 = ee.Image("WORLDCLIM/V1/MONTHLY/09").select('tmin').rename('tmin_09')
var tmin10 = ee.Image("WORLDCLIM/V1/MONTHLY/10").select('tmin').rename('tmin_10')
var tmin11 = ee.Image("WORLDCLIM/V1/MONTHLY/11").select('tmin').rename('tmin_11')
var tmin12 = ee.Image("WORLDCLIM/V1/MONTHLY/12").select('tmin').rename('tmin_12')
var image4 = image3.addBands([tmin1, tmin2, tmin3, tmin4, tmin5, tmin6, tmin7, tmin8, tmin9, tmin10, tmin11, tmin12])
/////////////////////tmax/////////////////////////////////////////////////////////////////////////////////////////////
var tmax1 = ee.Image("WORLDCLIM/V1/MONTHLY/01").select('tmax').rename('tmax_01')
var tmax2 = ee.Image("WORLDCLIM/V1/MONTHLY/02").select('tmax').rename('tmax_02')
var tmax3 = ee.Image("WORLDCLIM/V1/MONTHLY/03").select('tmax').rename('tmax_03')
var tmax4 = ee.Image("WORLDCLIM/V1/MONTHLY/04").select('tmax').rename('tmax_04')
var tmax5 = ee.Image("WORLDCLIM/V1/MONTHLY/05").select('tmax').rename('tmax_05')
var tmax6 = ee.Image("WORLDCLIM/V1/MONTHLY/06").select('tmax').rename('tmax_06')
var tmax7 = ee.Image("WORLDCLIM/V1/MONTHLY/07").select('tmax').rename('tmax_07')
var tmax8 = ee.Image("WORLDCLIM/V1/MONTHLY/08").select('tmax').rename('tmax_08')
var tmax9 = ee.Image("WORLDCLIM/V1/MONTHLY/09").select('tmax').rename('tmax_09')
var tmax10 = ee.Image("WORLDCLIM/V1/MONTHLY/10").select('tmax').rename('tmax_10')
var tmax11 = ee.Image("WORLDCLIM/V1/MONTHLY/11").select('tmax').rename('tmax_11')
var tmax12 = ee.Image("WORLDCLIM/V1/MONTHLY/12").select('tmax').rename('tmax_12')
var image5 = image4.addBands([tmax1, tmax2, tmax3, tmax4, tmax5, tmax6, tmax7, tmax8, tmax9, tmax10, tmax11, tmax12])
/////////////////////////////prec//////////////////////
var prec1 = ee.Image("WORLDCLIM/V1/MONTHLY/01").select('prec').rename('prec_01')
var prec2 = ee.Image("WORLDCLIM/V1/MONTHLY/02").select('prec').rename('prec_02')
var prec3 = ee.Image("WORLDCLIM/V1/MONTHLY/03").select('prec').rename('prec_03')
var prec4 = ee.Image("WORLDCLIM/V1/MONTHLY/04").select('prec').rename('prec_04')
var prec5 = ee.Image("WORLDCLIM/V1/MONTHLY/05").select('prec').rename('prec_05')
var prec6 = ee.Image("WORLDCLIM/V1/MONTHLY/06").select('prec').rename('prec_06')
var prec7 = ee.Image("WORLDCLIM/V1/MONTHLY/07").select('prec').rename('prec_07')
var prec8 = ee.Image("WORLDCLIM/V1/MONTHLY/08").select('prec').rename('prec_08')
var prec9 = ee.Image("WORLDCLIM/V1/MONTHLY/09").select('prec').rename('prec_09')
var prec10 = ee.Image("WORLDCLIM/V1/MONTHLY/10").select('prec').rename('prec_10')
var prec11 = ee.Image("WORLDCLIM/V1/MONTHLY/11").select('prec').rename('prec_11')
var prec12 = ee.Image("WORLDCLIM/V1/MONTHLY/12").select('prec').rename('prec_12')
var image6 = image5.addBands([prec1, prec2, prec3, prec4, prec5, prec6, prec7, prec8, prec9, prec10, prec11, prec12])
var SR = ee.Image('users/Nah/Annual_SR_ssp119_mean_2001_2020').rename('SR')
var pop = ee.Image('WorldPop/GP/100m/pop/CHN_2020').rename('pop')
var image = image6.addBands(SR).addBands(pop)
//image = image.clip(ROI3)
//print(image,'image')
// ////////////////////////////for loop//////////////////////
var training = image.sampleRegions({
    collection: points,                   //////////////////
    properties: ['ID0', 'Group'],
    scale: 250
});
//print(training,'training')
var trainAccuracy_list1 = ee.List([0]);
var trainKappa_list1 = ee.List([0]);
var testAccuracy_list1 = ee.List([0]);
var testKappa_list1 = ee.List([0]);
//var averageAcc=ee.List([0]);
var testAcc = ee.List([0]);
var testKappa = ee.List([0])
//var mLP=4;
var tree = 550;
//sp=1,8  mlp=4 bF=0.5,1 seed=95
var seed = 0
for (seed; seed < 100; seed = seed + 10) {
    for (var SP = 0; SP < 11; SP = SP + 1) {
        //for(var bF=0.5;bF<1.5;bF=bF+0.2){
        var sumAcc = ee.Array([0]);
        var sumKappa = ee.Array([0])
        for (var group = 1; group < 11; group = group + 1) {
            var trainpoints = training.filter(ee.Filter.neq("Group", group))
            var testpoints = training.filter(ee.Filter.eq("Group", group))
            // print('trainpoints',trainpoints)
            // print('testpoints',testpoints)
            var classifier_RF = ee.Classifier.smileRandomForest({ "numberOfTrees": 510, "minLeafPopulation": 4, "seed": seed, "variablesPerSplit": SP })
                .train({ features: trainpoints, classProperty: 'ID0', inputProperties: bands })//
            var explain = classifier_RF.explain();
            // var trainAccuracy = classifier_RF.confusionMatrix();  
            // trainAccuracy_list1=trainAccuracy_list1.add(ee.List([trainAccuracy.accuracy(),tree,seed,group]));  
            // trainKappa_list1=trainKappa_list1.add(ee.List([trainAccuracy.kappa(),tree,seed,group]));  
            //print('Training overall accuracy'+tree+seed,trainAccuracy.accuracy());
            //print('Training overall kappa'+tree+seed, trainAccuracy.kappa());
            /////////minLeafPopulation (Integer, default: 1):bagFraction (Float, default: 0.5):maxNodes (Integer, default: null):
            var testingClass = testpoints.classify(classifier_RF);
            var confusionMatrix_RF = testingClass.errorMatrix('ID0', 'classification');
            // testAccuracy_list1=testAccuracy_list1.add(ee.List([confusionMatrix_RF.accuracy(),seed,vPS,group]));
            // testKappa_list1=testKappa_list1.add(ee.List([confusionMatrix_RF.kappa(),seed,vPS,group]));
            sumAcc = sumAcc.add(ee.List([confusionMatrix_RF.accuracy()]))
            sumKappa = sumKappa.add(ee.List([confusionMatrix_RF.kappa()]))

            // print('Testing overall accuracy'+tree+seed,confusionMatrix_RF.accuracy());//�������ʾ���徫��
            // print('Testing kappa accuracy'+tree+seed,confusionMatrix_RF.kappa());//�������ʾkappaֵ
            //print('averageAcc',averageAcc)
        }
        testAcc = testAcc.add(ee.List([ee.Number(sumAcc), seed, SP]))
        testKappa = testKappa.add(ee.List([ee.Number(sumKappa), seed, SP]))
        // print('sumAcc',sumAcc,tree,mLP)
        // print('sumKappa',sumKappa)
        //print('ex',explain)
        //print('tr2ee,mLP',tree,mLP)
    }
}
// print('trainAccuracy_list1', trainAccuracy_list1);
// print('trainKappa_list1',trainKappa_list1)
// print('testAccuracy_list1',testAccuracy_list1)
// print('testKappa_list1',testKappa_list1)
//print('testAcc',testAcc)
//print('averageAcc',averageAcc)


// /////////////Export csv///////////////////////////////
var Acc = ee.FeatureCollection(testAcc
    .map(function (element) {
        return ee.Feature(null, { prop: element })
    }))
//print('Acc',Acc)
var Kappa = ee.FeatureCollection(testKappa
    .map(function (element) {
        return ee.Feature(null, { prop: element })
    }))
//print('Kappa',Kappa)
Export.table.toDrive({
    collection: Acc,
    description: "Accseed010010SP0111",
    fileFormat: 'CSV'
});
Export.table.toDrive({
    collection: Kappa,
    description: "Kappaseed010010SP0111",
    fileFormat: 'CSV'
});
//////////////////////////////////////////////////////
// var tree=501;
// //var seed=1;
// for(tree;tree<702;tree=tree+50){
// for(var seed=302;seed<403;seed=seed+50){
//////////////////////////////////////////////
// var tree=ee.List.sequence(5,50,5)
// var group=ee.List.sequence(1,10,1)
// var trainpoints=function(group){
//   return training.filter(ee.Filter.eq("Group",group))
//   }
// var testpoints=function(group){
//   return training.filter(ee.Filter.neq("Group",group))
// }
// var testAccuracy_list=tree.map(function(t){
//   var classifier_RF=ee.Classifier.smileRandomForest({"numberOfTrees":tree, "variablesPerSplit":null,"minLeafPopulation":1,"bagFraction":0.5,"seed":1}).train({features:group.map(trainpoints),classProperty:'ID0',inputProperties:bands});
//   var testpoint=group.map(testpoints)
//   return testpoint
//   .classify(classifier_RF)
//   .confusionMatrix('ID0', 'classification')
//   .accuracy();
// })
// print('testAccuracy_list',testAccuracy_list)
// // /////////////////////////////Group1 for//////////////
// var training1 = image.sampleRegions({
//   collection:trainP1,                   //////////////////
//   properties:['ID0'],
//   scale:250
// });
// //print(training,"training")
// var testing1 = image.sampleRegions({
//   collection:testpoints1,             //////////////////
//   properties:['ID0'],
//   scale:250
// });
// //print(testing1,"testing1")


// var classifier_RF=ee.Classifier.smileRandomForest({
//   numberOfTrees:40,    // 178
//   //variablesPerSplit: 4,  // null
//   //minLeafPopulation: 1, // 1
//   //bagFraction: 0.5,     // 0.5
//   seed:1  // 100
//   }).train({features:training1,classProperty:'ID0',inputProperties:bands});

// var trainAccuracy = classifier_RF.confusionMatrix();

// //print('Training overall accuracy'+tree+seed,trainAccuracy.accuracy());
// //print('Training overall kappa'+tree+seed, trainAccuracy.kappa());

// var testingClass = testing1.classify(classifier_RF);
// var confusionMatrix_RF = testingClass.errorMatrix('ID0', 'classification');
// var testAccuracy=confusionMatrix_RF.accuracy();
// var testKappa=confusionMatrix_RF.kappa();
// print('Testing overall accuracy',confusionMatrix_RF.accuracy());//�������ʾ���徫��
// print('Testing kappa accuracy',confusionMatrix_RF.kappa());//�������ʾkappaֵ
// var classified_RF= image.select(bands).classify(classifier_RF);
// Map.addLayer(classified_RF.randomVisualizer(),{},'classified_RF',false);
// Export.image.toDrive({
//         image: classified_RF,//������
//         description: 'croptypes2021',//�ļ���
//         scale: 250,//�ֱ���
//         region: ROI1,//����
//         maxPixels:34e10//�˴�ֵ���ô�һЩ����ֹ���
//       });

// // /////////////////////////////Group2 for//////////////
// var training2 = image.sampleRegions({
//   collection:trainP2,                   //////////////////
//   properties:['ID0'],
//   scale:250
// });
// //print(training,"training")
// var testing2 = image.sampleRegions({
//   collection:testpoints2,             //////////////////
//   properties:['ID0'],
//   scale:250
// });
// //print(testing1,"testing1")
// var trainAccuracy_list2 =ee.List([0]);
// var trainKappa_list2=ee.List([0]);
// var testAccuracy_list2=ee.List([0]);
// var testKappa_list2=ee.List([0]);

// for(var tree=10;tree<100;tree=tree+10){
// for(var seed=1;seed<50;seed=seed+10){
// var classifier_RF2=ee.Classifier.smileRandomForest({
//   numberOfTrees:tree,    // 178
//   //variablesPerSplit: 4,  // null
//   //minLeafPopulation: 1, // 1
//   //bagFraction: 0.5,     // 0.5
//   seed:seed             // 100
//   }).train({features:training2,classProperty:'ID0',inputProperties:bands});

// var trainAccuracy2 = classifier_RF2.confusionMatrix();
// trainAccuracy_list2=trainAccuracy_list2.add(ee.List([trainAccuracy2.accuracy(),seed,tree]));
// trainKappa_list2=trainKappa_list2.add(ee.List([trainAccuracy2.kappa(),seed,tree]));
// //print('Training overall accuracy'+tree+seed,trainAccuracy.accuracy());
// //print('Training overall kappa'+tree+seed, trainAccuracy.kappa());

// var testingClass2 = testing2.classify(classifier_RF2);
// var confusionMatrix_RF2= testingClass2.errorMatrix('ID0', 'classification');
// testAccuracy_list2=testAccuracy_list2.add(ee.List([confusionMatrix_RF2.accuracy(),seed,tree]));
// testKappa_list2=testKappa_list2.add(ee.List([confusionMatrix_RF2.kappa(),seed,tree]));
// // print('Testing overall accuracy'+tree+seed,confusionMatrix_RF.accuracy());//�������ʾ���徫��
// // print('Testing kappa accuracy'+tree+seed,confusionMatrix_RF.kappa());//�������ʾkappaֵ
// }}
// print('trainAccuracy_list2', trainAccuracy_list2);
// print('trainKappa_list2',trainKappa_list2)
// print('testAccuracy_list2',testAccuracy_list2)
// print('testKappa_list2',testKappa_list2)