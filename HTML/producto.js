let id = 1;

export default class Producto {
  constructor(nombre, cantidad, costo) {
    this.codigo = id++;
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.costo = costo;
  }

  obtenerValor() {
    return {
      codigo: this.codigo,
      nombre: this.nombre,
      cantidad: this.cantidad,
      costo: this.costo
    };
  }
}