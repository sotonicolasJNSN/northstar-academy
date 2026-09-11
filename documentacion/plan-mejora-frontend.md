# Plan de mejora frontend

Este plan separa lo que ya existe de las mejoras que todavía no están implementadas.

## Prioridad alta

### 1. Asociar mensajes de error con cada campo

**Estado actual:** existe validación personalizada y se cambia el borde de los campos inválidos.

**Mejora futura:** añadir un mensaje breve junto a cada campo, usar `aria-describedby` y actualizar `aria-invalid` con un texto específico. Esto reduce la carga de interpretación y ayuda a personas que utilizan lectores de pantalla.

### 2. Convertir la barra de progreso en un flujo real

**Estado actual:** la interfaz muestra tres etapas, pero todos los campos están disponibles en una sola vista.

**Mejora futura:** implementar pasos reales con botones Siguiente y Atrás, conservar los datos entre pasos y validar cada grupo antes de avanzar. Esto haría más manejable el formulario en celular.

### 3. Incorporar un destino real para la solicitud

**Estado actual:** el formulario solo procesa información en el navegador y muestra un resumen; no guarda datos.

**Mejora futura:** conectar el formulario a un backend o servicio de formularios con consentimiento, política de privacidad y manejo seguro de datos. También debería mostrarse un identificador de solicitud o confirmación real.

### 4. Fortalecer la semántica del carrusel

**Estado actual:** hay botones, indicadores, textos alternativos y una descripción de carrusel.

**Mejora futura:** añadir una región con nombre, estado de la diapositiva activa, relación entre indicador e imagen y una estrategia clara para anunciar cambios a tecnologías de asistencia.

## Prioridad media

### 5. Definir estilos de foco consistentes

**Estado actual:** los campos tienen un foco visible y algunos controles usan transformaciones en hover y focus.

**Mejora futura:** establecer una regla común para enlaces, botones, tarjetas seleccionables y controles del carrusel mediante `:focus-visible`, con suficiente contraste y sin depender del navegador.

### 6. Revisar contraste de textos auxiliares y placeholders

**Estado actual:** el texto principal y los botones tienen una jerarquía contrastada; algunos textos secundarios son más claros.

**Mejora futura:** medir todos los pares de color con una herramienta WCAG y oscurecer los textos que no alcancen el nivel requerido para su tamaño.

### 7. Mejorar la carga de imágenes

**Estado actual:** el carrusel usa seis imágenes remotas de Unsplash.

**Mejora futura:** usar imágenes optimizadas localmente o un CDN controlado, añadir `loading="lazy"` cuando corresponda y mostrar un estado alternativo si una imagen no carga.

### 8. Hacer coherente el comportamiento de navegación en tablet

**Estado actual:** la navegación principal se oculta a partir de 980px y no se reemplaza por un menú móvil.

**Mejora futura:** añadir un menú compacto accesible para tablet y celular, con botón, estado abierto/cerrado y cierre mediante Escape.

### 9. Añadir prevención de doble envío

**Estado actual:** el botón permite iniciar la validación y luego el formulario se reinicia tras el éxito.

**Mejora futura:** controlar el estado de envío, desactivar temporalmente el botón y mostrar un estado de procesamiento cuando exista un servicio real.

## Prioridad baja

### 10. Crear una guía de estilos mínima

**Estado actual:** existen variables CSS y patrones consistentes, pero no una documentación de tokens.

**Mejora futura:** documentar colores, escalas tipográficas, radios, sombras, estados y espaciados para facilitar el mantenimiento.

### 11. Añadir pruebas automatizadas básicas

**Estado actual:** el proyecto no incluye suite de pruebas.

**Mejora futura:** incorporar pruebas de validación, navegación del carrusel, estados de error y comportamiento de los enlaces internos.

### 12. Preparar contenido institucional verificable

**Estado actual:** el contenido presenta una marca institucional y datos de contacto escritos directamente en el footer.

**Mejora futura:** confirmar que la marca, la dirección, el horario, el correo y el teléfono correspondan a la institución antes de una publicación pública.
