import React from 'react'

import {formatDate} from '../../utils/date'

const Header = ({ date, curator }) =>
  <header className="Header">
    <h2 className="Header-title">Curator's Pick</h2>
    <p className="Header-data">{formatDate(date)}</p>
    <p className="Header-curator">{curator}</p>
  </header>

Header.PropTypes = {
  date: React.PropTypes.string.isRequired,
  curator: React.PropTypes.string.isRequired
}

export default Header
