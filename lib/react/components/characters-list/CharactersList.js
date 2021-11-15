import React from 'react';
import CharacterError from '../error-boundary/CharacterError';
import Character from './character/Character';
import styles from './Characters.Styles.js';

function CharactersList({characters}) {
    return (
        <div style={styles.charactersList}>
            {
                characters.map(character => {
                    return (
                        <CharacterError key={character.id}>
                            <Character character={character}/>
                        </CharacterError>
                    )
                })
            }
        </div>
    )
}

export default CharactersList
