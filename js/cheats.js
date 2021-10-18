class Cheats {
    constructor(){
        this.bindCheatKeys();
    }
    bindCheatKeys(){
        $(window).keyup((e) => {
            var key = e.which || e.keyCode;
            if (key == 219){ //Right square bracket
                this.timerSkip(4);
                $("#numbers_field").val("");
            } else if (key == 221){ //Left square bracket
                this.timerSkip(1);
                $("#numbers_field").val("");
            } else if (key == 222){ //Single quote
                this.skipToSystemFailure();
                $("#numbers_field").val("");
            } else if (key == 190){ //Period key
                this.speedUpSimulation();
                $("#numbers_field").val("");
            }
        });
    }
    timerSkip(minute){
        timer.duration_minutes = minute;
        clearInterval(timer.ticker_interval);
        timer.duration_milliseconds = timer.duration_minutes * timer.milli_to_min_multiplier;
        timer.ticker();
    }
    skipToSystemFailure(){
        clearInterval(timer.ticker_interval);
        timer.duration_milliseconds = 14000;
        timer.ticker();
    }
    speedUpSimulation(){
        clearInterval(timer.ticker_interval);
        timer.tick_speed = 1;
        timer.ticker();
    }
}

var cheats = new Cheats();