import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokeList extends Component {
    render() { 
        const {pokemon} = this.props;
        return (
            <main>
                <Pokemon pokemon={pokemon}/>
            </main>
        );
    }
}

export default PokeList;