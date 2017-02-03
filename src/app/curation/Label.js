import React from 'react'

import { pickType } from '../model'

const Label = ({ isSelected, pick, onClick }) =>
  <div
    className={`Label ${isSelected ? 'is-selected': ''}` }
    onClick={onClick}
  >
    <p className='Label-title'>{pick.title}</p>
    <p className='Label-creator'>{pick.creator}</p>
  </div>

Label.propTypes = {
  isSelected: React.PropTypes.bool.isRequired,
  pick: pickType.isRequired,
  onClick: React.PropTypes.func.isRequired
}

export default Label
