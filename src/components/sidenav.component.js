/* eslint-disable require-jsdoc */

import React, {Component} from 'react';
import {ButtonToolbar, Button, Drawer} from 'rsuite';

import './App.css';

export default class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
    this.close = this.close.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  close() {
    this.setState({show: false});
  }

  toggleDrawer() {
    this.setState({show: true});
  }

  render() {
    const {show} = this.state;

    return (
      <div>
        <ButtonToolbar>
          <Button onClick={this.toggleDrawer}>Open</Button>
        </ButtonToolbar>

        <Drawer show={show} onHide={this.close} placement={'left'} size={'xs'}>
          <Drawer.Header>
            <Drawer.Title>Drawer Title</Drawer.Title>
          </Drawer.Header>

          <Drawer.Body>
          </Drawer.Body>

          <Drawer.Footer>
            <Button onClick={this.close} appearance="primary">
              Confirm
            </Button>
            <Button onClick={this.close} appearance="subtle">
              Cancel
            </Button>
          </Drawer.Footer>
        </Drawer>
      </div>
    );
  }
}
