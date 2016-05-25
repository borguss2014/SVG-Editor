var beacon_array = [];

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
    console.log("Submitting beacon UUID and position");

    //Beacon array with UUID values
    beacon_array.push($('#bUuid').val());

    //Clear form input fields after submit and prevent default form submission
    $('#bUuid').val('');
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
      deselect2($(this));               
    } else {
      $(this).addClass('selected');
      $('.pop2').slideFadeToggle();
    }

    var beacon_list = document.getElementById("beaconSelect");
    var option = document.createElement("option");

    if(beacon_array.length == 0 && beacon_list.options.length == 0){
      console.log("Array and list empty , adding label");
      option.text = "EMPTY";
      beacon_list.add(option);
    }
    else {
      console.log("Array or list no longer empty");
      
      for(var uuid=0; uuid<beacon_array.length; uuid++){

        var foundInList = false;

        for(var i=0; i<beacon_list.options.length; i++){
          if(beacon_list.options[i].value==beacon_array[uuid]){
            foundInList = true;
            console.log("Found array beacon in list");
          }
        }

        if(foundInList==false){
          option.text = beacon_array[uuid];
          beacon_list.add(option);
          console.log("Map beacon not found in list, adding ...");
        }
      }

      $('#beaconSelect option').each(function(){
        if (this.value == 'EMPTY' && beacon_list.options.length > 1) {
          console.log("EMPTY exists, deleting");
          $(this).remove();
          return false;
        }
      });

    }

    return false;
  });

  $('.close2').on('click', function() {
    deselect2($('#delete_beacon_data'));
    return false;
  });

  $('#form2').on('submit', function(e){
    
  if($('#beaconSelect option').filter(':selected').text() != ''){
    console.log("Deleting selected beacon from array");
    var index = beacon_array.indexOf($('#beaconSelect option').filter(':selected').text());
    beacon_array.splice(index, 1);

    $('#beaconSelect option').each(function(){
      if (this.value == $('#beaconSelect option').filter(':selected').text()) {
        console.log("Deleting selected beacon from list");
        $(this).remove();
        return false;
      }
    });

  }
    e.preventDefault();
  });

   $('#message_submit2').on('click', function() {
    $('.pop2').slideFadeToggle();
  });


});