# Northstar Academy

## Descripción

Northstar Academy es una página web estática orientada a la presentación de una propuesta educativa y a la recopilación de intereses académicos. Su objetivo es ofrecer una experiencia institucional clara para estudiantes, familias, docentes e investigadores.

## Tecnologías utilizadas

- HTML5 semántico.
- CSS3, con variables, Grid, Flexbox y media queries.
- JavaScript nativo para el carrusel, selección de intereses, validación y mensajes de estado.
- Google Fonts para la tipografía Inter.
- Imágenes remotas de Unsplash para la galería visual.

## Estructura de carpetas

```text
EJEMPLO2/
├── index.html
├── styles.css
├── script.js
├── README.md
└── documentacion/
    ├── brief-producto-audiencia.md
    ├── revision-visual-semantica-movil.md
    ├── plan-mejora-frontend.md
    └── checklist-teclado-contraste.md
```

## Cómo ejecutar el proyecto localmente

No requiere instalación de dependencias ni proceso de compilación. Se puede abrir directamente `index.html` en un navegador, o servir la carpeta con cualquier servidor HTTP local.

Por ejemplo, desde la carpeta del proyecto:

```text
python -m http.server 8000
```

Después se puede visitar `http://localhost:8000`.

## Funciones principales

- Navegación interna hacia programas, experiencia, apoyo y contacto.
- Carrusel de seis imágenes con flechas e indicadores seleccionables.
- Formulario de interés académico con nombre, correo, edad, perfil, ubicación, área de interés, objetivos, motivación, preferencia de experiencia y consentimiento.
- Selección visual de un área de interés.
- Validación personalizada de nombre, correo, objetivos, motivación y consentimiento.
- Estados diferenciados de error y éxito.
- Resumen de los datos introducidos después de una validación correcta.
- Limpieza del formulario tras mostrar el resultado correcto.

El proyecto no incluye backend, base de datos ni envío real de solicitudes. La información se procesa únicamente en el navegador y no se persiste.

## Responsive y accesibilidad

El diseño utiliza Grid y Flexbox para reorganizar el contenido. A partir de 980px la navegación principal se oculta y las áreas principales pasan a una sola columna; a partir de 640px se adapta el formulario, las tarjetas, las métricas y el pie de página para pantallas pequeñas.

El HTML utiliza `header`, `nav`, `main`, `section`, `article`, `form`, `fieldset` y `footer`. Los campos están contenidos en etiquetas `label`, los controles interactivos son botones o enlaces y existen textos alternativos para las imágenes. Persisten oportunidades de mejora relacionadas con el foco visible de botones, mensajes de error por campo y semántica más explícita del carrusel.

## Uso de GitHub

Los archivos revisados no contienen referencias a un repositorio de GitHub, workflows de despliegue ni una configuración de GitHub Pages. Por tanto, el proyecto documentado aquí se considera una versión local y no se atribuye un proceso de versionado o despliegue que no esté presente en sus archivos.

## Sitio desplegado

No se encontró una URL pública de GitHub Pages en los archivos revisados. La versión actual se ejecuta localmente desde `index.html`.

## Entregables

- [Brief de producto y audiencia](documentacion/brief-producto-audiencia.md)
- [Revisión visual, semántica y móvil](documentacion/revision-visual-semantica-movil.md)
- [Plan de mejora frontend](documentacion/plan-mejora-frontend.md)
- [Checklist de teclado y contraste](documentacion/checklist-teclado-contraste.md)
