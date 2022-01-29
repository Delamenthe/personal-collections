import {makeAutoObservable} from "mobx";

export default class CollectionStore{
    constructor() {
        this._collections = []
        this._themes=[]
        this._selectedTheme={}
        makeAutoObservable(this)
    }

    setThemes(themes){
        this._themes=themes
    }
    setCollections(collections){
        this._collections = collections
    }
    get collections(){
        return this._collections
    }

    get themes(){
        return this._themes
    }

    setSelectedTheme(theme) {
        this._selectedTheme = theme
    }

    get selectedTheme() {
        return this._selectedTheme
    }
}