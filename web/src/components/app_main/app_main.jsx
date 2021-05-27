/* eslint-disable react/jsx-no-bind, react/prop-types */
import React, { Component } from 'react';
import { Card, Container, Icon, Image } from 'semantic-ui-react';

import boratImage from '../../assets/borat.jpeg';

export default class AppMain extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container textAlign="center" style={{ height: '100%' }}>
        <Card style={{ margin: 'auto', top: '30%' }}>
          <Image src={boratImage} />
          <Card.Content>
            <Card.Header>Borat</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              My wife is dead.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}