import React from 'react'

const Label = ({ isSelected, pick, handleLabelClick }) =>
  <div
    className={`Label ${isSelected ? 'is-selected': ''}` }
    onClick={handleLabelClick}
  >
    <p className="Label-title">{pick.title}</p>
    <p className="Label-creator">{pick.creator}</p>
  </div>

export default Label
