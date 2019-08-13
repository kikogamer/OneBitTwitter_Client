import React from 'react'
import Profilecard from './../ProfileCard'
import RowNoBottomMargin from './../common/RowNoBottomMargin'
import { Col, Row } from 'react-materialize'
import Avatar from './../Avatar'
import fake_avatar from './../../images/fake_avatar.png'
import JustifiedText from './../common/JustifiedText'

const BasicUserInfo = (props) => (
  <Profilecard>
    <RowNoBottomMargin>
      <Col m={8} s={8} >
        <Avatar src={(props.photo && props.photo.url) ? props.photo.url : fake_avatar } className="responsive-img circle m10"></Avatar>
      </Col>
    </RowNoBottomMargin>
    <RowNoBottomMargin>
      <Col m={9} s={9}>
        <b className="grey-text text-darken-2">{ props.name }</b>
      </Col>
    </RowNoBottomMargin>
    <Row>
      <Col m={8}>
        <JustifiedText>{ props.description }</JustifiedText>
      </Col>
    </Row>
  </Profilecard>
)

export default BasicUserInfo;