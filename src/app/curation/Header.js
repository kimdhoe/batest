import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { formatDate } from '../../utils'

const Header = ({ date, id }) =>
  <header className="Header">
    <ReactCSSTransitionGroup
      transitionName='fade'
      transitionEnterTimeout={700}
      transitionLeaveTimeout={700}
    >
      <p className="Header-date" key={id}>{formatDate(date)}</p>
    </ReactCSSTransitionGroup>

    <h1 className="Header-title">Curator's Pick</h1>
  </header>

  Header.PropTypes = {
    date: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired
  }

export default Header
