import React, {Component} from 'react'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleInputChange = event => {
    let { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let {username, password} = this.state
    if (!username || !password) return false
    this.props.onSubmit(username, password)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input  id="test-username"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input  id="test-password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    )
  }
}

export default LoginForm
