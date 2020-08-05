
function mapToNegativize(sourceArray){
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        const element = sourceArray [i] * -1;
        newArray.push(element)
    }
    return newArray
}

function mapToNoChange(sourceArray){
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        const element = sourceArray [i];
         newArray.push(element)  
    }
    return newArray
}

function mapToDouble(sourceArray){
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        const element = sourceArray [i] * 2;
        newArray.push(element)
    }
    return newArray
}

function mapToSquare(sourceArray){
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        const element = sourceArray[i] ** 2;
        newArray.push(element)
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint=0){
    let sum = startingPoint

    for (let i = 0; i < sourceArray.length; i++) {
     sum = sum + sourceArray[i];
        
    }
    return sum
}

function reduceToAllTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++) {
      if (!sourceArray[i])
      return false
       
    }
    return true   
}

function reduceToAnyTrue(sourceArray){
 for (let i = 0; i < sourceArray.length; i++) {
     if (sourceArray[i])
     return true     
 }
 return false
}

