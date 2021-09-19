input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(myOtherVariable)
    myOtherVariable += 1
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(myFirstVariable)
    myFirstVariable += 1
})
// what would be the value of index
// 
// try to comment this next line out
input.onPinPressed(TouchPin.P2, function () {
    let index = 0
    basic.showNumber(index)
})
input.onButtonPressed(Button.AB, function () {
    myOtherVariable = 23
})
input.onButtonPressed(Button.B, function () {
    myFirstVariable += 1
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index2 = 0; index2 <= 4; index2++) {
        basic.showNumber(index2)
    }
})
let myOtherVariable = 0
let myFirstVariable = 0
myFirstVariable = 0
