import { Link } from 'react-router-dom';
import './Drawer.scss';

// eslint-disable-next-line react/prop-types
const Drawer = ({ isOpen, toggleDrawer }) => {

  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      <div className="drawer__content">
        <ul className="drawer__menu">
          <li className="drawer__menu-item">
          <Link to="categoria/camperas" onClick={toggleDrawer}>Camperas</Link>
        </li>
          <li className="drawer__menu-item">
          <Link to="categoria/pantalones" onClick={toggleDrawer}>Pantalones</Link>
            </li>
          <li className="drawer__menu-item">
          <Link to="categoria/camisas-remeras" onClick={toggleDrawer}>Camisas / Remeras</Link>
            </li>
          <li className="drawer__menu-item">
          <Link to="categoria/calzados" onClick={toggleDrawer}>Calzados</Link>
            </li>
          <li className="drawer__menu-item">
          <Link to="categoria/accesorios" onClick={toggleDrawer}>Accesorios</Link>
            </li>
          <li className="drawer__menu-item">
          <Link to="categoria/sombreros" onClick={toggleDrawer}>Sombreros</Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
