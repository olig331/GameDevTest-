class UI{
    constructor(player, progress_bar) {
        this.player = player;
        this.progress_bar - progress_bar;
    }

    get_values() {
        result = {};

        result["player_hp"] = this.player.hp;
        result["timer"] = this.player.level_timer;
        result["progress"] = this.progress_bar.progress;
    }
}