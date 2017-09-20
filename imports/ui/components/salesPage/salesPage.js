import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './salesPage.html';

Template.salesPage.onCreated(function () {
  Meteor.subscribe('links.all');
});

Template.salesPage.helpers({
  links() {
    return Links.find({});
  },
});

Template.salesPage.events({
  'submit .info-link-add'(event) {
    event.preventDefault();

    const target = event.target;
    const title = target.title;
    const url = target.url;

    Meteor.call('links.insert', title.value, url.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        title.value = '';
        url.value = '';
      }
    });
  },
});

$(document).ready(function(){
    // console.log("wwwwwwwwwww")
    //$(".button-collapse").sideNav();
    $('select').material_select();
});


