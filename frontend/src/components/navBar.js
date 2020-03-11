import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
// import { connect } from 'react-redux'

function Navbar() {

  return (
    <Menu secondary size="huge">
      <Menu.Item as={Link} name="Stocker" to="/"></Menu.Item>

      <Menu.Item as={Link} name="Portfolio" to="/portfolio"></Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item as={Link} name="Transactions" to="/transactions" />}
      </Menu.Menu>
    </Menu>
  );
  
}

export default Navbar;
