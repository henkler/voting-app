PollNew = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    if (! Meteor.userId()) { FlowRouter.go('pollList'); }

    return {
      user: Meteor.user()
    }
  },

  save(poll) {
      Meteor.call("insertPoll", poll, function(error, result) {
        FlowRouter.go('pollList');
      });
  },

  render() {
    return (
      <div className="panel panel-success">
        <div className="panel-heading">
          <h1>Create a new poll</h1>
        </div>

        <div className="panel-body">
          <PollForm ref="pollForm" savePoll={this.save} />
        </div>
      </div>
    );
  }
});
