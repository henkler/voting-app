PollEdit = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var handle = Meteor.subscribe('poll', this.props._id);
    var poll = Polls.findOne(this.props._id);

    return {
      isLoading: ! handle.ready(),
      poll: poll
    }
  },

  save(poll) {
    if (poll._id !== this.data.poll._id) {
      return;
    }
    
    Meteor.call("updatePoll", poll, function(error, result) {
      FlowRouter.go('pollList');
    });
  },

  render() {
    if (this.data.isLoading) { return <div />; }

    return (
      <PollForm ref="pollForm" poll={this.data.poll} savePoll={this.save} />
    );
  }
});
