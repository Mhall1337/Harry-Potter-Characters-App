import { NavLink } from "react-router-dom";

function NavBar(){
    const linkStyles={
        display: "inline-block",
        width: "auto",
        padding: "12px",
        margin: "0 6px 6px",
        background: "#740001",
        textDecoration: "none",
        color: "white",
    }

    return(
        <div className="navBar">
          <NavLink style={linkStyles} activeStyle={{background: "#D3A625"}} to="/" exact>Home</NavLink>
          <NavLink style={linkStyles} activeStyle={{background: "#D3A625"}} to="/characters" exact>All Characters</NavLink>
          <NavLink style={linkStyles} activeStyle={{background: "#D3A625"}} to="/favorites" exact>Favorite Characters</NavLink>
        </div>
    )
}

export default NavBar