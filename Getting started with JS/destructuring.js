var mystery = {name:'akhil', location:'sydney', age:'28', address:{postcode:2032}}
var {name:firstName, location, passport=null,address:{postcode}, ...remaining} = mystery
console.log(remaining) // remaining will have the rest of the properties which are not destructured as an object
console.log(firstName) // alias used for the property name
console.log(passport) // can have a default value if nothing is retrieved
console.log(postcode) // gets the nested objects while destructuring