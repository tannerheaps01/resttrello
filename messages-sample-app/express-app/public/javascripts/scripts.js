// $(document).ready(function() {
// 	$("#btnAddMessage").on("click", function() {

// 		var message = {
// 			id: $("#txtId").val(),
// 			subject: $("#txtSubject").val(),
// 			description: $("#txtDescription").val()
// 		}

// 		$.ajax({
// 				method: "POST",
// 				url: "http://localhost:8080/messages",
// 				data: message
// 			})
// 			.done(function(msg) {
// 				alert("Data Saved: " + msg);
// 			});
// 	});
// });
$(document).ready(function() {
    $('.headerbutton').on('click', function() {
        $('.lanes').append('<div class="lane removable-container"><div class="lanebuttons"><button class="move purple"><i class="fa fa-angle-left"></i></button><button class="lanebutton removebutton">Remove Lane</button><button class="lanebutton addcard">Add A Card</button><button class="move purple"><i class="fa fa-angle-right"></i></button></div></div>')

    });



    $('.lanes').on('click','.removebutton', function(){
    	 $(this).closest('.removable-container').remove();
    });



    $('.lanes').on('click','.addcard', function(){
    	$(this).closest('.lane').append('<div class="card removable-container"><div class="cardbuttons"><button class="move blue"><i class="fa fa-angle-left"></i></button><button class="cardbutton addTask">Add Task</button><button class="cardbutton removebutton">Remove Card</button><button class="move blue"><i class="fa fa-angle-right"></i></button><div class="taskTitle"></div><div class="task"></div></div></div>')
    });



    $('.lanes').on('click','.addTask', function(){
    	let nameOfCard = prompt('Name Of Card').value;
    	let nameOfTask = prompt('Task To Accomplish').value;
    	$(this).closest('.task').append(nameOfTask);
    	
    });
});