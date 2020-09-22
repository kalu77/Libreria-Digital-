function guardarDatos(){

   informacion = new Object();

   informacion.nom=$('#nombre').val();
   informacion.email=$('#email').val();
   informacion.telefono=$('#telefono').val();
   informacion.direccion=$('#direccion').val();
   informacion.ciudad=$('#ciudad').val();
   informacion.codigo=$('#codigo').val();

   
alert('Gracias por unirse: ' + informacion.nom);
}