import React, { useState } from 'react';
export const NavContext = React.createContext();

function NavSettings(props) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <NavContext.Provider value = {{show, setShow, handleClose, handleShow}}>
      {props.children}
    </NavContext.Provider>
  );
}

export default NavSettings;
