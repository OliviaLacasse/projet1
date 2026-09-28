basic.forever(function () {
    music.play(music.stringPlayable("E C5 F G A D D F ", 300), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("F G C5 - G F E C5 ", 300), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # . . .
        # # . # .
        . # . # .
        # # # . .
        . # . . .
        `)
    basic.showLeds(`
        # # . . .
        # # . . #
        . # . # .
        # # # . .
        . # . . .
        `)
    basic.showLeds(`
        # # . . .
        # # . # .
        . # . # .
        # # # . .
        . # . . .
        `)
    basic.showLeds(`
        # # . . .
        # # # . .
        . # . # .
        # # # . .
        . # . . .
        `)
    basic.showLeds(`
        # # . . .
        # # . # .
        . # . # .
        # # # . .
        . # . . .
        `)
    basic.showLeds(`
        # # . . .
        # # . . #
        . # . # .
        # # # . .
        . # . . .
        `)
    basic.showLeds(`
        # # . . .
        # # . # .
        . # . # .
        # # # . .
        . # . . .
        `)
    basic.showLeds(`
        # # . . .
        # # # . .
        . # . # .
        # # # . .
        . # . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . # . # .
        # . . # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . # . # .
        . # . . #
        `)
})
