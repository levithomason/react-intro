const React = require('react')

class Form extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.heading}</h3>
        {this.props.children}
      </div>
    )
  }
}

module.exports = Form
