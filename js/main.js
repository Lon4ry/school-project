$('.part').hover(
	function () {
		$('.description').html($(this).attr('description-data'));
		$('.description').fadeIn();
	}
)
function interlude() {
	setTimeout(function () {
		$('.interlude').fadeIn();
		setTimeout(function () { 
			$('.interlude').fadeOut();
			setTimeout(function () {
				$('.map').fadeIn();
			}, 1000)
		},4000)
	}, 100)
}
interlude();