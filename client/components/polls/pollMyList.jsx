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
    if (confirm("Are you sure?")) {
      Meteor.call("removePoll", pollID, function(error, result) {
        FlowRouter.go('pollMyList');
      });
    }
  },

  renderPolls: function() {
    return this.data.polls.map((poll) => {
      var path = FlowRouter.path('pollPage', {_id: poll._id });
      var editPath = FlowRouter.path('pollEdit', {_id: poll._id });
      return (
          <li className="list-group-item" key={poll._id}>
            <div className="row">
              <div className="col-xs-6">
                <h2>
                  <a href={path}>{poll.title}</a>
                </h2>
              </div>
              <div className="col-xs-6">
                <h2>
                <a type="button" href={editPath} className="btn btn-lg btn-default">Edit</a>
                <button type="button" className="btn btn-lg btn-danger" onClick={this.deletePoll.bind(null, poll._id)}>Delete</button>
                </h2>
              </div>
            </div>
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
