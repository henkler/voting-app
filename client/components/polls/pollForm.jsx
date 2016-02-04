PollForm = React.createClass({
  propTypes: {
    poll: React.PropTypes.object,
    savePoll: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
    var poll = this.props.poll || { title: '' };
    return {
      poll: poll
    };
  },

  onSubmit: function(event) {
    event.preventDefault();

    this.props.savePoll(this.state.poll);
  },

  onChange: function(event) {
    var field = event.target.name;
    var value = event.target.value;

    this.state.poll[field] = value;

    this.setState({poll: this.state.poll});
  },

  render: function() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Poll Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            ref="title"
            value={this.state.poll.title}
            placeholder="Enter poll title..."
            onChange={this.onChange} />
          <button type="submit" className="btn btn-default">Save</button>
        </div>
      </form>
    );
  }
});
