import { Meteor } from 'meteor/meteor';
import MenusCollection from '../imports/api/MenusCollection';

Meteor.methods({checkTwitter: function () {
  
  this.unblock();
  try {
    var result = HTTP.call("GET", "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86vp8cc0o7a4u5&redirect_uri=http%3A%2F%2Fmeteor-tpham045.c9users.io%2Fauth&state=DCEeFWf45A53sdfK50ooE24");
    return result
  } catch (e) {
    return false;
  }
}});