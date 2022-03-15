//creates instance of Swim with properties name, age, and attendance
class Swim {
    constructor(name, age, attendance) {
        this.name = name;
        this.age = age;
        this.attendance = attendance;
    }
// increments by coming to the lessons
comesToLesson() {
    this.attendance++
}
}

//creates instance of SuitColor with Swim properties plus didIt
class Tadpoles extends Swim {
    constructor(name,age, attendance, suitColor){
        super(name, age, attendance);
        this.suitColor = suitColor;
    }
}
//creates instance of useKickboar with Swim properties plus useKickboard
class Dolphins extends Swim {
    constructor(name, age, attendance, useKickboard = true) {
        super(name, age, attendance);
        this.useKickboard = useKickboard;
    }
    //useKickboard as a skill. If they can use a kickboard, otherwise changes useKickboard to false
    kick() {
        if(this.useKickboard === true) {
            console.log('You pass the kickboard challenge!');
        } else {
            console.log('Keep trying!')
        }
    }
}
// testing our classes by instantiating them, calling each methods

//create instances of each classes

let stephen = new Swim('Stephen', 11, 0);
let sarah = new Tadpoles('Sarah', 3, 0, 'pink');
let jackson = new Dolphins('Jackson', 6, 0, false);

//log each instance of the class
console.log(stephen);
console.log(sarah);
console.log(jackson);


//call the method from the parent class to ensure it works as expected
stephen.comesToLesson();
sarah.comesToLesson();
jackson.kick();
console.log(stephen);
console.log(sarah);


//check that .useKickboard() == true works as expected
jackson.useKickboard = true;
console.log(jackson);

//check that .useKickboard() == false works as exptect
//Kick.useKickboard();