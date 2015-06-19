var $setup = $('#setup');
var $punchline = $('#punchline');
var $newJoke = $('#newJoke');

function getJoke(){
	$.get('/joke', function(joke){
		$setup.text(joke.setup);
		$punchline.text(joke.punchline);
	});
}

getJoke();

$newJoke.click(getJoke);
