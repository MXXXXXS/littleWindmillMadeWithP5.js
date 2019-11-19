import P5 from 'p5'

function triangleWave(x, t, a, p = 0) {
  const temp = (x + p) / t * 2
  const integer = Math.trunc(temp)
  const fraction = temp - integer
  if (integer % 2 === 0) {
    return a * (fraction - 0.5)
  } else {
    return a * (0.5 - fraction)
  }
}

new P5(function (p5) {
  const speed = 0.01
  const period = 1.5
  let t = 0

  let windmillTower
  let windmillFan

  p5.preload = function () {
    windmillTower = p5.loadImage('windmill_tower.svg')
    windmillFan = p5.loadImage('windmill_fan.svg')
  }

  p5.setup = function () {
    p5.createCanvas(500, 500, p5.WEBGL)
  }

  p5.draw = function () {
    p5.background(249, 145, 190)
    p5.scale(1, 1 - triangleWave(t += speed, period, 0.3))
    p5.shearX(p5.PI / 12 * triangleWave(t += speed, 2 * period, 1))
    // p5.rect(-50, -100, 100, 100)
    p5.image(windmillTower, -50, -100, 100, 100)
    p5.push()
    p5.translate(0, -90)
    p5.rotate(10 * t)
    p5.image(windmillFan, -50, -50, 100, 100)
    p5.pop()
  }
})