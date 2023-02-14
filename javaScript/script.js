let producto;
let precio;
const iva=0.21;
let resultado;
let resultadoTotal;

producto= prompt('ingrese producto');
precio= parseInt( prompt('ingrese el precio del producto'));
resultado= precio*iva;
resultadoTotal= precio+resultado;

document.write('el producto ', producto,'  con el iva es de ', resultadoTotal)

