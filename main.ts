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
    kitronik_VIEW128x64.drawRect(sunSizeArray[índice], sunSizeArray[5 - índice], sunX + sunPosArray[índice], sunY + sunSizeArray[5 - índice])
    kitronik_VIEW128x64.drawRect(sunSizeArray[5 - índice], sunSizeArray[índice], sunX + sunSizeArray[5 - índice], sunY + sunPosArray[índice])
}
basic.forever(function () {
	
})
