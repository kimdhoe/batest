import React from 'react'

import Header from './Header'
import LabelList from './LabelList'
import Spinner from '../shared/Spinner'

const { arrayOf, bool, object, string, number, func } = React.PropTypes

class Curation extends React.Component {
  static propTypes = {
    picks: arrayOf(object).isRequired, // !!!
    selected: number.isRequired,
    isFetching: bool.isRequired,
    handleLabelClick: func.isRequired
  }

  componentDidMount () {
    this.props.fetchPicks()
  }

  render () {
    const { picks, selected, isFetching, handleLabelClick } = this.props

    if (isFetching) {
      return (
        <div className='Curation-overlay'>
          <Spinner />
        </div>
      )
    }

    return (
      <div className="Curation">
        <div
          className="Curation-bg"
          style={{ backgroundImage: `url('${picks[selected].thumbnail}')` }}
        ></div>
        <div className="Curation-overlay"></div>

        <div className="Curation-body">
          <div className="Curation-header">
            <Header
              date={picks[selected].date}
              curator={picks[selected].curator}
            />
          </div>

          <div className="Curation-stage">
            {picks
                .filter((pick, i) => i === selected)
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
      </div>
    )
  }
}

export default Curation
