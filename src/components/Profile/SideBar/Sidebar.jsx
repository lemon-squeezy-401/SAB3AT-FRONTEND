import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { NavContext } from '../../../context/navContext';
import { AuthContext } from '../../../context/authContext';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './sidebar.css';


import Dashboard from '../Dashboard/Dashborad';
import ProductTable from '../ProductTable/ProductTable';
import ServicesTable from '../ServiceTable/Services';
import AddProduct from '../Add-product/AddProduct';
import AddService from '../Add-service/AddService';

function Sidebar() {
  const navSettings = useContext(NavContext);
  const authSettings = useContext(AuthContext);
  console.log(authSettings);

  const routes = [
    {
      path: '/dashboard',
      exact: false,
      sidebar: () => <div>dashboard</div>,
      main: () => <Dashboard/>
    },
    {
      path: '/admin',
      exact: false,
      sidebar: () => <div>dashboard</div>,
      // main: () => <Dashboard/>
    },
    {
      path: '/my-product',
      sidebar: () => <div>my products</div>,
      main: () => <ProductTable/>
    },
    {
      path: '/my-service',
      sidebar: () => <div>my service</div>,
      main: () => <ServicesTable/>
    },
    {
      path: '/add-product',
      sidebar: () => <div>add product</div>,
      main: () => <AddProduct/>
    },
    {
      path: '/add-service',
      sidebar: () => <div>add service</div>,
      main: () => <AddService/>
    }
  ];

  return (
    <Router>
      <Offcanvas className = 'off-canvas' show={navSettings.show} onHide={navSettings.handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Hello, {authSettings.user.email}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className = 'side-ul'>
            <li className = 'side-li'><Link className = 'side-a' to="/dashboard">Dashboard</Link></li>
            <li className = 'side-li'><Link className = 'side-a' to="/admin">Admin Dashboard</Link></li>
            <li className = 'side-li'><Link className = 'side-a' to="/my-product">My Products</Link></li>
            <li className = 'side-li'><Link className = 'side-a' to="/my-service">My Servives</Link></li>
            <li className = 'side-li'><Link className = 'side-a' to="/add-product">Add Product</Link></li>
            <li className = 'side-li'><Link className = 'side-a' to="/add-service">Add Servive</Link></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default Sidebar;
