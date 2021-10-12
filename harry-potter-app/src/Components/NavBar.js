import { NavLink } from "react-router-dom";

function NavBar(){
    const linkStyles={
        display: "inline-block",
        width: "auto",
        padding: "12px",
        margin: "0 6px 6px",
        background: "#5983A3",
        textDecoration: "none",
        color: "white",
        borderRadius: 5
    }

   

    return(
        <div className="navBar">
          <NavLink style={linkStyles} activeStyle={{background: "#4F2B48"}} to="/" exact>Home</NavLink>
          <NavLink style={linkStyles} activeStyle={{background: "#4F2B48"}} to="/characters" exact>All Characters</NavLink>
          <NavLink style={linkStyles} activeStyle={{background: "#4F2B48"}} to="/favorites" exact>Favorite Characters</NavLink>
        </div>
    )
}

export default NavBar