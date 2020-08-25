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
    basic.showString("HALLO LEO")
    radio.sendString("LEO IST ONLINE")
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # . # . #
        # # # # #
        `)
})
radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("OFF")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.FreeFall, function () {
    radio.sendNumber(1)
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
    basic.showString("HALLO UWE")
    radio.sendString("UWE IST ONLINE ")
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # . # . #
        # # # # #
        `)
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
    basic.showString("HALLO MIRIAM")
    radio.sendString("MIRIAM IST ONLINE")
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # . # . #
        # # # # #
        `)
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
radio.setGroup(123)
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
