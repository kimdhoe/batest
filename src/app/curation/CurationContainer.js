import React from 'react'
import { connect } from 'react-redux'

import Curation from './Curation'
import { fetchPicks, select, selectNext } from '../actions'

// Given the `store.dispatch` function, produces a function that
// dispatches SELECT_NEXT actions at given intervals.
const makeSliderInstaller = dispatch => (interval = 5000) =>
  window.setInterval(
    () => dispatch(selectNext()),
    interval
  )

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
    handleLabelClick: i => dispatch(select(i)),
    installSlider: makeSliderInstaller(dispatch)
  }
)

const CurationContainer = connect(mapStateToProps, mapDispatchToProps)(Curation)

export default CurationContainer
