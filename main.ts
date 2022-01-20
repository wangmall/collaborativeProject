function jump () {
    controller.moveSprite(monkey, 0, 100)
}
let Obstacle: Sprite = null
let monkey: Sprite = null
monkey = sprites.create(img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . f f e e e d d d d f . . 
    . . . f d d e e d d d d d d c . 
    . . . c d b e e d f d d f d c . 
    f f . c d b e e d f d d f d d c 
    f e f . c f e e d d d d e e d c 
    f e f . . f e e e d c d d d d c 
    f e f . . f f e e e d c c c f . 
    f e f . f e e e e f f f f f . . 
    . f f f e e e e e e e f . . . . 
    . . f e e e e f e e f e f f . . 
    . . f e e e f f f e e f f e f . 
    . f b f f f f f f c d d b d d f 
    . f d d c f . . f d d d c d d f 
    . . f f f . . . f f f f f f f . 
    `, SpriteKind.Player)
monkey.setStayInScreen(true)
jump()
monkey.ay = 100
game.onUpdateInterval(500, function () {
    Obstacle = sprites.createProjectileFromSide(img`
        . . . . . . . c c c a c . . . . 
        . . c c b b b a c a a a c . . . 
        . c c a b a c b a a a b c c . . 
        . c a b c f f f b a b b b a . . 
        . c a c f f f 8 a b b b b b a . 
        . c a 8 f f 8 c a b b b b b a . 
        c c c a c c c c a b c f a b c c 
        c c a a a c c c a c f f c b b a 
        c c a b 6 a c c a f f c c b b a 
        c a b c 8 6 c c a a a b b c b c 
        c a c f f a c c a f a c c c b . 
        c a 8 f c c b a f f c b c c c . 
        . c b c c c c b f c a b b a c . 
        . . a b b b b b b b b b b b c . 
        . . . c c c c b b b b b c c . . 
        . . . . . . . . c b b c . . . . 
        `, randint(-50, -150), 0)
    Obstacle.setPosition(162, randint(80, 110))
})
