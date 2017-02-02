import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Spinner from '../shared/Spinner'
import Header from './Header'
import Stage from './Stage'
import LabelList from './LabelList'

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
    const { isFetching } = this.props

    if (isFetching) {
      return (
        <div className='Curation-spinnerWrapper'>
          <div className='Curation-spinner'>
            <Spinner />
          </div>
        </div>
      )
    }

    const { picks, selected, handleLabelClick } = this.props
    const { id, date, thumbnail, croppedImage } = picks[selected]

    return (
      <div className='Curation'>
        <ReactCSSTransitionGroup
          transitionName='fade'
          transitionEnterTimeout={700}
          transitionLeaveTimeout={700}
        >
          <div
            className='Curation-bg'
            key={id}
            style={{ backgroundImage: `url('${thumbnail}')` }}
          ></div>
        </ReactCSSTransitionGroup>

        <div className='Curation-overlay'></div>

        <div className='Curation-body'>
          <div className='Curation-header'>
            <Header date={date} id={id} />
          </div>

          <div className='Curation-stage'>
            <Stage id={id} imageUrl={croppedImage} />
          </div>

          <div className='Curation-labels'>
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
