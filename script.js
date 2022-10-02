$(document).ready(function() {


    let btnUp = document.getElementById('angle_up')
    let btnDown = document.getElementById('angle_down')
        //btnDown.hide()

    btnUp.addEventListener('click', function(e) {

        console.log('javascript fonctionne')
            //contentHeader.hide()
    });


    $('body').on('click', '#angle_up', (e) => {
        let contentHeader = document.getElementById('header_content_section');
        $('header').css('display', 'none');
        console.log(contentHeader);
        contentHeader.toggle()
    });




});