class Sounds {
    constructor(){
        this.current_sound = "none";
        this.tick = true;
        this.tick_sfx;
        this.key_sfx;
        this.beep_sfx;
        this.accept_sfx;
        this.reset_sfx;
        this.sound_check_interval;
        this.sound_interval;
        this.createSoundObjects();
        this.playAmbience();
        this.soundCheck();
    }
    createSoundObjects(){
        this.tick_sfx = new Audio("assets/tick.mp3");
        this.beep_sfx = new Audio("assets/beep.mp3");
        this.accept_sfx = new Audio("assets/accept.mp3");
        this.reset_sfx = new Audio("assets/reset.mp3");
    }
    playAmbience(){
        this.ambience_sfx = new Audio("assets/ambience.mp3");
        this.ambience_sfx.muted = true;
        this.ambience_sfx.play();
    }
    playKeySound(){
        var key_sfx = new Audio("assets/keyboard.mp3");
        key_sfx.play();
        setTimeout(function(){
            key_sfx.remove();
        }, 1000);
    }
    stopAllSounds(){
        clearInterval(this.sound_interval);
        var sounds = document.getElementsByTagName("audio");
        for (var i = 0; i < sounds.length; i++){
            sounds[i].pause();
        }
    }
    soundCheck(){
        if (timer.duration_milliseconds < 240000 && this.current_sound != "beep"){
            this.playBeeps();
        }
    }
    playTick(){
        if (this.tick === true){
            this.tick_sfx.play();
        }
    }
    playBeeps(){
        this.current_sound = "beep";
        this.beep_sfx.play(); 
        this.sound_interval = setInterval(() => {
            this.beep_sfx.play(); 
        }, 3000);
    }
    playAccept(){
        this.accept_sfx.play();
    }
    playResetSound(){
        this.current_sound = "reset";
        this.reset_sfx.play();
    }
}

var sounds = new Sounds();