# Grupo Kafer · Desempeño

Front-end (Vite + JavaScript vanilla). Migrado desde un único HTML autónomo a un proyecto Node con dev server y build.

## Requisitos

- Node.js 18+ y npm.

## Estructura

```
index.html        # marcado HTML + fuentes + entry <script type="module">
src/
  main.js         # toda la lógica (importa el CSS y expone la API a window)
  styles.css      # estilos
```

> Los handlers inline del HTML (`onclick="..."`) se resuelven exponiendo las
> funciones en `window` al final de `src/main.js`.

## Comandos

```bash
npm install        # instala dependencias (Vite)
npm run dev        # servidor de desarrollo con recarga en caliente
npm run build      # build de producción en dist/
npm run preview    # sirve el build de producción
```

`npm run dev` imprime la URL local (por defecto http://localhost:5173).
