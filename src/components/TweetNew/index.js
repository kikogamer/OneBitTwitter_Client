import React from "react";
import { Col, Card, Icon, Input } from 'react-materialize';
import RowNoBottomMargin from '../common/RowNoBottomMargin';

const TweetNew = (props) => (
  <Card>
    <RowNoBottomMargin>
      <Col s={12}>
        <Input s={12} maxLength="200" label="What are you thinking?" validate className="text-red" onKeyDown={(event) => props.postTweet(event)}>
          <Icon>send</Icon>
        </Input>
      </Col>
    </RowNoBottomMargin>
  </Card>
)

export default TweetNew;