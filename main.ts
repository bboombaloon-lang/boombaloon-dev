controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.tossBubble()
    bubble.load_bubble()
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    bubble.tilt_angle(bubble.Choice.Right)
})
scene.onHitWall(SpriteKind.Bubble, function (sprite, location) {
    bubble.stick_to_wall(sprite, location)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    bubble.tilt_angle(bubble.Choice.Left)
})
bubble.createBoard()
bubble.load_bubble()
let mySprite = sprites.create(img`
    6 6 7 5 7 7 7 7 6 6 8 8 8 8 8 8 
    6 6 7 7 5 7 7 7 6 6 8 8 8 8 8 8 
    . 6 6 7 5 7 7 7 7 6 6 8 8 8 8 . 
    . . 6 6 f f 6 6 c c f f f 8 . . 
    . . . . 6 6 5 7 7 7 8 8 . . . . 
    . . . . . 6 6 6 c c c . . . . . 
    . . . . . . 6 5 7 8 . . . . . . 
    . . . . . . 6 5 8 8 . . . . . . 
    . . . . . . . 7 8 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 7 c . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . b c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    `, SpriteKind.Player)
mySprite.top = 102
