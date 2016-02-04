PollList = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    showOnlyMyPolls: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      showOnlyMyPolls: false
    };
  },

  getMeteorData: function() {
    var polls = [];
    if (this.props.showOnlyMyPolls && ! Meteor.userId()) {
      FlowRouter.go('pollList');
    }

    var handle = this.props.showOnlyMyPolls ? Meteor.subscribe('myPolls', Meteor.userId()) : Meteor.subscribe('allPolls');
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

  renderNewPollButton: function() {
    if (this.data.user) {
      var newPollPath = FlowRouter.path('pollNew');
      return (
          <a href={newPollPath} className="btn btn-success btn-lg">New Poll</a>
      );
    }
  },

  render: function() {
    return (
      <div className="panel panel-success text-center">
        <div className="panel-heading">
          <h1>{this.props.showOnlyMyPolls ? "My Polls" : "All Polls"}</h1>
        </div>

        <div className="panel-body">
          <ul className="list-group">
            {this.renderPolls()}
          </ul>
        </div>
        <div className="panel-footer">
          {this.props.showOnlyMyPolls ? this.renderNewPollButton() : null }
        </div>
      </div>
    );
  }
});
