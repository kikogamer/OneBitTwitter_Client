import React from 'react';
import Header from '../Header';
import { Container } from 'react-materialize';

const MainLayout = (props) => (
  <div>
    <Header />
    <Container>
      { props.children }
    </Container>
  </div>
);

export default MainLayout;