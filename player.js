class Player {
    constructor(phaser_object, hp, movespeed) {
        this.phaser_object = phaser_object;
        this.hp = hp;
        this.movespeed = movespeed;

        this.invuln_timer = 0;
        this.level_timer = 0;

        this.arrow_keys = {left: false, right: false}
    }

    powerup(powerup_name) {
        switch (powerup_name, powerup_value) {
            case 'hp_powerup':
                this.hp[0] = Math.min(this.hp[0]+1, this.hp[1])
            case 'timer_powerup':
                this.level_timer -= powerup_value;
            case 'shield_powerup':
                this.invuln_timer += powerup_value; 
        }
    }

    update_velocity() {
        let result_velocity_x = 0;
        result_velocity_x += (this.arrow_keys.right * this.movespeed) - (this.arrow_keys.left * this.movespeed)

        this.phaser_object.setVelocityX(result_velocity_x);

        if (result_velocity_x > 0) {
            this.phaser_object.anims.play('right', true);
        } else if (result_velocity_x < 0) {
            this.phaser_object.anims.play('left', true);
        } else {
            this.phaser_object.anims.play('center', true);
        }
    }
}