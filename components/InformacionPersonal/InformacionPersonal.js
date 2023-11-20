import { ListItem } from '@rneui/themed';
import AccordionContent from '../AccordionContent/AccordionContent';
import { StyleSheet } from 'react-native';
import ExpandedContext, { useExpanded } from '../../context/ExpandedContext';
import { useContext } from 'react';
import { View } from 'react-native-web';

export default ({ nombre, telefono, correo, direccion }) => {

    const { expandedSections, setExpandedSections } = useExpanded();

    const open = {
        InformacionPersonal: true,
        InfoCompras: false,
        Configuracion: false,
        Soporte: false
    }

    return (
        <ListItem.Accordion
            content={
                <AccordionContent principalIcon={"user"} principalText={"Información personal"} />
            }
            onPress={() => setExpandedSections(open)}
            isExpanded={expandedSections.InformacionPersonal}
        >
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title style={styles.title}>NOMBRE</ListItem.Title>
                    <ListItem.Subtitle style={styles.subtitle}>{nombre}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title style={styles.title}>TELEFONO</ListItem.Title>
                    <ListItem.Subtitle style={styles.subtitle}>{telefono}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem >
            <ListItem >
                <ListItem.Content>
                    <ListItem.Title style={styles.title}>CORREO</ListItem.Title>
                    <ListItem.Subtitle style={styles.subtitle}>{correo}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem >
                <ListItem.Content>
                    <ListItem.Title style={styles.title}>DIRECCION</ListItem.Title>
                    <ListItem.Subtitle style={styles.subtitle}>{direccion}</ListItem.Subtitle>
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