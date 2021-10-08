export default function AddToFavoritesList({student}){
    function handleAddToFavorites(){
        fetch("http://localhost:3000/favorites",{
            method: "POST",
            headers:{
                "content-type" : "application/json",
                "accept" : "application/json"
            },
            body: JSON.stringify(student)
        })
        .then(resp => resp.json())
        .then(resp => console.log(resp))
        
    }
    return(
        <div>
            <button onClick={handleAddToFavorites}>Add to Favorites</button>
        </div>
    )
}