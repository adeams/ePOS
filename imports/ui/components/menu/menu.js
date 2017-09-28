import './menu.html';

Template.menu.onCreated(function helloOnCreated() {
    // counter starts at 0
    //this.counter = new ReactiveVar(0);
  });
  
  Template.menu.helpers({
    // counter() {
    //   return Template.instance().counter.get();
    // },
  });

  Template.menu.onRendered(function(){
    $(".button-collapse").sideNav();
    // $(".dropdown-button.report").dropdown();
    // $(".dropdown-button.promotion").dropdown();
    // $(".dropdown-button.setting").dropdown();
    $('.dropdown-button.report').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        //hover: true, // Activate on hover
        hover: false, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
      });
      $('.dropdown-button.promotion').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: false, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
      });
      $('.dropdown-button.setting').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: false, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
      });
  });
  
  Template.menu.events({
    // 'click button'(event, instance) {
    //   // increment the counter when button is clicked
    //   instance.counter.set(instance.counter.get() + 1);
    // },
  });