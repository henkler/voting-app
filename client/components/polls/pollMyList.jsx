PollMyList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function() {
    var polls = [];
    if (! Meteor.userId()) {
      FlowRouter.go('pollList');
    }

    var handle = Meteor.subscribe('myPolls', Meteor.userId());
    if (handle.ready()) {
      polls = Polls.find().fetch();
    }
    return {
      user: Meteor.user(),
      polls: polls
    }
  },

  deletePoll: function(pollID) {
    Meteor.call("removePoll", pollID, function(error, result) {
      FlowRouter.go('pollMyList');
    });
  },

  renderPolls: function() {
    return this.data.polls.map((poll) => {
      var path = FlowRouter.path('pollPage', {_id: poll._id });
      var editPath = FlowRouter.path('pollEdit', {_id: poll._id });
      return (
          <li className="list-group-item" key={poll._id}>
            <h2>
              <a href={path}>{poll.title}</a>
              <a type="button" href={editPath} className="btn btn-default">Edit</a>
              <button type="button" className="btn btn-danger" onClick={this.deletePoll.bind(null, poll._id)}>Delete</button>
            </h2>
          </li>
      );
    });
  },

  render: function() {
    var newPollPath = FlowRouter.path('pollNew');

    return (
      <div className="panel panel-success text-center">
        <div className="panel-heading">
          <h1>My Polls</h1>
        </div>

        <div className="panel-body">
          <ul className="list-group">
            {this.renderPolls()}
          </ul>
        </div>
        <div className="panel-footer">
          <a href={newPollPath} className="btn btn-success btn-lg">New Poll</a>
        </div>
      </div>
    );
  }
});
