const React = require('react')

class Form extends React.Component {
  render() {
    return (
      <form>
        <h3>{this.props.heading}</h3>
        {this.props.children}
      </form>
    )
  }
}

module.exports = Form
