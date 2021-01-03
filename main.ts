let ch = 0
input.onGesture(Gesture.Shake, function () {
    ch = randint(0, 1)
    if (ch == 0) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else if (ch == 1) {
        basic.showLeds(`
            . . . # .
            . . # # .
            . . . # .
            . . . # .
            . . . # .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
