radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    droite.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.showString(receivedString)
    gauche.showColor(neopixel.colors(NeoPixelColors.Yellow))
})
let gauche: neopixel.Strip = null
let droite: neopixel.Strip = null
radio.setGroup(1)
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
droite = strip.range(1, 11)
gauche = strip.range(13, 23)
