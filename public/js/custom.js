document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide' ).mount();

    new Splide( '#video-slider' ).mount( window.splide.Extensions );

    var videoThumbnailSlider = new Splide( '#video-thumbnail-slider', {
		fixedWidth  : 167,
        // width: 500,
		height      : 100,
		gap         : 20,
		cover       : true,
		isNavigation: true,
		focus       : 'center',
		
	} ).mount();
	
	var videoSlider = new Splide( '#video-slider', {
		type       : 'fade',
        width    : 'auto',
        height     : 390,
		pagination : false,
        isNavigation: false,
		arrows     : false,
		cover      : true,
	} ); 
	
	videoSlider.sync( videoThumbnailSlider ).mount();
} );

