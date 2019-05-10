//Advanced arrays

const array = [1, 2, 10, 16];

const double = [] 
const newArray = array.forEach((num) => {
    double.push(num + 2);
})

console.log('forEach', double);

//map, filter, reduce
const mapArray = array.map((num) => {
    return num + 2;
});

//in short
const map2Array = array.map(num => num + 2);

console.log('map', map2Array);

//filter
const filterArray = array.filter(num => num > 5); 
console.log('filter', filterArray);

//reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0);
console.log('reduce', reduceArray);

//exercises
const array = [
    {
        username: "john",
        team: "red",
        score: "5",
        items: ["ball", "book", "pen"]
    
    },

    {
        username: "becky",
        team: "blue",
        score: "10",
        items: ["tape", "backpack", "pen"]
    },

    {
        username: "susy",
        team: "red",
        score: "55",
        items: ["ball", "erazor", "pen"]
    },

    {
        username: "tyson",
        team: "green",
        score: "1",
        items: ["book", "pen"]
    },
];

// 1
let newArray = []
array.forEach(user => {
    let {username} = user;
    username = username + "!";
    newArray.push(username);
})
console.log(newArray);
//2 
const mapArray = array.map(user => {
    let {username} = user;
    return username  + "?";
    })
console.log(mapArray);
