PollList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var polls = [];
    var handle = Meteor.subscribe('allPolls');
    if (handle.ready()) {
      polls = Polls.find().fetch();
    }
    return {
      polls: polls
    }
  },

  renderPolls() {
    return this.data.polls.map((poll) => {
      var path = FlowRouter.path('pollPage', {_id: poll._id });
      return (
          <div className="row" key={poll._id}>
            <div className="col-xs-12"><a href={path}>{poll.title}</a></div>
          </div>
      );
    });
  },

  render() {
    var newPollPath = FlowRouter.path('pollNew');
    return (
      <div>
        <header>
          <h1>Poll List</h1>
        </header>

        {this.renderPolls()}

        <div className="row">
          <div className="col-xs-12">
            <a href={newPollPath} className="btn btn-success btn-lg">New Poll</a>
          </div>
        </div>
      </div>
    );
  }
});
