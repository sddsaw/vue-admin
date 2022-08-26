/* eslint-disable no-new */
export function start () {
  // 宇宙特效
  'use strict'
  const canvas:any = document.getElementById('canvas')
  const ctx:any = canvas.getContext('2d')
  const w = (canvas.width = window.innerWidth)
  const h = (canvas.height = window.innerHeight)
  const hue = 217
  const stars:any = []
  let count = 0
  const maxStars = 1069 // 星星数量

  const canvas2 = document.createElement('canvas')
  const ctx2:any = canvas2.getContext('2d')
  canvas2.width = 100
  canvas2.height = 100
  const half = canvas2.width / 2
  const gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half)
  gradient2.addColorStop(0.025, '#ccc')
  gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)')
  gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)')
  gradient2.addColorStop(1, 'transparent')

  ctx2.fillStyle = gradient2
  ctx2.beginPath()
  ctx2.arc(half, half, half, 0, Math.PI * 2)
  ctx2.fill()

  // End cache

  function random (min:any, max?:any) {
    if (arguments.length < 2) {
      max = min
      min = 0
    }

    if (min > max) {
      const hold = max
      max = min
      min = hold
    }

    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function maxOrbit (x:any, y:any) {
    const max = Math.max(x, y)
    const diameter = Math.round(Math.sqrt(max * max + max * max))
    return diameter / 2
    // 星星移动范围，值越大范围越小，
  }

  const Star = function (this: any) {
    this.orbitRadius = random(maxOrbit(w, h))
    this.radius = random(20, this.orbitRadius) / 8
    // 星星大小
    this.orbitX = w / 2
    this.orbitY = h / 2
    this.timePassed = random(0, maxStars)
    this.speed = random(this.orbitRadius) / 500000
    // 星星移动速度
    this.alpha = random(2, 10) / 10

    count++
    stars[count] = this
  }

  Star.prototype.draw = function () {
    const x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX
    const y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY
    const twinkle = random(10)

    if (twinkle === 1 && this.alpha > 0) {
      this.alpha -= 0.05
    } else if (twinkle === 2 && this.alpha < 1) {
      this.alpha += 0.05
    }

    ctx.globalAlpha = this.alpha
    ctx.drawImage(canvas2, x - this.radius / 8, y - this.radius / 8, this.radius, this.radius)
    this.timePassed += this.speed
  }

  for (let i = 0; i < maxStars; i++) {
    new Star()
  }

  function animation () {
    ctx.globalCompositeOperation = 'source-over'
    ctx.globalAlpha = 0.5 // 尾巴
    // ctx.fillStyle = 'hsla(' + 222 + ', 83%, 45%, 2)'
    ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)'
    ctx.fillRect(0, 0, w, h)

    ctx.globalCompositeOperation = 'lighter'
    for (let i = 1, l = stars.length; i < l; i++) {
      stars[i].draw()
    }

    window.requestAnimationFrame(animation)
  }

  animation()
}
// 监听浏览器事件，动态设置canvas宽高
window.addEventListener('resize', start, false)
