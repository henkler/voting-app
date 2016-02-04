Home = React.createClass({
  render: function() {
    var myPollsPath = FlowRouter.path('pollListMine');
    var newPollPath = FlowRouter.path('pollNew');

    return (
      <div className="jumbotron text-center">
        <h1>Dashboard</h1>
        <h2>What would you like to do today?</h2>
        <p>
          <a href={newPollPath} className="btn btn-lg btn-success">New Poll</a>
          <a href={myPollsPath} className="btn btn-lg btn-primary">My Polls</a>
        </p>
      </div>
    );
  }
});
