var gameScene = new Phaser.Scene('game');
var controller, background, gamepad;

var settings = {
    gamemode: false,
    width: 1920,
    height: 1080,
    lives: 3,
    livesId: null,
    score: 0,
    scoreId: null,
    highscore: null,
    highscoreId: null,
    gravity: 125,
    physicsDebug: true,
    startGameMenu: null,
    startGameMenuButton: null,
    playerSpeed: 7,
}

var config = {
    type: Phaser.CANVAS,
    width: settings.width,
    height: settings.height,
    scene: gameScene,
    input: {
        gamepad: true
    },
}

var game = new Phaser.Game(config);

gameScene.init = function () {

}

gameScene.preload = function () {

    this.load.image('background', 'assets/background_blue.png');
    this.load.image('base', 'assets/Base.png');
    this.load.image('btn-a', 'assets/Button-A.png');
    this.load.image('btn-b', 'assets/Button-B.png');
    this.load.image('btn-y', 'assets/Button-Y.png');
    this.load.image('btn-x', 'assets/Button-X.png');
    this.load.image('btn-lb', 'assets/LB.png');
    this.load.image('btn-rb', 'assets/RB.png');
    this.load.image('btn-rt', 'assets/RT.png');
    this.load.image('btn-lt', 'assets/LT.png');
    this.load.image('btn-xbox', 'assets/X-Button.png');
    this.load.image('btn-menu', 'assets/Menu-btn.png');
    this.load.image('btn-select', 'assets/Select-btn.png');
    this.load.image('d-pad', 'assets/D-Pad.png');
    this.load.image('l-stick', 'assets/Left-Stick.png');
    this.load.image('r-stick', 'assets/Right-Stick.png');

}

gameScene.create = function () {

    background = this.add.tileSprite(0, 0, 2000, 1125, 'background');
    background.setPosition(1000, 1125 / 2)

    controller = {
        base: this.add.sprite(0, 0, 'base'),
        btnA: this.add.sprite(0, 0, 'btn-a'),
        btnB: this.add.sprite(0, 0, 'btn-b'),
        btnY: this.add.sprite(0, 0, 'btn-y'),
        btnX: this.add.sprite(0, 0, 'btn-x'),
        lb: this.add.sprite(0, 0, 'btn-lb'),
        rb: this.add.sprite(0, 0, 'btn-rb'),
        lt: this.add.sprite(0, 0, 'btn-lt'),
        rt: this.add.sprite(0, 0, 'btn-rt'),
        dPad: this.add.sprite(0, 0, 'd-pad'),
        lStick: this.add.sprite(0, 0, 'l-stick'),
        rStick: this.add.sprite(0, 0, 'r-stick'),
    }

    controller.base.x = settings.width / 2;
    controller.base.y = settings.height / 2;
    controller.base.scale = 0.6;

    controller.btnY.x = 1575;
    controller.btnY.y = 350;
    controller.btnY.scale = 0.6;

    controller.btnA.x = 1575;
    controller.btnA.y = 500;
    controller.btnA.scale = 0.6;

    controller.btnX.x = 1500;
    controller.btnX.y = 425;
    controller.btnX.scale = 0.6;

    controller.btnB.x = 1650;
    controller.btnB.y = 425;
    controller.btnB.scale = 0.6;

    controller.lt.x = 350;
    controller.lt.y = 155;
    controller.lt.scale = 0.6;

    controller.lb.x = 475;
    controller.lb.y = 135;
    controller.lb.scale = 0.6;

    controller.rt.x = 1550;
    controller.rt.y = 155;
    controller.rt.scale = 0.6;

    controller.rb.x = 1400;
    controller.rb.y = 130;
    controller.rb.scale = 0.6;

    controller.dPad.x = 600;
    controller.dPad.y = 630;
    controller.dPad.scale = 0.6;

    controller.lStick.x = 380;
    controller.lStick.y = 360;
    controller.lStick.scale = 0.6;

    controller.rStick.x = 1207;
    controller.rStick.y = 568;
    controller.rStick.scale = 0.6;

    this.input.gamepad.once('down', function (pad, button, index) {
        console.log('Gamepad Online...');
        gamepad = pad;
    }, this);

}

gameScene.update = function () {

    if (gamepad) {
        if (gamepad.left) {
            console.log('left pressed...');
        } else if (gamepad.right) {
            console.log('right pressed...');
        }
    }
    
    if (gamepad) {
        if (gamepad.up) {
            console.log('up pressed...');
        } else if (gamepad.down) {
            console.log('down pressed...');
        }
    }



}
