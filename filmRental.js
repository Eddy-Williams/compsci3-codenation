class Rental {
    constructor(storeName, storeAddress, storePhone, filmList){
        this.storeName = storeName;
        this.storeAddress = storeAddress;
        this.storePhone = storePhone;
        this.filmList = filmList
    }
    get availableFilms (){
        return `Films available are ${this.filmList}`
    }
    set availableFilms (filmPriceList){
        this.filmList.push(filmPriceList)
    }
}

const test = new Rental ("Luv Films", "345 Store street, Storeton", "019910019", ["Die Soft £1", " Bames Jond £4", " Karate Koala £6"])
test.availableFilms = " Losing Meno £3"
console.log(test.availableFilms)