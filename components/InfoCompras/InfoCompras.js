import { ListItem } from '@rneui/themed';
import { useContext } from 'react';
import AccordionContent from '../AccordionContent/AccordionContent';
import { StyleSheet, TouchableOpacity, Linking  } from 'react-native';
import ExpandedContext from '../../context/ExpandedContext.js';
import { useNavigation } from '@react-navigation/core';

export default () => {

    const { expandedSoporte, setExpandedIP, setExpandedConfiguracion, setExpandedSoporte } = useContext(ExpandedContext);

    const handlerPress = () => {
        setExpandedIP(false)
        setExpandedConfiguracion(false)
        setExpandedSoporte(!expandedSoporte)
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
            onPress={handlerPress}
            isExpanded={expandedSoporte}
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