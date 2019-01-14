import React, { Component } from 'react';

class Pokemon extends Component {
    render() { 
        const {pokemon} = this.props;
        return (  
            <ul className="pokemon__list">
            {pokemon.map(infoPoke=> (
                <li key={infoPoke.id} className="pokemon__card">
                    <img src={infoPoke.url} alt="Imagen del Pokemon" className="pokemon__image"></img>
                    <h2 className="pokemon__name">{infoPoke.name}</h2>
                    <ul className="skills__list">
                    {infoPoke.types.map((skill, i)=>
                        <li key={i} className="skill">{skill}</li>
                        )}
                    </ul>
                </li>
            ))}
            </ul>
        );
    }
}

export default Pokemon;