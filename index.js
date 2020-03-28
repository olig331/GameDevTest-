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
}

function create(){
    this.add.image(300, 450, 'spike');
}

function update(){
  
}