//---UTF8---
//author-greatfir
//union lists
var list1 = [1,2,3,5,6,7],
    list2 = ['s','d','jj'],
    list = ee.List(list1).cat(list2);
print(list);

//the same one
var list1 = ee.List([1,2,3,5,6,7]),
    list2 = ee.List(['s','d','jj']),
    list = ee.List(list1).cat(list2).cat(list2);
print(list)