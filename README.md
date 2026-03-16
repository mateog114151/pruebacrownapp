# 👑 The Crown App - Angular Modular

## Requisitos
- Node.js 18+
- Angular CLI: `npm install -g @angular/cli`

## Instalación y uso

```bash
# 1. Instalar dependencias
npm install

# 2. Correr el proyecto
ng serve

# 3. Abrir en el navegador
http://localhost:4200
```

## Servicios consumidos (TVMaze API)
1. `GET /shows/3594` → Info del show (Home)
2. `GET /shows/3594/episodes` → Episodios (filtro por temporada)
3. `GET /shows/3594/cast` → Elenco
4. `GET /shows/3594/images` → Galería de imágenes

## Estructura
- `CoreModule` → HttpClient + TvmazeService
- `SharedModule` → Navbar + Footer
- `HomeModule` (lazy) → Servicio 1
- `EpisodesModule` (lazy) → Servicio 2
- `CastModule` (lazy) → Servicio 3
- `GalleryModule` (lazy) → Servicio 4 (imágenes)
