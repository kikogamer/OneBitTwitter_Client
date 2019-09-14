import React from 'react'
import { Row, Col } from 'react-materialize'
import BasicUserInfo from '../BasicUserInfo'
import array_chunk from '../../lib/array_chunk'

const UserInfoList = (props) => {
  if (props.userInfoList) {
    const userInfoList = array_chunk(props.userInfoList, 3)
    return userInfoList.map((userInfo, i) => {
      return (
        <Row key={i}>
          {userInfo.map((item, i) => 
            <Col s={12} m={4} key={i}>
              <BasicUserInfo {...item}></BasicUserInfo>
            </Col>
          )}
        </Row>
      )
      }
    )
  }
  else {
    return <div></div>
  }
}

export default UserInfoList;