import React from 'react'

const PokemonThumnail = ({id, name, type}) => {
    return(
        <div className="thumb-cotainer">
            <div className="number"> 
                <small>#0{id}</small>
            </div>
            <img src={image} alt={name}/>
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default PokemonThumnail