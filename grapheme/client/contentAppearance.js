Meteor.startup(Session.set('showLegend', false))

Template.content.dictionaryWellSize = function(){
  if(Session.get('showLegend')===true){
    return 'span8';
  } else {
    return 'span12';
  }
}

Template.content.hideLegend = function(){
  if(Session.get('showLegend')===true){
    return '';
  } else {
    return "style=display:none;";
  }
}

Template.content.legendOn = function(){
  if(Session.get('showLegend')===true){
    return 'active'
  }
}

Template.content.legendOff = function(){
  if(Session.get('showLegend')===false){
    return 'active'
  }
}

Template.content.events({
  'click .showLegend': function (event) {   
    Session.set('showLegend', true)
  }
})

Template.content.events({
  'click .hideLegend': function (event) {   
    Session.set('showLegend', false)
  }
})