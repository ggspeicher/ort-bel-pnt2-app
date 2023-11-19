import { getDocs, collection, query, where, doc, updateDoc } from 'firebase/firestore';
// getDocs me permite obtener los documentos de una coleccion.
// collection me permite obtener una coleccion.
// query la uso cuando quiero generar una consulta.
// where la uso para agregar filtros a mis consultas.

// ahora me traigo mi referencia de la base de datos
import { db } from '../services/config';

class ServicioPerfil {

  constructor() {
    this.perfil
  }

  static async obtenerPerfil(userId, esActualizacion = false) {
    const q = query(collection(db, 'usuarios'), where('id', '==', userId));
    //!this.perfil || esActualizacion
    if (true) {
      try {
        const resultadoQuery = await getDocs(q);

        if (!resultadoQuery.empty) {
          const perfil = resultadoQuery.docs[0].data();
          this.perfil = perfil
          return perfil;
        }

      } catch (err) {
        console.error('Error al obtener el perfil: ', err);
      }
    } else {
      return this.perfil
    }
  }

  static async actualizarPerfil(userId, nuevoPerfil) {
    const q = query(collection(db, 'usuarios'), where('id', '==', userId));

    try {
      const resultadoQuery = await getDocs(q);

      if (!resultadoQuery.empty) {
        const perfilRef = doc(db, 'usuarios', resultadoQuery.docs[0].id);
        await updateDoc(perfilRef, nuevoPerfil);
        this.perfil = { ...this.perfil, ...nuevoPerfil };
        return this.perfil
      }
    } catch (err) {
      console.error('Error al actualizar el perfil: ', err);
    }
  }

}

export default ServicioPerfil;