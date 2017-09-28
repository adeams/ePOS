// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Links } from '../links.js';

Meteor.publish('links.all', function () {
  return Links.find();
});

Meteor.publish('members.all', function () {
  return Members.find();
});
