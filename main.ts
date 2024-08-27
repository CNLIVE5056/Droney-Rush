namespace SpriteKind {
    export const Accesory = SpriteKind.create()
    export const bground = SpriteKind.create()
    export const bground1 = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(life <= 0)) {
        if (start == 1) {
            if (sprite == 0) {
                Rocket = sprites.createProjectileFromSprite(, Droney, 100, 0)
            } else if (sprite == 1) {
                if (life <= 2.8) {
                    story.spriteSayText(Droney, "Healing...Life:" + convertToText(Math.round((life + 0.2) * 10) / 10))
                    life += 0.2
                    life = Math.round(life * 10) / 10
                    if (life < 2) {
                        lives.setImage()
                    } else if (life < 3) {
                        lives.setImage()
                    } else {
                        lives.setImage()
                    }
                }
            } else if (sprite == 2) {
                if (wingg == 0) {
                    blaster.setImage()
                    wingg = 1
                    animation.runImageAnimation(
                    Droney,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    60,
                    true
                    )
                    life += -1
                    if (life < 2) {
                        lives.setImage()
                    } else if (life < 3) {
                        lives.setImage()
                    } else {
                        lives.setImage()
                    }
                    info.startCountdown(10)
                } else {
                    blaster.setImage()
                    animation.runImageAnimation(
                    Droney,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    100,
                    true
                    )
                    wingg = 0
                    info.stopCountdown()
                }
            } else {
                if (randint(1, 6) == 1) {
                    for (let index = 0; index < 3; index++) {
                        Rocket = sprites.createProjectileFromSprite(, Droney, randint(0, 33), randint(-33, 33))
                        animation.runImageAnimation(
                        Rocket,
                        [img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `],
                        50,
                        true
                        )
                        mySprite.setFlag(SpriteFlag.AutoDestroy, true)
                    }
                }
            }
        }
    } else {
        if (life <= -1) {
            if (info.score() > info.highScore()) {
                game.gameOver(true)
            } else {
                game.reset()
            }
        }
    }
})
info.onCountdownEnd(function () {
    if (wingg == 0) {
        wingg = 1
        info.changeLifeBy(1)
    } else {
        blaster.setImage()
        animation.runImageAnimation(
        Droney,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        wingg = 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    acheck = 0
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    if (!(life <= 0)) {
        if (start == 1) {
            if (acheck == 0) {
                sprite = (sprite + 1) % 4
                if (sprite == 0) {
                    animation.stopAnimation(animation.AnimationTypes.All, blaster)
                    Droney.setImage()
                    animation.runImageAnimation(
                    Droney,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    100,
                    true
                    )
                    blaster.setImage()
                } else if (sprite == 1) {
                    Droney.setImage()
                    animation.runImageAnimation(
                    Droney,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    100,
                    true
                    )
                    blaster.setImage()
                } else if (sprite == 2) {
                    Droney.setImage()
                    animation.runImageAnimation(
                    Droney,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    100,
                    true
                    )
                    blaster.setImage()
                } else {
                    Droney.setImage()
                    animation.stopAnimation(animation.AnimationTypes.All, Droney)
                    blaster.setImage()
                    animation.runImageAnimation(
                    blaster,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    50,
                    true
                    )
                    if (info.countdown() > 6) {
                        wingg = 0
                    }
                    info.changeCountdownBy(info.countdown())
                }
                acheck = 1
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.disintegrate, 500)
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (wingg == 0) {
        life += -1
        if (life < 2) {
            lives.setImage()
        } else if (life < 3) {
            lives.setImage()
        } else {
            lives.setImage()
        }
        pause(500)
    } else {
        sprites.destroy(otherSprite, effects.disintegrate, 200)
    }
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
let Rocket: Sprite = null
let sprite = 0
let lives: Sprite = null
let blaster: Sprite = null
let Droney: Sprite = null
let wingg = 0
let acheck = 0
let start = 0
let life = 0
game.setGameOverMessage(true, "Saving High Score")
life = 3
start = 0
acheck = 0
let background = sprites.create(, SpriteKind.bground)
animation.runImageAnimation(
background,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
100,
false
)
wingg = 0
for (let index = 0; index < 1100; index++) {
    pause(0)
    if (controller.A.isPressed()) {
        break;
    }
}
animation.stopAnimation(animation.AnimationTypes.All, background)
background.setImage()
pauseUntil(() => controller.A.isPressed())
color.FadeToWhite.startScreenEffect(500)
pause(600)
color.startFadeFromCurrent(color.originalPalette, 500)
start = 1
animation.runImageAnimation(
background,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
25,
true
)
Droney = sprites.create(, SpriteKind.Player)
blaster = sprites.create(, SpriteKind.Accesory)
Droney.setStayInScreen(true)
blaster.setStayInScreen(true)
lives = sprites.create(, SpriteKind.bground)
lives.setPosition(24, 8)
controller.configureRepeatEventDefaults(500, 30)
controller.moveSprite(Droney)
controller.moveSprite(blaster)
info.setScore(0)
forever(function () {
    if (!(life <= 0)) {
        mySprite = sprites.create(, SpriteKind.Enemy)
        mySprite.setPosition(160, randint(0, 120))
        mySprite.setVelocity(50, randint(-50, 50))
        mySprite.setBounceOnWall(true)
        mySprite.setFlag(SpriteFlag.AutoDestroy, true)
        pause(1500)
        mySprite.setBounceOnWall(false)
    }
})
forever(function () {
    Droney.setPosition(blaster.x, blaster.y)
    if (life == 0) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.spray, 500)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.spray, 500)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.spray, 500)
        sprites.destroyAllSpritesOfKind(SpriteKind.Accesory, effects.spray, 500)
        sprites.destroyAllSpritesOfKind(SpriteKind.bground, effects.spray, 500)
        scene.setBackgroundImage()
        pause(500)
        story.printText(convertToText(Math.max(info.highScore(), info.score())), 80, 60)
        pause(500)
        mySprite2 = sprites.create(, SpriteKind.bground1)
        life += -1
    }
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
