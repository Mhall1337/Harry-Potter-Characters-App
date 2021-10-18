import { useEffect, useState } from "react";

function FavoritesList(){
    const [favCharacters, setFavCharacters] = useState([])

    useEffect(()=>
    fetch("http://localhost:3000/favorites")
    .then(resp => resp.json())
    .then(characters => setFavCharacters(characters))
    ,[])
    
    function removeFromFavorites(id){
        setFavCharacters(favCharacters.filter(character => character.id !== id))
        fetch(`http://localhost:3000/favorites/${id}`,{
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then()
    }

    return(
        <div className='favBackground'>
            {favCharacters.map((character, index)=>
            <div className='favList' style={{display: "inline-block"}} key={index}>
              <p key={index}>Character Name:  {character.name} </p>
              <p>Played By: {character.actor}</p>
              <p>House: {character.house}</p>
              <p>Species: {character.species}</p>
              <p>Year Born: {character.yearOfBirth}</p>
              <p>Ancestry: {character.ancestry}</p>
              <p>Wand: (wood: {character.wand.wood}, Core: {character.wand.core}, Length: {character.wand.length})</p>
              <p>Patronus: {character.patronus}</p>
              {character.name === "Dobby"? <img src="https://i.pinimg.com/originals/f2/80/29/f28029b349490f93326b87268e08088e.jpg" alt={character.name}></img> : <img className="favPic" src={character.image} alt={character.name}></img>}
              <br></br>
              <button onClick={()=>removeFromFavorites(character.id)}> Remove From Favorites</button>
            </div>
            )}
        </div>
    )
}

export default FavoritesList