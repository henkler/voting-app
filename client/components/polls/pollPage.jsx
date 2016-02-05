PollPage = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    _id: React.PropTypes.string.isRequired
  },

  getMeteorData() {
    var handle = Meteor.subscribe('poll', this.props._id);
    return {
      isLoading: ! handle.ready(),
      poll: Polls.findOne(this.props._id)
    }
  },

  renderPollOptions() {
    if (this.data.isLoading || ! this.data.poll.options ) { return; }

    return this.data.poll.options.map((option, index) => {
      return (
        <div />
      );
    });
  },

  render() {
    if (this.data.isLoading) { return <div />; }

    var editPath = FlowRouter.path('pollEdit', {_id: this.props._id });

    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <h2>{this.data.poll.title}</h2>
          </div>
          <div className="col-xs-12 col-md-6">
            <p>Chart placeholder</p>
          </div>
        </div>
      </div>
    );
  }
});
