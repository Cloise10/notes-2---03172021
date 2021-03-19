input.onButtonPressed(Button.A, function () {
    // The Grid - more lines
    led.toggle(0, 0)
    basic.pause(100)
    led.toggle(0, 1)
    led.toggle(1, 0)
    basic.pause(100)
    led.toggle(2, 0)
    led.toggle(1, 1)
    led.toggle(0, 2)
    basic.pause(100)
    led.toggle(3, 0)
    led.toggle(2, 1)
    led.toggle(1, 2)
    led.toggle(0, 3)
    basic.pause(100)
    led.toggle(4, 0)
    led.toggle(3, 1)
    led.toggle(2, 2)
    led.toggle(1, 3)
    led.toggle(0, 4)
    basic.pause(100)
    led.toggle(4, 1)
    led.toggle(3, 2)
    led.toggle(2, 3)
    led.toggle(1, 4)
    basic.pause(100)
    led.toggle(4, 2)
    led.toggle(3, 3)
    led.toggle(2, 4)
    basic.pause(100)
    led.toggle(4, 3)
    led.toggle(3, 4)
    basic.pause(100)
    led.toggle(4, 4)
})
input.onButtonPressed(Button.AB, function () {
    // Nested Loops
    // 
    // vertical: plot (x,y)
    // plot (0,0)
    // plot (0,1)
    // (0,2) (0,3) (0,4)
    // (1,0) (1,1) (1,2) (1,3) (1,4)
    // 
    // horizontal: plot (y,x)
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(x, y)
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    index = 0
    // index = 0      plot 0,0
    while (index >= 4) {
        led.plot(index, index)
        basic.pause(100)
        index += 1
    }
    index = 0
    while (index >= 0) {
        led.unplot(index, index)
        basic.pause(100)
        index += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    // While Loop
    while (index < 7) {
        index += 1
        basic.showNumber(index)
        basic.pause(100)
    }
})
let index = 0
index = 0
