import React from 'react';
import { Text } from 'react-native';

export default ({ amount, currency, style }) => {

    const formattedAmount = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: currency || 'ARS',
        minimumFractionDigits: 2,
        currencyDisplay: 'symbol'
    }).format(amount);

    return (<Text style={[style, { fontSize: 16, color:'#008f39' }]}>{formattedAmount}</Text>);


    const styles = StyleSheet.create({
    });
};