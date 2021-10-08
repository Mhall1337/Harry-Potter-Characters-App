import { useEffect, useState } from "react"
import Filter from "./Filter";
import AddButton from "./AddToFavoritesList.js"

function Characters(){
    const [students, setStudents]=useState([])
    const [searchStudents, setSearchStudents]=useState([])

    useEffect(()=>
    fetch("http://hp-api.herokuapp.com/api/characters")
    .then(resp => resp.json())
    .then(students => {setStudents(students); setSearchStudents(students)}),[]
    )

    function handleCharacterSearch(e){
        setSearchStudents(students.filter(student => student.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }


    return(
        <div>
            <Filter handleCharacterSearch={handleCharacterSearch}/>
            <ul>
            {searchStudents.map((student, index)=> 
              <div key={index}>
                <li key={index}>{student.name} <AddButton student={student}/></li> 
              </div>
            )}
            </ul>
        </div>
    )
}

export default Characters