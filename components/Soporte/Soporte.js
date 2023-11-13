import { ListItem } from '@rneui/themed';
import { useContext } from 'react';
import AccordionContent from '../AccordionContent/AccordionContent';
import { StyleSheet, TouchableOpacity } from 'react-native';
import ExpandedContext from '../../context/ExpandedContext.js';

export default () => {

    const { expandedSoporte, setExpandedIP, setExpandedConfiguracion, setExpandedSoporte } = useContext(ExpandedContext);

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