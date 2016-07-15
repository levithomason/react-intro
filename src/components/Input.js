const React = require('react')

class Input extends React.Component {
  render() {
    return (
      <div>
        <input
          type='text'
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
      </div>
    )
  }
}

module.exports = Input
