import React, { Component } from 'react'
import MainLayout from '../../components/MainLayout'
import { Row, Col, Tabs, Tab } from 'react-materialize'
import UserInfoContainer from '../UserInfoContainer'
import TrendingTopicsContainer from '../TrendingTopicsContainer'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserInfo } from '../TimelineContainer/actions'
import { getQueryResult } from './actions'
import TweetUnit from '../../components/TweetUnit'
import BasicUserInfo from '../../components/BasicUserInfo'
import array_chunk from '../../lib/array_chunk'

class SearchResultContainer extends Component {

  componentDidMount() {
    this.props.setUserInfo(this.props.current_user)
    this.props.getQueryResult(this.props.match.params.query)
  }

  render() {
    const userInfoList = (this.props.query_results.users ? array_chunk(this.props.query_results.users, 3) : [])
    return (
      <MainLayout>
        <Row>
          <Col s={12} m={3}>
            <UserInfoContainer />
          </Col>
          <Col s={12} m={6}>
            <Tabs>
              <Tab title='tweets' active>
                {
                  (this.props.query_results.tweets ?
                    this.props.query_results.tweets.map((tweet, i) =>
                      <TweetUnit {...tweet}
                        key={i}
                        current_user={this.props.current_user}>
                      </TweetUnit>
                    )
                    : <span>no tweets found:)</span>
                  )
                }
              </Tab>
              <Tab title='users'>
                {(userInfoList ?
                  userInfoList.map((user, i) =>
                    <Row key={i}>
                      {user.map((item, i) =>
                        <Col s={12} m={4} key={i}>
                          <BasicUserInfo {...item}></BasicUserInfo>
                        </Col>
                      )}
                    </Row>
                  ) :
                  <span>no users found:(</span>)

                }
              </Tab>
            </Tabs>
          </Col>
          <Col s={12} m={3}>
            <TrendingTopicsContainer />
          </Col>
        </Row>
      </MainLayout>
    )
  }
}

function mapStateToProps(state) {
  return {
    current_user: state.current_user,
    query_results: state.query_results
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setUserInfo, getQueryResult }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultContainer)