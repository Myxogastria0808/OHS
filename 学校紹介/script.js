var
	carousel = document.querySelector('.carousel'),
	figure = carousel.querySelector('figure'),
	nav = carousel.querySelector('nav'),
	numImages = figure.childElementCount,
	theta =  2 * Math.PI / numImages,
	currImage = 0
;
	
nav.addEventListener('click', onClick, true);

function onClick(e) {
	e.stopPropagation();
	
	var t = e.target;
	if (t.tagName.toUpperCase() != 'BUTTON')
		return;
	
	if (t.classList.contains('next')) {
		currImage++;
	}
	else {
		currImage--;
	}
	
	figure.style.transform = `rotateY(${currImage * -theta}rad)`;
}

//button
$('.container-btn').on('click', '.btn-modal', function(e){
	e.preventDefault();
	if ( $(this).hasClass('play') ) {
		$(this).removeClass('play');
		$(this).addClass('pause');
	} else {
		$(this).removeClass('pause');
		$(this).addClass('play');
	}
});

//audio
var wavesurfer = WaveSurfer.create({
	container: '#waveform',
	  // waveColor: '#137a7f',
	  // progressColor: 'purple',
	  waveColor: [
		"#add8e6",
		"#e0ffff",
		"#add8e6",
	],
	  progressColor: [
		"#7FFFD4",
		"#00032d",
		"#7FFFD4",
	],
	  backgroundColor: 'white',
	  audioRate: 1,
	  splitChannels: false,
	  normalize: true,
	  autoCenter: true,
	  barWidth: 1,
	  barGap: 3,
	  barRadius: 0,
	  cursorColor: 'black',
	  cursorWidth: 2,
	  forceDecode: true,
	  height: 300,
	  hideCursor: false,
	  minPxPerSec: 1,
	  partialRender: true,
	  responsive: 0.01,
	  plugins: [
		WaveSurfer.cursor.create({
			showTime: true,
			opacity: 1,
			customShowTimeStyle: {
				'background-color': '#000',
				color: '#fff',
				padding: '2px',
				'font-size': '10px'
			}
		}),
		WaveSurfer.markers.create({
		  markers: [
			  {
				  time: 0,
				  label: "1番",
				  color: '#000861',
				  position: 'top'
			  },
			  {
				  time: 54.29,
				  label: "2番",
				  color: '#000861',
				  position: 'top'
			  },
			  {
				time: 98.093,
				label: "3番",
				color: '#000861',
				position: 'top'
			}
		  ]
		})
	],
  });
  
  wavesurfer.load('./onoko-koka.mp3');
  
  playstop = () => {
	if (wavesurfer.isPlaying()){  
	  // wavesurfer.setCurrentTime(0)
	  wavesurfer.playPause();
	}
	else{
	  wavesurfer.play();
	}
  };