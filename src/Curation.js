import React from 'react'

import Header from './Header'
import LabelList from './LabelList'

const { arrayOf, object, string, number } = React.PropTypes

class Curation extends React.Component {
  static propTypes = {
    picks: arrayOf(object), // !!!
    selected: number
  }

  render () {
    const { picks, selected, handleLabelClick } = this.props

    return (
      <div className="Curation">
        <div className="Curation-header">
          <Header />
        </div>

        <div className="Curation-stage">
          {picks
            .filter(pick => pick.id === selected)
            .map(pick =>
              <div
                className="Curation-image"
                key={pick.id}
                alt={pick.title}
                style={{ backgroundImage: `url("${pick.croppedImage}")` }}
              >
              </div>
            )
          }
        </div>

        <div className="Curation-labels">
          <LabelList
            picks={picks}
            selected={selected}
            handleLabelClick={handleLabelClick}
          />
        </div>

      </div>
    )
  }
}

export default Curation
