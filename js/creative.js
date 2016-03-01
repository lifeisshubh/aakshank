/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

//clearall function


/* JavaScript Code for Day events */
var day_carousel = $(".day-carousel"),
    currdeg  = 0;

$(".day-next").on("click", { d: "n" }, rotate);
$(".day-prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 30;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 30;
  }
  day_carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}



function clearAll(){
    document.getElementById("name").value = "";
    document.getElementById("phone_no").value = "";
    document.getElementById("email_id").value="";
    document.getElementById("college").value="";
    document.getElementById("city").value="";
}
//Timer
window.onload = function(){
    var myVar = setInterval(myTimer, 1000);
}

function myTimer() {
    var foundation_date = new Date("2001-02-01");
    var today = new Date();
    
    var day = new Date(today-foundation_date);
    var year = day.getFullYear() - 1970;
    var month = day.getMonth();
    var time = day.getDay();
    document.getElementById("year_run").innerHTML = year + " years, "+ month+" months, " + time + " days, " +day.getHours() +" hours, " +day.getMinutes()+" minutes, "+day.getSeconds()+" Seconds" ;
}

// Timer Ends Here

 function subm(e)
{
    e.preventDefault();
     var name = $('#name').val();
                var email_id = $('#email_id').val();
                var phone_no = $('#phone_no').val();
                var college = $('#college').val();
                var city = $('#city').val();
                var year = $('#year').val();
                var branch = $('#branch').val();
                
                if ((name !== "") && (email_id !== "") && (phone_no !== "") && ( branch !== "") && (city !== "") && (year !== "") && (college !== "")  && ( (validateEmail(email_id)))) {
                   $.post( "http://aakshank2k16-ietdauniv.rhcloud.com/submit",{name:name,email:email_id,phone:phone_no,college:college,city:city,year:year,branch:branch},function( data ) {
                console.log(data);
                alert("You have registered sucessfully");
                clearAll();
});
                }
                else {
                    console.log("Error Message : Not Working");
                    alert("Error");
                }
}
(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })


})(jQuery); // End of use strict

//slider

var link = $('.com__nav-link');
var linkParent = link.parent('li');
var section = $('.com__section');
var sectionContent = section.find('*');

var switchTab = function() {
	var p = $(this).parent('li');
	var i  = p.index();
	var s = section.eq(i);
	var c = s.find('*');
	
	section.removeClass('active');
	sectionContent.removeAttr('style');
	s.addClass('active');
	
	c.css({
		transform: 'none',
		opacity: 1
	});
	
	linkParent.removeClass('active');
	p.addClass('active');
	
	return false;
};

link.on('click', switchTab);

function activeFirst() {
	section.first().addClass('active');
	section.first().find('*').css({
		transform: 'none',
		opacity: 1
	});
	linkParent.first().addClass('active');
}

activeFirst();


/* JavaScript Code ends here */

