$(document).ready(function(){
    

    $("#test").click(function(){
        $('.removeStyle').toggleClass('removeStyle');
        //not correct
    })
})

/*

show()
$("#test").click(function(){
        $(".hide").show('slow');
    })
-----------------------
hide()
$("#test").click(function(){
        $(".hide").hide(1000);
    })
------------------
toggle() ==> reverse if its hide it'll show and the same for the other 
$("#test").click(function(){
        $(".hide").toggle('slow');
    })

-----------------------
fadeToggle() ==> fades 
$("#test").click(function(){
        $(".hide").fadeToggle('slow');
    })

-----------------------
slideToggle ==> fades to hide by sliding
$("#test").click(function(){
        $(".hide").slideToggle();
    })

------------------------
text("add new text to the page")
$("#test").click(function(){
        $("#text").text("Hi Moudi");
    })

------------------------
add new element in html page
$("#test").click(function(){
        $("#text").html("<h1> Adding headding");
    })
------------------------
$("#test").click(function(){
        $("input").animate({height: "200px", opacity: "0.2", width: "200px"}, slow );
    })
-------------------
change the value of input (maybe not only the input)
$("#test").click(function(){
    $("input").val('20')
})

------------------------
append child at the end 

    $("#test").click(function(){
        $("ul").append('<li>banana</li>');
    })
--------------------------
append child at the begining 
$("#test").click(function(){
        $("ul").prepend('<li>banana</li>');
    })

--------------------------
add text after img (text after element), in case before it'll insert  before the image
$("#test").click(function(){
        $("img").after("<p>This is the image info.</p>")
        
    })

SAME CODE BUT WITH COUNTER TO PREVERNT THE REPLICATION
let counter =0;
    $("#test").click(function(){
        if(counter === 0){
        $("img").after("<p>This is the image info.</p>")
        counter ++;
    }
        
    })

-------------------------------
add existing class into element to apply style

$("#test").click(function(){
        $('#style').addClass('new');
        
    })
--------------------------------
remove class 
toggleClass

-------------------------
hide element when click on

$("h1").click(function(){
        $('#test').hide(1000);
        
    })
---------------------------

$("h1").on("click", function(){
        $('event.tagert').css({"color": "red", "backgroung-color": "gray"});
        
    })

// best practice: ...('click', function(event){...})
*/