$("input").on("keypress",function(event){
	if(event.which==13&&$("input").val()!="")
	{
		$("ul").append("<div class=\"lst\"><button class=\"btn\">X</button><li>"+$(this).val()+"</li></div>")
		$(this).val("");
		$(".btn").fadeOut(0);
	}
});
$(".nw").on("click",function(){
	$("input").fadeToggle(0);
});
$("ul").on("click","button",function(event){
	$(this).parent().fadeOut(400,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("ul").on("click","li",function(){
	$(this).toggleClass("done");
});
$("ul").on("mouseleave",".lst", function(){
	$(this).children(".btn").fadeToggle(10);
});
$("ul").on("mouseenter",".lst", function(){
	$(this).children(".btn").fadeToggle(10);
});