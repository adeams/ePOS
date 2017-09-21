import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './salesPage.html';

Template.salesPage.onCreated(function () {
  Meteor.subscribe('links.all');
  $(document).ready(function(){
       console.log("$(document).ready(function()")
      //$(".button-collapse").sideNav();
      $('select').material_select();
      //Materialize.updateTextFields();
  });
});

Template.salesPage.helpers({
  links() {
    return Links.find({});
  },
});

Template.salesPage.onRendered(function(){
  console.log('Template.salesPage.onRendered');
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });
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




