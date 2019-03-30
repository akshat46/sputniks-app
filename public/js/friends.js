var selected = [];

$(".user-element").click(function(){
	$(this).toggleClass("selected");
	let id = $(this).attr('id');
	if(selected.includes(id)){
		let index = selected.indexOf(id);
		if (index !== -1) selected.splice(index, 1);
		console.log(selected);
	}
	else{
		selected.push(id);
		console.log(selected);
	}
});

$(".save-friends").click(function(){
	$.ajax({
		type: "POST",
		data: {friends:selected},
		url: "/friends",
		success: function(){
			console.log("friends ajax call");
		}
	});
})
