$(function(){
    $('#photo1').hide().fadeIn(2000);
    $('#welcomeHeading').hide().delay(1250).show(2500);
    $('#heading').css({color: 'crimson'});
    $('#welcomeText').hide().delay(4000).fadeIn(1500);

    $('#king').hide().fadeIn(1500);
    $('#teka').hide().fadeIn(3000);
    $('#journal').hide().fadeIn(4000);
    $('#tropitone').hide().fadeIn(5000);

    // typing text animation script
    var typed = new Typed('#testimonial', {
        strings: ["Murray Kruger performs as an embodied viewer of images, as a means of re-inserting himself into them, rewriting them.", "In this way he always  positions himself as both the artist/performer and observer of art or images, who is engaged in this act of retrieval and re-performance"],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });
});

    