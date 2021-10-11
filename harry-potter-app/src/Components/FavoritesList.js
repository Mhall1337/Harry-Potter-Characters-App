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
      
 
    return(
        
        <div >
            {favCharacters.map((character, index)=>
            <div className='favList' style={{display: "inline-block"}} key={index}>
              <p key={index}>Character Name:  {character.name} </p>
              <p>Played By: {character.actor}</p>
              <p>House: {character.house}</p>
              <p>Year Born: {character.yearOfBirth}</p>
              <p>Ancestry: {character.ancestry}</p>
              <p>Wand: wood: {character.wand.wood}, Core: {character.wand.core}, Length: {character.wand.length} )</p>
              {character.name === "Dobby"? <img src="https://i.pinimg.com/originals/f2/80/29/f28029b349490f93326b87268e08088e.jpg" alt={character.name}></img> : <img src={character.image} alt={character.name}></img>}
            </div>
            )}
        </div>
    )
}

export default FavoritesList