Home = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function() {
    return {
      user: Meteor.user(),
    }
  },

  renderHomeButtons: function() {
    var myPollsPath = FlowRouter.path('pollMyList');
    var newPollPath = FlowRouter.path('pollNew');
    var allPollsPath = FlowRouter.path('pollList');

    if (this.data.user) {
      return (
        <div className="btn-group">
          <a href={newPollPath} className="btn btn-lg btn-success">New Poll</a>
          <a href={myPollsPath} className="btn btn-lg btn-primary">My Polls</a>
          <a href={allPollsPath} className="btn btn-lg btn-info">View Polls</a>
        </div>
      );
    }
    else {
      return (
        <div className="btn-group">
          <a href={allPollsPath} className="btn btn-lg btn-info">View Polls</a>
        </div>
      );
    }
  },

  render: function() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>Dashboard</h1>
          <h2>What would you like to do today?</h2>
          {this.renderHomeButtons()}
        </div>
        <div className="well">
          <h3>Features</h3>
          <ul>
            <li>Built 100% in React</li>
            <li>Authentication via Github</li>
            <li>Uses Meteor for model framework</li>
            <li>Fully reactive!  Polls live-update as users vote on them</li>
            <li>Vote protection.  Duplicate votes cannot be cast (checked by user and ip address)</li>
            <li>Sub schemas for votes and options.  Can rename options and keep vote counts</li>
            <li>Polls remember your existing vote and allow you to change it</li>
            <li>Charts via ChartJS</li>
          </ul>
        </div>
      </div>
    );
  }
});
