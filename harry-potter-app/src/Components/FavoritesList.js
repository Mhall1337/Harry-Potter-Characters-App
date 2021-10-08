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
        },
        {
          "name": "Dobby",
          "alternate_names": [],
          "species": "house-elf",
          "gender": "male",
          "house": "",
          "dateOfBirth": "",
          "yearOfBirth": "",
          "wizard": false,
          "ancestry": "",
          "eyeColour": "green",
          "hairColour": "",
          "wand": {
            "wood": "",
            "core": "",
            "length": ""
          },
          "patronus": "",
          "hogwartsStudent": false,
          "hogwartsStaff": false,
          "actor": "Toby Jones",
          "alternate_actors": [],
          "alive": false,
          "image": "",
          "id": 3
        }
      ]

    useEffect(()=>setFaveCharacters(favorites),[])

    function dobbyIsFree(character){
        return
        
    }

    
    return(
        <div>
            {favCharacters.map((character, index)=>
            <div key={index}>
              <p key={index}>Character Name:  {character.name} </p>
              <p>Played By: {character.actor}</p>
              {character.name === "Dobby"? <img src="https://images.ctfassets.net/usf1vwtuqyxm/68gfGWd2SDOBdgAtDA4DR9/f476cd3f2569f733ee933d2b022d7c91/WB-HP-F7-deathly-hallows-dobby-web-landscape.jpg?fm=jpg&q=70&w=2560" alt={character.name}></img> : <img src={character.image} alt={character.name}></img>}
            </div>
            )}
        </div>
    )
}

export default FavoritesList