$(function(){
	
	$(".nav-list li").mouseenter(function(){
		$(".wrap").siblings().addClass("hide")
		var _this=$(this).index();
		$(".nav-list li").css({"background":"#c81623"})
		$(".nav-list li a").css({"color":"#fff"})
		$(this).css({"background":"#fff"})
	    $(".nav-list li:eq("+_this+") a").css({'color':'#000'})
		$(".popup,hide").removeClass("hide");
		$(".po-list").addClass("hide")
		$(".po-list:eq("+_this+")").removeClass("hide");
		var timer=setTimeout(function(){//设置定时器，使悬停一定时间出现二级菜单
				$("#popup").removeClass("hide");
				},500)
			$("#pupop").mouseleave(function(){
				$("#pupop").addClass("hide")
				$('.po-list').addClass("hide")
				$(".wrap").siblings().removeClass("hide")
				clearTimeout(timer)
			})
			$(".inner").mouseleave(function(){
				$("#pupop").addClass("hide")
				$('.po-list').addClass("hide")
				$(".wrap").siblings().removeClass("hide")
				$(".nav-list li").css({ "background": "#C81623"})
				$(".nav-list li a").css({"color":"#fff"})
				clearTimeout(timer)
			})

		
	})
	
	function mouse(obj,txt){
					
			$(".lif").remove()
			obj.mouseenter(function(){
				var html="";
				html+="<li class='lif'>"+txt+"<span>×</span></li>"
				$(".lid").after(html)
				$(".lif").mouseleave(function(){
					$(".lif").remove()
				})
				$(".r-mid").mouseleave(function(){
					$(".lif").remove()
				})
			});
		}
		mouse($(".lia"),"123");
		mouse($(".lib"),"15465");
		mouse($(".lic"),"1654+");
		mouse($(".lid"),"465");
		
		var timer1;
		var i=0;
		function time(){
			timer1=setInterval(function(){
			i++
			if(i==7)i=0;
			$(".banner img").addClass("hide")
			$(".banner img:eq("+i+")").removeClass("hide")
		},2000)
		}
		
		$(".banner img").mouseenter(function(){
			clearInterval(timer1)
		})
		$(".banner img").mouseleave(function(){
			time();
		})
		
		
		
})	

	

