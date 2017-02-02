import React from 'react'

import CurationContainer from './curation/CurationContainer'

class Root extends React.Component {
  render () {
    return (
      <div className="container">
        <CurationContainer />
      </div>
    )
  }
}

export default Root
