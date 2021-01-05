//const _ = require('underscore')
function CreateSuspectObjects(name){
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {
            console.log(`My name is ${name}`);
        }
    }
}

var suspects = ['Miss Scarlet','Colonel Mustard', 'Mr. White'];

var suspectsList = []

// good old for loop
// for(var i = 0; i<suspects.length; i++){
//     suspectsList.push(CreateSuspectObjects(suspects[i]))
// }

// _.each function used from "underscore" library
// _.each(suspects, function(name){
//     suspectsList.push(CreateSuspectObjects(name))
// })
// console.log(suspectsList)

// Implementing the _.each function
const _ = {}

_.each = function(list, callback) {
    // check for array vs object
    // loop through the list
        // call the callback with an item
    if(Array.isArray(list)){
        for(var i=0; i<list.length; i++){
            callback(list[i], i, list)
        }
    } else {
        for(var key in list){
            callback(list[key], key, list)
        }
    }
}

_.each(['akhil', 'surabhi', 'nancy'], function(name, i, list){
    if(list[i+1]){
        console.log(name, 'is younger than', list[i+1])
    } else {
        console.log(name, 'is the oldest')
    }
})