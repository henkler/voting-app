PollNew = React.createClass({
  save(poll) {
      Meteor.call("newPoll", poll, function(error, result) {
        FlowRouter.go('pollList');
      });
  },

  render() {
    return (
      <PollForm ref="pollForm" savePoll={this.save} />
    );
  }
});
