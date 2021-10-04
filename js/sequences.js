class Sequences {
    systemFailure(){
        clearInterval(timer.ticker_interval);
        sounds.stopAllSounds();
        setTimeout(() => {
            this.powerSurgeRoutine();
        }, 2000);
        timer.reset_interval = setInterval(() => {
            $(".numbers").each(function(){
                $(this).text(Math.floor(Math.random() * 9));
            });
        }, 100);
        setTimeout(() => {
            clearInterval(timer.reset_interval);
            timer.duration_mins = 109;
            timer.ticker();
            $("#number1").text("1");
            $("#number3").text("8");
            $("#number2, #number4, #number5").text("0");
        }, 22000);
    }
    lightDim(){
        $("#power_surge_overlay").css("opacity", "1");
        setTimeout(function(){
            $("#power_surge_overlay").css("opacity", "0");
        }, 100);
    }
    powerSurgeRoutine(){
        this.lightDim();
        setTimeout(() => {
            this.lightDim();
            $("#timer_background").attr("src", "assets/timer_glyphs.png");
        }, 2200);
        setTimeout(() => {
            this.lightDim();
            $("#timer_background").attr("src", "assets/timer.png");
        }, 2500);
        setTimeout(() => {
            this.lightDim();
            $("#timer_background").attr("src", "assets/timer_glyphs.png");
        }, 4900);
        setTimeout(() => {
            this.lightDim();
            this.makeGlyphsAppear();
        }, 5500);
    }
    makeGlyphsAppear(){
        setTimeout(function(){$("#number1").hide(); $("#glyph1").show();}, 2500);
        setTimeout(function(){$("#number2").hide(); $("#glyph2").show();}, 5000);
        setTimeout(function(){$("#number3").hide(); $("#glyph3").show();}, 7500);
        setTimeout(function(){$("#number4").hide(); $("#glyph4").show();}, 10000);
        setTimeout(function(){$("#number5").hide(); $("#glyph5").show();}, 12500);
        setTimeout(function(){$("#container").fadeOut(3000);}, 14200);
    }
}

var sequences = new Sequences();