let vican = 0
input.onButtonPressed(Button.A, function () {
    vican = input.rotation(Rotation.Roll)
    if (vican == 1) {
        basic.showIcon(IconNames.Heart)
    } else if (vican == 2) {
        basic.showIcon(IconNames.Meh)
    } else {
        basic.showIcon(IconNames.Fabulous)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
        music.play(music.createSoundExpression(WaveShape.Square, 1, 5000, 0, 255, 500, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            # . # . #
            `)
        music.play(music.createSoundExpression(WaveShape.Square, 5000, 1212, 255, 0, 500, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . # . .
            . . # . .
            . # . # .
            . . # . .
            . # . # .
            `)
        music.play(music.createSoundExpression(WaveShape.Square, 1, 5000, 0, 255, 500, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
        music.play(music.createSoundExpression(WaveShape.Square, 5000, 1, 255, 0, 500, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . # # # .
            # # . # #
            # . # . #
            # # . # #
            . # # # .
            `)
        music.play(music.createSoundExpression(WaveShape.Square, 1, 5000, 0, 255, 500, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            # . # . #
            # # # # #
            `)
        music.play(music.createSoundExpression(WaveShape.Square, 5000, 1, 255, 0, 500, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        # . . . #
        `)
    music.play(music.stringPlayable("D E D E D E G E ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("D E D E D E C D ", 120), music.PlaybackMode.UntilDone)
    basic.pause(100)
    for (let index = 0; index < 2; index++) {
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
	
})
