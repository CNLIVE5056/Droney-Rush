@namespace
class SpriteKind:
    Accesory = SpriteKind.create()
    bground = SpriteKind.create()
    bground1 = SpriteKind.create()

def on_a_pressed():
    global Rocket, life, wingg
    if not (life <= 0):
        if start == 1:
            if sprite3 == 0:
                Rocket = sprites.create_projectile_from_sprite(assets.image("""
                    myImage0
                """), Droney, 100, 0)
            elif sprite3 == 1:
                if life <= 2.8:
                    story.sprite_say_text(Droney,
                        "Healing...Life:" + convert_to_text(Math.round((life + 0.2) * 10) / 10))
                    life += 0.2
                    life = Math.round(life * 10) / 10
                    if life < 2:
                        lives.set_image(assets.image("""
                            myImage2
                        """))
                    elif life < 3:
                        lives.set_image(assets.image("""
                            myImage4
                        """))
                    else:
                        lives.set_image(assets.image("""
                            myImage5
                        """))
            elif sprite3 == 2:
                if wingg == 0:
                    blaster.set_image(assets.image("""
                        Wing0
                    """))
                    wingg = 1
                    animation.run_image_animation(Droney, assets.animation("""
                        myAnim6
                    """), 60, True)
                    life += -1
                    if life < 2:
                        lives.set_image(assets.image("""
                            myImage2
                        """))
                    elif life < 3:
                        lives.set_image(assets.image("""
                            myImage4
                        """))
                    else:
                        lives.set_image(assets.image("""
                            myImage5
                        """))
                    info.start_countdown(10)
                else:
                    blaster.set_image(assets.image("""
                        Wing
                    """))
                    animation.run_image_animation(Droney, assets.animation("""
                        myAnim
                    """), 100, True)
                    wingg = 0
                    info.stop_countdown()
            else:
                if randint(1, 6) == 1:
                    for index in range(3):
                        Rocket = sprites.create_projectile_from_sprite(assets.image("""
                                myImage0
                            """),
                            Droney,
                            randint(0, 33),
                            randint(-33, 33))
                        animation.run_image_animation(Rocket, assets.animation("""
                            myAnim5
                        """), 50, True)
                        mySprite.set_flag(SpriteFlag.AUTO_DESTROY, True)
    else:
        if life <= -1:
            if info.score() > info.high_score():
                game.game_over(True)
            else:
                game.reset()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_countdown_end():
    global wingg
    if wingg == 0:
        wingg = 1
        info.change_life_by(1)
    else:
        blaster.set_image(assets.image("""
            Wing
        """))
        animation.run_image_animation(Droney, assets.animation("""
            myAnim
        """), 100, True)
        wingg = 0
info.on_countdown_end(on_countdown_end)

def on_a_released():
    global acheck
    acheck = 0
controller.A.on_event(ControllerButtonEvent.RELEASED, on_a_released)

def on_a_repeated():
    global sprite3, wingg, acheck
    if not (life <= 0):
        if start == 1:
            if acheck == 0:
                sprite3 = (sprite3 + 1) % 4
                if sprite3 == 0:
                    animation.stop_animation(animation.AnimationTypes.ALL, blaster)
                    Droney.set_image(assets.image("""
                        Droney
                    """))
                    animation.run_image_animation(Droney, assets.animation("""
                        myAnim0
                    """), 100, True)
                    blaster.set_image(assets.image("""
                        Blaster
                    """))
                elif sprite3 == 1:
                    Droney.set_image(assets.image("""
                        Dexen
                    """))
                    animation.run_image_animation(Droney, assets.animation("""
                        myAnim1
                    """), 100, True)
                    blaster.set_image(assets.image("""
                        Arm
                    """))
                elif sprite3 == 2:
                    Droney.set_image(assets.image("""
                        Mitron
                    """))
                    animation.run_image_animation(Droney, assets.animation("""
                        myAnim
                    """), 100, True)
                    blaster.set_image(assets.image("""
                        Wing
                    """))
                else:
                    Droney.set_image(assets.image("""
                        Sebex
                    """))
                    animation.stop_animation(animation.AnimationTypes.ALL, Droney)
                    blaster.set_image(assets.image("""
                        myImage3
                    """))
                    animation.run_image_animation(blaster, assets.animation("""
                        myAnim3
                    """), 50, True)
                    if info.countdown() > 6:
                        wingg = 0
                    info.change_countdown_by(0 - info.countdown())
                acheck = 1
controller.A.on_event(ControllerButtonEvent.REPEATED, on_a_repeated)

def on_on_overlap(sprite, otherSprite):
    sprites.destroy(sprite, effects.disintegrate, 500)
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    global life
    if wingg == 0:
        life += -1
        if life < 2:
            lives.set_image(assets.image("""
                myImage2
            """))
        elif life < 3:
            lives.set_image(assets.image("""
                myImage4
            """))
        else:
            lives.set_image(assets.image("""
                myImage5
            """))
        pause(500)
    else:
        sprites.destroy(otherSprite2, effects.disintegrate, 200)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

Enemy2: Sprite = None
mySprite2: Sprite = None
mySprite: Sprite = None
Rocket: Sprite = None
sprite3 = 0
lives: Sprite = None
blaster: Sprite = None
Droney: Sprite = None
wingg = 0
acheck = 0
start = 0
life = 0
game.set_game_over_message(True, "Saving High Score")
life = 3
start = 0
acheck = 0
background = sprites.create(assets.image("""
    myImage
"""), SpriteKind.bground)
animation.run_image_animation(background,
    assets.animation("""
        myAnim4
    """),
    100,
    False)
wingg = 0
for index2 in range(1100):
    pause(0)
    if controller.A.is_pressed():
        break
animation.stop_animation(animation.AnimationTypes.ALL, background)
background.set_image(assets.image("""
    myImage1
"""))

def on_pause_until():
    pass
pause_until(on_pause_until)

color.fade_to_white.start_screen_effect(500)
pause(600)
color.start_fade_from_current(color.original_palette, 500)
start = 1
animation.run_image_animation(background, assets.animation("""
    myAnim2
"""), 25, True)
Droney = sprites.create(assets.image("""
    Droney
"""), SpriteKind.player)
blaster = sprites.create(assets.image("""
    Blaster
"""), SpriteKind.Accesory)
Droney.set_stay_in_screen(True)
blaster.set_stay_in_screen(True)
lives = sprites.create(assets.image("""
    myImage5
"""), SpriteKind.bground)
lives.set_position(24, 8)
controller.configure_repeat_event_defaults(500, 30)
controller.move_sprite(Droney)
controller.move_sprite(blaster)
info.set_score(0)

def on_forever():
    global mySprite
    if not (life <= 0):
        mySprite = sprites.create(assets.image("""
            Enemy1
        """), SpriteKind.enemy)
        mySprite.set_position(160, randint(0, 120))
        mySprite.set_velocity(50, randint(-50, 50))
        mySprite.set_bounce_on_wall(True)
        mySprite.set_flag(SpriteFlag.AUTO_DESTROY, True)
        pause(1500)
        mySprite.set_bounce_on_wall(False)
forever(on_forever)

def on_forever2():
    global mySprite2, life
    Droney.set_position(blaster.x, blaster.y)
    if life == 0:
        sprites.destroy_all_sprites_of_kind(SpriteKind.player, effects.spray, 500)
        sprites.destroy_all_sprites_of_kind(SpriteKind.enemy, effects.spray, 500)
        sprites.destroy_all_sprites_of_kind(SpriteKind.projectile, effects.spray, 500)
        sprites.destroy_all_sprites_of_kind(SpriteKind.Accesory, effects.spray, 500)
        sprites.destroy_all_sprites_of_kind(SpriteKind.bground, effects.spray, 500)
        scene.set_background_image(assets.image("""
            bg
        """))
        pause(500)
        story.print_text(convert_to_text(max(info.high_score(), info.score())),
            80,
            60)
        pause(500)
        mySprite2 = sprites.create(assets.image("""
            myImage16
        """), SpriteKind.bground1)
        life += -1
    game.set_game_over_scoring_type(game.ScoringType.HIGH_SCORE)
forever(on_forever2)

def on_forever3():
    global Enemy2
    if start == 1:
        pause(5000)
        Enemy2 = sprites.create(assets.image("""
            myImage17
        """), SpriteKind.enemy)
        Enemy2.set_position(160, randint(0, 120))
        Enemy2.set_velocity(-200, 0)
forever(on_forever3)
