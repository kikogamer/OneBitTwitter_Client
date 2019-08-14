import React from "react";
import { Row, Col, Card } from 'react-materialize';
import styled from 'styled-components';
import RowNoBottomMargin from '../common/RowNoBottomMargin';
import fake_avatar from '../../images/fake_avatar.png';
import TweetLike from "../../containers/TweetLike";
import TweetDislike from '../../containers/TweetDislike'
import Retweet from '../../containers/Retweet'
import TweetEdit from '../../containers/TweetEdit'
import ReactTimeAgo from 'react-time-ago'
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

JavascriptTimeAgo.locale(en)

const Avatar = styled.img`
  width: 100%`
  ;

const TweetUnit = (props) => (
  <Card>
    <RowNoBottomMargin>
      <Col s={6} m={2} offset="s3">
        <a href={`/user/${props.user.id}`}>
          <Avatar src={(props.user.photo && props.user.photo.url) ? props.user.photo.url : fake_avatar} className="responsive-img circle" />
        </a>
      </Col>
      <Col s={12} m={10}>
        <RowNoBottomMargin>
          <Col s={10} m={10}>
            <b>{props.user.name}</b>
            <ReactTimeAgo date={Date.parse(props.created_at)} className='right'/>
          </Col>
          <Col s={2} m={2} className="right-align">
            {props.current_user.id === props.user.id &&
              <TweetEdit {...props}  />
            }
          </Col>
        </RowNoBottomMargin>
        <Row>
          <Col s={12} m={12}>
            {props.body}
          </Col>
        </Row>
        <RowNoBottomMargin>
          {props.liked ? <TweetDislike id={props.id} likes_count={props.likes_count} /> : <TweetLike id={props.id} likes_count={props.likes_count} /> }
          <Retweet {...props} />
        </RowNoBottomMargin>
      </Col>
    </RowNoBottomMargin>
  </Card>
);

export default TweetUnit;