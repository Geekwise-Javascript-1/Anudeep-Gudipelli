(function(){ // IIFE

    var audio = document.getElementsByTagName('audio')[0],
    controls = document.getElementById('controls'),
    audioToggle = document.getElementById('audioToggle');
    
    audioToggle.addEventListener('click', controlMusic);
    function controlMusic(e){
        console.log(this);
        console.log(e);
        if(!controls.classList.contains('stopped')){
            controls.classList.add('stopped');
            audio.pause();
        }else{
            controls.classList.remove('stopped');
            audio.play();
        }
    }

}());
