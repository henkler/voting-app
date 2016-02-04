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
    var handle = this.props.showOnlyMyPolls ? Meteor.subscribe('myPolls') : Meteor.subscribe('allPolls');
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
          <div className="row" key={poll._id}>
            <div className="col-xs-12"><a href={path}>{poll.title}</a></div>
          </div>
      );
    });
  },

  renderNewPollButton: function() {
    if (this.data.user) {
      var newPollPath = FlowRouter.path('pollNew');
      return (
        <div className="row">
          <div className="col-xs-12">
            <a href={newPollPath} className="btn btn-success btn-lg">New Poll</a>
          </div>
        </div>
      );
    }
  },

  render: function() {
    return (
      <div>
        <header>
          <h1>All Polls</h1>
        </header>

        {this.renderPolls()}

        {this.renderNewPollButton()}

      </div>
    );
  }
});
