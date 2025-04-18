let temperatura = 0
let luz = 0
let sonido = 0
input.onButtonPressed(Button.A, function () {
    // Leer temperatura en grados Celsius
    temperatura = input.temperature()
    // Leer nivel de luz
    luz = input.lightLevel()
    // Leer nivel de sonido (usando el sensor de sonido del micro:bit)
    sonido = input.soundLevel()
    // Mostrar los datos en la pantalla
    basic.showString("Temperatura:" + temperatura)
    basic.pause(1000)
    basic.showString("Luz:" + luz)
    basic.pause(1000)
    basic.showString("Sonido:" + sonido)
    basic.pause(1000)
})
