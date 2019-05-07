const Game = {
  version: '1.0',
  name: 'President Fighter',
  description: 'Candidatos a muerte',
  author: 'Anthony',
  canvasDom: undefined,
  ctx: undefined,
  // winW: 400,
  // winH: 900,
  player: undefined,
  canvasSizes: {
    w: 1600,
    h: 800
  },

  init: function (id, imgUrl1, imgUrl2) {
    this.canvasDom = document.getElementById(id)
    this.ctx = this.canvasDom.getContext('2d')
    this.canvasSizes.w = 1600
    this.canvasSizes.h = 800
    this.setDimensions()
    this.setHandlers()
    this.setEventListeners()
    this.drawBackground(imgUrl1)
    this.drawControlledPlayer(imgUrl2)
  },
  setDimensions: function () {
    this.canvasDom.setAttribute('width', this.canvasSizes.w)
    this.canvasDom.setAttribute('height', this.canvasSizes.h)

  },
  setHandlers: function () {
    window.onresize = () => this.setDimensions()
  },
  drawBackground: function (imgUrl1) {
    this.background = new Background(this.ctx, imgUrl1, this.canvasSizes)

    setInterval(() => {
      this.clear()
      this.background.drawBackground()
    }, 20)
  },

  drawControlledPlayer: function (imgUrl2) {
    this.player = new Player(this.ctx, imgUrl2, this.canvasSizes)

    setInterval(() => {
      this.clear()
      this.player.drawPlayer()
    }, 0)
  },
  clear: function () {
    this.ctx.clearRect(0, 0, this.canvasSizes.w, this.canvasSizes.h)
  },
  setEventListeners: function () {
    document.onkeydown = e => {
      if (e.keyCode === 37) this.player.moveLeft()
      if (e.keyCode === 39) this.player.moveRight()
    }
  }
}



class Player {
  constructor(ctx, url, sizes) {

    this.img = new Image()
    this.img.src = url
    this.width = 159
    this.height = 358 * .50
    this.ctx = ctx
    this.canvasSizes = sizes

    this.posX = 20
    this.posY = 600
    this.velX = 20


  }
  drawPlayer() {

    this.ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height)
  }

  moveLeft() {
    if (this.posX > 0) this.posX -= this.velX
  }

  moveRight() {
    if (this.posX < this.canvasSizes.w - this.width) this.posX += this.velX
  }


} class Background {
  constructor(ctx, url, sizes) {

    this.img = new Image()
    this.img.src = url
    this.width = 1200
    this.height = 800
    this.ctx = ctx
    this.canvasSizes = sizes

    this.posX = 0
    this.posY = 0
    // this.velX = 20


  }
  drawBackground() {

    this.ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height)
  }
}

//   move() {
//     this.x -= this.dx;

//     if (this.x < -this.w) this.x = 0;
//   }

// }