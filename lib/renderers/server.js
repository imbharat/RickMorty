import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../react/components/App';
import Characters from '../utils/CharactersModel';
import CharactersServices from '../server/services/characters';
import LocationsServices from '../server/services/locations';
import GlobalData from '../server/serverGlobalData';
// import EpisodesServices from '../server/services/episodes';

const serverRender = async (pageNum) => {
    return Promise.all([
        new CharactersServices(pageNum).getCharacters(),
        new LocationsServices().getLocations(),
        // new EpisodesServices().getEpisodes()
    ])
    .then((responses) => {
        // const [characters, locations, episodes] = responses;
        const [characters, locations] = responses;
        GlobalData.allLocations = locations.data.results;
        const chars = new Characters(characters.data.results, GlobalData.allLocations);
        const data = { 
            characters: {
                ...characters.data,
                results: chars.getCharacters()
            }
        }
        return {
            initialMarkup: ReactDOMServer.renderToString(
                <App data={data}/>
            ),
            initialData: data
        };
    });
};

export default serverRender;