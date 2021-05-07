			var start = new Date().getTime();

			function getRandomColor()
			{
				var letters = '012345679ABCDEF'.split('');
				var color = '#';
				for (var i = 0; i < 6; i++)
				{
					color += letters[Math.floor(Math.random() * 16)];
				}
				return color;
			}

			function makeShapeAppear()
			{ 
				var top = Math.random() * 180;
				var left = Math.random() * 600;
				var width = (Math.random() * 100) + 50;
				if (Math.random() > 0.5)
				{
					document.getElementById('shape').style.borderRadius = "50%";
				}
				else 
				{
					document.getElementById('shape').style.borderRadius = "0%"; 
				}
				document.getElementById('shape').style.backgroundColor = getRandomColor();
				document.getElementById('shape').style.top = top + "px";
				document.getElementById('shape').style.left = left + "px";
				document.getElementById('shape').style.width = width + "px";
				document.getElementById('shape').style.height = width + "px";
				document.getElementById('shape').style.display = "block";
				start = new Date().getTime();
			}

			function apperAfterDelay()
			{
				setTimeout(makeShapeAppear, Math.random() * 2000);				
			}

			apperAfterDelay();
			
			var highscore = 1000.0 ;

			document.getElementById('shape').onclick = function()
			{
				document.getElementById("shape").style.display = "none";
				var end = new Date().getTime();
				var timeTaken = (end - start) / 1000;
				document.getElementById('timeTaken').innerHTML = timeTaken + "s";
				
				

				if (highscore > timeTaken)
				{	
					highscore = timeTaken;
					document.getElementById("hs").innerHTML = timeTaken + "s";
				}

				apperAfterDelay();
			}