let planetX = 84
let planetY = 26
let sunX = 54
let sunY = 22
let sunPosArray = [
7,
5,
4,
3,
2,
1
]
let sunSizeArray = [
5,
9,
11,
13,
15,
17
]
for (let índice = 0; índice <= 2; índice++) {
    kitronik_VIEW128x64.drawRect(sunSizeArray[índice], sunSizeArray[5 - índice], sunX + sunPosArray[índice], sunY + sunPosArray[5 - índice])
    kitronik_VIEW128x64.drawRect(sunSizeArray[5 - índice], sunSizeArray[índice], sunX + sunPosArray[5 - índice], sunY + sunPosArray[índice])
}
kitronik_VIEW128x64.drawRect(7, 7, sunX + 6, sunY + 6)
kitronik_VIEW128x64.drawRect(3, 3, sunX + 8, sunY + 8)
kitronik_VIEW128x64.setPixel(sunX + 9, sunY + 9)
basic.pause(1000)
kitronik_VIEW128x64.drawRect(7, 7, planetX + 2, planetY + 2)
kitronik_VIEW128x64.drawRect(3, 9, planetX + 4, planetY + 1)
kitronik_VIEW128x64.drawRect(9, 3, planetX + 1, planetY + 4)
kitronik_VIEW128x64.drawRect(5, 5, planetX + 3, planetY + 3)
kitronik_VIEW128x64.setPixel(planetX + 5, planetY + 5)
basic.forever(function () {
	
})
