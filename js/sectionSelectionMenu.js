$('#sectionDropDown').on('change', function(){
    
    $('#myTabContent div.show.active').removeClass('show active');
    
    switch (sectionDropDown.value) {

        case 'highlights':
            
            $("#highlights-content").slideDown(225)

            $("#highlights").addClass('show active');

            break;

        case 'tech':

            $("#tech-content").slideDown(225);

            $("#tech").addClass('show active');
            
            break;

        case 'portfolio':

                $("#portfolio-content").slideDown(225);
    
                $("#portfolio").addClass('show active');
                
                break;

        case 'experience':

            $("#experience-content").slideDown(225);

            $("#experience").addClass('show active');
            
            break;
    
        default:
            
            break;
    }

})