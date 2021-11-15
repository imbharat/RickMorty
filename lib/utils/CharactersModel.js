export default class Characters{
    constructor(characters, locations){
        this.characters = characters;
        this.locations = locations;
    }
    getCharacters(){
        return this.characters.map(character => {
            const location = this.getLocation(character.location);
            const origin = this.getLocation(character.origin);
            return {
                ...character,
                location: location ? location : character.location,
                origin: origin ? origin : character.origin
            }
        })
    }
    getLocation(location){
        return this.locations.find(x => x.name === location.name);
    }
}