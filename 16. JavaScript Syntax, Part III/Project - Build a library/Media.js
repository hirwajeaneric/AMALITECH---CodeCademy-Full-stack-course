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

    get _ratings() {
        return this._ratings;
    }

    toggleCheckOutStatus(){
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating(){
        let sumOfRatings = this._ratings.reduce((previousValue, currentValue) => {
            previousValue + currentValue
        }, 0);

        return sumOfRatings/this._ratings.length
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

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
console.log(historyOfEverything.author);