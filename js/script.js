

function confirmpassword() {

    var email = document.getElementById("email").value,
        pas1 = document.getElementById("pa1").value,
        pas2 = document.getElementById("pa2").value;
    let E = 0, v;
   
  
    for (var i = 0; i <= email.length; i++)
    {
       
        if (email[i] == '@')
        {
            E++;
        }
        if (email[email.length - 1] == '@')
        {
            v = 0;
        }
       
    }
    if (email == "") {
        return;
    }
    else if(email != " ")
    {
        if (E > 1) {
            alert("you should one @  only >>" + "  " + email);
        }
        if (E == 0) {
            alert("you should add @ >>" + "  " + email);
        }

        if (v == 0) {
            alert("you should add text after  @  >>" + "  " + email);

        }

    }     
    if (pas1 != pas2)
    {
        alert("error in password");
        
        

    }
      
}
function move() {
    var email = document.getElementById("email").value;
      
    let E = 0, v;

    for (var i = 0; i <= email.length; i++)
    {
        if (email[i] == '@')
        {
            E++;
        }
        if (email[email.length - 1] == '@')
        {
            v = 0;
        }
       
    }
    if (email == "")
    {
        return;
    }
    else if (email != " ") {
        if (E > 1) {
            alert("you should one @  only >>" + "  " + email);
        }
        if (E == 0) {
            alert("you should add @ >>" + "  " + email);
        }

        if (v == 0) {
            alert("you should add text after  @  >>" + "  " + email);

        }

    }

}
function enable()
{
    var input = document.getElementById("display1").value,
        div1 = document.getElementById("1"),
       sp1 = document.getElementById("spcolor1"),
        sp2 = document.getElementById("spcolor2"),
        div2 = document.getElementById("2");
   
    if (input == 2)
    {
        div2.style.display = "block";
        div2.style.backgroundColor = "#8888";
        div1.style.display = "none";
        sp1.style.color = "black";
        sp1.style.borderBottom = "none";

        sp2.style.color = "darkblue";
        sp2.style.borderBottom = "solid";
        sp2.style.borderColor = "blue";
       
       
        
    }
    else if (input == 1)
    {
        div2.style.display = "none";
        div1.style.display = "block";

        sp2.style.color = "black";
        sp2.style.borderBottom = "none";

        sp1.style.color = "darkblue";
        sp1.style.borderBottom = "solid";
        sp1.style.borderColor = "blue";
    }
}

function showcarousel()
{
    var input = document.getElementById("h2disable").value,
        div1 = document.getElementById("h2div1"),
        sp1 = document.getElementById("h2blue1"),
        sp2 = document.getElementById("h2blue2"),
        div2 = document.getElementById("h2div2");
   
    if (input == 2)
    {

        div2.style.display = "block";
        div2.style.backgroundColor = "#8888";
        div1.style.display = "none";
        sp1.style.color = "black";
        sp1.style.borderBottom = "none";

        sp2.style.color = "darkblue";
        sp2.style.borderBottom = "solid";
        sp2.style.borderColor = "blue";
       
       
        
    }
    else if (input == 1)
    {
       
        div2.style.display = "none";
        div1.style.display = "block";

        sp2.style.color = "black";
        sp2.style.borderBottom = "none";

        sp1.style.color = "darkblue";
        sp1.style.borderBottom = "solid";
        sp1.style.borderColor = "blue";
    }
}






function show2() {
    
    div1 = document.getElementById("h2div1"),
        sp1 = document.getElementById("h2blue1"),
        sp2 = document.getElementById("h2blue2"),
        div2 = document.getElementById("h2div2");

    

        div2.style.display = "block";
        div1.style.display = "none";
       
        div2.style.backgroundColor = "#8888";
       
        sp1.style.color = "black";
        sp1.style.borderBottom = "none";

        sp2.style.color = "darkblue";
        sp2.style.borderBottom = "solid";
        sp2.style.borderColor = "blue";
 
}
function show1() {
    
    div1 = document.getElementById("h2div1"),
        sp1 = document.getElementById("h2blue1"),
        sp2 = document.getElementById("h2blue2"),
        div2 = document.getElementById("h2div2");

    

        div1.style.display = "block";
        div2.style.display = "none";
       
        div2.style.backgroundColor = "#8888";
       
        sp2.style.color = "black";
        sp2.style.borderBottom = "none";

        sp1.style.color = "darkblue";
        sp1.style.borderBottom = "solid";
        sp1.style.borderColor = "blue";
 
}
let fin = $("div.l2");
let btn = $("input.btn-info");
$(function () {


    btn.mouseenter(function () {
        btn.animate(
            {
              width: '180px'
            }, 2000)

    });
    btn.mouseleave(function () {
        btn.animate(
            {

                width: '90px'
            }, 2000)

    });

    var widthl = $(document).width();
    if (widthl > 1000) {


        fin.animate(

            {
                width: '500px',
            }, 2000);

        fin.animate(
            {
                height: '790px'
            }, 3000);
    }

    else if (widthl > 600 && widthl <=1024)
  {

    
    fin.animate(

        {
            width: '720px',
        }, 2000);

    fin.animate(
        {
          height: '790px'
        }, 3000);
    }
    else if (widthl < 600) {
        fin.animate(

            {
                width: '360px',
            }, 2000);

        fin.animate(
            {
                height: '790px'
            }, 3000);
    }
    $(".sp1").click(function () {

        $(".hsp2").fadeOut();
        $(".hsp1 ,.bloogbtn").fadeIn();
        $(".sp1").css(
            {
                "border-bottom": " 2px solid blue",
                "padding-bottom": "10px",
                "color": "royalblue"
            });

             $(".sp2 ,.sp3").css(
            {
                "border-bottom": "none",
                "color": "black"
            });

    });


    $(".sp2").click(function () {

        $(".hsp1").fadeOut();
        $(".hsp2 ,.bloogbtn").fadeIn();
        $(".sp2").css(
            {
                "border-bottom": "2px solid blue",
                "padding-bottom":"10px",
                "color": "royalblue"
            });
         $(".sp1 ,.sp3").css(
            {
                "border-bottom": " none",                
                 "color": "black"
            });

    })
    $(".sp3").click(function () {

        $(".hsp2").fadeOut();
        $(".hsp1 ,.bloogbtn").fadeIn();
        $(".sp3").css(
            {
                "border-bottom": " 2px solid blue",
                "padding-bottom": "10px",
                "color": "royalblue"
            });

        $(".sp2,.sp1 ").css(
            {
                "border-bottom": "none",
                "color": "black"
            });

    });
    $(".bloogbtn").click(function(){
        $(".hsp2").fadeIn();
        $(".hsp1").fadeIn();
        $(this).fadeOut();
    })
})

