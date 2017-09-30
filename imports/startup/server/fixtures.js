// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';
import { Members } from '../../api/links/links.js';

Meteor.startup(() => {
  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = [
      {
        title: 'Do the Tutorial',
        url: 'https://www.meteor.com/try',
        createdAt: new Date(),
      },
      {
        title: 'Follow the Guide',
        url: 'http://guide.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Read the Docs',
        url: 'https://docs.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Discussions',
        url: 'https://forums.meteor.com',
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Links.insert(link));
  }

  if (Members.find().count() === 0) {
    const data = [
      {
        code:'0001',
        name: 'lookmun adeam',
        type: 'admin',
        createdAt: new Date(),
      },
      {
        code:'0002',
        name: 'sulva adeam',
        type: 'user',
        createdAt: new Date(),
      },
      {
        code:'0003',
        name: 'amanee thoyanggoh',
        type: 'members',
        createdAt: new Date(),
      },
    ];

    data.forEach(member => Members.insert(member));
  }
});
