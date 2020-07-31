const mapToNegativize = (sourceArray) => {
    let new_arr = [];
    for(let i=0;i<sourceArray.length;i++){
        new_arr.push(sourceArray[i] * -1);
    }
    return new_arr;
}

const mapToNoChange = (sourceArray) => {
    return sourceArray;
}

const mapToDouble = (sourceArray) => {
    let new_arr = [];
    for(let i=0;i<sourceArray.length;i++){
        new_arr.push(sourceArray[i] * 2);
    }
    return new_arr;
}

const mapToSquare = (sourceArray) => {
    let new_arr = [];
    for(let i=0;i<sourceArray.length;i++){
        new_arr.push(sourceArray[i] ** 2);
    }
    return new_arr;
}

const reduceToTotal = (sourceArray, startingPoint) => {
    let sum;
    if(startingPoint === undefined){
        sum = 0;
    } else {
        sum = startingPoint;
    }
    for (let i=0;i<sourceArray.length;i++){
        sum = sum + sourceArray[i];
    }
    return sum;
}

const reduceToAllTrue = (sourceArray) => {
    for(let i=0;i<sourceArray.length;i++){
        if(!sourceArray[i]) {
            return false;
        }
    }
    return true;
}

const reduceToAnyTrue = (sourceArray) => {
    for(let i=0;i<sourceArray.length;i++){
        if(sourceArray[i]) {
            return true;
        }    
    }
    return false;
}

// mdn Array.reduce;