import { ListItem } from '@rneui/themed';
import { useContext } from 'react';
import AccordionContent from '../AccordionContent/AccordionContent';
import { StyleSheet, TouchableOpacity } from 'react-native';
import ExpandedContext from '../../context/ExpandedContext.js';
import { useNavigation } from '@react-navigation/native';

export default () => {

    const { expandedConfiguracion, setExpandedIP, setExpandedConfiguracion, setExpandedSoporte } = useContext(ExpandedContext);

    const handlerPress = () => {
        setExpandedIP(false)
        setExpandedConfiguracion(!expandedConfiguracion)
        setExpandedSoporte(false)
    }

    const navigation = useNavigation();

    const abrirEditarPerfil = () => {
        navigation.navigate('EditarPerfil')
    };

    return (
        <ListItem.Accordion
            content={
                <AccordionContent principalIcon={"tool"} principalText={"Configuración"} />
            }
            onPress={handlerPress}
            isExpanded={expandedConfiguracion}
        >
            <TouchableOpacity
                onPress={abrirEditarPerfil}
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
