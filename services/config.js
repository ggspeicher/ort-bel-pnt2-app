import { initializeApp } from 'firebase/app';

// se utiliza para obtener una instancia del servicio Firestore
import { getFirestore } from 'firebase/firestore';

// info para conectarnos a firebase, es decir, poder acceder a la bd
const firebaseConfig = {
  apiKey: 'AIzaSyDG2tG8-u5ppCD3ebI1uUETL-3-fxWl1vw',
  authDomain: 'escabiapp-fbf92.firebaseapp.com',
  projectId: 'escabiapp-fbf92',
  storageBucket: 'escabiapp-fbf92.appspot.com',
  messagingSenderId: '483310629288',
  appId: '1:483310629288:web:1a1e8675199100ee3b6d9d',
};

// inicializa firebase y se pasa la configuracion y devulve una instancia de firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// dejo la referencia disponible para toda la app
export { app, db };
