const config = {
  type: Phaser.AUTO,
  width:600,
  height:900,
  physics:{
    default:'arcade',
    arcade:{
      gravity: {y:0},
      debug: false
    } 
  },

  scene:{
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

let phaser_character;
let player;
let cursors;


function preload(){
    this.load.image('spike', 'assets/spike.png');
    this.load.spritesheet('player', 'assets/player.png', {frameWidth: 40, frameHeight: 60});
    this.load.image('hp_powerup', 'assets/hp_powerup.png');
    this.load.image('timer_powerup', 'assets/timer_powerup.png');
    this.load.image('shield_powerup', 'assets/shield_powerup.png');
    this.load.image('background', 'assets/background.png');
}

function create(){
    this.add.image(300, 450, 'background');
    this.add.image(300, 450, 'spike');

    powerups = this.physics.add.staticGroup();
    
    powerups.create(100, 100, 'hp_powerup');
    powerups.create(100, 200, 'timer_powerup');
    powerups.create(100, 300, 'shield_powerup');

    phaser_character = this.physics.add.sprite(300, 875, 'player');
    phaser_character.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();

    this.anims.create({
      key: 'left', 
      frames: [{key: 'player', frame:1}],
      frameRate: 1,
    });

    this.anims.create({
      key: 'center',
      frames:[{key: 'player', frame:0}],
    });

    this.anims.create({
      key:'right',
      frames:[{key: 'player', frame:2}],
    });

    player = new Player(phaser_character, [2, 3], 300);
}

function update(){
  if ((cursors.left.isDown != player.arrow_keys.left) || (cursors.right.isDown != player.arrow_keys.right))
  {
    player.arrow_keys.left = cursors.left.isDown;
    player.arrow_keys.right = cursors.right.isDown;

    player.update_velocity();
  }
}
