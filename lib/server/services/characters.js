import { CHARACTERS_END_POINT } from "../constants";
import axios from "axios";

export default class CharactersServices{
    constructor(pageNum){
        this.pageNum = pageNum
    }
    getCharacters(){
        return axios.get(CHARACTERS_END_POINT.replace(`{0}`, this.pageNum))
    }
}