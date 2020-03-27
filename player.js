class Player {
    constructor(phaser_object, coords, hp, velocity) {
        this.phaser_object = phaser_object;
        this.x_coord = coords[0];
        this.y_coord = coords[1];
        this.curr_hp = hp[0];
        this.max_hp = hp[1];
        this.x_vel = velocity[0];
        this.y_vel = velocity[1];
    }
}