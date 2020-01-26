function bigestSumOfTwoElements(array){
    array.sort((a,b) => {
        return a - b;
    });
    if(array.length == 0) return false;
    if(array.length == 1) return array[0];
    return array[0] + array[1];
}

bigestSumOfTwoElements([1,2,3,4]) // => 7
bigestSumOfTwoElements([]) // => false
bigestSumOfTwoElements([76]) // => 76
bigestSumOfTwoElements([23,45,17,12]) // => 68