import { useEffect, useState } from "react";

function FavoritesList(){
    const [favCharacters, setFaveCharacters] = useState([])

const favorites = [
        {
          "name": "Harry Potter",
          "alternate_names": [
            ""
          ],
          "species": "human",
          "gender": "male",
          "house": "Gryffindor",
          "dateOfBirth": "31-07-1980",
          "yearOfBirth": 1980,
          "wizard": true,
          "ancestry": "half-blood",
          "eyeColour": "green",
          "hairColour": "black",
          "wand": {
            "wood": "holly",
            "core": "phoenix feather",
            "length": 11
          },
          "patronus": "stag",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Daniel Radcliffe",
          "alternate_actors": [
            ""
          ],
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/harry.jpg",
          "id": 1
        },
        {
          "name": "Hermione Granger",
          "alternate_names": [
            ""
          ],
          "species": "human",
          "gender": "female",
          "house": "Gryffindor",
          "dateOfBirth": "19-09-1979",
          "yearOfBirth": 1979,
          "wizard": true,
          "ancestry": "muggleborn",
          "eyeColour": "brown",
          "hairColour": "brown",
          "wand": {
            "wood": "vine",
            "core": "dragon heartstring",
            "length": ""
          },
          "patronus": "otter",
          "hogwartsStudent": true,
          "hogwartsStaff": false,
          "actor": "Emma Watson",
          "alternate_actors": [
            ""
          ],
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/hermione.jpeg",
          "id": 2
        }
      ]

    useEffect(()=>setFaveCharacters(favorites),[])

    
    return(
        <div>
            {favCharacters.map((character, index)=>
            <div key={index}>
              <p key={index}>Character Name:  {character.name} </p>
              <p>Played By: {character.actor}</p>
              <img src={character.image} alt={character.name}></img>
            </div>
            )}
        </div>
    )
}

export default FavoritesList