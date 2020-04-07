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


// Stop-gap measure to set initial run properties e.g. velocity - This cannot be done in create() for some reason
let start = false;
let started = false;

// Should be abstracted into Camera class
let camera_y_working;

function preload(){
    this.load.image("tiles", "assets/level1TileSet.png");

    this.load.tilemapTiledJSON("map", "assets/maps/gameMap.json");

    this.load.spritesheet('player', 'assets/man.png', {frameWidth: 50, frameHeight: 60});
   
    
}

function create(){
  var map = this.make.tilemap({ key: "map"});

  var tiles = map.addTilesetImage("mapTileSet", "tiles");
  
  // Layers
  var botLayer = map.createStaticLayer("bot", tiles, 0,-8000);
  var spikes = map.createStaticLayer("spikes", tiles, 0,-8000);
  
    phaser_character = this.physics.add.sprite(300, 950, 'player');
    phaser_character.setCollideWorldBounds(false);

    cursors = this.input.keyboard.createCursorKeys();

    this.anims.create({
      key: 'left', 
      frames: [{key: 'player', frame:2}],
      frameRate: 1,
    });

    this.anims.create({
      key: 'center',
      frames:[{key: 'player', frame:0}],
    });

    this.anims.create({
      key:'right',
      frames:[{key: 'player', frame:1}],
    });

    player = new Player(phaser_character, [2, 3], 300);
}

function update(){
  if (start && !started)
  {
    player.phaser_object.setVelocityY(-300);

    started = true;
  }

  if ((cursors.left.isDown != player.arrow_keys.left) || (cursors.right.isDown != player.arrow_keys.right))
  {
    if (!start) {start = true}

    player.arrow_keys.left = cursors.left.isDown;
    player.arrow_keys.right = cursors.right.isDown;

    player.update_velocity();
  }

  update_camera(this.cameras.main, player);
}

function update_camera(camera, player) {
  if (camera_y_working === undefined) {
    camera_y_working = camera._y
  }

  if (camera_y_working !== undefined) {
    const camera_distance_mult = .05;
    const camera_y_offset = -800;

    distance_y = (- camera_y_working - player.phaser_object.y) - camera_y_offset;
    camera_y_working = camera_y_working + (distance_y * camera_distance_mult);

    camera._y = Math.round(camera_y_working);
  }
}
