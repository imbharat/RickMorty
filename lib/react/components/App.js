import React, { useEffect, useState } from 'react';
import 'regenerator-runtime/runtime'
import CharactersList from './characters-list/CharactersList';
import Pagination from './pagination/Pagination';
import { CHARACTERS_END_POINT } from '../Environment'
import axios from 'axios';
import Header from './header/Header';

function App({data}) {
    const { characters } = data;
    const [currentPage, setCurrentPage] = useState(1);
    const [inititalRender, setInitialRender] = useState(true);
    const [allCharacters, setAllCharacters] = useState(characters);
    const [charactersKV, setCharactersKV] = useState({
      [currentPage]: allCharacters
    })
    const fetchCharacters = (pageNum) => {
      setCurrentPage(pageNum);
    }
    useEffect(async () => {
      if(inititalRender){
        setInitialRender(!inititalRender);
        return;
      }
      if(currentPage in charactersKV){
        setAllCharacters(charactersKV[currentPage])
        return;
      }
      const response = await axios.get(CHARACTERS_END_POINT.replace(`{0}`, currentPage));
      setAllCharacters(response.data.characters);
      setCharactersKV({
        ...charactersKV,
        [currentPage]: response.data.characters
      })
    }, [currentPage])
    return (
        <div className="App">
          <Header />
          <Pagination pages={allCharacters.info.pages} 
            fetchCharacters={fetchCharacters} 
            activePage={currentPage}
          />
          <CharactersList characters={allCharacters.results}/>
          <Pagination pages={allCharacters.info.pages} 
            fetchCharacters={fetchCharacters} 
            activePage={currentPage}
          />
        </div>
    );
}

export default App;
