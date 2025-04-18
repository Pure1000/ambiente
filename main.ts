basic.forever(function () {
    // Leer temperatura en grados Celsius
    let temperatura = input.temperature()
    // Leer nivel de luz
    let luz = input.lightLevel()
    // Leer nivel de sonido (usando el sensor de sonido del micro:bit)
    let sonido = input.soundLevel()

    // Mostrar los datos en la pantalla
    basic.showString("T:" + temperatura)
    basic.pause(1000)
    basic.showString("L:" + luz)
    basic.pause(1000)
    basic.showString("S:" + sonido)
    basic.pause(1000)
})