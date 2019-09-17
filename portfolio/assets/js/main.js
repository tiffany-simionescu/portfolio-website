/*
	Alpha by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			wide:      ( '1281px',  '1680px' ),
			normal:    ( '981px',   '1280px' ),
			narrow:    ( '737px',   '980px'  ),
			narrower:  ( '737px',   '840px'  ),
			mobile:    ( '481px',   '736px'  ),
			mobilep:   ( null,      '480px'  )
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'right'
		});

	// NavPanel.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

	// Header.
		if (!browser.mobile
		&&	$header.hasClass('alt')
		&&	$banner.length > 0) {

			$window.on('load', function() {

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt reveal'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			});

		}

		// Image resizing
		const imgScale = document.querySelectorAll(".imgScale");

		imgScale.forEach(event => {

			event.addEventListener("mouseover", e => {
				e.target.style.transform = 'scale(1.05)'
				e.target.style.transition = '0.5s';
			});

			event.addEventListener("mouseout", e => {
				e.target.style.transform = 'scale(1.0)'
				e.target.style.transition = '0.5s';
			})

		});

		// Button Hovering

		const colorButton = document.querySelectorAll(".colorButton");

		colorButton.forEach(event => {

			event.addEventListener("mouseover", e => {
				e.target.style.backgroundColor = "#7FCDB8";  //"rgba(127, 205, 184, 0.5)";
				e.target.style.color = "#fff";
				e.target.style.transition = '0.3s';
			})

			event.addEventListener("mouseout", e => {
				e.target.style.backgroundColor = "#fff";
				e.target.style.color = "#777";
				e.target.style.transition = '0.3s';
			})
		})

})(jQuery);