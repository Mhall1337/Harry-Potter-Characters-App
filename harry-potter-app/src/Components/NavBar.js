import { NavLink } from "react-router-dom";

function NavBar(){
    const linkStyles={
        display: "inline-block",
        width: "auto",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
    }

    return(
        <div className="navBar">
          <NavLink style={linkStyles} activeStyle={{background: "red"}} to="/" exact>Home</NavLink>
          <NavLink style={linkStyles} activeStyle={{background: "red"}} to="/characters" exact>All Characters</NavLink>
          <NavLink style={linkStyles} activeStyle={{background: "red"}} to="/favorites" exact>Favorite Characters</NavLink>
        </div>
    )
}

export default NavBar