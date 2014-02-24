$(document).ready(function(){

	$('.contenders').on('click', 'li', function(event) {
		event.preventDefault();
		var selectId = this.id;
		var contender = $(this).html();
		console.log(selectId);
		console.log(contender);
		
		switch (selectId) {
			//left bracket
			case "wseed1":
				$('#wWinner1').html(contender);
				break;
			case "wseed16":
				$('#wWinner1').html(contender);
				break;
			case "wseed8":
				$('#wWinner2').html(contender);
				break;
			case "wseed9":
				$('#wWinner2').html(contender);
				break;
			case "wseed5":
				$('#wWinner3').html(contender);
				break;
			case "wseed12":
				$('#wWinner3').html(contender);
				break;
			case "wseed4":
				$('#wWinner4').html(contender);
				break;
			case "wseed13":
				$('#wWinner4').html(contender);
				break;
			case "wseed6":
				$('#wWinner5').html(contender);
				break;
			case "wseed11":
				$('#wWinner5').html(contender);
				break;
			case "wseed3":
				$('#wWinner6').html(contender);
				break;
			case "wseed14":
				$('#wWinner6').html(contender);
				break;
			case "wseed7":
				$('#wWinner7').html(contender);
				break;
			case "wseed10":
				$('#wWinner7').html(contender);
				break;
			case "wseed2":
				$('#wWinner8').html(contender);
				break;
			case "wseed15":
				$('#wWinner8').html(contender);
				break;
				
			case "wWinner1":
				$('#wWinner9').html(contender);
				break;
			case "wWinner2":
				$('#wWinner9').html(contender);
				break;
			case "wWinner3":
				$('#wWinner10').html(contender);
				break;
			case "wWinner4":
				$('#wWinner10').html(contender);
				break;
			case "wWinner5":
				$('#wWinner11').html(contender);
				break;
			case "wWinner6":
				$('#wWinner11').html(contender);
				break;
			case "wWinner7":
				$('#wWinner12').html(contender);
				break;
			case "wWinner8":
				$('#wWinner12').html(contender);
				break;
				
			case "wWinner9":
				$('#wWinner13').html(contender);
				break;
			case "wWinner10":
				$('#wWinner13').html(contender);
				break;
			case "wWinner11":
				$('#wWinner14').html(contender);
				break;
			case "wWinner12":
				$('#wWinner14').html(contender);
				break;
			
			case "wWinner13":
				$('#wWinner15').html(contender);
				break;
			case "wWinner14":
				$('#wWinner15').html(contender);
				break;
				
			//right bracket	
			case "eseed1":
				$('#eWinner1').html(contender);
				break;
			case "eseed16":
				$('#eWinner1').html(contender);
				break;
			case "eseed8":
				$('#eWinner2').html(contender);
				break;
			case "eseed9":
				$('#eWinner2').html(contender);
				break;
			case "eseed5":
				$('#eWinner3').html(contender);
				break;
			case "eseed12":
				$('#eWinner3').html(contender);
				break;
			case "eseed4":
				$('#eWinner4').html(contender);
				break;
			case "eseed13":
				$('#eWinner4').html(contender);
				break;
			case "eseed6":
				$('#eWinner5').html(contender);
				break;
			case "eseed11":
				$('#eWinner5').html(contender);
				break;
			case "eseed3":
				$('#eWinner6').html(contender);
				break;
			case "eseed14":
				$('#eWinner6').html(contender);
				break;
			case "eseed7":
				$('#eWinner7').html(contender);
				break;
			case "eseed10":
				$('#eWinner7').html(contender);
				break;
			case "eseed2":
				$('#eWinner8').html(contender);
				break;
			case "eseed15":
				$('#eWinner8').html(contender);
				break;
				
			case "eWinner1":
				$('#eWinner9').html(contender);
				break;
			case "eWinner2":
				$('#eWinner9').html(contender);
				break;
			case "eWinner3":
				$('#eWinner10').html(contender);
				break;
			case "eWinner4":
				$('#eWinner10').html(contender);
				break;
			case "eWinner5":
				$('#eWinner11').html(contender);
				break;
			case "eWinner6":
				$('#eWinner11').html(contender);
				break;
			case "eWinner7":
				$('#eWinner12').html(contender);
				break;
			case "eWinner8":
				$('#eWinner12').html(contender);
				break;
				
			case "eWinner9":
				$('#eWinner13').html(contender);
				break;
			case "eWinner10":
				$('#eWinner13').html(contender);
				break;
			case "eWinner11":
				$('#eWinner14').html(contender);
				break;
			case "eWinner12":
				$('#eWinner14').html(contender);
				break;
					
			case "eWinner13":
				$('#eWinner15').html(contender);
				break;
			case "eWinner14":
				$('#eWinner15').html(contender);
				break;
				
			//championship	
			case "eWinner15":
				$('#theGOAT').html(contender);
				break;
			case "wWinner15":
				$('#theGOAT').html(contender);
				break;	
				
			default:
				alert("Can't do that");
				break;
		}

	});
});