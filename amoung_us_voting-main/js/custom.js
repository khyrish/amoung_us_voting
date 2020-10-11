var vote_count = {
	Violet : 0,
	Cyan : 0,
	Red : 0,
	Brown : 0,
	Pink : 0,
	Green : 0,
	Blue : 0,
	LightViolet : 0,
	DarkBrown : 0,
	Purple : 0,

};
$(document).ready(
	function(){
		$("#div1").click(
			function(){
				vote_count.Violet++;
				$("#p1vote").html("("+vote_count.Violet+")");
			}
		);
		$("#div2").click(
			function(){
				vote_count.Cyan++;
				$("#p2vote").html("("+vote_count.Cyan+")");
			}
		);
		$("#div3").click(
			function(){
				vote_count.Red++;
				$("#p3vote").html("("+vote_count.Red+")");
			}
		);
		$("#div4").click(
			function(){
				vote_count.Brown++;
				$("#p4vote").html("("+vote_count.Brown+")");
			}
		);
		$("#div5").click(
			function(){
				vote_count.Pink++;
				$("#p5vote").html("("+vote_count.Pink+")");
			}
		);
		$("#div6").click(
			function(){
				vote_count.Green++;
				$("#p6vote").html("("+vote_count.Green+")");
			}
		);
		$("#div7").click(
			function(){
				vote_count.Blue++;
				$("#p7vote").html("("+vote_count.Blue+")");
			}
		);
		$("#div8").click(
			function(){
				vote_count.LightViolet++;
				$("#p8vote").html("("+vote_count.LightViolet+")");
			}
		);
		$("#div9").click(
			function(){
				vote_count.DarkBrown++;
				$("#p9vote").html("("+vote_count.DarkBrown+")");
			}
		);
		$("#div10").click(
			function(){
				vote_count.Purple++;
				$("#p10vote").html("("+vote_count.Purple+")");
			}
		);
		
		}
        );