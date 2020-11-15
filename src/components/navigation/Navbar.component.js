/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, {Component} from 'react';

import {Navbar, Nav, Icon} from 'rsuite';
import ResponsiveNav from '@rsuite/responsive-nav';

import {useDispatch} from 'react-redux';
import {toggle} from '../settings/settingsSlice';

import './Navbar.css';


const NavBarInstance = ({onSelect, activeKey, ...props}) => {
  const dispatch = useDispatch();
  const headerStyle = {
    padding: '15px 20px',
    margin: 0,
    display: 'inline-block',
  };
  const navStyle = {
    'box-shadow': '0px 3px 5px 0px rgba(15,19,26,0.5)',
    'background-color': '#0F131A',
  };

  return (
    <Navbar {...props} style={navStyle}>
      <Navbar.Header style={headerStyle} className="navbar-brand logo">
        <a href="">
          <img
            src={process.env.PUBLIC_URL + '/logo.svg'}
            width="30" height="30"
            className="d-inline-block align-top"
          />{' '}
        </a>
      </Navbar.Header>
      <Navbar.Body>
        <ResponsiveNav appearance="subtle" onSelect={onSelect}
          activeKey={activeKey}>
          <ResponsiveNav.Item eventKey="1" icon={<Icon icon="home" />}>
            Home
          </ResponsiveNav.Item>
          <ResponsiveNav.Item icon={<Icon icon="sort" />} eventKey="2">
            Sortierung
          </ResponsiveNav.Item>
          <ResponsiveNav.Item icon={<Icon icon="search" />} eventKey="3">
            Wegfindung
          </ResponsiveNav.Item>
          <ResponsiveNav.Item icon={<Icon icon="table" />} eventKey="4">
            Markov
          </ResponsiveNav.Item>
          <ResponsiveNav.Item icon={<Icon icon="microchip" />} eventKey="5">
            Registermaschine
          </ResponsiveNav.Item>
        </ResponsiveNav>
        <Nav pullRight onSelect={() => dispatch(toggle())}>
          <Nav.Item icon={<Icon icon="cog" />}></Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default class MainNavbar extends Component {
  constructor() {
    super();
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      activeKey: '1',
    };
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }

  render() {
    const {activeKey} = this.state;
    return (
      <div className="nav-wrapper av-background">
        <NavBarInstance appearance="subtle" activeKey={activeKey}
          onSelect={this.handleSelect} />
      </div>
    );
  }
}
