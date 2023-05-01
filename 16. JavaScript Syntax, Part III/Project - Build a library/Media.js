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

}

class Movie extends Media {
    
}

class CD extends Media {
    
}