import { ListItem } from '@rneui/themed';
import { Avatar } from '@rneui/themed';
import { useEffect, useState } from 'react';
import AccordionContent from '../AccordionContent/AccordionContent';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useExpanded } from '../../context/ExpandedContext';

export default () => {

    const { expandedSoporte, setExpandedIP, setExpandedConfiguracion, setExpandedSoporte } = useExpanded();

    const handlerPress = () => {
        setExpandedIP(false)
        setExpandedConfiguracion(false)
        setExpandedSoporte(!expandedSoporte)
    }

    return (
        <ListItem.Accordion
            content={
                <AccordionContent principalIcon={"headphones"} principalText={"Soporte"} />
            }
            onPress={handlerPress}
            isExpanded={expandedSoporte}
        >
            <TouchableOpacity
                onPress={() => console.log("Se abra chat con soporte")}
            >
                <ListItem>
                    <ListItem.Content>
                        <ListItem.Title style={styles.title}>CONTACTAR SOPORTE</ListItem.Title>
                        <ListItem.Subtitle style={styles.subtitle}>Comunícate con el equipo de asistencia.</ListItem.Subtitle>
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