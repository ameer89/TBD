var populationArray = [];
var maxPopulation;
var isOverPopulated;
populationArray = [10000,20000,40000,50000,70000];
maxPopulation = 50000;
isOverPopulated = false;
for (var i = 0; i < populationArray.length; i++) {
    if (populationArray[i] > maxPopulation) {
        console.log("larger");
    }
    if (populationArray[i] < maxPopulation) {
        console.log("smaller");
    }
    if (populationArray[i] == maxPopulation) {
        console.log("equals");
    }        
}
var sum_last_three_populations = populationArray[2] + populationArray[2] + populationArray[2] ;
if (sum_last_three_populations < 100000 && maxPopulation < 100000 || isMostPopulated == false) {
    console.log("Small cities!!!");
}
