OLED12864_I2C.init(60)
OLED12864_I2C.zoom(false)
let planetX = 84
let planetY = 26
let sunX = 54
let sunY = 22
let sunPos1 = [
7,
5,
4,
3,
2,
1
]
let sunPos2 = [
11,
13,
14,
15,
16,
17
]
for (let índice = 0; índice <= 2; índice++) {
    OLED12864_I2C.rect(
    sunX + sunPos1[índice],
    sunY + sunPos1[5 - índice],
    sunX + sunPos2[índice],
    sunY + sunPos2[5 - índice],
    1
    )
    basic.pause(1000)
    OLED12864_I2C.rect(
    sunX + sunPos1[5 - índice],
    sunY + sunPos1[índice],
    sunX + sunPos2[5 - índice],
    sunY + sunPos2[índice],
    1
    )
    basic.pause(1000)
}
OLED12864_I2C.rect(
sunX + 6,
sunY + 6,
sunX + 12,
sunY + 12,
1
)
basic.pause(1000)
OLED12864_I2C.rect(
sunX + 8,
sunY + 8,
sunX + 10,
sunY + 10,
1
)
basic.pause(1000)
OLED12864_I2C.pixel(sunX + 9, sunY + 9, 1)
basic.pause(1000)
OLED12864_I2C.rect(
planetX + 2,
planetY + 2,
planetX + 8,
planetY + 8,
1
)
basic.pause(1000)
OLED12864_I2C.rect(
planetX + 4,
planetY + 1,
planetX + 6,
planetY + 9,
1
)
basic.pause(1000)
OLED12864_I2C.rect(
planetX + 1,
planetY + 4,
planetX + 9,
planetY + 6,
1
)
basic.pause(1000)
OLED12864_I2C.rect(
planetX + 3,
planetY + 3,
planetX + 7,
planetY + 7,
1
)
basic.pause(2000)
OLED12864_I2C.pixel(planetX + 5, planetY + 5, 1)
basic.forever(function () {
	
})
