import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TwitterMessage extends Component {
  constructor() {
    super()
    this.state = {
      textInput: ''
    };
  }

  setCharacterCount = event => {
    this.setState({
      textInput: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>Characters Remaining: {this.props.maxChars - this.state.textInput.length}</p>
        <input  type="text"
                value={this.state.textInput}
                onChange={this.setCharacterCount} />
      </div>
    )
  }
}

TwitterMessage.defaultProps = { maxChars: 140 }
TwitterMessage.propTypes = { maxChars: PropTypes.number }

export default TwitterMessage
