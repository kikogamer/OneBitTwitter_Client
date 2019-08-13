import React from 'react'
import { Row, Col } from 'react-materialize'
import BasicUserInfo from '../BasicUserInfo'

function array_chunk(arr, size){
  var i,j = arr.length,
  tempArray = [];
  
  for (i=0; i<j; i+=size) {
      tempArray.push(arr.slice(i,i+size));
  }
  
  return tempArray
}

const Followers = (props) => {
  if (props.followers) {
    const followers = array_chunk(props.followers, 3)
    return followers.map((follower, i) => {
      return (
        <Row key={i}>
          {follower.map((item, i) => 
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

export default Followers;