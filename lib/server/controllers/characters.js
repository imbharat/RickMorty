import CharactersServices from "../services/characters";
import Characters from "../../utils/CharactersModel";
import GlobalData from "../serverGlobalData";

export class CharactersController{
    constructor(pageNum){
        this.pageNum = pageNum
    }
    async getCharaters(){
        const characters = await new CharactersServices(this.pageNum).getCharacters();
        const chars = new Characters(characters.data.results, GlobalData.allLocations);
        return { 
            characters: {
                ...characters.data,
                results: chars.getCharacters()
            }
        }
    }
}