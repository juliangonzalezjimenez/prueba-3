basic.forever(function () {
	
})
basic.forever(function () {
    if (input.acceleration(Dimension.Y) < 500) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    }
    if (input.acceleration(Dimension.Y) > 500) {
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
