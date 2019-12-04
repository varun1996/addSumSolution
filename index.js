function JQ(a) {
  if (!(this instanceof JQ)) {
    return new JQ(a)
  }
  this.result = a;
  return this;
}

JQ.prototype.add = function (b) {
  this.result += b
  console.log(this.result)
  return this;
}

JQ.prototype.sub = function (b) {
  this.result -= b
  console.log(this.result)
  return this
}

JQ(1).add(3).add(5).sub(3)

