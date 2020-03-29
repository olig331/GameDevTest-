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

let character;
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

    character = this.physics.add.sprite(300, 875, 'player');

    cursors = this.input.keyboard.createCursorKeys();

    character.setCollideWorldBounds(true);

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

    
}

function update(){
  if(cursors.left.isDown)
  {
    character.setVelocityX(-300);

    character.anims.play('left', true);
  }
  else if(cursors.right.isDown)
  {
    character.setVelocityX(300);
    character.anims.play('right', true);
  }
  else
  {
    character.setVelocityX(0);
    character.anims.play('center');
  }

  character.setVelocityY(-60);
}
