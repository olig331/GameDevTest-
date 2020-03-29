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

function preload(){
    this.load.image('spike', 'assets/spike.png');

    this.load.image('hp_powerup', 'assets/hp_powerup.png');
    this.load.image('timer_powerup', 'assets/timer_powerup.png');
    this.load.image('shield_powerup', 'assets/shield_powerup.png');
}

function create(){
    this.add.image(300, 450, 'spike');

    powerups = this.physics.add.staticGroup();
    
    powerups.create(100, 100, 'hp_powerup');
    powerups.create(100, 200, 'timer_powerup');
    powerups.create(100, 300, 'shield_powerup');
}

function update(){
  
}