// ============================================================
//  MISIÓN CEREBRO — Configuración de Firebase
//  
//  INSTRUCCIONES:
//  1. Ve a https://console.firebase.google.com
//  2. Selecciona tu proyecto (o crea uno nuevo)
//  3. Ve a: Configuración del proyecto ⚙️ → General → 
//     Tu aplicación → Configuración de SDK
//  4. Copia cada valor y pégalo abajo
//  5. En Firebase Console → Realtime Database → Reglas:
//     Cambia las reglas a las que aparecen al final de este archivo
// ============================================================

const firebaseConfig = {
  apiKey:            "AIzaSyD5j_T93ZygGUvZKpvH_zjXQIO-tZ5-Yhk",
  authDomain:        "mision-cerebro.firebaseapp.com",
  databaseURL:       "https://mision-cerebro-default-rtdb.firebaseio.com",
  projectId:         "mision-cerebro",
  storageBucket:     "mision-cerebro.firebasestorage.app",
  messagingSenderId: "21043303815",
  appId:             "1:21043303815:web:aea860d84247f99d786f22"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

/*
 * REGLAS DE REALTIME DATABASE
 * Firebase Console → Realtime Database → Reglas → pega esto → Publicar:
 *
 * {
 *   "rules": {
 *     ".read": true,
 *     ".write": true
 *   }
 * }
 */
