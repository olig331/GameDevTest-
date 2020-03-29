class Player {
    constructor(phaser_object, coords, hp, velocity) {
        this.phaser_object = phaser_object;
        this.hp = hp;

        this.invuln_timer = 0;
        this.level_timer = 0;
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
}