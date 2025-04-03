import "./style.css"
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="c-Menu">
          <Link to="/">Listar</Link>
          <Link to="/Original">Original</Link>
          <Link to="/Aleatorios">Aleatorios</Link>
          <Link to="/Usuario">Usuario</Link>
          <Link to="/Favoritos">Favoritos</Link>
        </nav>
    )
  }
 
  export default Menu