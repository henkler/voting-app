App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-8 col-md-offset-2">
              {this.props.content}
            </div>
          </div>
        </div>
      </div>
    );
  }
});
