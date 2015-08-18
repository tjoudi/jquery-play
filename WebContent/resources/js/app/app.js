$(document).ready(
		function() {

			var d = {};
			var clicked = 1;
			var person = {id:10,fristName:"tholfikar",lastName:"Joudi"};

			console.log("jquery fun has started; data si far is: ");
			printdataOut();
			
			 $( "#btnSave" )
		      .button()
		      .click(function( event ) {
		        event.preventDefault();
		        console.log("ive been clicked");
		        save();
		      });

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
			
			function save() {
				console.log('save: ' + JSON.stringify(d));
				$.ajax({
					type: 'POST',
					contentType: 'application/json',
					url: 'rest/persons/',
					dataType: "json",
					data: JSON.stringify(person) ,
					success: function(data, textStatus, jqXHR){
// alert('Wine created successfully');
// $('#btnDelete').show();
// $('#wineId').val(data.id);
						console.log('saved, responce: ' +  JSON.stringify(data));
					},
					error: function(jqXHR, textStatus, errorThrown){
						console.log('addWine error: ' + textStatus + "\n" + errorThrown + "\n" + jqXHR);
					}
				});
			}
		}

);