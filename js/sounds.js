class Sounds {
    constructor(){
        this.current_sound;
        this.tick = true;
        this.tick_sfx;
        this.beep_sfx;
        this.klaxon_sfx;
        this.accept_sfx;
        this.reset_sfx;
        this.system_failure_sfx;
        this.ambience_sfx;
        this.sound_check_interval;
        this.sound_interval;
        this.createSoundObjects();
        this.playAmbience();
        this.soundCheck();
    }
    createSoundObjects(){
        this.tick_sfx = new Audio("assets/tick.mp3");
        this.beep_sfx = new Audio("assets/beep.mp3");
        this.klaxon_sfx = new Audio("assets/klaxon.mp3");
        this.accept_sfx = new Audio("assets/accept.mp3");
        this.reset_sfx = new Audio("assets/reset.mp3");
        this.system_failure_sfx = new Audio("assets/system_failure.mp3");
        this.ambience_sfx = new Audio("assets/ambience.mp3");
    }
    playAmbience(){
        this.ambience_sfx.play();
        this.ambience_sfx.addEventListener("ended", () => {
            this.ambience_sfx.currentTime = 0;
            this.ambience_sfx.play();
        });
    }
    playKeySound(){
        this.key_sfx = new Audio("assets/keyboard.mp3");
        this.key_sfx.play();
    }
    stopAllSounds(){
        clearInterval(this.sound_interval);
        this.current_sound = null;
        /*var sounds = document.getElementsByTagName("audio");
        for (var i = 0; i < sounds.length; i++){
            sounds[i].pause();
        }*/
    }
    soundCheck(){
        console.log(timer.duration_milliseconds);
        if (timer.duration_milliseconds < 240000 && timer.duration_milliseconds > 60000 && this.current_sound != "beep" && this.current_sound != "accept"){
            this.playBeeps();
        } else if (timer.duration_milliseconds < 60000 && timer.duration_milliseconds > 11000 && this.current_sound != "klaxon" && this.current_sound != "accept"){
            this.playKlaxon();
        } else if (timer.duration_milliseconds <= 11000 && timer.duration_milliseconds > 1000 && this.current_sound != "klaxon_fast" && this.current_sound != "accept"){
            this.playKlaxonFast();
        } else if (timer.duration_milliseconds <= 1000 || timer.duration_milliseconds === 0) {
            this.current_sound = "system_failure";
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
            if (this.current_sound === "beep"){
                this.beep_sfx.play(); 
            }
        }, 3000);
    }
    playKlaxon(){
        this.current_sound = "klaxon";
        this.klaxon_sfx.play(); 
        this.sound_interval = setInterval(() => {
            if (this.current_sound === "klaxon"){
                this.klaxon_sfx.play();
            }
        }, 3000);
    }
    playKlaxonFast(){
        clearInterval(this.sound_interval);
        this.current_sound = "klaxon_fast";
        this.sound_interval = setInterval(() => {
            if (this.current_sound === "klaxon_fast"){
                this.klaxon_sfx.currentTime = 0;
                this.klaxon_sfx.play();
            }
        }, 1000);
    }
    playAccept(){
        setTimeout(() => {
            this.current_sound = "accept";
        }, 1000);
        this.accept_sfx.play();
    }
    playResetSound(){
        this.current_sound = "reset";
        this.reset_sfx.play();
    }
    playSystemFailure(){
        this.current_sound = "system_failure";
        this.system_failure_sfx.play();
    }
}

var sounds = new Sounds();