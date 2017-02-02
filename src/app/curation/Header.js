import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { formatDate } from '../../utils'

const Header = ({ date, feedback, id }) =>
  <header className="Header">
    <h1 className="Header-title">Curator's Pick</h1>
    <div className="Header-misc">
      <ReactCSSTransitionGroup
        transitionName='fade'
        transitionEnterTimeout={700}
        transitionLeaveTimeout={700}
      >
        <div className='Header-info' key={id}>
          <p className="Header-date">{formatDate(date)}</p>
          <p className="Header-feedback">{feedback}</p>
        </div>
      </ReactCSSTransitionGroup>
    </div>
  </header>

  Header.PropTypes = {
    date: React.PropTypes.string.isRequired,
    feedback: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired
  }

export default Header
