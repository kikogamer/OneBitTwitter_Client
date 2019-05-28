import React, { Component } from 'react';
import Header from './components/Header';
import ProfilePageContainer from './containers/ProfilePageContainer'
import { Container } from 'react-materialize';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <ProfilePageContainer/>
        </Container>
      </div>
    );
  }
}

export default App;