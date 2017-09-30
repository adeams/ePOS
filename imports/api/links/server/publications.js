// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Links } from '../links.js';
import { Members } from '../links.js';
import { Products } from '../links.js';

Meteor.publish('links.all', function () {
  return Links.find();
});

Meteor.publish('members.all', function () {
  return Members.find();
});

Meteor.publish('products.all', function () {
  return Products.find();
});
