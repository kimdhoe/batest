import React from 'react'
import { Provider } from 'react-redux'

import Root from './Root'

class App extends React.Component {
  static propTypes = {
    store: React.PropTypes.object.isRequired
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <Root />
      </Provider>
    )
  }
}

export default App
