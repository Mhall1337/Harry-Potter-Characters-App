import { useEffect, useState } from "react"
import Filter from "./Filter";
import AddButton from "./AddToFavoritesList.js"

function Characters(){
    const [potterCharacters, setPotterCharacters] = useState([])
    const [searchStudents, setSearchStudents]=useState([])

    useEffect(()=>
    fetch("http://hp-api.herokuapp.com/api/characters")
    .then(resp => resp.json())
    .then(students => {setPotterCharacters(students); setSearchStudents(students)}),
    [])

    
    function handleCharacterSearch(e){
        setSearchStudents(potterCharacters.filter(student => student.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    return(
        <div className="characters">
            <Filter handleCharacterSearch={handleCharacterSearch}/>
            <hr></hr>
            <ul>
            {searchStudents.map((student, index)=> 
              <div key={index}>
                <li className="charList" key={index}>{student.name}: <AddButton className="addButton"student={student} />  </li> 
              </div>
            )}
            </ul>
        </div>
    )
}

export default Characters