/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, {Component} from 'react';

import {Navbar, Nav, Icon} from 'rsuite';
import ResponsiveNav from '@rsuite/responsive-nav';
import {Link} from 'react-router-dom';

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
    'boxShadow': '0px 3px 5px 0px rgba(15,19,26,0.5)',
    'backgroundColor': '#0F131A',
  };

  return (
    <Navbar {...props} style={navStyle}>
      <Navbar.Header style={headerStyle} className="navbar-brand logo">
        <Link to='/home'>
          <img
            src={process.env.PUBLIC_URL + '/logo.svg'}
            width="30" height="30"
            className="d-inline-block align-top"
          />{' '}
        </Link>
      </Navbar.Header>
      <Navbar.Body>

        <ResponsiveNav appearance="subtle" onSelect={onSelect}
          activeKey={activeKey}>
          <ResponsiveNav.Item componentClass={Link} to="/home"
            eventKey="1" icon={<Icon icon="home" />}>
              Home
          </ResponsiveNav.Item>

          <ResponsiveNav.Item componentClass={Link} to="/sorting-visualizer"
            eventKey="2" icon={<Icon icon="sort" />} >
              Sortierung
          </ResponsiveNav.Item>

          <ResponsiveNav.Item componentClass={Link} to="/pathfinding-visualizer"
            eventKey="3" icon={<Icon icon="search" />} >
              Wegfindung
          </ResponsiveNav.Item>

          <ResponsiveNav.Item componentClass={Link} to="/markov-algorithm"
            eventKey="4" icon={<Icon icon="table" />} >
              Markov
          </ResponsiveNav.Item>

          <ResponsiveNav.Item componentClass={Link} to="/register-maschine"
            eventKey="5" icon={<Icon icon="microchip" />} >
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

    /* let key = '1';
    if (window.location.pathname == '/sorting-visualizer') {
      key = '2';
    }*/
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
