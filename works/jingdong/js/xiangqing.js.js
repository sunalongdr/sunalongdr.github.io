$(function(){
	$(".size li").click(function(){
		$(".size li").css({"border-color":"#e6e6e6"})
		$(this).css({"border-color":"red"})
		
	})
	var _this=0
	
	$(".buy-pic li").mouseenter(function(){
		_this=$(this).index();
		$(".buy-pic-big img").addClass("hide")
		$(".buy-pic-big img:eq("+_this+")").removeClass("hide");
		$(".buy-pic li").css({"border-color":"transparent"})
		$(this).css({"border-color":"red"})
	
	})
	$(".sp-l").click(function(){
			_this--;
			if(_this<0)_this=2;
			$(".buy-pic-big img").addClass("hide")
			$(".buy-pic-big img:eq("+_this+")").removeClass("hide");
			$(".buy-pic li").css({"border-color":"transparent"})
			$(".buy-pic li:eq("+_this+")").css({"border-color":"red"})
		})
		$(".sp-r").click(function(){
			_this++;
			if(_this>2)_this=0;
			$(".buy-pic-big img").addClass("hide")
			$(".buy-pic-big img:eq("+_this+")").removeClass("hide");
			$(".buy-pic li").css({"border-color":"transparent"})
			$(".buy-pic li:eq("+_this+")").css({"border-color":"red"})
		})
	$(".buy-pic-big").mousemove(function(ev){
		$(".buy-pic-big span").show();
		$(".buy-pic .gain").show();
		$(".gain img").addClass("hide");
		$(".gain img:eq("+_this+")").removeClass("hide");		
		var l=ev.pageX-$(this).offset().left-$(".buy-pic-big span").width()/2;
		var t=ev.pageY-$(this).offset().top-$(".buy-pic-big span").height()/2;
		if(l<0)l=0;
		if(l>$(this).width()-$(".buy-pic-big span").width())l=$(this)-$(".buy-pic-big span").width();
		if(t<0)t=0;
		if(t>$(this).height()-$(".buy-pic-big span").height())t=$(this).height()-$(".buy-pic-big span").height();
		$(".buy-pic-big span").css({"left":l+"px","top":t+"px"});
		$(".gain img:eq("+_this+")").css({"left":-2.29*l+"px","top":-2.29*t+"px"})			
	})
	$(".buy-pic-big").mouseout(function(){
		$(".buy-pic-big span").hide();
		$(".buy-pic .gain").hide();
	})
	var num=1;
	var add=document.getElementById("add");
	var push=document.getElementById("push")
	add.onclick=function(){
		num++;	
        document.getElementById("num").innerHTML=num;
	}
		push.onclick=function(){
		num--;	
		document.getElementById("num").innerHTML=num;
		if(num<1){
		num=1;
		document.getElementById("num").innerHTML=num;
		}
	}
	
				
	})