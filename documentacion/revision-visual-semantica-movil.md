# Revisión visual, semántica y móvil

## Apariencia visual actual

La interfaz utiliza una identidad institucional basada en azul, turquesa, blanco y fondos azulados muy claros. La combinación comunica confianza y educación sin recurrir a una estética excesivamente decorativa. Las tarjetas, bordes suaves y sombras ligeras crean una apariencia cercana a una aplicación web de servicios.

La composición comienza con un encabezado sticky durante el desplazamiento, continúa con un hero de dos columnas y termina con beneficios, formulario, apoyo académico y footer. En el footer, la información se presenta en tres filas verticales: identidad, contacto y valores.

## Jerarquía visual

La jerarquía es clara. El título principal domina el hero, la imagen funciona como punto de entrada visual y las métricas refuerzan la propuesta. En la sección de interés académico, el encabezado introduce el propósito antes del formulario. Los títulos de campos, ayudas y mensajes de resultado permiten distinguir información, entrada y feedback.

Como aspecto mejorable, el formulario es extenso y se muestra completo en una sola vista lógica. La barra de progreso comunica tres etapas, pero no representa pasos interactivos reales.

## Tipografía

Se utiliza Inter desde Google Fonts, con pesos entre 400 y 800. La tipografía es legible y consistente. Los títulos utilizan tamaños grandes y espaciado negativo, mientras que los textos secundarios tienen una altura de línea amplia.

Existe una dependencia externa: si Google Fonts no carga, se utiliza la familia genérica `sans-serif`. Sería conveniente declarar una pila de respaldo más específica para mantener mejor la apariencia sin conexión.

## Colores y contraste

El texto principal es oscuro sobre fondos claros y los botones principales utilizan azul intenso con texto blanco. Los estados de éxito y error tienen fondos diferenciados. Los textos secundarios presentan una lectura adecuada en general.

Los tonos claros utilizados para placeholders y algunos textos auxiliares deben revisarse con una herramienta de contraste antes de publicar. La documentación de accesibilidad detalla esta observación como cumplimiento parcial, no como un error confirmado en todos los casos.

## Espaciado y componentes

El uso de variables CSS, Grid, Flexbox, radios consistentes y espacios definidos produce una interfaz cohesionada. Las tarjetas de interés tienen estados hover y selección. Los campos tienen separación suficiente, fondo diferenciado y foco visible.

El footer está visualmente ordenado en tres bloques verticales. Las métricas, beneficios y tarjetas de apoyo mantienen una escala coherente con el resto de la página.

## Botones, formularios y navegación

Los enlaces de acción del hero llevan a secciones existentes: el formulario y el bloque de apoyo. La navegación superior utiliza anclas internas funcionales. Los botones del carrusel son controles reales y los indicadores se generan dinámicamente.

Los campos están agrupados mediante `fieldset` en las áreas de interés y preferencias. La asociación básica de etiquetas se consigue envolviendo los controles dentro de `label`. El formulario usa validación propia con mensajes de error y éxito.

La validación no muestra un mensaje específico junto a cada campo: resalta el borde y presenta un mensaje general. Esto funciona, pero puede mejorarse para orientar con mayor precisión.

## Uso de HTML semántico

El documento utiliza correctamente `header`, `nav`, `main`, `section`, `article` y `footer`. También utiliza `form`, `fieldset`, `legend`, `label`, `input`, `select`, `textarea` y botones nativos.

El elemento de marca es un `div` con `aria-label`, no un enlace a la página inicial. El carrusel tiene `aria-roledescription` y etiquetas accesibles, pero no declara un rol de región o carrusel completo. Estas son mejoras semánticas posibles, no fallos que impidan el uso básico.

## Comportamiento responsive

- **Escritorio:** hero en dos columnas, panel de información y formulario en dos columnas, tarjetas de beneficios en tres columnas y navegación completa.
- **Tablet:** a partir de 980px el hero, el panel principal y el bloque de apoyo pasan a una columna. La navegación principal se oculta.
- **Celular:** a partir de 640px las métricas, beneficios, campos de dos columnas y tarjetas de interés se apilan. El contacto del encabezado se oculta y el footer permanece vertical.

La estructura tiene límites de ancho y las imágenes mantienen dimensiones definidas. El carrusel y los controles están contenidos dentro de la imagen. Conviene comprobar el resultado en dispositivos reales antes de publicar, especialmente en anchos intermedios y con textos más largos.

## Fortalezas

- Identidad visual consistente.
- Buena separación entre bloques de contenido.
- Uso de controles nativos para teclado y formularios.
- Feedback diferenciado de error y éxito.
- Diseño adaptable mediante Grid, Flexbox y media queries.
- Imágenes con textos alternativos.
- Navegación interna simple y comprensible.

## Problemas y límites encontrados

- El carrusel necesita una semántica ARIA más explícita.
- Los botones dependen en parte del estilo de foco nativo; conviene definir un indicador visual uniforme.
- Los errores se comunican principalmente con borde y un mensaje general, no por campo.
- La barra de progreso visual no controla pasos reales.
- Las imágenes y la fuente dependen de servicios externos.
- No existe persistencia ni envío real de la solicitud.
