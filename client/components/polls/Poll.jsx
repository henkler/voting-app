Poll = React.createClass({
  propTypes: {
    poll: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.poll.title} {this.props.poll.createdAt.toString()}</li>
    );
  }
});
