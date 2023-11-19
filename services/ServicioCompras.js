import { getDocs, collection, query, where, orderBy } from 'firebase/firestore';
// getDocs me permite obtener los documentos de una coleccion.
// collection me permite obtener una coleccion.
// query la uso cuando quiero generar una consulta.
// where la uso para agregar filtros a mis consultas.

// ahora me traigo mi referencia de la base de datos
import { db } from '../services/config';

class ServicioCompras {
  static async obtenerCompras(userId) {
    const q = query(
      collection(db, 'usuarios'),
      where('id', '==', userId)
    );

    try {
      const resultadoQuery = await getDocs(q);

      if (!resultadoQuery.empty) {
        const { compras } = resultadoQuery.docs[0].data();
        return compras;
      } else {
        return [];
      }
    } catch (err) {
      console.error('Error al obtener las compras: ', err);
      throw err;
    }
  }
}

export default ServicioCompras;