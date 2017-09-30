// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.js';

Meteor.methods({
  'links.insert'(title, url) {
    check(url, String);
    check(title, String);

    return Links.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },
  'members.insert'(code, name, type) {
    check(code, String);
    check(name, String);
    check(type, String);

    return Members.insert({
      name,
      type,
      createdAt: new Date(),
    });
  },
  'products.insert'(code, name, price, number, type) {
    check(name, String);
    check(type, String);

    return Members.insert({
      code,
      name,
      price,
      number,
      type,
      createdAt: new Date(),
    });
  },
});
