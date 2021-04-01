class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  distance(point){
    console.log(this.x)
    console.log(p2.x)
    console.log(this.y)
    console.log(p2.y)
    return Math.sqrt(Math.pow((point.x - this.x), 2) + Math.pow((point.y - this.y), 2))
  }
}
// p1 est une instance de Point
const p1 = new Point(1, 2)
// p2 est une autre instance de Point
const p2 = new Point(10, 11)

console.log(p1.distance(p2))