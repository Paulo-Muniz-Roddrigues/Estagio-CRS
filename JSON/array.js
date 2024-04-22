let triangulo = {
  ax: -2,
  ay: 2,
  
  bx: 0,
  by: -2,
  
  cx: 3,
  cy: 0,

  AB: function() {
    return Math.sqrt(Math.pow(Math.abs(this.ax - this.bx),2) + Math.pow(Math.abs(this.ay - this.by),2));
  },
  
  BC: function() {
    return Math.sqrt(Math.pow(Math.abs(this.bx - this.cx),2) + Math.pow(Math.abs(this.by - this.cy),2));
  },

  CA: function() {Math.sqrt(Math.pow(Math.abs(this.cx - this.ax),2) + Math.pow(Math.abs(this.cy - this.ay),2))
    return Math.sqrt(Math.pow(Math.abs(this.cx - this.ax),2) + Math.pow(Math.abs(this.cy - this.ay),2));
  },

  IX: function() {
    return (this.AB() * this.ax + this.BC() * this.bx + this.CA() * this.cx) / (this.AB() + this.BC() + this.CA());
  },

  IY: function() {
    return (this.AB() * this.ay + this.BC() * this.by + this.CA() * this.cy) / (this.AB() + this.BC() + this.CA());
  },

  Perimetro: function() {
    return (this.AB() + this.BC() + this.CA())/2;
  },

  Area: function() {
    return Math.sqrt(this.Perimetro()*(this.Perimetro() - this.AB())*(this.Perimetro() - this.BC())*(this.Perimetro() - this.CA()));
  },

  Incentro: function() {
  return this.Area()/this.Perimetro();
  }
}

console.log(`AB: ${triangulo.AB()}`);
console.log(`BC: ${triangulo.BC()}`);
console.log(`CA: ${triangulo.CA()}\n`);

console.log(`O perimetro do triangulo é ${triangulo.Perimetro()}`);

console.log(`A area do triangulo é ${triangulo.Area()}\n`);

console.log(`As coordenadas do incentro são:\nX: ${triangulo.IX()}  Y: ${triangulo.IY()}`)

console.log(`O raio do incentro do triangulo é ${triangulo.Incentro()}`);