import React from "react";
import { Row, Col, Tabs, Tab } from 'react-materialize';
import MainLayout from '../MainLayout'
import UserInfoContainer from '../../containers/UserInfoContainer'
import TweetListContainer from '../../containers/TweetListContainer'
import TrendingTopicsContainer from '../../containers/TrendingTopicsContainer'
import Followers from '../UserInfoList'
import Following from '../UserInfoList'

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
            <Followers userInfoList={props.followers} />
          </Tab>
          <Tab title='following'>
            <Following userInfoList={props.following} />
          </Tab>
        </Tabs>
      </Col>
      <Col s={12} m={3}>
        <TrendingTopicsContainer />
      </Col>
    </Row>
  </MainLayout>
);

export default ProfilePage;