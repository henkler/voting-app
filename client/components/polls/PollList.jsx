PollList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      polls: Polls.find({}).fetch()
    }
  },

  renderPolls() {
    return this.data.polls.map((poll) => {
      return <Poll key={poll._id} poll={poll} />;
    });
  },

  render() {
    return (
      <div>
        <header>
          <h1>Poll List</h1>
        </header>

        <ul>
          {this.renderPolls()}
        </ul>
      </div>
    );
  }
});
