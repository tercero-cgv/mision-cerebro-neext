# 🧠 Misión Cerebro — Guía de Configuración

Plataforma de desafíos educativos para 5to grado.

---

## 📁 Archivos del proyecto

```
mision-cerebro/
├── index.html          ← Página principal (toda la app)
├── style.css           ← Estilos (tema oscuro/neón)
├── app.js              ← Lógica de la aplicación
├── firebase-config.js  ← ⚠️ DEBES EDITAR ESTE ARCHIVO
└── README.md           ← Esta guía
```

---

## ⚡ PASO 1 — Configurar Firebase

### 1a. Crear proyecto Firebase
1. Ve a https://console.firebase.google.com
2. Clic en **"Agregar proyecto"**
3. Nombre: `mision-cerebro` (o el que prefieras)
4. Desactiva Google Analytics (no es necesario)
5. Clic en **"Crear proyecto"**

### 1b. Agregar una app Web
1. En el panel del proyecto, clic en el ícono **`</>`** (Web)
2. Nombre: `mision-cerebro-web`
3. NO actives Firebase Hosting por ahora
4. Clic en **"Registrar app"**
5. **Copia los valores** de `firebaseConfig` que aparecen

### 1c. Editar firebase-config.js
Abre `firebase-config.js` y reemplaza cada valor:
```javascript
const firebaseConfig = {
  apiKey:            "AIzaSy...",          // ← pega tu apiKey
  authDomain:        "tu-proyecto.firebaseapp.com",
  databaseURL:       "https://tu-proyecto-default-rtdb.firebaseio.com",
  projectId:         "tu-proyecto-id",
  storageBucket:     "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456:web:abc123"
};
```

### 1d. Crear Realtime Database
1. En Firebase Console → menú izquierdo → **"Realtime Database"**
2. Clic en **"Crear base de datos"**
3. Elige ubicación: **"us-central1"** (recomendado)
4. Modo inicial: **"Comenzar en modo de prueba"**
5. Clic en **"Activar"**

### 1e. Configurar reglas de seguridad
1. En Realtime Database → pestaña **"Reglas"**
2. Reemplaza todo con:
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
3. Clic en **"Publicar"**

---

## 🌐 PASO 2 — Publicar en GitHub Pages

### 2a. Crear repositorio
1. Ve a https://github.com/new
2. Nombre: `mision-cerebro`
3. Público ✓
4. Clic en **"Create repository"**

### 2b. Subir archivos
Opción A — Desde GitHub.com:
1. En el repositorio → **"uploading an existing file"**
2. Arrastra los 4 archivos: `index.html`, `style.css`, `app.js`, `firebase-config.js`
3. Clic en **"Commit changes"**

Opción B — Git (si tienes instalado):
```bash
git init
git add .
git commit -m "Misión Cerebro v1"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/mision-cerebro.git
git push -u origin main
```

### 2c. Activar GitHub Pages
1. En el repositorio → **Settings** → **Pages**
2. Source: **"Deploy from a branch"**
3. Branch: **main** / **/ (root)**
4. Clic en **"Save"**
5. Espera 2-3 minutos
6. Tu URL será: `https://TU_USUARIO.github.io/mision-cerebro/`

---

## 🎮 PASO 3 — Primer uso

### Primera vez como Maestro:
1. Entra a la URL de GitHub Pages
2. En el panel del maestro, escribe cualquier contraseña → esa se guarda como la oficial
3. Ve a **DESAFÍOS** → **+ NUEVO DÍA** → crea tu primer desafío
4. Actívalo con el toggle 🟢
5. Ve a **AGENTES** → **+ REGISTRAR** → agrega a tus estudiantes

### Primera vez como Estudiante:
1. El maestro les da la URL
2. Escriben su nombre (exactamente como lo registró el maestro)
3. Escriben su contraseña
4. ¡A jugar!

---

## 🎯 Tipos de desafíos disponibles

| Tipo | Descripción | XP |
|------|-------------|-----|
| 🔐 Escape Room IA | Claude genera acertijos sobre el tema del día | 150 |
| 🔢 Desafío Matemático | 5 operaciones adaptadas | 100 |
| ⚔️ Batalla de Palabras | Preguntas de Español con opciones | 100 |
| 🧩 Acertijos de Lógica | Razonamiento lógico-matemático | 100 |
| 🗺️ Mapa del Tesoro | 4 pistas encadenadas | 120 |
| ⚡ Relámpago | Velocidad · 8 preguntas en 60 segundos | 80 |

---

## 🏆 Trofeos automáticos

Los trofeos se otorgan automáticamente al cumplir condiciones:

| Trofeo | Condición |
|--------|-----------|
| 🥇 Primer desafío | Completar 1 misión |
| 🏆 Triple | Completar 3 misiones |
| 🔐 Escapista | Completar 1 Escape Room |
| 🔢 Matemático | Completar 1 desafío de matemáticas |
| ⚔️ Lingüista | Completar 1 batalla de palabras |
| 💎 500 XP | Acumular 500 XP |
| 👑 1000 XP | Acumular 1000 XP |
| ⭐ Perfecto | Completar cualquier desafío sin errores |

---

## ❓ Preguntas frecuentes

**¿El Escape Room necesita internet?**
Sí, usa la API de Claude para generar acertijos únicos cada vez. Si no hay conexión, usa un escape room predeterminado.

**¿Puedo crear desafíos sin tema específico?**
Sí, simplemente escribe "General" en el campo de tema.

**¿Cómo cambio la contraseña del maestro?**
Panel Maestro → Pestaña CONFIG → Nueva contraseña.

**¿Los estudiantes pueden ver el progreso de otros?**
No, cada estudiante solo ve su propio panel.

**¿Funciona en celular?**
Sí, el diseño es completamente responsive.

---

## 🔧 Personalización

Para cambiar colores, edita las variables en `style.css`:
```css
:root {
  --cyan:   #00f0ff;  /* Color principal */
  --purple: #c840ff;  /* Color maestro */
  --green:  #39ff14;  /* Color éxito */
  --amber:  #ffb800;  /* Color XP/trofeos */
}
```

---

*Creado con ❤️ para tutorías de 5to grado · Puerto Rico*
