import axios from 'axios'

import { RECEIVE_PICKS, DONE_FETCHING, SELECT } from '../constants'

// preloadImages :: string -> Promise<string>
// Preloads an image from a given url.
const preloadImages = src =>
  new Promise((resolve, reject) => {
    const img = new Image()

    img.onload = () => {
      resolve(src)
    }

    img.onerror = () => {
      reject(new Error('Something went wrong while loading an image.'))
    }

    img.src = src
  })

// trimData :: object -> Pick
// Given whole data of a picked piece, extracts required information.
const trimData = data => {
  const { work } = data

  return {
    id: work.id,
    title: work.title,
    creator: work.createdBy.username,
    thumbnail: work.attachments[0].thumbnail.medium,
    croppedImage: data.croppedImage,
    curator: data.curator.username,
    date: data.createdDate,
    feedback: data.feedback
  }
}

const receivePicks = picks => (
  {
    type: RECEIVE_PICKS,
    picks
  }
)

const doneFetching = () => (
  { type: DONE_FETCHING }
)

const fetchPicks = () => (dispatch, getState, api) => {
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
    .then(promises => {
      Promise.all(promises)
        .then(() => {
          dispatch(doneFetching())
        })
    })
}

const select = selected => (
  {
    type: SELECT,
    selected
  }
)

export { fetchPicks, select }
