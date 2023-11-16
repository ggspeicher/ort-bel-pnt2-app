import { ListItem } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Feather';

export default (params) => {
    return (
        <ListItem.Content style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, justifyContent: 'flex-start' }}>
            <Icon name={params.principalIcon} size={20} color="black" />
            <ListItem.Title>{params.principalText}</ListItem.Title>
        </ListItem.Content>
    )
}