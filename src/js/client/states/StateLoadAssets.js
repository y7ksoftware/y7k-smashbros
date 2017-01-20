
export default class StateLoadAssets extends Phaser.State {


    /**
     *
     */
	create() {
        game.state.start('StatePrepareAssets');
	}


    /**
     *
     */
    preload() {
        this.showLoadingBar();
        this.loadMap();
        this.loadCharacters();
        this.loadThrowables();
        this.loadImages();
        this.loadAudio();
        this.loadData();
        this.loadFonts();
    }


    /**
     *
     */
    showLoadingBar() {
        let background = game.add.image(game.centerX, game.centerY, 'screen-background');
        background.anchor.setTo(0.5, 0.5);
        background.scale.set(game.scaleFactor, game.scaleFactor);

        let progressBar = game.add.sprite(0, 0, 'progress-bar');
        progressBar.position.setTo(game.centerX - progressBar.width / 2, game.centerY - progressBar.height / 2);

        let progressBarInner = game.add.sprite(0, 0, 'progress-bar-inner');
        progressBarInner.position.setTo(game.centerX - progressBarInner.width / 2, game.centerY - progressBarInner.height / 2);
        this.load.setPreloadSprite(progressBarInner);

        let textStyle = {
            font: "16px Helvetica",
            fill: "#fff",
            //stroke: "#000",
            //strokeThickness: 1
        };
        let textLoading = game.add.text(0, 0, 'Loading...', textStyle);
        textLoading.anchor.setTo(0.5, 0.5);
        textLoading.position.setTo(game.centerX, game.centerY);
    }


    /**
     *
     */
    loadMap() {
        game.load.tilemap('tilemap_data', '/build/assets/tilemaps/tilemap-y7k.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('tilemap_tiles', '/build/assets/tilemaps/tilemap-y7k.png');
    }


    /**
     *
     */
    loadCharacters() {
        let characters = game.cache.getJSON('characters');

        Object.keys(characters).forEach((key) => {
            game.load.pack(key, '/build/assets/data/character-assets.json');
        });

    }


    /**
     *
     */
    loadThrowables() {
        game.load.pack('throwables', '/build/assets/data/throwable-assets.json');
        game.load.pack('throwable-overlays', '/build/assets/data/throwable-assets.json');
    }


    /**
     *
     */
    loadData() {
        game.load.json('spawnpoints', '/build/assets/data/spawnpoints.json');
        game.load.json('collision-shapes', '/build/assets/data/collision-shapes.json');
        game.load.json('texts', '/build/assets/data/texts.json');

        if(game.mobile) {
            game.load.json('texts-device', '/build/assets/data/texts-mobile.json');
        } else {
            game.load.json('texts-device', '/build/assets/data/texts-desktop.json');
        }
    }


    /**
     *
     */
    loadImages() {
        game.load.image('screen-start', '/build/assets/images/screen-start.png');
        game.load.image('portrait-box', '/build/assets/images/portrait-box.png');
        game.load.image('name-box', '/build/assets/images/name-box.png');
        game.load.image('tutorial-box', '/build/assets/images/tutorial-box.png');
        game.load.image('select-cursor', '/build/assets/images/select-cursor.png');
    }


    /**
     *
     */
    loadFonts() {
        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
        game.load.bitmapFont('font-white', '/build/assets/fonts/font-white.png', '/build/assets/fonts/font-white.fnt');
        game.load.bitmapFont('font-white-big', '/build/assets/fonts/font-white-big.png', '/build/assets/fonts/font-white-big.fnt');
        game.load.bitmapFont('font-color', '/build/assets/fonts/font-color.png', '/build/assets/fonts/font-color.fnt');
    }


    /**
     *
     */
    loadAudio() {
        game.load.audio('click', '/build/assets/audio/click.mp3');
        game.load.audio('click-ok', '/build/assets/audio/click-ok.mp3');
        game.load.audio('music', '/build/assets/audio/music-wham.mp3');
    }

}
