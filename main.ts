namespace SpriteKind {
    export const Accesory = SpriteKind.create()
    export const bground = SpriteKind.create()
    export const bground1 = SpriteKind.create()
    export const Lv2Enemy = SpriteKind.create()
    export const Lv3Enemy = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Lv2Enemy, function (sprite, otherSprite) {
    if (wingg == 0) {
        life += -2
        life = Math.max(0, life)
        if (life < 2) {
            lives.setImage(assets.image`myImage2`)
        } else if (life < 3) {
            lives.setImage(assets.image`myImage4`)
        } else {
            lives.setImage(assets.image`myImage5`)
        }
        pause(500)
    } else {
        info.changeScoreBy(1)
        sprites.destroy(otherSprite, effects.disintegrate, 200)
    }
})
function chooseset3 () {
    if (choose2 == 0) {
        mySprite2.setImage(assets.image`Arm_a`)
        mySprite3.setImage(assets.image`Arm_a0`)
        mySprite4.setImage(assets.image`Arm_a1`)
        mySprite5.setImage(assets.image`Arm_a2`)
        mySprite6.setImage(assets.image`Arm_a`)
    }
    if (choose2 == 1) {
        mySprite2.setImage(assets.image`Arm_a0`)
        mySprite3.setImage(assets.image`Arm_a1`)
        mySprite4.setImage(assets.image`Arm_a2`)
        mySprite5.setImage(assets.image`Arm_a`)
        mySprite6.setImage(assets.image`Arm_a0`)
    }
    if (choose2 == 2) {
        mySprite2.setImage(assets.image`Arm_a1`)
        mySprite3.setImage(assets.image`Arm_a2`)
        mySprite4.setImage(assets.image`Arm_a`)
        mySprite5.setImage(assets.image`Arm_a0`)
        mySprite6.setImage(assets.image`Arm_a1`)
    }
    if (choose2 == 3) {
        mySprite2.setImage(assets.image`Arm_a2`)
        mySprite3.setImage(assets.image`Arm_a`)
        mySprite4.setImage(assets.image`Arm_a0`)
        mySprite5.setImage(assets.image`Arm_a1`)
        mySprite6.setImage(assets.image`Arm_a2`)
    }
    mySprite2.setPosition(42, 62)
    mySprite3.setPosition(61, 62)
    mySprite4.setPosition(80, 62)
    mySprite5.setPosition(99, 62)
    mySprite6.setPosition(118, 62)
}
function chooseset2 () {
    if (choose2 == 0) {
        mySprite2.setImage(assets.image`Arm`)
        mySprite3.setImage(assets.image`Arm0`)
        mySprite4.setImage(assets.image`Arm1`)
        mySprite5.setImage(assets.image`Arm2`)
        mySprite6.setImage(assets.image`Arm`)
    }
    if (choose2 == 1) {
        mySprite2.setImage(assets.image`Arm0`)
        mySprite3.setImage(assets.image`Arm1`)
        mySprite4.setImage(assets.image`Arm2`)
        mySprite5.setImage(assets.image`Arm`)
        mySprite6.setImage(assets.image`Arm0`)
    }
    if (choose2 == 2) {
        mySprite2.setImage(assets.image`Arm1`)
        mySprite3.setImage(assets.image`Arm2`)
        mySprite4.setImage(assets.image`Arm`)
        mySprite5.setImage(assets.image`Arm0`)
        mySprite6.setImage(assets.image`Arm1`)
    }
    if (choose2 == 3) {
        mySprite2.setImage(assets.image`Arm2`)
        mySprite3.setImage(assets.image`Arm`)
        mySprite4.setImage(assets.image`Arm0`)
        mySprite5.setImage(assets.image`Arm1`)
        mySprite6.setImage(assets.image`Arm2`)
    }
    mySprite2.setPosition(42, 62)
    mySprite3.setPosition(61, 62)
    mySprite4.setPosition(80, 62)
    mySprite5.setPosition(99, 62)
    mySprite6.setPosition(118, 62)
}
function SelectSprite (num: number) {
    return CNums[num + 0]
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (bcheck == 1) {
        if (start == -1) {
            reset()
            bcheck = 0
        }
        if (start == -2) {
            start = -1
            open_screen()
        }
    }
})
function chooseset7 () {
    if (choose2 == 0) {
        mySprite2.setImage(assets.image`Saw`)
        mySprite3.setImage(assets.image`Saw_0`)
        mySprite4.setImage(assets.image`Saw_1`)
        mySprite5.setImage(assets.image`Saw_2`)
        mySprite6.setImage(assets.image`Saw`)
    }
    if (choose2 == 1) {
        mySprite2.setImage(assets.image`Saw_0`)
        mySprite3.setImage(assets.image`Saw_1`)
        mySprite4.setImage(assets.image`Saw_2`)
        mySprite5.setImage(assets.image`Saw`)
        mySprite6.setImage(assets.image`Saw_0`)
    }
    if (choose2 == 2) {
        mySprite2.setImage(assets.image`Saw_1`)
        mySprite3.setImage(assets.image`Saw_2`)
        mySprite4.setImage(assets.image`Saw`)
        mySprite5.setImage(assets.image`Saw_0`)
        mySprite6.setImage(assets.image`Saw_1`)
    }
    if (choose2 == 3) {
        mySprite2.setImage(assets.image`Saw_2`)
        mySprite3.setImage(assets.image`Saw`)
        mySprite4.setImage(assets.image`Saw_0`)
        mySprite5.setImage(assets.image`Saw_1`)
        mySprite6.setImage(assets.image`Saw_2`)
    }
    mySprite2.setPosition(42, 62)
    mySprite3.setPosition(61, 62)
    mySprite4.setPosition(80, 62)
    mySprite5.setPosition(99, 62)
    mySprite6.setPosition(118, 62)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(life <= 0)) {
        if (start == 1) {
            if (sprite0 == 0) {
                Rocket = sprites.createProjectileFromSprite(SelectSprite(1), blaster, 100, 0)
            } else if (sprite0 == 1) {
                if (life <= 2.8) {
                    story.spriteSayText(Droney, "Healing")
                    life += 1
                    life = Math.round(life)
                    if (life < 2) {
                        lives.setImage(assets.image`myImage2`)
                    } else if (life < 3) {
                        lives.setImage(assets.image`myImage4`)
                    } else {
                        lives.setImage(assets.image`myImage5`)
                    }
                }
            } else if (sprite0 == 2) {
                if (life > 1 && wingg == 0) {
                    blaster.setImage(SelectSprite(5))
                    wingg = 1
                    animation.runImageAnimation(
                    Droney,
                    assets.animation`myAnim6`,
                    60,
                    true
                    )
                    life += -0.5
                    if (life < 2) {
                        lives.setImage(assets.image`myImage2`)
                    } else if (life < 3) {
                        lives.setImage(assets.image`myImage4`)
                    } else {
                        lives.setImage(assets.image`myImage5`)
                    }
                    info.startCountdown(10)
                }
            } else {
                if (sierpinski==0) {
                    Rocket = sprites.createProjectileFromSprite(SelectSprite(7), blaster, 200, randint(-100, 100))
                    animation.runImageAnimation(
                        Rocket,
                        Animset(2),
                        50,
                        true
                    )
                        mySprite.setFlag(SpriteFlag.AutoDestroy, true)
                }else{
                    if (Math.percentChance(33)) {
                        Rocket = sprites.createProjectileFromSprite(SelectSprite(7), blaster, 200, randint(-100, 100))
                        animation.runImageAnimation(
                            Rocket,
                            Animset(2),
                            50,
                            true
                        )
                        mySprite.setFlag(SpriteFlag.AutoDestroy, true)
                    }
                }
            }
        }
    }
    if (life <= -1) {
        if (info.score() > info.highScore()) {
            game.gameOver(true)
        } else {
            game.reset()
        }
    }
    if (life == 3) {
        if (start == 0) {
            if (choose == 0) {
                start = 1
            } else {
                start = -1
            }
        }
    }
    if (start == -1) {
        if (bcheck == 1) {
            achecka = 0
            customze()
            start = -2
        }
    }
    if (start == -2) {
        if (achecka == 1) {
            CNums[choose1] = mySprite4.image
            if (choose1 == 3){
                if (choose2 == 0){
                    CNumAnims[0] = assets.animation`Arm_b2`
                }
                if (choose2 == 1) {
                    CNumAnims[0] = assets.animation`Arm_b1`
                }
                 if (choose2 == 2) {
                    CNumAnims[0] = assets.animation`Arm_b`
                }
                if (choose2 == 3) {
                    CNumAnims[0] = assets.animation`Arm_b0`
                }
            }
            if (choose1 == 6) {
                if (choose2 == 0) {
                    CNumAnims[1] = assets.animation`Saws1`
                }
                if (choose2 == 1) {
                    CNumAnims[1] = assets.animation`Saws2`
                }
                if (choose2 == 2) {
                    CNumAnims[1] = assets.animation`Saws_a`
                }
                if (choose2 == 3) {
                    CNumAnims[1] = assets.animation`Saws0`
                }
            }
            if (choose1 == 7) {
                if (choose2 == 0) {
                    CNumAnims[2] = assets.animation`Sawa1`
                    sierpinski = 0
                }
                if (choose2 == 1) {
                    CNumAnims[2] = assets.animation`Sawa0`
                    sierpinski = 1
                }
                if (choose2 == 2) {
                    CNumAnims[2] = assets.animation`Sawa`
                    sierpinski = 0
                }
                if (choose2 == 3) {
                    CNumAnims[2] = assets.animation`Sawa2`
                    sierpinski = 0
                }
            }
        }
    }
})
function open_screen () {
    choose1 = 0
    sprites.destroyAllSpritesOfKind(SpriteKind.bground1)
    background.setImage(assets.image`myImage25`)
    mySprite2 = sprites.create(assets.image`myImage32`, SpriteKind.bground1)
    mySprite3 = sprites.create(assets.image`myImage33`, SpriteKind.bground1)
    mySprite4 = sprites.create(assets.image`myImage26`, SpriteKind.bground1)
    mySprite5 = sprites.create(assets.image`myImage27`, SpriteKind.bground1)
    mySprite6 = sprites.create(assets.image`myImage28`, SpriteKind.bground1)
    mySprite2.setPosition(42, 62)
    mySprite3.setPosition(61, 62)
    mySprite4.setPosition(80, 62)
    mySprite5.setPosition(99, 62)
    mySprite6.setPosition(118, 62)
    bcheck = 1
}
function customze () {
    if (choose1 == 0) {
        chooseset0()
    }
    if (choose1 == 1) {
        chooseset1()
    }
    if (choose1 == 2) {
        chooseset2()
    }
    if (choose1 == 3) {
        chooseset3()
    }
    if (choose1 == 4) {
        chooseset4()
    }
    if (choose1 == 5) {
        chooseset5()
    }
    if (choose1 == 6) {
        chooseset6()
    }
    if (choose1 == 7) {
        chooseset7()
    }
    scaling.scaleToPixels(mySprite2, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    scaling.scaleToPixels(mySprite3, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    scaling.scaleToPixels(mySprite5, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    scaling.scaleToPixels(mySprite6, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (start == 0) {
        if (choose == 0) {
            choose += 1
            mySprite5.setImage(assets.image`myImage21`)
            sp6.setImage(assets.image`myImage24`)
        } else {
            choose = 0
            mySprite5.setImage(assets.image`myImage22`)
            sp6.setImage(assets.image`myImage23`)
        }
    }
    if (start == -1) {
        choose1 += 7
        choose1 = choose1 % 8
        chooseset()
    }
    if (start == -2) {
        choose2 += 3
        choose2 = choose2 % 4
        if (choose1 == 0) {
            chooseset0()
        }
        if (choose1 == 1) {
            chooseset1()
        }
        if (choose1 == 2) {
            chooseset2()
        }
        if (choose1 == 3) {
            chooseset3()
        }
        if (choose1 == 4) {
            chooseset4()
        }
        if (choose1 == 5) {
            chooseset5()
        }
        if (choose1 == 6) {
            chooseset6()
        }
        if (choose1 == 7) {
            chooseset7()
        }
        scaling.scaleToPixels(mySprite2, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        scaling.scaleToPixels(mySprite3, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        scaling.scaleToPixels(mySprite5, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        scaling.scaleToPixels(mySprite6, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        mySprite2.setPosition(42, 62)
        mySprite3.setPosition(61, 62)
        mySprite4.setPosition(80, 62)
        mySprite5.setPosition(99, 62)
        mySprite6.setPosition(118, 62)
    }
})
info.onCountdownEnd(function () {
    blaster.setImage(assets.image`Wing`)
    animation.runImageAnimation(
    Droney,
    assets.animation`myAnim`,
    100,
    true
    )
    wingg = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Accesory, function (sprite, otherSprite) {
    Droney.setPosition(blaster.x, blaster.y)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Lv2Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.disintegrate, 500)
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    info.changeScoreBy(2)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (start == 0) {
        if (choose == 0) {
            choose += 1
            mySprite5.setImage(assets.image`myImage21`)
            sp6.setImage(assets.image`myImage24`)
        } else {
            choose = 0
            mySprite5.setImage(assets.image`myImage22`)
            sp6.setImage(assets.image`myImage23`)
        }
    }
    if (start == -1) {
        choose1 += 1
        choose1 = choose1 % 8
        chooseset()
    }
    if (start == -2) {
        choose2 += 1
        choose2 = choose2 % 4
        if (choose1 == 0) {
            chooseset0()
        }
        if (choose1 == 1) {
            chooseset1()
        }
        if (choose1 == 2) {
            chooseset2()
        }
        if (choose1 == 3) {
            chooseset3()
        }
        if (choose1 == 4) {
            chooseset4()
        }
        if (choose1 == 5) {
            chooseset5()
        }
        if (choose1 == 6) {
            chooseset6()
        }
        if (choose1 == 7) {
            chooseset7()
        }
        scaling.scaleToPixels(mySprite2, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        scaling.scaleToPixels(mySprite3, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        scaling.scaleToPixels(mySprite5, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        scaling.scaleToPixels(mySprite6, 16, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        mySprite2.setPosition(42, 62)
        mySprite3.setPosition(61, 62)
        mySprite4.setPosition(80, 62)
        mySprite5.setPosition(99, 62)
        mySprite6.setPosition(118, 62)
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    acheck = 0
    if (start == -2) {
        achecka = 1
    }
})
function chooseset () {
    if (choose1 == 0) {
        mySprite2.setImage(assets.image`myImage32`)
        mySprite3.setImage(assets.image`myImage33`)
        mySprite4.setImage(assets.image`myImage26`)
        mySprite5.setImage(assets.image`myImage27`)
        mySprite6.setImage(assets.image`myImage28`)
    }
    if (choose1 == 1) {
        mySprite2.setImage(assets.image`myImage33`)
        mySprite3.setImage(assets.image`myImage26`)
        mySprite4.setImage(assets.image`myImage27`)
        mySprite5.setImage(assets.image`myImage28`)
        mySprite6.setImage(assets.image`myImage29`)
    }
    if (choose1 == 2) {
        mySprite2.setImage(assets.image`myImage26`)
        mySprite3.setImage(assets.image`myImage27`)
        mySprite4.setImage(assets.image`myImage28`)
        mySprite5.setImage(assets.image`myImage29`)
        mySprite6.setImage(assets.image`myImage30`)
    }
    if (choose1 == 3) {
        mySprite2.setImage(assets.image`myImage27`)
        mySprite3.setImage(assets.image`myImage28`)
        mySprite4.setImage(assets.image`myImage29`)
        mySprite5.setImage(assets.image`myImage30`)
        mySprite6.setImage(assets.image`myImage31`)
    }
    if (choose1 == 4) {
        mySprite2.setImage(assets.image`myImage28`)
        mySprite3.setImage(assets.image`myImage29`)
        mySprite4.setImage(assets.image`myImage30`)
        mySprite5.setImage(assets.image`myImage31`)
        mySprite6.setImage(assets.image`myImage32`)
    }
    if (choose1 == 5) {
        mySprite2.setImage(assets.image`myImage29`)
        mySprite3.setImage(assets.image`myImage30`)
        mySprite4.setImage(assets.image`myImage31`)
        mySprite5.setImage(assets.image`myImage32`)
        mySprite6.setImage(assets.image`myImage33`)
    }
    if (choose1 == 6) {
        mySprite2.setImage(assets.image`myImage30`)
        mySprite3.setImage(assets.image`myImage31`)
        mySprite4.setImage(assets.image`myImage32`)
        mySprite5.setImage(assets.image`myImage33`)
        mySprite6.setImage(assets.image`myImage26`)
    }
    if (choose1 == 7) {
        mySprite2.setImage(assets.image`myImage31`)
        mySprite3.setImage(assets.image`myImage32`)
        mySprite4.setImage(assets.image`myImage33`)
        mySprite5.setImage(assets.image`myImage26`)
        mySprite6.setImage(assets.image`myImage27`)
    }
}
function chooseset5 () {
    if (choose2 == 0) {
        mySprite2.setImage(assets.image`Winga`)
        mySprite3.setImage(assets.image`Winga0`)
        mySprite4.setImage(assets.image`Winga1`)
        mySprite5.setImage(assets.image`Winga2`)
        mySprite6.setImage(assets.image`Winga`)
    }
    if (choose2 == 1) {
        mySprite2.setImage(assets.image`Winga0`)
        mySprite3.setImage(assets.image`Winga1`)
        mySprite4.setImage(assets.image`Winga2`)
        mySprite5.setImage(assets.image`Winga`)
        mySprite6.setImage(assets.image`Winga0`)
    }
    if (choose2 == 2) {
        mySprite2.setImage(assets.image`Winga1`)
        mySprite3.setImage(assets.image`Winga2`)
        mySprite4.setImage(assets.image`Winga`)
        mySprite5.setImage(assets.image`Winga0`)
        mySprite6.setImage(assets.image`Winga1`)
    }
    if (choose2 == 3) {
        mySprite2.setImage(assets.image`Winga2`)
        mySprite3.setImage(assets.image`Winga`)
        mySprite4.setImage(assets.image`Winga0`)
        mySprite5.setImage(assets.image`Winga1`)
        mySprite6.setImage(assets.image`Winga2`)
    }
    mySprite2.setPosition(42, 62)
    mySprite3.setPosition(61, 62)
    mySprite4.setPosition(80, 62)
    mySprite5.setPosition(99, 62)
    mySprite6.setPosition(118, 62)
}
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    if (!(life <= 0)) {
        if (start == 1) {
            if (acheck == 0) {
                if (info.countdown() > 9 || wingg == 0) {
                    sprite0 = (sprite0 + 1) % 4
                    if (info.countdown() > 9) {
                        info.stopCountdown()
                        wingg = 0
                        life += 1
                        if (life < 2) {
                            lives.setImage(assets.image`myImage2`)
                        } else if (life < 3) {
                            lives.setImage(assets.image`myImage4`)
                        } else {
                            lives.setImage(assets.image`myImage5`)
                        }
                    }
                    if (sprite0 == 0) {
                        animation.stopAnimation(animation.AnimationTypes.All, blaster)
                        Droney.setImage(assets.image`Droney`)
                        animation.runImageAnimation(
                        Droney,
                        assets.animation`myAnim0`,
                        100,
                        true
                        )
                        blaster.setImage(SelectSprite(0))
                        Droney.z = 1
                        blaster.z = 0
                    } else if (sprite0 == 1) {
                        Droney.setImage(assets.image`Dexen`)
                        animation.runImageAnimation(
                        Droney,
                        assets.animation`myAnim1`,
                        100,
                        true
                        )
                        blaster.setImage(SelectSprite(2))
                        mySprite7 = sprites.create(SelectSprite(3), SpriteKind.Accesory)
                        controller.moveSprite(mySprite7, 100, 100)
                        animation.runImageAnimation(
                        mySprite7,
                        Animset(0),
                        100,
                        true
                        )
                        Droney.z = 0
                        blaster.z = 1
                    } else if (sprite0 == 2) {
                        sprites.destroy(mySprite7)
                        Droney.setImage(assets.image`Mitron`)
                        animation.runImageAnimation(
                        Droney,
                        assets.animation`myAnim`,
                        100,
                        true
                        )
                        blaster.setImage(SelectSprite(4))
                    } else {
                        Droney.setImage(assets.image`Sebex`)
                        animation.stopAnimation(animation.AnimationTypes.All, Droney)
                        blaster.setImage(SelectSprite(5))
                        animation.runImageAnimation(
                        blaster,
                        Animset(1),
                        50,
                        true
                        )
                    }
                    acheck = 1
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Lv3Enemy, function (sprite, otherSprite) {
    if (wingg == 0) {
        life += -3
        life = Math.max(0, life)
        if (life < 2) {
            lives.setImage(assets.image`myImage2`)
        } else if (life < 3) {
            lives.setImage(assets.image`myImage4`)
        } else {
            lives.setImage(assets.image`myImage5`)
        }
        pause(500)
    } else {
        info.changeScoreBy(1)
        sprites.destroy(otherSprite, effects.disintegrate, 200)
    }
})
function chooseset1 () {
    if (choose2 == 0) {
        mySprite2.setImage(assets.image`Rocket`)
        mySprite3.setImage(assets.image`Rocket0`)
        mySprite4.setImage(assets.image`Rocket1`)
        mySprite5.setImage(assets.image`Rocket2`)
        mySprite6.setImage(assets.image`Rocket`)
    }
    if (choose2 == 1) {
        mySprite2.setImage(assets.image`Rocket0`)
        mySprite3.setImage(assets.image`Rocket1`)
        mySprite4.setImage(assets.image`Rocket2`)
        mySprite5.setImage(assets.image`Rocket`)
        mySprite6.setImage(assets.image`Rocket0`)
    }
    if (choose2 == 2) {
        mySprite2.setImage(assets.image`Rocket1`)
        mySprite3.setImage(assets.image`Rocket2`)
        mySprite4.setImage(assets.image`Rocket`)
        mySprite5.setImage(assets.image`Rocket0`)
        mySprite6.setImage(assets.image`Rocket1`)
    }
    if (choose2 == 3) {
        mySprite2.setImage(assets.image`Rocket2`)
        mySprite3.setImage(assets.image`Rocket`)
        mySprite4.setImage(assets.image`Rocket0`)
        mySprite5.setImage(assets.image`Rocket1`)
        mySprite6.setImage(assets.image`Rocket2`)
    }
    mySprite2.setPosition(42, 62)
    mySprite3.setPosition(61, 62)
    mySprite4.setPosition(80, 62)
    mySprite5.setPosition(99, 62)
    mySprite6.setPosition(118, 62)
}
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (start == 0) {
        if (choose == 0) {
            choose += 1
            mySprite5.setImage(assets.image`myImage21`)
            sp6.setImage(assets.image`myImage24`)
        } else {
            choose = 0
            mySprite5.setImage(assets.image`myImage22`)
            sp6.setImage(assets.image`myImage23`)
        }
    }
    if (start == 1) {
        game.reset()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Lv3Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.disintegrate, 500)
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    info.changeScoreBy(3)
})
function chooseset0 () {
    if (choose2 == 0) {
        mySprite2.setImage(assets.image`Blaster`)
        mySprite3.setImage(assets.image`Blaster0`)
        mySprite4.setImage(assets.image`Blaster1`)
        mySprite5.setImage(assets.image`Blaster2`)
        mySprite6.setImage(assets.image`Blaster`)
    }
    if (choose2 == 1) {
        mySprite2.setImage(assets.image`Blaster0`)
        mySprite3.setImage(assets.image`Blaster1`)
        mySprite4.setImage(assets.image`Blaster2`)
        mySprite5.setImage(assets.image`Blaster`)
        mySprite6.setImage(assets.image`Blaster0`)
    }
    if (choose2 == 2) {
        mySprite2.setImage(assets.image`Blaster1`)
        mySprite3.setImage(assets.image`Blaster2`)
        mySprite4.setImage(assets.image`Blaster`)
        mySprite5.setImage(assets.image`Blaster0`)
        mySprite6.setImage(assets.image`Blaster1`)
    }
    if (choose2 == 3) {
        mySprite2.setImage(assets.image`Blaster2`)
        mySprite3.setImage(assets.image`Blaster`)
        mySprite4.setImage(assets.image`Blaster0`)
        mySprite5.setImage(assets.image`Blaster1`)
        mySprite6.setImage(assets.image`Blaster2`)
    }
    mySprite2.setPosition(42, 62)
    mySprite3.setPosition(61, 62)
    mySprite4.setPosition(80, 62)
    mySprite5.setPosition(99, 62)
    mySprite6.setPosition(118, 62)
}
function reset () {
    pause(100)
    if (start == -1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.bground1)
        life = 3
        start = 0
        choose = 1
        acheck = 0
        bcheck = 0
        color.FadeToWhite.startScreenEffect(500)
        pause(550)
        color.startFadeFromCurrent(color.originalPalette, 500)
        animation.stopAnimation(animation.AnimationTypes.All, background)
        background.setImage(assets.image`myImage1`)
        mySprite5 = sprites.create(assets.image`myImage21`, SpriteKind.bground1)
        sp6 = sprites.create(assets.image`myImage24`, SpriteKind.bground1)
        sp6.setPosition(100, 100)
        mySprite5.setPosition(60, 100)
        pause(550)
        pauseUntil(() => start != 0)
        if (start == 1) {
            color.FadeToWhite.startScreenEffect(500)
            pause(600)
            animation.runImageAnimation(
            background,
            assets.animation`myAnim2`,
            25,
            true
            )
            music.stopAllSounds
            music.setVolume(50)
            Droney = sprites.create(assets.image`Droney`, SpriteKind.Player)
            blaster = sprites.create(SelectSprite(0), SpriteKind.Accesory)
            Droney.setStayInScreen(true)
            blaster.setStayInScreen(true)
            lives = sprites.create(assets.image`myImage5`, SpriteKind.bground)
            lives.setPosition(24, 8)
            controller.configureRepeatEventDefaults(500, 30)
            controller.moveSprite(Droney)
            controller.moveSprite(blaster)
            info.setScore(0)
            mySprite3 = sprites.create(assets.image`myImage19`, SpriteKind.bground)
            mySprite3.setPosition(128, 110)
            mySprite4 = sprites.create(assets.image`myImage20`, SpriteKind.bground)
            mySprite4.setPosition(32, 110)
            color.startFadeFromCurrent(color.originalPalette, 500)
            pause(500)
            start = 1
        } else {
            open_screen()
        }
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.disintegrate, 500)
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    info.changeScoreBy(1)
})
function chooseset6 () {
    if (choose2 == 0) {
        mySprite2.setImage(assets.image`Saws`)
        mySprite3.setImage(assets.image`Saws_a0`)
        mySprite4.setImage(assets.image`Saws_a1`)
        mySprite5.setImage(assets.image`Saws_a2`)
        mySprite6.setImage(assets.image`Saws`)
    }
    if (choose2 == 1) {
        mySprite2.setImage(assets.image`Saws_a0`)
        mySprite3.setImage(assets.image`Saws_a1`)
        mySprite4.setImage(assets.image`Saws_a2`)
        mySprite5.setImage(assets.image`Saws`)
        mySprite6.setImage(assets.image`Saws_a0`)
    }
    if (choose2 == 2) {
        mySprite2.setImage(assets.image`Saws_a1`)
        mySprite3.setImage(assets.image`Saws_a2`)
        mySprite4.setImage(assets.image`Saws`)
        mySprite5.setImage(assets.image`Saws_a0`)
        mySprite6.setImage(assets.image`Saws_a1`)
    }
    if (choose2 == 3) {
        mySprite2.setImage(assets.image`Saws_a2`)
        mySprite3.setImage(assets.image`Saws`)
        mySprite4.setImage(assets.image`Saws_a0`)
        mySprite5.setImage(assets.image`Saws_a1`)
        mySprite6.setImage(assets.image`Saws_a2`)
    }
    mySprite2.setPosition(42, 62)
    mySprite3.setPosition(61, 62)
    mySprite4.setPosition(80, 62)
    mySprite5.setPosition(99, 62)
    mySprite6.setPosition(118, 62)
}
function chooseset4 () {
    if (choose2 == 0) {
        mySprite2.setImage(assets.image`Wing`)
        mySprite3.setImage(assets.image`Wing0`)
        mySprite4.setImage(assets.image`Wing1`)
        mySprite5.setImage(assets.image`Wing2`)
        mySprite6.setImage(assets.image`Wing`)
    }
    if (choose2 == 1) {
        mySprite2.setImage(assets.image`Wing0`)
        mySprite3.setImage(assets.image`Wing1`)
        mySprite4.setImage(assets.image`Wing2`)
        mySprite5.setImage(assets.image`Wing`)
        mySprite6.setImage(assets.image`Wing0`)
    }
    if (choose2 == 2) {
        mySprite2.setImage(assets.image`Wing1`)
        mySprite3.setImage(assets.image`Wing2`)
        mySprite4.setImage(assets.image`Wing`)
        mySprite5.setImage(assets.image`Wing0`)
        mySprite6.setImage(assets.image`Wing1`)
    }
    if (choose2 == 3) {
        mySprite2.setImage(assets.image`Wing2`)
        mySprite3.setImage(assets.image`Wing`)
        mySprite4.setImage(assets.image`Wing0`)
        mySprite5.setImage(assets.image`Wing1`)
        mySprite6.setImage(assets.image`Wing2`)
    }
    mySprite2.setPosition(42, 62)
    mySprite3.setPosition(61, 62)
    mySprite4.setPosition(80, 62)
    mySprite5.setPosition(99, 62)
    mySprite6.setPosition(118, 62)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (wingg == 0) {
        life += -1
        life = Math.max(0, life)
        if (life < 2) {
            lives.setImage(assets.image`myImage2`)
        } else if (life < 3) {
            lives.setImage(assets.image`myImage4`)
        } else {
            lives.setImage(assets.image`myImage5`)
        }
        pause(500)
    } else {
        info.changeScoreBy(1)
        sprites.destroy(otherSprite, effects.disintegrate, 200)
    }
})
function Animset(numy: number) {
    return(CNumAnims[numy])
}
let enemy2: Sprite = null
let mouse: Sprite = null
let mySprite7: Sprite = null
let choose1 = 0
let achecka = 0
let mySprite: Sprite = null
let Rocket: Sprite = null
let sprite0 = 0
let mySprite6: Sprite = null
let mySprite2: Sprite = null
let choose2 = 0
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let lives: Sprite = null
let Droney: Sprite = null
let blaster: Sprite = null
let sp6: Sprite = null
let mySprite5: Sprite = null
let wingg = 0
let choose = 0
let background: Sprite = null
let bcheck = 0
let acheck = 0
let start = 0
let life = 0
let CNums: Image[] = []
let sierpinski = 0
CNums = [
assets.image`Blaster`,
assets.image`Rocket`,
assets.image`Arm`,
assets.image`Arm_a`,
assets.image`Wing`,
assets.image`Winga`,
assets.image`Saws`,
assets.image`Saw`
]
let CNumAnims = [assets.animation`Arm_b`, assets.animation`Saws_a`, assets.animation`Sawa`]
game.setGameOverMessage(true, "Saving High Score")
life = 0
start = 0
acheck = 0
bcheck = 0
background = sprites.create(assets.image`myImage`, SpriteKind.bground)
animation.runImageAnimation(
background,
assets.animation`myAnim4`,
100,
false
)
choose = 0
wingg = 0
for (let index = 0; index < 900; index++) {
    pause(0)
    if (controller.A.isPressed()) {
        break;
    }
}
music.stopAllSounds()
music.setVolume(255)
life = 3
color.FadeToWhite.startScreenEffect(500)
pause(550)
color.startFadeFromCurrent(color.originalPalette, 500)
music.setTempo(500)
animation.stopAnimation(animation.AnimationTypes.All, background)
music.play(music.createSong(assets.song`title`), music.PlaybackMode.LoopingInBackground)
background.setImage(assets.image`myImage1`)
background.z = -10
mySprite5 = sprites.create(assets.image`myImage22`, SpriteKind.bground1)
sp6 = sprites.create(assets.image`myImage23`, SpriteKind.bground1)
sp6.setPosition(100, 100)
mySprite5.setPosition(60, 100)
pause(550)
pauseUntil(() => start != 0)
if (start == 1) {
    color.FadeToWhite.startScreenEffect(500)
    pause(600)
    color.startFadeFromCurrent(color.originalPalette, 500)
    start = 1
    animation.runImageAnimation(
    background,
    assets.animation`myAnim2`,
    25,
    true
    )
    music.setVolume(50)
    blaster = sprites.create(SelectSprite(0), SpriteKind.Accesory)
    Droney = sprites.create(assets.image`Droney`, SpriteKind.Player)
    Droney.setStayInScreen(true)
    blaster.setStayInScreen(true)
    blaster.z = -1
    background.z = -5
    lives = sprites.create(assets.image`myImage5`, SpriteKind.bground)
    lives.setPosition(24, 8)
    controller.configureRepeatEventDefaults(500, 30)
    controller.moveSprite(Droney, 100, 100)
    controller.moveSprite(blaster, 100, 100)
    info.setScore(0)
    mySprite3 = sprites.create(assets.image`myImage19`, SpriteKind.bground)
    mySprite3.setPosition(128, 110)
    mySprite4 = sprites.create(assets.image`myImage20`, SpriteKind.bground)
    mySprite4.setPosition(32, 110)
    lives.z = 5
} else {
    open_screen()
}
while (start != 1) {
    pause(0)
    if (start == -1) {
        if (bcheck != 1) {
            bcheck = 1
        }
    }
}
sprites.destroyAllSpritesOfKind(SpriteKind.bground1)
pause(500)
forever(function () {
    if (start == 1) {
        if (!(life <= 0)) {
            pause(2000)
            mouse = sprites.create(assets.image`myImage17`, SpriteKind.Lv2Enemy)
            mouse.setPosition(160, randint(0, 120))
            mouse.setVelocity(-200, 0)
            mouse.setFlag(SpriteFlag.AutoDestroy, true)
        }
    }
})
forever(function () {
    if (start == 1) {
        if (sprite0 == 1) {
            mySprite7.setPosition(blaster.x, blaster.y)
        }
        if (life == 0) {
            game.setGameOverScoringType(game.ScoringType.HighScore)
            game.setGameOverEffect(true, effects.dissolve)
            game.gameOver(true)
        }
    }
})
forever(function () {
    if (start == 1) {
        if (!(life <= 0)) {
            pause(5000)
            enemy2 = sprites.create(assets.image`myImage18`, SpriteKind.Lv3Enemy)
            enemy2.setPosition(160, 100)
            enemy2.setVelocity(-100, 0)
            enemy2.setFlag(SpriteFlag.AutoDestroy, true)
        }
    }
})
forever(function () {
    if (start == 1) {
        if (!(life <= 0)) {
            mySprite = sprites.create(assets.image`Enemy1`, SpriteKind.Enemy)
            mySprite.setPosition(160, randint(0, 120))
            mySprite.setVelocity(100, randint(-50, 50))
            mySprite.setBounceOnWall(true)
            mySprite.setFlag(SpriteFlag.AutoDestroy, true)
            pause(1000)
            mySprite.setBounceOnWall(false)
            pause(500)
        }
    }
})
forever(function () {
    if (start == 1) {
    pause(200)
    Droney.setPosition(blaster.x, blaster.y)
    }
})
forever(function () {
    if(start == 1) {
        music.stopAllSounds()
        music.setVolume(255)
        music.play(music.createSong(assets.song`title`), music.PlaybackMode.InBackground)
        music.setVolume(100)
        music.play(music.createSong(assets.song`The Drone beat`), music.PlaybackMode.UntilDone)
    }
})
