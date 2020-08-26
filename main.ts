input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . # . . .
        `)
    radio.sendString("Wie Geht Es Dir?")
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . # .
        . # . # .
        . . # # .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # . # . #
        # # # # #
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    if (ONLINE == 0) {
        ONLINE = 1
        basic.showString("HALLO LEO")
        radio.sendString("LEO IST ONLINE")
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # . # . #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . # . . .
        `)
    radio.sendString("Hallo")
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . # .
        . # . # .
        . . # # .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # . # . #
        # # # # #
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    if (ONLINE == 0) {
        ONLINE = 1
        basic.showString("HALLO UWE")
        radio.sendString("UWE IST ONLINE ")
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # . # . #
            # # # # #
            `)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . # . . .
        `)
    radio.sendString("Mitttel")
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . # .
        . # . # .
        . . # # .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # . # . #
        # # # # #
        `)
})
input.onGesture(Gesture.Shake, function () {
    if (ONLINE == 0) {
        ONLINE = 1
        basic.showString("HALLO MIRIAM")
        radio.sendString("MIRIAM IST ONLINE")
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # . # . #
            # # # # #
            `)
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # . . . #
        # # # # #
        `)
    basic.showString(receivedString)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # . # . #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . # . . .
        `)
    radio.sendString("Tschuess")
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . # .
        . # . # .
        . . # # .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # . # . #
        # # # # #
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . # . . .
        `)
    radio.sendString("GUT")
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . # .
        . # . # .
        . . # # .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # . # . #
        # # # # #
        `)
})
let ONLINE = 0
radio.setGroup(123)
ONLINE = 0
basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # . # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # . # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # . # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # . # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # # # # #
    # # # # #
    # # # # #
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showString("LOGIN")
basic.showLeds(`
    . . . . .
    . . # . .
    # # # # #
    . . # . .
    . . . . .
    `)
