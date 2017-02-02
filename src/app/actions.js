import axios from 'axios'

import { RECEIVE_PICKS, DONE_FETCHING, SELECT, SELECT_NEXT } from './constants'
import { preloadImages } from '../utils'
import { trimData } from './model'

const receivePicks = picks => (
  {
    type: RECEIVE_PICKS,
    picks
  }
)

const doneFetching = () => (
  { type: DONE_FETCHING }
)

const fetchPicks = () => (dispatch, getState, api) =>
  axios.get(api)
    .then(res => {
      const picks = res.data.data.map(trimData)

      dispatch(receivePicks(picks))

      return picks
    })
    .then(picks => {
      const imageUrls = picks.reduce((acc, pick) =>
        [ ...acc, pick.thumbnail, pick.croppedImage ],
        []
      )
      const promises = imageUrls
        .map(preloadImages)
        .map(p => p.catch(err => console.error(err)))

      return promises
    })
    .then(promises =>
      Promise.all(promises)
        .then(() => dispatch(doneFetching()))
    )

const select = selected => (
  {
    type: SELECT,
    selected
  }
)

const selectNext = () => (
  { type: SELECT_NEXT }
)

export { fetchPicks, select, selectNext }
