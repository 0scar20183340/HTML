export default class Inventario {
  constructor(){
    this.productos = [];
  }

  agreagar(producto){
    this.productos.push(producto);
  }

  buscar(codigo){
    for(let i = 0;i < this.productos.length; i++){
      if(this.productos[i].codigo === codigo) return this.productos[i];
    } 
  }


  eliminar(codigo){
    for(let i =0; i < this.productos.length; i++){
      if(this.productos[i].codigo === codigo){
        this.productos = this._eliminarElemento(this.productos, i);
      }
    }

  }

  _eliminarElemento(vec = [], index = 0){
    let modificar = [];

    vec[index] = 0;
    for(let i = 0; i< vec.length; i++){
      if(vec[i] != 0){
        modificar.push(vec[i])
      }
    }
    return modificar;
  }

  listado(){
    if(this.productos.length == 0) return '[]';
    let listTex =  `[`;
    for(let i = 0; i < this.productos.length - 1 ;i++){
      listTex += this.objetoTexto(this.productos[i]) + ", ";
    }
    listTex+= this.objetoTexto(this.productos[this.productos.length-1]);
    listTex += `]`
    return listTex;
  }

  odatsil(){
    if(this.productos.length == 0) return '[]';
    let listadoInv = [];
    for(let i = this.productos.length-1; i >=0; i--){
      listadoInv.push(this.productos[i]);
    }
    let listTex =  `[`;
    for(let i = 0; i < this.productos.length - 1 ;i++){
      listTex += this.objetoTexto(listadoInv[i]) + ", ";
    }
    listTex+= this.objetoTexto(listadoInv[listadoInv.length-1]);
    listTex += `]`
    return listTex;
  }

  objetoTexto(producto ={}){
    return  `{codigo: ${producto.codigo}, nombre: ${producto.nombre}, cantidad: ${producto.cantidad}, costo: ${producto.costo}}`;
  }

}