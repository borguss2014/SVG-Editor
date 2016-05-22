var beacon_hashmap = {};

function deselect(e) {
  $('.pop').slideFadeToggle(function() {
    e.removeClass('selected');
  });    
}

function deselect2(e) {
  $('.pop2').slideFadeToggle(function() {
    e.removeClass('selected');
  });    
}

$(function() {
  $('#add_beacon_data').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('.pop').slideFadeToggle();
    }
    return false;
  });

 

  $('.close').on('click', function() {
    deselect($('#add_beacon_data'));
    return false;
  });

  

  $('#form1').on('submit', function(e){
    console.log("Submit works");

    //Beacon hashmap with UUID key and position value
    beacon_hashmap[$('#bUuid').val()] = $('#bPos').val();

    //Clear form input fields after submit and prevent default form submission
    $('#bUuid').val('');
    $('#bPos').val('');
    e.preventDefault();
  });

  
  $('#message_submit').on('click', function() {
    $('.pop').slideFadeToggle();
  });

  
});

$.fn.slideFadeToggle = function(easing, callback) {
  return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};


$(function() {
   $('#delete_beacon_data').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('.pop2').slideFadeToggle();
    }
    return false;
  });

   $('.close2').on('click', function() {
    deselect2($('#delete_beacon_data'));
    return false;
  });

   $('#form2').on('submit', function(e){
    console.log("Submit2 works");

  $('#message_submit2').on('click', function() {
    $('.pop2').slideFadeToggle();
  });

    
    e.preventDefault();
  });

});