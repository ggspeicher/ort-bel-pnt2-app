import { ListItem } from '@rneui/themed';
import { useState } from 'react';
import AccordionContent from '../AccordionContent/AccordionContent';
import { StyleSheet } from 'react-native';
import { useExpanded } from '../../context/ExpandedContext';

export default () => {

    const { expandedIP, setExpandedIP, setExpandedConfiguracion, setExpandedSoporte } = useExpanded();

    const handlerPress = () => {
        setExpandedIP(!expandedIP)
        setExpandedConfiguracion(false)
        setExpandedSoporte(false)
    }

    return (
        <ListItem.Accordion
        content={
            <AccordionContent principalIcon={"user"} principalText={"Información personal"} />
        }
        onPress={handlerPress}
        isExpanded={expandedIP}
    >
        <ListItem>
            <ListItem.Content>
                <ListItem.Title style={styles.title}>NOMBRE</ListItem.Title>
                <ListItem.Subtitle style={styles.subtitle}>Marcelo Torres</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
        <ListItem>
            <ListItem.Content>
                <ListItem.Title style={styles.title}>TELEFONO</ListItem.Title>
                <ListItem.Subtitle style={styles.subtitle}> 1168247438 </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem >
        <ListItem >
            <ListItem.Content>
                <ListItem.Title style={styles.title}>CORREO</ListItem.Title>
                <ListItem.Subtitle style={styles.subtitle}> marcelotorres@gmail.com </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
        <ListItem >
            <ListItem.Content>
                <ListItem.Title style={styles.title}>DIRECCION</ListItem.Title>
                <ListItem.Subtitle style={styles.subtitle}>Av. Siempre Viva 3447</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
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