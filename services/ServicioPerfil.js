import { getDocs, collection, query, where, doc, updateDoc, arrayUnion } from 'firebase/firestore';
// getDocs me permite obtener los documentos de una coleccion.
// collection me permite obtener una coleccion.
// query la uso cuando quiero generar una consulta.
// where la uso para agregar filtros a mis consultas.

// ahora me traigo mi referencia de la base de datos
import { db } from '../services/config';

// ServicioPerfil lo utilizo para obtener info o actualizar algo en firebase sobre el usuario
class ServicioPerfil {

  // al pasarle un id me traera el objeto en firebase,
  // me trae el usuario logeado de firebase
  static async obtenerPerfil(userId) {
    const q = query(collection(db, 'usuarios'), where('id', '==', userId));

    try {
      const resultadoQuery = await getDocs(q);

      if (!resultadoQuery.empty) {
        const perfil = resultadoQuery.docs[0].data();
        return perfil;
      }

    } catch (err) {
      console.error('Error al obtener el perfil: ', err);
    }
  }

  // al pasarle un nuevo objeto con las propiedades usuario la actualiza en firebase
  static async actualizarPerfil(userId, nuevoPerfil) {
    const q = query(collection(db, 'usuarios'), where('id', '==', userId));

    try {
      const resultadoQuery = await getDocs(q);

      if (!resultadoQuery.empty) {
        const perfilRef = doc(db, 'usuarios', resultadoQuery.docs[0].id);
        await updateDoc(perfilRef, nuevoPerfil);
      }
    } catch (err) {
      console.error('Error al actualizar el perfil: ', err);
    }
  }
}

export default ServicioPerfil;