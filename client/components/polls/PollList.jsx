PollList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function() {
    var polls = [];

    var handle = Meteor.subscribe('allPolls');
    if (handle.ready()) {
      polls = Polls.find().fetch();
    }
    return {
      user: Meteor.user(),
      polls: polls
    }
  },

  renderPolls: function() {
    return this.data.polls.map((poll) => {
      var path = FlowRouter.path('pollPage', {_id: poll._id });
      return (
          <li className="list-group-item" key={poll._id}>
            <h2><a href={path}>{poll.title}</a></h2>
          </li>
      );
    });
  },

  render: function() {
    return (
      <div className="panel panel-success text-center">
        <div className="panel-heading">
          <h1>Available Polls</h1>
        </div>

        <div className="panel-body">
          <ul className="list-group">
            {this.renderPolls()}
          </ul>
        </div>
      </div>
    );
  }
});
