import {makeAutoObservable} from "mobx";

export default class ItemStore{
    constructor() {
        this._items = []
        this._tags=[]
        this._selectedTag={}
        makeAutoObservable(this)
    }

    setTags(tags){
        this._tags=tags
    }
    setItems(items){
        this._items = items
    }
    setSelectedTag(tag) {
        this._selectedTag = tag
    }

    get items(){
        return this._items
    }

    get tags(){
        return this._tags
    }

    get selectedTag() {
        return this._selectedTag
    }
}