FlowRouter.route('/', {
  action: function(params, queryParams) {
    ReactLayout.render(App, {
      content: <PollList />
    });
  }
});

var pollRoutes = FlowRouter.group({
  prefix: '/polls',
  name: 'polls'
});

pollRoutes.route('/', {
  name: 'pollList',
  action: function() {
    ReactLayout.render(App, {
      content: <PollList />
    });
  }
});

pollRoutes.route('/new', {
  name: 'pollNew',
  action: function(){
    ReactLayout.render(App, {
      content: <PollNew />
    });
  }
});

pollRoutes.route('/:_id', {
  name: 'pollPage',
  action: function(params) {
    ReactLayout.render(App, {
      content: <PollPage _id={params._id}/>
    });
  }
});

pollRoutes.route('/:_id/edit', {
  name: 'pollEdit',
  action: function(params) {
    ReactLayout.render(App, {
      content: <PollEdit _id={params._id}/>
    });
  }
});
