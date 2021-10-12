let planetX = 0
let planetY = 0
let sunX = 63
let sunY = 31
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
kitronik_VIEW128x64.drawRect(3, 3, sunX + 8, sunY + 10)
kitronik_VIEW128x64.setPixel(sunX + 9, sunY + 9)
basic.forever(function () {
	
})
