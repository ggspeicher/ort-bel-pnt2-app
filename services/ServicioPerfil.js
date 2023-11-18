import { getDocs, collection, query, where } from 'firebase/firestore';
// getDocs me permite obtener los documentos de una coleccion.
// collection me permite obtener una coleccion.
// query la uso cuando quiero generar una consulta.
// where la uso para agregar filtros a mis consultas.

// ahora me traigo mi referencia de la base de datos
import { db } from '../services/config';

class ServicioPerfil {
  static async obtenerPerfilPorUsuario(userId) {
    const q = query(collection(db, 'usuarios'), where('id', '==', userId));

    try {
      const resultadoQuery = await getDocs(q);

      if (!resultadoQuery.empty) {
        return resultadoQuery.docs[0].data();
      } 
    } catch (err) {
      console.error('Error al obtener el perfil: ', err);
      throw err;
    }
  }
}

export default ServicioPerfil;