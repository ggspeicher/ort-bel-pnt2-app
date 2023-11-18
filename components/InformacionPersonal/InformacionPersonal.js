import { ListItem } from '@rneui/themed';
import AccordionContent from '../AccordionContent/AccordionContent';
import { StyleSheet } from 'react-native';
import ExpandedContext from '../../context/ExpandedContext';
import { useContext } from 'react';
import { usePerfil } from '../../context/PerfilContext';

export default () => {

    const { expandedIP, setExpandedIP, setExpandedConfiguracion, setExpandedSoporte } = useContext(ExpandedContext);
    const { perfil } = usePerfil();
    const { nombre, telefono, correo, direccion } = perfil

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
                <ListItem.Subtitle style={styles.subtitle}>{ nombre }</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
        <ListItem>
            <ListItem.Content>
                <ListItem.Title style={styles.title}>TELEFONO</ListItem.Title>
                <ListItem.Subtitle style={styles.subtitle}>{ telefono }</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem >
        <ListItem >
            <ListItem.Content>
                <ListItem.Title style={styles.title}>CORREO</ListItem.Title>
                <ListItem.Subtitle style={styles.subtitle}>{ correo }</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
        <ListItem >
            <ListItem.Content>
                <ListItem.Title style={styles.title}>DIRECCION</ListItem.Title>
                <ListItem.Subtitle style={styles.subtitle}> {direccion} </ListItem.Subtitle>
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