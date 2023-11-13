import { ListItem } from '@rneui/themed';
import { useState } from 'react';
import AccordionContent from '../AccordionContent/AccordionContent';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useExpanded } from '../../context/ExpandedContext';

export default () => {

    const { expandedConfiguracion, setExpandedIP, setExpandedConfiguracion, setExpandedSoporte } = useExpanded();

    const handlerPress = () => {
        setExpandedIP(false)
        setExpandedConfiguracion(!expandedConfiguracion)
        setExpandedSoporte(false)
    }

    return (
        <ListItem.Accordion
            content={
                <AccordionContent principalIcon={"tool"} principalText={"Configuración"} />
            }
            onPress={handlerPress}
            isExpanded={expandedConfiguracion}
        >
            <TouchableOpacity
                onPress={() => console.log("Se abre pantalla para editar informacion")}
            >
                <ListItem>
                    <ListItem.Content>
                        <ListItem.Title style={styles.title}>EDITAR PERFIL</ListItem.Title>
                        <ListItem.Subtitle style={styles.subtitle}>Edita tu información personal.</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            </TouchableOpacity>
        </ListItem.Accordion>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'grey'
    }
});