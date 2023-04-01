input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Skull)
        basic.showLeds(`
            . . . . .
            . # # # .
            # . # . #
            # # # # #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            # . # . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            # . # . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            # . # . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            # . # . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            # . # . #
            # # # # #
            . # # # .
            `)
        basic.showIcon(IconNames.Skull)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Skull)
        basic.showLeds(`
            . . . . .
            . # # # .
            # . # . #
            # # # # #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            # . # . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            # . # . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
