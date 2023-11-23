import { ListItem } from '@rneui/themed';
import { useContext } from 'react';
import AccordionContent from '../AccordionContent/AccordionContent';
import { StyleSheet, TouchableOpacity, Linking  } from 'react-native';
import ExpandedContext, { useExpanded } from '../../context/ExpandedContext.js';
import { useNavigation } from '@react-navigation/core';

export default () => {

    const { expandedSections, setExpandedSections } = useExpanded();

    const open = {
        InformacionPersonal: false,
        InfoCompras: true,
        Configuracion: false,
        Soporte: false
    }

    const navigation = useNavigation()
    
    const abrirCompras = () => {
        navigation.navigate('Compras')
    };

    return (
        <ListItem.Accordion
            content={
                <AccordionContent principalIcon={"shopping-bag"} principalText={"Mis compras"} />
            }
            onPress={() => setExpandedSections(open)}
            isExpanded={expandedSections.InfoCompras}
        >
            <TouchableOpacity
                onPress={abrirCompras}
            >
                <ListItem>
                    <ListItem.Content>
                        <ListItem.Title style={styles.title}>MIS COMPRAS</ListItem.Title>
                        <ListItem.Subtitle style={styles.subtitle}>Visualiza todas tus compras.</ListItem.Subtitle>
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