$(document).ready(function(){

	$('.contenders').on('click', 'li', function(event) {
		event.preventDefault();
		var selectId = this.id;
		var contender = $(this).html();
		console.log(selectId);
		console.log(contender);
		
		switch (selectId) {
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
				
			default:
				alert("Can't do that");
				break;
		}

	});
});