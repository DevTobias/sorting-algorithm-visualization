/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import Card from 'react-bootstrap/Card';
import './Card.css';
import {Divider} from 'rsuite';
import {Link} from 'react-router-dom';

export default function BCard({img, title, text, route}) {
  return (
    <Card className='card-style' bg='dark'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className='card-title'>
          <Link to={route}> {title} </Link>
        </Card.Title>
        <Divider />
        <Card.Text> {text} </Card.Text>
      </Card.Body>
    </Card>
  );
};
