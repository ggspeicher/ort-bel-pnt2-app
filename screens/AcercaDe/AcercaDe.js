import { View, Text, StyleSheet, Image } from "react-native"
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { usePerfil } from '../../context/PerfilContext';
import { getDocs, collection, query } from 'firebase/firestore'
import ArticleItem from '../../components/ArticleItem/ArticleItem';
import { db } from '../../services/config'

export default () => {
    const [about, setAbout] = useState([])
    useEffect(() => {
            const obtenerAbout = async () => {
            const q = query(collection(db, 'misc'));

                try {
                    const resultadoQuery = await getDocs(q);
                    let micelaneous = [];

                    if (!resultadoQuery.empty) {
                        resultadoQuery.forEach(doc => {
                            micelaneous.push(doc.data());
                        });
                        console.log(micelaneous);
                        if (micelaneous.length == 1){
                            setAbout(micelaneous[0]);
                        }

                    }
                } catch ( err ) {
                    console.log('Error al traer los El texto miscelaneo: ', err)
                }
            };

            obtenerAbout();
        },[])


  return (
    <ScrollView>
        <ArticleItem article= { about } />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
});