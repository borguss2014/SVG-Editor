var beacon_array = [];

var beacon_uuid = '';

function getBeaconID() {
	return beacon_uuid;
}

function deselectDelete(e) {
	$('.popDelete').slideFadeToggle(function() {
		e.removeClass('selected');
	});
}


$(function() {

	$('.closeTool').on('click', function() {
		$('.popTool').slideFadeToggle();
		return false;
	});

	$('#formTool').on('submit', function(e) {
		console.log("Trying to submit beacon UUID");

		//Beacon array with UUID values
		if ($('#bUuidTool').val()) {
			console.log("UUID input field isnt empty , submitting ...");

			var uuidString = [$('#bUuidTool').val().slice(0,0), 'X', $('#bUuidTool').val().slice(0)].join('');
			beacon_array.push($('#bUuidTool').val());
			beacon_uuid = uuidString;

			$("#notifications").text("UUID submitted");
			$("#notifications").css("color", "#00FF00");
			$('#notifications').fadeIn(200).delay(1000).fadeOut(200);

		}

		//Clear form input fields after submit and prevent default form submission
		$('#bUuidTool').val('');
		e.preventDefault();
	});

	$('#message_submit_tool').on('click', function() {
		$('.popTool').slideFadeToggle();
	});

});




$.fn.slideFadeToggle = function(easing, callback) {
	return this.animate({
		opacity : 'toggle',
		height : 'toggle'
	}, 'fast', easing, callback);
};

$(function() {
	$('#delete_beacon_data').on('click', function() {
		if ($(this).hasClass('selected')) {
			deselectDelete($(this));
		} else {
			$(this).addClass('selected');
			$('.popDelete').slideFadeToggle();
		}

		var beacon_list = document.getElementById("beaconSelect");
		var option = document.createElement("option");

		if (beacon_array.length == 0 && beacon_list.options.length == 0) {
			console.log("Array and list empty");
		} else {
			console.log("Array or list no longer empty");

			$('#beaconSelect option').each(function() {

				console.log("Cleaning beacon list...");
				$(this).remove();

			});

			for (var uuid = 0; uuid < beacon_array.length; uuid++) {
				option.text = beacon_array[uuid];
				beacon_list.add(option);
				var option = document.createElement("option");
			}
		}

		return false;
	});

	$('.closeDelete').on('click', function() {
		deselectDelete($('#delete_beacon_data'));
		return false;
	});

	$('#formDelete').on('submit', function(e) {

		var selectedBeacon = $('#beaconSelect option').filter(':selected').text();
		if (selectedBeacon != '') {
			console.log("Deleting " + selectedBeacon + " from array");
			var index = beacon_array.indexOf($('#beaconSelect option').filter(':selected').text());
			beacon_array.splice(index, 1);

			$('#beaconSelect option').each(function() {
				if (this.value == $('#beaconSelect option').filter(':selected').text()) {
					console.log("Deleting " + this.value + " from list");
					$(this).remove();
					return false;
				}
			});

			$("#notifications").text("UUID deleted");
			$("#notifications").css("color", "#FFFF00");
			$('#notifications').fadeIn(200).delay(1000).fadeOut(200);

		}
		e.preventDefault();
	});

	$('#message_submit_delete').on('click', function() {
		$('.popDelete').slideFadeToggle();
	});

});
