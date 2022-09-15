//-----CLOSURE HOMEWORK-----//
function getMathModule(x) {
  const y = 2;
  return {
    sum() {
      return x + y;
    },
    subtract() {
      return x - y;
    },
    multiply() {
      return x * y;
    },
    divide() {
      return x / y;
    },
  };
}

const mathModule = getMathModule(22);

console.log("CLOSURE: ", mathModule.sum());
console.log("CLOSURE: ", mathModule.subtract());
console.log("CLOSURE: ", mathModule.multiply());
console.log("CLOSURE: ", mathModule.divide());
console.dir(mathModule); //In the console show`s - Closure (getMathModule) {x: 22, y: 2} in [[Scopes]]

//-----PROTOTYPES HOMEWORK-----//
//constructor function
const Movies = function (movieName, mainActor, releaseYear) {
  (this.movieName = movieName),
    (this.mainActor = mainActor),
    (this.releaseYear = releaseYear);
};

//adding methods through prototype
Movies.prototype.movieAd = function () {
  return `${this.movieName} is an thrilling and action pact movie. Staring ${this.mainActor}. Don't miss, the movie will be out in ${this.releaseYear}.`;
};
Movies.prototype.movieAge = function () {
  return `${this.movieName} is already ${
    new Date().getFullYear() - this.releaseYear
  } years old.`;
};

//instatiating
const jackieChan = new Movies("Drunken Master", "Jackie Chan", 1978);
const arnoldSchwarzenegger = new Movies(
  "Terminator 2",
  "Arnold Schwarzenegger",
  1984
);

//console log to check if everything is working
console.log("PROTOTYPE: ", jackieChan.mainActor);
console.log("PROTOTYPE: ", jackieChan.movieAd());
console.log("PROTOTYPE: ", jackieChan.movieAge());

console.log("PROTOTYPE: ", arnoldSchwarzenegger.mainActor);
console.log("PROTOTYPE: ", arnoldSchwarzenegger.movieAd());
console.log("PROTOTYPE: ", arnoldSchwarzenegger.movieAge());

//first child
const MovieOrigin = function (movieName, mainActor, releaseYear, origin) {
  Movies.call(this, movieName, mainActor, releaseYear);
  this.origin = origin;
};
Object.setPrototypeOf(MovieOrigin.prototype, Movies.prototype);

//first child instance
const hongKong = new MovieOrigin(
  "Armour of God 2",
  "Jackie Chan",
  1991,
  "Hong Kong"
);

//console logs to check if MoviesOrigin is working
console.log("PROTOTYPE FIRST CHILD: ", hongKong.origin);
console.log("PROTOTYPE FIRST CHILD: ", hongKong.movieName);
console.log("PROTOTYPE FIRST CHILD: ", hongKong.movieAge());

//second child
const MovieBoxOffice = function (movieName, mainActor, releaseYear, boxOffice) {
  Movies.call(this, movieName, mainActor, releaseYear, boxOffice);
  this.boxOffice = boxOffice;
};
Object.setPrototypeOf(MovieBoxOffice.prototype, Movies.prototype);

//second child instance
const millions = new MovieBoxOffice(
  "Blood Sport",
  "Jean-Claud Van Damme",
  1988,
  2000000
);

//console logs to check if MovieBoxOffice is working
console.log("PROTOTYPE SECOND CHILD: ", millions.boxOffice);
console.log("PROTOTYPE SECOND CHILD: ", millions.movieAd());

//-----OOP HOMEWORK-----//
//parent class
class MoviesClass {
  constructor(movieName, mainActor, releaseYear) {
    (this.movieName = movieName),
      (this.mainActor = mainActor),
      (this.releaseYear = releaseYear);
  }
  movieAd() {
    return `${this.movieName} is an thrilling and action pact movie. Staring ${this.mainActor}. Don't miss, the movie will be out in ${this.releaseYear}.`;
  }
  movieAge() {
    return `${this.movieName} is already ${
      new Date().getFullYear() - this.releaseYear
    } years old.`;
  }
}

//child class 1
class MovieOriginClass extends MoviesClass {
  constructor(movieName, mainActor, releaseYear, origin) {
    super(movieName, mainActor, releaseYear);
    this.origin = origin;
  }
}

//child class 2
class MovieBoxOfficeClass extends Movies {
  constructor(movieName, mainActor, releaseYear, boxOffice) {
    super(movieName, mainActor, releaseYear);
    this.boxOffice = boxOffice;
  }
}

//parent class instances
const predator = new MoviesClass("Predator", "Arnold Schwarzenegger", 1987);
const demolitionMan = new MoviesClass(
  "Demolition Man",
  "Sylvester Stallone",
  1993
);

//child class 1 instance
const originClass = new MovieOriginClass(
  "Cliffhanger",
  "Sylvester Stallone",
  1993,
  "USA"
);

//child class 2 instance
const boxOfficeClass = new MovieBoxOfficeClass(
  "Universal Soldier",
  "Jean-Claud Van Damme",
  1992,
  5000000
);

//checks for parent class
console.log("PARENT CLASS: ", predator.mainActor);
console.log("PARENT CLASS: ", predator.movieAd());
console.log("PARENT CLASS: ", predator.movieAge());
console.log("PARENT CLASS: ", demolitionMan.mainActor);
console.log("PARENT CLASS: ", demolitionMan.movieAd());
console.log("PARENT CLASS: ", demolitionMan.movieAge());

//checks for child class 1 class
console.log("FIRST CHILD CLASS: ", originClass.origin);
console.log("FIRST CHILD CLASS: ", originClass.movieAge());

//checks for child class 2 class
console.log("SECOND CHILD CLASS: ", boxOfficeClass.boxOffice);
console.log("SECOND CHILD CLASS: ", boxOfficeClass.movieAge());
