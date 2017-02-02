import React from 'react'

import Label from './Label'

const { arrayOf, object, number, func } = React.PropTypes

class LabelList extends React.Component {
  static propTypes = {
    picks: arrayOf(object).isRequired,
    selected: number.isRequired,
    handleLabelClick: func.isRequired
  }

  render () {
    const { picks, selected, handleLabelClick } = this.props

    return (
      <div className='LabelList'>
        {picks.map((pick, i) =>
          <div className='LabelList-label' key={pick.id}>
            <Label
              pick={pick}
              isSelected={i === selected}
              onClick={() => handleLabelClick(i)}
            />
          </div>
        )}
      </div>
    )
  }
}

export default LabelList
