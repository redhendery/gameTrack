import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index');

test('should transition to game route', function(assert) {
  let route = this.subject({
    replaceWith(routeName) {
      assert.equal(routeName, 'game', 'replace with route name game');
    }
  });
  route.beforeModel();
});
