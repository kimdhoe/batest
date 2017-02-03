import axios from 'axios'

import { RECEIVE_PICKS, DONE_FETCHING, SELECT, SELECT_NEXT } from './constants'
import { preloadImages } from '../utils'
import { trimData } from './model'

// Cache retrieved data from the API in Redux store.
const receivePicks = picks => (
  {
    type: RECEIVE_PICKS,
    picks
  }
)

// All data (including images)  has been fetched.
const doneFetching = () => (
  { type: DONE_FETCHING }
)

// Select a piece to show.
const select = selected => (
  {
    type: SELECT,
    selected
  }
)

// Select next piece.
const selectNext = () => (
  { type: SELECT_NEXT }
)

// (thunk) Fetch curator's pick data and then fetch images.
const fetchPicks = () => (dispatch, getState, api) =>
  axios.get(api)
    .then(res => {
      const picks = res.data.data.map(trimData)

      dispatch(receivePicks(picks))

      const imageUrls = picks.reduce((acc, pick) =>
        [ ...acc, pick.thumbnail, pick.croppedImage ],
        []
      )
      const promises = imageUrls
        .map(preloadImages)
        .map(p => p.catch(err => console.error(err)))

      return promises
    })
    .then(promises => Promise.all(promises))
    .then(() => dispatch(doneFetching()))

export { fetchPicks, select, selectNext }
