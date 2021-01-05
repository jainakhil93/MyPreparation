const game= {
    'suspects': [
        {
            name:'Rusty',
            color:'orange'
        },
        {
            name:'Scarlet',
            color:'red'
        }
    ]
}

// destructuring the suspects by color in 2 separate string
// one way to do this without destructuing
// const firstColor = game.suspects[0].color;
// const secondColor = game.suspects[1].color;

const [{color:firstColor}, {color:secondColor}] = game.suspects
console.log(`First color is ${firstColor}`)
console.log(`Second color is ${secondColor}`)

for (const suspect of game.suspects){
    console.log(`Name of suspect: ${suspect.name}`)
    console.log(`Color of suspect: ${suspect.color}`)
    if(suspect.color == 'red'){
        console.log(`The suspect ${suspect.name} is guilty`)
    }
}