//import { Links } from '/imports/api/links/links.js';
//import { Members } from '/imports/api/links/links.js';
//import { Products } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './salesPage.html';
//import '../../components/info/info.html';

Template.salesPage.onCreated(function () {
  Meteor.subscribe('links.all');
  Meteor.subscribe('members.all');
  Meteor.subscribe('products.all');
  Meteor.subscribe('groupProducts.all');
  Meteor.subscribe('agents.all');
  Meteor.subscribe('branchs.all');
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

  // $('.dropdown-button').dropdown({
  //   inDuration: 300,
  //   outDuration: 225,
  //   constrainWidth: false, // Does not change width of dropdown to that of the activator
  //   hover: true, // Activate on hover
  //   gutter: 0, // Spacing from edge
  //   belowOrigin: false, // Displays dropdown below the button
  //   alignment: 'left', // Displays dropdown with edge aligned to the left of button
  //   stopPropagation: false // Stops event propagation
  // });
  //$('.dropdown-button').dropdown('open');
  $('.modal').modal();
  // $('.modal').modal({
  //     dismissible: true, // Modal can be dismissed by clicking outside of the modal
  //     opacity: .5, // Opacity of modal background
  //     inDuration: 300, // Transition in duration
  //     outDuration: 200, // Transition out duration
  //     startingTop: '4%', // Starting top style attribute
  //     endingTop: '10%', // Ending top style attribute
  //     ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
  //       //alert("Ready");
  //       console.log(modal, trigger);
  //     },
  //     complete: function() { 
  //         alert('Closed... ');  

  //     } // Callback for Modal close
  //   }
  // );
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
  'click button'(event){
    console.log('button click');
    // var test = new Confirmation({
    //   message: "Are you sure ?",
    //   title: "Confirmation",
    //   cancelText: "Cancel",
    //   okText: "Ok",
    //   success: false, // whether the button should be green or red
    //   focus: "Ok" // which button to autofocus, "cancel" (default) or "ok", or "none"
    // }, function (ok) {
    //   alert('click '+ ok); 
    //   // ok is true if the user clicked on "ok", false otherwise
    // });
    // console.log(test);
    //confirm();
    //alert();
   
    // new Confirmation({
    //   message: "Are you sure ?",
    //   title: "Confirmation",
    //   cancelText: "Cancel",
    //   okText: "Ok",
    //   success: true, // whether the button should be green or red
    //   focus: "cancel" // which button to autofocus, "cancel" (default) or "ok", or "none"
    // }, function (ok) {
    //   // ok is true if the user clicked on "ok", false otherwise
    // });
  },
  'click button.modal-action.ok'(event){
    console.log('yyyyyyy');
    //$('.modal').modal();

  }

});




