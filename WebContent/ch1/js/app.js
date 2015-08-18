$(document).ready(
		function() {

			var dataObj = {
				totalScore : 0
			};

			// declare arrays of countries and their capitals.
			var countries = [ "USA", "UK", "India", "Germany" ]

			/*
			 * , "Turkey", "France", "Nepal", "Japan", "South Africa",
			 * "Maldives" ];
			 */
			var capitals = [ "Washington", "London", "Delhi", "Berlin" ]

			/*
			 * , "Istanbul", "Paris", "Kathmandu", "Tokyo", "Capetown", "Male" ];
			 */

			createQuizLayout();
			initQuiz();
			updateScore();

			$('#reset').on('click', function() {
				$('#source li').draggable('destroy');
				$('#target li').droppable('destroy');
				dataObj.totalScore = 0;
				createQuizLayout();
				initQuiz();
			});

			function createQuizLayout() {

				var arrCountry = [];
				for (var i = 0; i < countries.length; i++) {
					arrCountry.push('<li data-index="' + (i + 1) + '">' + countries[i] + '</li>');
				}

				var arrCapital = [];
				for (var i = 0; i < capitals.length; i++) {
					arrCapital.push('<li data-index="' + (i + 1) + '">' + capitals[i] + '</li>');
				}

				// shuffle the arrays
				arrCountry = shuffle(arrCountry);
				arrCapital = shuffle(arrCapital);
				// once country and capital items are ready, we insert
				// them into DOM
				$('#source').html(arrCountry.join(''));
				$('#target').html(arrCapital.join(''));
			}

			function shuffle(o) {
				for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x)
					;
				return o;
			}
			;

			function initQuiz() {
				updateScore();
				$('#source li').draggable({
					revert : true,
					revertDuration : 1000,
					cursor : "move"
				});

				$('#target li').droppable(
						{
							accept : function(draggable) {
								if (parseInt(draggable.data('index'), 10) === parseInt($(this).data('index'), 10)) {
									return true;
								} else {
									return false;
								}
							},
							drop : function(event, ui) {
								var that = $(this);
								that.addClass("ui-state-highlight").html('Correct!').effect('bounce');
								that.droppable('disable');
								ui.draggable.addClass('correct ui-state-error');
								(ui.draggable).draggable('disable');

								dataObj.totalScore++;
								updateScore();
								if ($('li.correct').length == countries.length) {
									$("#dialog-complete").dialog({
										resizable : false,
										modal : true
									}).html(
											$("#dialog-complete").text() + '<hr /> JSON object looks like<br />'
													+ JSON.stringify(dataObj, null, ' '));
								}

							}
						});

			}
			;

			function updateScore() {
				$("#score").text(dataObj.totalScore + ' points.');
			}
			;
		});
