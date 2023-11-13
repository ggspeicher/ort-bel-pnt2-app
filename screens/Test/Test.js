import { ListItem } from '@rneui/themed';
import { useState } from 'react';

export default () => {

    const [expanded, setExpanded] = useState(true)

    return (
        <ListItem.Accordion
        content={
            <>
            <ListItem.Content>
                <ListItem.Title>List Accordion</ListItem.Title>
            </ListItem.Content>
            </>
        }
        isExpanded={expanded}
        onPress={() => {setExpanded(!expanded);}}
        >
        <ListItem onPress={() => {console.log('dsa')}} bottomDivider>
            <ListItem.Content>
                <ListItem.Title>asd</ListItem.Title>
                <ListItem.Subtitle>asd</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
        </ListItem.Accordion>
    )
}