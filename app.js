const React = require('react')
const ReactDOM = require('react-dom')
const Login = require('./src/views/Login')

class App extends React.Component {
  render() {
    return (
      <main>
        <Login />
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
