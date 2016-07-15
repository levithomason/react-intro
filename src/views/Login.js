const React = require('react')
const Button = require('../components/Button')
const Input = require('../components/Input')
const Form = require('../components/Form')

class Login extends React.Component {
  state = {}

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome!</h1>

        <Form heading='Login'>
          <Input placeholder='username' onChange={this.handleUsernameChange} />
          <Input placeholder='password' onChange={this.handlePasswordChange} />
          <Button>Login</Button>
        </Form>

        <div>
          Welcome <strong>{this.state.username}</strong>!
        </div>
      </div>
    )
  }
}

module.exports = Login
