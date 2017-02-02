import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Stage extends React.Component {
  static propTypes = {
    id: React.PropTypes.number.isRequired,
    imageUrl: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <ReactCSSTransitionGroup
        transitionName='fade'
        transitionEnterTimeout={700}
        transitionLeaveTimeout={700}
      >
        <div
          className='Stage'
          key={this.props.id}
          style={{ backgroundImage: `url('${this.props.imageUrl}')` }}
        ></div>
      </ReactCSSTransitionGroup>
    )
  }
}

export default Stage
