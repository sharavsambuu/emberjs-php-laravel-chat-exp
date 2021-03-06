import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('chats', function() {
    this.resource('chats-index', {path: '/'});
    this.route('new', {path: '/new'});
  });
  this.route('login');
  this.route('register');
  this.route('profile');
});

export default Router;
