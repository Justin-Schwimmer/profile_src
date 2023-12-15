$(document).ready(function(){

    var duration = 225;

    $(".highlights-tab").click(function(){

        $("#highlights-content").slideUp(duration);
    
    });

    $(".highlights-tab").click(function(){
    
        $("#highlights-content").slideDown(duration);
    
    });

    $(".tech-tab").click(function(){

        $("#tech-content").slideUp(duration);

    });

    $(".tech-tab").click(function(){

        $("#tech-content").slideDown(duration);

    });

    $(".portfolio-tab").click(function(){

        $("#portfolio-content").slideUp(duration);

    });

    $(".portfolio-tab").click(function(){

        $("#portfolio-content").slideDown(duration);

    });

    $(".experience-tab").click(function(){

        $("#experience-content").slideUp(duration);

    });

    $(".experience-tab").click(function(){

        $("#experience-content").slideDown(duration);

    });

});