class Media {
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = []
    }

    get title(){
        return this._title;
    }

    get isCheckedOut(){
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    toggleCheckOutStatus(){
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating(){
        let sumOfRatings = this._ratings.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        return sumOfRatings/this._ratings.length;
    }

    addRating(rating){
        this._ratings.push(rating);
    }

    set isCheckedOut(status){
        this._isCheckedOut = status; 
    }
};

class Book extends Media {
    constructor(title, author, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author(){
        return this._author;
    }

    get pages(){
        return this._pages;
    }
}

class Movie extends Media {
    constructor(title, director, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director(){
        return this._director;
    }

    get runTime(){
        return this._runTime;
    }
}

class CD extends Media {
    constructor(title){
        super(title);
        this._songs = [];
    }

    suffle(){
        this._songs.sort((a,b) => a - b);
    }
};

// Book

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything._isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

// Movie

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
let isMovieCheckedOut = speed._isCheckedOut;
console.log(isMovieCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());

// CD

const firstCd = new CD('Bob');
firstCd.addRating(2);
firstCd.addRating(3);
firstCd.addRating(5);

