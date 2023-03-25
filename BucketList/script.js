

document.getElementById("submit").addEventListener('click', magic);

function magic(){
	var deathYear = parseInt(document.getElementById('bYear').value) + 77;
	var time = document.createElement('li');

	time.appendChild(document.createTextNode("According to the U.S. average lifespan, you will pass on " + deathYear));
	yeartimer.appendChild(time);

	
	function Countdown(){
		var deathTime = new Date(deathYear, 0, 1).getTime();
		var Ahora = new Date().getTime();
		var timeLeft = deathTime - Ahora;
		
		var oneDay = 1000 * 60 * 60 * 24;
		var oneHour = 1000 * 60 * 60;
		var oneMinute = 1000 * 60;
		var oneSecond = 1000;
		
		var days = Math.floor(timeLeft / oneDay);
		var hours = Math.floor((timeLeft % oneDay) / oneHour);
		var minutes = Math.floor((timeLeft % oneHour) / oneDay);
		var seconds = Math.floor((timeLeft % oneDay) / oneSecond);		
		document.getElementById("deathTimer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
		}
	setInterval(Countdown, 1000);
	
	document.getElementById('cool').style.visibility = "visible";	
	
}

document.getElementById("find").addEventListener('click', findIdea);
	function findIdea(){
	const bucketAPI = 'https://api.api-ninjas.com/v1/bucketlist';
	const ideaBox = document.getElementById('OutputIdea');
		fetch(bucketAPI, {headers: {'X-Api-Key': 'sAvUlLzGZ8KrZUhHexiFNQ==IcWqo7OawxY2LD0N'
		}})
			.then(response => response.json())
			.then(idea => {
				ideaBox.value = idea.item
			});
	}