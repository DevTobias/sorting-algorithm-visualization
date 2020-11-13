/* eslint-disable require-jsdoc */

import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export default class MainNavbar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" className="">
        <Navbar.Brand>
          <img
            src={process.env.PUBLIC_URL + '/logo.svg'}
            width="30" height="30"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="active">Sortierung</Nav.Link>
          <Nav.Link>Wegfindung</Nav.Link>
          <Nav.Link>Markov</Nav.Link>
          <Nav.Link>Registermaschine</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
