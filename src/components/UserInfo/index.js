import React from "react";
import { Row, Col, Icon} from 'react-materialize';
import RowNoBottomMargin from '../common/RowNoBottomMargin';
import JustifiedText from '../common/JustifiedText';
import UserFollow from '../../containers/UserFollow';
import UserUnFollow from '../../containers/UserUnFollow';
import fake_avatar from '../../images/fake_avatar.png';
import ProfileCard from './../ProfileCard'
import Avatar from './../Avatar'

const UserInfo = (props) => ( 
  <ProfileCard>
    <RowNoBottomMargin>
      <Col m={8} s={8} offset="m2 s2" className="center">
        <Avatar src={(props.photo && props.photo.url) ? props.photo.url : fake_avatar } className="responsive-img circle m10" />
      </Col>
    </RowNoBottomMargin>
    <RowNoBottomMargin>
      <Col m={9} s={9}>
        <b className="grey-text text-darken-2">{ props.name }</b>
      </Col>
      <Col m={3} s={3}>
        { props.followed ?  <UserUnFollow/> : <UserFollow /> }
      </Col>
    </RowNoBottomMargin>
    <Row>
      <Col m={12}>
        <JustifiedText>{ props.description }</JustifiedText>
      </Col>
    </Row>
    <RowNoBottomMargin>
      <Col m={4}>
        <a href="#!" className="grey-text text-darken-2">
          <RowNoBottomMargin className="tooltipped" data-tooltip="Tweets">
            <Col m={5}>
              <Icon>message</Icon>
            </Col>
            <Col m={6}>
              { props.tweets_count }
            </Col>
          </RowNoBottomMargin>
        </a>
      </Col>
      <Col m={4}>
        <a href="#!" className="grey-text text-darken-2">
          <RowNoBottomMargin className="tooltipped" data-tooltip="Followers">
            <Col m={5}>
              <Icon>people</Icon>
            </Col>
            <Col m={6}>
              { props.followers_count }
            </Col>
          </RowNoBottomMargin>
        </a>
      </Col>
      <Col m={4}>
        <a href="#!" className="grey-text text-darken-2">
          <RowNoBottomMargin className="tooltipped" data-tooltip="Followed">
            <Col m={5}>
              <Icon>people_outline</Icon>
            </Col>
            <Col m={6}>
              { props.following_count }
            </Col>
          </RowNoBottomMargin>
        </a>
      </Col>
    </RowNoBottomMargin>
  </ProfileCard>
);

export default UserInfo;