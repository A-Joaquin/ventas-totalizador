function calcularprecio(cantidad,precio,estado) {
  let precioNeto;
  let tazaImpuestos=1;
  precioNeto=cantidad*precio;
  if(estado==="CA")
  {
    tazaImpuestos=0.0825;
    precioNeto=precioNeto+(precioNeto*tazaImpuestos);
  }

  return precioNeto;
}
  
  export default calcularprecio;


  