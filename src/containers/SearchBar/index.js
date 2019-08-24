import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'
import { getSearchList } from './actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.editChange = this.editChange.bind(this)
    this.selectItem = this.selectItem.bind(this)
  }

  editChange(event){
    this.setState({ value: event.target.value })
    this.props.getSearchList(event.target.value)
  }

  selectItem(value){
    this.setState({value: value})
  }

  render() {
    const search_list = this.props.search_list ? this.props.search_list : []
    return (
      <Autocomplete
        getItemValue={(item) => item.label}
        items={search_list}
        menuStyle={
          {
            borderRadius: '3px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '2px 0',
            fontSize: '90%',
            position: 'fixed',
            overflow: 'auto',
            maxHeight: '50%', // TODO: don't cheat, let it flow to the bottom
            zIndex: '998',
          }
        }
        renderInput={(props) =>
          <input
            {...props}
            style={
              {
                'backgroundColor': '#fff',
                'color': 'black',
                'marginBottom': '0'
              }
            } />
        }
        renderItem={(item, isHighlighted) =>
          <div 
            style={
              { background: isHighlighted ? '#75d3f4' : 'white',
                'color': isHighlighted ? 'white' : 'black'                
              }
            } key={item.key}>
            {item.label}
          </div>
        }
        value={this.state.value}
        onChange={this.editChange}
        onSelect={this.selectItem}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    search_list: state.search_list
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSearchList }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)