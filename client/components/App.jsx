App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Polls!</h1>
        </div>
        {this.props.content}
      </div>
    );
  }
});
