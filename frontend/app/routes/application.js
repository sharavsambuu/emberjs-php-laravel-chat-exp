import Em from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
export default Em.Route.extend(ApplicationRouteMixin, {
  actions: {
    goToChat: function() {
      this.transitionTo('chats-index');
    }
  }
});
