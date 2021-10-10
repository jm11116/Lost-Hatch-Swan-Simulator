class Timer {
    constructor(){
        this.tick_speed = 1000;
        this.ticker_interval;
        this.reset_interval;
        this.duration_minutes = 109;
        this.milli_to_min_multiplier = 60000;
        this.duration_milliseconds = this.duration_minutes * this.milli_to_min_multiplier;
        this.four_mins_milliseconds = 4 * this.milli_to_min_multiplier;
        this.minute_count = this.duration_minutes;
        this.current_time;
        this.ticker();
    }
    ticker(){
        this.ticker_interval = setInterval(() => {
            if (this.duration_milliseconds >= 1){
                this.duration_milliseconds = this.duration_milliseconds - 1000;
                var current_mins_and_secs = this.convertMillisecondsToMins(this.duration_milliseconds);
                if (timer.duration_milliseconds < 240000){
                    sounds.playTick();
                } else if (timer.duration_milliseconds > 240000 && current_mins_and_secs[4] == "0" && current_mins_and_secs[5] == "0"){
                    sounds.playTick();
                }
                if (this.duration_milliseconds <= this.four_mins_milliseconds){
                    this.updateTimer(current_mins_and_secs, true);
                } else {
                    this.updateTimer(current_mins_and_secs, false);
                }
            } else if (this.duration_milliseconds === 0){
                setTimeout(function(){
                    sequences.systemFailure();
                }, 1000);
            }
            sounds.soundCheck();
        }, this.tick_speed);
    }
    convertMillisecondsToMins(milliseconds) {
        var minutes = Math.floor(milliseconds / 60000);
        var seconds = ((milliseconds % 60000) / 1000).toFixed(0);
        var time_string = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        if (time_string.split(":")[0].length === 2){
            time_string = "0" + time_string;
        } else if (time_string.split(":")[0].length === 1){
            time_string = "0" + "0" + time_string;
        }
        return time_string;
    }
    updateTimer(current_time, update_seconds){
        var current_time = current_time.replaceAll(":", "");
        $("#number1").text(current_time.charAt(0));
        $("#number2").text(current_time.charAt(1));
        $("#number3").text(current_time.charAt(2));
        if (update_seconds === true){
            $("#number4").text(current_time.charAt(3));
            $("#number5").text(current_time.charAt(4));
        }
        setTimeout(() => {
            $("#number1_b").text(current_time.charAt(0));
            $("#number2_b").text(current_time.charAt(1));
            $("#number3_b").text(current_time.charAt(2));
            if (update_seconds === true){
                $("#number4_b").text(current_time.charAt(3));
                $("#number5_b").text(current_time.charAt(4));
            }    
        }, 80);
    }
    resetTimer(){
        clearInterval(this.ticker_interval);
        this.duration_minutes = 109;
        this.duration_milliseconds = this.duration_minutes * this.milli_to_min_multiplier;
        sounds.stopAllSounds();
        sounds.tick = false;
        sounds.playResetSound();
        this.reset_interval = setInterval(() => {
            $(".numbers").each(function(){
                $(this).text(Math.floor(Math.random() * 9));
            });
            $(".numbers_bottom").each(function(){
                $(this).text(Math.floor(Math.random() * 9));
            });
        }, 100);
        setTimeout(() => {
            clearInterval(this.reset_interval);
            this.duration_mins = 109;
            this.ticker();
            $("#number1").text("1");
            $("#number3").text("8");
            $("#number2, #number4, #number5").text("0");
            sounds.tick = true;
        }, 1500);
    }
}

var timer = new Timer();