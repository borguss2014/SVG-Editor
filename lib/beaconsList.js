var beacon_array = [];

var beacon_num = 0;
var beacon_prefix = "beacon_";

function getNextBeaconID(){

  var newBeaconID = beacon_prefix + beacon_num;
  beacon_num++;

  return newBeaconID;
}

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
    console.log("Trying to submit beacon UUID");

    //Beacon array with UUID values
    if($('#bUuid').val() != ''){
      console.log("UUID input field isnt empty , submitting ...");
      beacon_array.push($('#bUuid').val());
    }

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
      //console.log("Array and list empty , adding label");
      console.log("Array and list empty");
      // option.text = "EMPTY";
      // beacon_list.add(option);
    }
    else {
      console.log("Array or list no longer empty");


      $('#beaconSelect option').each(function(){

            console.log("Cleaning beacon list...");
            $(this).remove();
            
      });
      
      for(var uuid=0; uuid<beacon_array.length; uuid++){
       
          option.text = beacon_array[uuid];
          beacon_list.add(option);
          var option = document.createElement("option");
          
      }

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