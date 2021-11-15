import React from 'react';
import styles from '../Characters.Styles.js';

function Character({character}) {
    if(character.name === "Aqua Morty") throw new Error("wrong character")
    const {
        name,
        status,
        species,
        image,
        location,
        origin
    } = character;
    return (
        <div style={styles.character}>
            <img style={styles.characterImg} src={image} alt=""/>
            <div style={styles.details}>
                <div style={styles.section}>
                    <h1 style={styles.characterName}>{name}</h1>
                    <span style={styles.characterStatus}>{status} - {species}</span>
                </div>
                <div style={styles.section}>
                    <div style={styles.characterLocationsHead}>
                        Origin
                    </div>
                    <div style={styles.characterLocations}>
                        {origin.name !== "unknown" ? `Name: ` : ""}{origin.name}
                    </div>
                    <div style={styles.characterLocations}>
                        {origin.dimension ? `Dimension: ${origin.dimension}` : ""}
                    </div>
                    <div style={styles.characterLocations}>
                        {origin.residents ? `Residents: ${origin.residents.length}` : ""}
                    </div>
                </div>
                <div>
                    <div style={styles.characterLocationsHead}>
                        Location
                    </div>
                    <div style={styles.characterLocations}>
                        {location.name !== "unknown" ? `Name: ` : ""}{location.name}
                    </div>
                    <div style={styles.characterLocations}>
                        {location.dimension ? `Dimension: ${location.dimension}` : ""}
                    </div>
                    <div style={styles.characterLocations}>
                        {location.residents ? `Residents: ${location.residents.length}` : ""}
                    </div>
                </div>
                {/* <div style={styles.section}>
                    Chapters:
                </div> */}
            </div>
        </div>
    )
}

export default Character
