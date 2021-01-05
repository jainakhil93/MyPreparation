const _ = require('underscore')
const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mr. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
]




_.filter = function(arr, cb) {
    const storage = [];
    // crate new array
    // loop through array
    _.each(arr, function(val, i, list){
        if(cb(val, i, list)){
            storage.push(val)
        }
    }) 
    // return arr
    return storage
}

_.filter(videoData, function(suspectObject){
    return suspectObject.present;
})