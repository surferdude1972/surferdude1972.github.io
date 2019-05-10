//reference type
var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};

//context vs scope

const object4 = {
    a: function() {
        console.log(this);
    }
}

//instantiation
// ()=make copy object and reuse code)
// making instances or multiple copies

class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log('hi i am ${this.name}, i am a ${this.type}');
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this);
    }
    play() {
        console.log('weeeee i am a ${this.type}');
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'dark magic');
