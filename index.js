const config = {
  type: Phaser.AUTO,
  width:600,
  height:900,
  physics:{
    deafult:'aracde',
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

function preload(){

}

function create(){

}

function update(){
  
}