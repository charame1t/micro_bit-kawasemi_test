radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        led.plot(4, 0)
        pins.servoWritePin(AnalogPin.P1, 0)
    } else if (receivedNumber == 2) {
        led.plot(0, 0)
        pins.servoWritePin(AnalogPin.P2, 180)
    } else {
        led.unplot(0, 0)
        led.unplot(4, 0)
        pins.servoWritePin(AnalogPin.P1, 90)
        pins.servoWritePin(AnalogPin.P2, 90)
    }
})
let c = 0
radio.setGroup(12)
music.playMelody("C E C E C E C5 - ", 120)
basic.forever(function () {
    c = 0
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    } else {
        c += 1
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    } else {
        c += 1
    }
    if (c == 2) {
        radio.sendNumber(0)
    }
})
