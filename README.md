# Agallas · Carta digital

Carta pública de Agallas Barra Cevichera, adaptada a celulares, con categorías y búsqueda. Nombres, descripciones y precios transcritos de las fotos de la carta enviadas el 28 de octubre de 2026: 18 categorías y 174 opciones, incluidos tamaños y variantes de bebidas.

## Publicación

GitHub Pages: https://morenocode.github.io/carta-agallas/
Rama main, carpeta / (root).

## Actualizar platos y bebidas

Editar menu-data.js. Cada opción usa los campos nombre, descripcion y precio. El precio es un número en soles, sin símbolo ni comillas. Mantener la puntuación del archivo. Las instrucciones también están al inicio de menu-data.js.

Al actualizar el archivo de datos en GitHub, la carta interactiva y carta-completa.html leen el mismo contenido. Si el navegador conserva una versión anterior, cambiar la versión ?v= del script menu-data.js en ambas páginas.

Los estilos están en style.css y responsive.css. app.js controla la navegación y búsqueda. carta-original.png es la imagen histórica anterior; los enlaces públicos ahora abren carta-completa.html con los datos vigentes.
