import React from 'react'
import { connect } from 'react-redux'

import Curation from './Curation'
import { fetchPicks, select } from '../actions'

const mapStateToProps = ({ picks, selected, isFetching }) => (
  {
    picks,
    selected,
    isFetching
  }
)

const mapDispatchToProps = dispatch => (
  {
    fetchPicks: () => dispatch(fetchPicks()),
    handleLabelClick: i => dispatch(select(i))
  }
)

const CurationContainer = connect(mapStateToProps, mapDispatchToProps)(Curation)

export default CurationContainer
