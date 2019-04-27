// On scroll add button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
	    document.getElementById("myBtn").style.display = "block";
	  } else {
	    document.getElementById("myBtn").style.display = "none";
	  }
	}

	// On click button go to top
	function topFunction() {
	  document.body.scrollTop = 0;
	  document.documentElement.scrollTop = 0;
	}

	// Resto hidden divs toggle 
	document.getElementById("fddesserts").style.display = "none";
	document.getElementById("fddrinks").style.display = "none";
	document.getElementById("lnkmain").style.textDecoration = "underline";

	function foodmains() {
		document.getElementById("fdmains").style.display = "block";
		document.getElementById("fddesserts").style.display = "none";
		document.getElementById("fddrinks").style.display = "none";

		document.getElementById("lnkmain").style.textDecoration = "underline";
	  	document.getElementById("lnkdss").style.textDecoration = "none";
	  	document.getElementById("lnkdrnk").style.textDecoration = "none";
	}

	function fooddesserts() {
		document.getElementById("fddesserts").style.display = "block";
		document.getElementById("fdmains").style.display = "none";
		document.getElementById("fddrinks").style.display = "none";

		document.getElementById("lnkdss").style.textDecoration = "underline";
		document.getElementById("lnkmain").style.textDecoration = "none";
		document.getElementById("lnkdrnk").style.textDecoration = "none";
	}

	function fooddrinks() {
		document.getElementById("fddrinks").style.display = "block";
		document.getElementById("fdmains").style.display = "none";
		document.getElementById("fddesserts").style.display = "none";

		document.getElementById("lnkdrnk").style.textDecoration = "underline";
		document.getElementById("lnkmain").style.textDecoration = "none";
		document.getElementById("lnkdss").style.textDecoration = "none";
	}