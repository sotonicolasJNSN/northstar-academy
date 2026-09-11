# Checklist de teclado y contraste

## Navegación y controles

| Criterio | Estado | Observación |
|---|---|---|
| Navegación completa usando Tab | Cumple parcialmente | Los enlaces, botones, campos, radios y checkbox son controles nativos o enfocables. Falta probar la secuencia en varios navegadores y revisar que los indicadores del carrusel generados dinámicamente mantengan una experiencia clara. |
| Orden lógico del foco | Cumple | El DOM sigue una secuencia razonable: encabezado, navegación, hero, carrusel, beneficios, formulario, apoyo y footer. |
| Foco visible | Cumple parcialmente | Los inputs muestran un anillo de foco definido. En enlaces, botones y tarjetas se depende más del estilo nativo o de cambios de transformación; conviene establecer `:focus-visible` uniforme. |
| Uso de Enter y Espacio en controles | Cumple | Los botones del carrusel, las tarjetas de interés y el envío son botones nativos. Los enlaces funcionan con Enter y los radios y checkbox son controles HTML. |
| Labels asociados a campos | Cumple | Los campos están contenidos dentro de elementos `label` y tienen nombres accesibles. Los `aria-label` redundantes pueden simplificarse, pero no impiden la asociación. |

## Contraste y lectura

| Criterio | Estado | Observación |
|---|---|---|
| Contraste entre texto y fondo | Cumple parcialmente | El texto principal oscuro sobre fondos claros presenta una buena lectura. Los textos auxiliares y algunos tonos muted deben medirse con una herramienta WCAG para confirmar todos los casos. |
| Contraste de botones | Cumple parcialmente | El botón principal azul con texto blanco tiene una separación visual clara. Los botones secundarios dependen de un borde claro y conviene verificar su contraste en todos los estados. |
| Tamaño y legibilidad del texto | Cumple | Se usa Inter, hay tamaños diferenciados, alturas de línea amplias y el layout adapta títulos y contenido a pantallas pequeñas. |
| Legibilidad de placeholders | Necesita mejora | Los placeholders son útiles, pero su color es más claro que el texto principal. Debe comprobarse que alcancen el contraste necesario o no sean la única forma de entender el campo. |

## Estados de interacción

| Criterio | Estado | Observación |
|---|---|---|
| Estado hover | Cumple | Enlaces, botones, tarjetas de interés y controles del carrusel tienen cambios visuales al pasar el cursor. |
| Estado focus | Cumple parcialmente | Los campos tienen un estado claro. Hace falta normalizar el foco visible de todos los botones, enlaces y tarjetas para asegurar una señal uniforme. |
| Estado de error | Cumple parcialmente | El formulario muestra un panel de error, cambia el título, usa un icono de alerta y resalta campos inválidos. No presenta un texto de error específico asociado a cada campo. |
| Estado de éxito | Cumple | Se muestra un título de éxito, icono y resumen de la información validada. Después se reinicia el formulario porque no existe persistencia. |

## Observaciones finales

La base de accesibilidad es razonable para un sitio estático: se utilizan etiquetas semánticas, controles HTML nativos, textos alternativos y una estructura de foco generalmente lógica. Antes de una publicación real se recomienda ejecutar una prueba manual con teclado, Lighthouse o axe, un medidor de contraste y al menos un lector de pantalla.

Las mejoras prioritarias son: mensajes de error por campo, estilos `:focus-visible` consistentes, contraste medido de textos auxiliares y una semántica ARIA más completa para el carrusel.
