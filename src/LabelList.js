import React from 'react'

import Label from './Label'

const { arrayOf, object, number } = React.PropTypes

class LabelList extends React.Component {
  static propTypes = {
    picks: arrayOf(object),
    selected: number
  }

  render () {
    return (
      <div className="LabelList">
        {this.props.picks.map((pick, i) =>
          <div className="LabelList-label" key={pick.id}>
            <Label
              isSelected={i === this.props.selected}
              pick={pick}
              handleLabelClick={() => { this.props.handleLabelClick(i) }}
            />
          </div>
        )}
      </div>
    )
  }
}

export default LabelList
