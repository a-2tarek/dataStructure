
function arrComp(arr1, arr2) {
    dist = []
    for (let i = 0; i < arr1.length; i++) {
        let isDistinct = true;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j])
                isDistinct = false
        }
        if (isDistinct)
            dist.push(arr1[i])
    }
    for (let j = 0; j < arr2.length; j++) {
        let isDistinct = true;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] == arr2[j])
                isDistinct = false
        }
        if (isDistinct)
            dist.push(arr2[j])
    }
    return dist
}








function compare1(arr1,arr2){
    var counter= {}
    sum= 0
    for(let i=0; i< arr1.length; i++){
        if(counter[arr1[i]]){
            counter[arr1[i]] += 1
        }
        else{
            counter[arr1[i]] = 1
        }
    }
    for(let i=0; i< arr2.length; i++){
        if(counter[arr2[i]]){
            counter[arr2[i]] += 1
        }
        else{
            counter[arr2[i]] = 1
        }
    }
    for (key in counter){
        if (counter[key] == 1){
            sum+= parseInt(key)
        }
    }
return sum
}


function compare2(arr1,arr2){
    var counter= {}
    sum= 0
    for(let i=0; i< arr1.length; i++){
        if(counter[arr1[i]]){
            counter[arr1[i]] += 1
        }
        else{
            counter[arr1[i]] = 1
        }
    }
    for(let i=0; i< arr2.length; i++){
        if(counter[arr2[i]]){
            counter[arr2[i]] += 1
        }
        else{
            counter[arr2[i]] = 1
        }
    }
    for (key in counter){
        if (counter[key] > 1){
            sum+= parseInt(key)
        }
    }
    return sum
}











