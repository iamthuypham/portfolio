import MenusCollection from '../imports/api/MenusCollection';

Meteor.methods({
  deselectMenus() {
    MenusCollection.update(
        {selected: true},
        {$set: {selected: false}},
        {multi: true}
    )
  }
})