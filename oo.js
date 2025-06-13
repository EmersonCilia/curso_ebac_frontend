
function Automovel (marca) {
    this.marca = marca;
}



function Moto(marca, cilindradas, pneus){
    Automovel.call(this, marca);
    this.cilindradas = cilindradas;
    this.pneus = pneus;
}
function Carro(marca, potencia, pneus){
    Automovel.call(this, marca);
    this.potencia = potencia;
    this.pneus = pneus;
}




const ybr =  new Moto("Yahama", 200, 2)
const corolla = new  Carro("Toyota", 250, 4)
const civic = new Carro("honda", 250, 4)


console.log(ybr,corolla,civic)
