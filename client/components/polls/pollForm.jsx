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

  onChangeOption: function(index, event) {
    var value = event.target.value;

    this.state.poll.options[index].text = value;

    this.setState({poll: this.state.poll});
  },

  addOption: function() {
    if (!this.state.poll.options) {
      this.state.poll.options = [];
    }

    var newOption = { text: 'New option' };

    this.state.poll.options.push(newOption);
    this.setState({poll: this.state.poll});
  },

  removeOption: function() {
    if (!this.state.poll.options || this.state.poll.options.length == 0) {
      return;
    }

    this.state.poll.options.pop();
    this.setState({poll: this.state.poll});
  },

  renderOptions: function() {
    if (!this.state.poll.options) return;

    return this.state.poll.options.map((option, index) => {
      return (
        <div key={index} className="form-group">
          <input
            type="text"
            className="form-control"
            name={"option" + index}
            value={option.text}
            placeholder="Enter option..."
            onChange={this.onChangeOption.bind(null, index)} />
        </div>
      );
    });
  },

  render: function() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            ref="title"
            value={this.state.poll.title}
            placeholder="Enter poll title..."
            onChange={this.onChange} />
          </div>
          {this.renderOptions()}
          <button type="button" className="btn btn-default" onClick={this.addOption}>Add Option</button>
          <button type="button" className="btn btn-danger" onClick={this.removeOption}>Remove Option</button>
          <button type="button" className="btn btn-success" onClick={this.onSubmit}>Save</button>

        <div ref="optionsGroup">

        </div>
      </div>
    );
  }
});
