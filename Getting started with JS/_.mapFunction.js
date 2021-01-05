const _ = require('underscore')

const weapons = ['candlestick','lead pipe', 'revolver']

const makeBroken = function(item) {
    return `broken ${item}`
}

var brokenWeapons = weapons.map(makeBroken)
console.log(brokenWeapons)

var brokenWeaponsList = _.map(weapons, makeBroken)
console.log(brokenWeaponsList)

function CreateSuspectObjects(name){
    return {
        name:name,
        color:name.split(' ')[1],
        speak(){
            console.log(`my name is ${this.name}`)
        }
    }
}

var suspects = ['Miss Scarlet','Colonel Mustard', 'Mr. White']

var suspectsList = _.map(suspects, CreateSuspectObjects)

_.each(suspectsList, function(suspect){
    suspect.speak()
})