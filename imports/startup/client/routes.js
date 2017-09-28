import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/report/report.js';
import '../../ui/pages/promotion/promotion.js';
import '../../ui/pages/setting/setting.js';
import '../../ui/pages/help/help.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.route('/home', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.route('/report', {
  name: 'App.report',
  action() {
    BlazeLayout.render('App_body', { main: 'App_report' });
  },
});

FlowRouter.route('/promotion', {
  name: 'App.promotion',
  action() {
    BlazeLayout.render('App_body', { main: 'App_promotion' });
  },
});

FlowRouter.route('/setting', {
  name: 'App.setting',
  action() {
    BlazeLayout.render('App_body', { main: 'App_setting' });
  },
});

FlowRouter.route('/help', {
  name: 'App.help',
  action() {
    BlazeLayout.render('App_body', { main: 'App_help' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
