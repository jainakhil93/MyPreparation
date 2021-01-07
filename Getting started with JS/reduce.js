const reduce = (array, howToCombine, buildingUp) => {
    for (let i=0; i<array.length; i++){
        buildingUp = howToCombine(buildingUp, array[i])
    }
    return buildingUp
}

const add = (a,b) => a + b;
const multiplyBy2 = (a) => a * 2;
const divideBy5 = (a) => a / 2;

const summed = reduce([1,2,3], add, 0)

const runFunctionOnInput = (input, fn) => {
    return fn(input)
}

const output = reduce([multiplyBy2, add, divideBy5], runFunctionOnInput, 11)