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
        <div className="row">
          <div className="col-xs-12">
            <a href={editPath} className="btn btn-success">Edit</a>
          </div>
        </div>
      </div>
    );
  }
});
