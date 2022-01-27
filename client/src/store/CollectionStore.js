import {makeAutoObservable} from "mobx";

export default class CollectionStore{
    constructor() {
        this._themes = [
            {id: 1, name: "Books"},
            {id: 2, name: "Movies"}
        ]
        this._collections = [
            {id: 1, name: "My Books", theme_id: 1, description: "Books that makes you live", img: "https://i0.wp.com/www.marktechpost.com/wp-content/uploads/2018/12/book-bookcase-books-1166657.jpg?w=2048&ssl=1"},
            {id: 1, name: "My Movies", theme_id: 2, description: "Movies that makes you live", img: "https://monacofrance.net/assets/images/AdobeStock_94584043.jpeg"}
        ]
        makeAutoObservable(this)
    }
    setThemes(themes){
        this._themes = themes
    }
    setCollections(collections){
        this._collections = collections
    }
    get themes(){
        return this._themes
    }
    get collections(){
        return this._collections
    }
}