import React, { Component } from 'react'
import styles from '../characters-list/Characters.Styles'

export class CharacterError extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }
    componentDidCatch(error, info){
        console.log(error, info)
    }

    render() {
        if(this.state.hasError){
            return <div style={styles.character}>
                        <div style={styles.details}>
                            <div style={styles.section}>
                                <h1 style={styles.characterName}>Character Not Found</h1>
                            </div>
                        </div>
                    </div>
        }
        return this.props.children
    }
}

export default CharacterError
