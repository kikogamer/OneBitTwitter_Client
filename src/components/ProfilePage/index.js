import React from "react";
import { Row, Col, Tabs, Tab } from 'react-materialize';
import MainLayout from '../MainLayout'
import UserInfoContainer from '../../containers/UserInfoContainer'
import TweetListContainer from '../../containers/TweetListContainer'
import TrendingTopicsContainer from '../../containers/TrendingTopicsContainer'
import Followers from '../UserInfoList'

const ProfilePage = (props) => (
  <MainLayout>
    <Row>
      <Col s={12} m={3}>
        <UserInfoContainer />
      </Col>
      <Col s={12} m={6}>
        <Tabs>
          <Tab title='tweets' active>
            <TweetListContainer />
          </Tab>
          <Tab title='followers'>
            <Followers followers={props.followers} />
          </Tab>
          <Tab title='following'></Tab>
        </Tabs>
      </Col>
      <Col s={12} m={3}>
        <TrendingTopicsContainer />
      </Col>
    </Row>
  </MainLayout>
);

export default ProfilePage;