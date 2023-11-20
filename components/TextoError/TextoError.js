import { Text } from 'react-native';

export default ({children}) => {
    return(
        <Text style={{ color: '#c31f2d' }}>{children.toUpperCase()}</Text>
    )
}