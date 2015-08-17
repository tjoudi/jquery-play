$(document).ready(
		function() {

			var d = {};
			var clicked = 1;

			console.log("jquery fun has started; data si far is: ");
			printdataOut();

			d.div_html = 'updating this div from a java object';
			d.number_of_clicks = 0;

			var mainDiv = $("#main-div").html(d.div_html);
			printdataOut();
			mainDiv.click(function(event) {
				$(this).html(
						d.div_html + "i was clicked: " + d.number_of_clicks++
								+ " times");
				printdataOut();
			}

			);

			// date example
			$("#birth-date").datepicker({
				dateFormat : "MM d, yy",
				onSelect : function(dateText, inst) {
					d.birth_date = new Date(dateText);
					printdataOut();
				}
			})

			function printdataOut() {
				console.log("data object is now: "
						+ JSON.stringify(d, null, ' '));
			}
			;
		}

);