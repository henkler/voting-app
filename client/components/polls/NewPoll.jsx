NewPoll = React.createClass({
  handleSubmit(event) {
      event.preventDefault();
      var name = this.refs.title.value.trim();

      Polls.insert({
        title: name,
        createdAt: new Date()
      });
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Poll Title</label>
          <input type="text" className="form-control" ref="title" placeholder="Enter poll title..."></input>
          <button type="submit" className="btn btn-default">Create</button>
        </div>
      </form>
    );
  }
});
