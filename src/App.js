import React from 'react'
import axios from 'axios'

import Loading from './Loading'
import Curation from './Curation'

const API = 'https://api4.bbuzzart.com/picks'

// preloadImages :: string -> Promise<string>
const preloadImages = src =>
  new Promise((resolve, reject) => {
    const img = new Image()

    img.onload = () => {
      console.log('An image has been loaded.')
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
    date: data.createDate
  }
}

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      isFetching: true,  // Are data and images still being fetched?
      picks: [],         // Five picks.
      selected: 0        // The index of currently selected pick.
    }
    this.handleLabelClick = this.handleLabelClick.bind(this)
  }

  componentDidMount () {
    axios.get(API)
      .then(res => {
        const picks = res.data.data.map(trimData)

        this.setState({ picks })

        // images :: Array<string>
        // The URLs of images that should be preloaded.
        const images = res.data.data.reduce((acc, pick) =>
          [
            ...acc,
            pick.work.attachments[0].thumbnail.medium,
            pick.croppedImage
          ],
          []
        )

        // promises :: Array<Promise<string>>
        // Promises of preloadded images.
        const promises = images
          .map(preloadImages)
          .map(p => p.catch(err => {
            console.error(err)
          }))

        Promise.all(promises)
          .then(() => {
            this.setState({ isFetching: false })
          })
      })
  }

  handleLabelClick (selected) {
    this.setState({ selected })
  }

  render () {
    return (
      <div className='App'>
        {/* {this.state.isFetching && */}
          <Loading />
        {/* } */}

        <Curation
          picks={this.state.picks}
          selected={this.state.selected}
          handleLabelClick={this.handleLabelClick}
        />
      </div>
    )
  }
}

export default App
