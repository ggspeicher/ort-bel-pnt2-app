import { getDocs, collection, query, where } from 'firebase/firestore';
// getDocs me permite obtener los documentos de una coleccion.
// collection me permite obtener una coleccion.
// query la uso cuando quiero generar una consulta.
// where la uso para agregar filtros a mis consultas.

// ahora me traigo mi referencia de la base de datos
import { db } from '../services/config';

class ServicioPerfil {

  constructor() {
    this.perfil = null;
  }

  static async obtenerPerfilPorUsuario(userId) {
    if (this.perfil) {
      return this.perfil;
    } else {
      const q = query(collection(db, 'usuarios'), where('id', '==', userId));

      try {
        const resultadoQuery = await getDocs(q);

        if (!resultadoQuery.empty) {
          this.perfil = resultadoQuery.docs[0].data();
          return this.perfil;
        }
      } catch (err) {
        console.error('Error al obtener el perfil: ', err);
        throw err;
      }
    }
  }
}

export default ServicioPerfil;