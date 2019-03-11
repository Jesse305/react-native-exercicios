import React from 'react'
import { View, Text } from 'react-native'

import Default from '../style/Default'

function paridade(num){
    return num % 2 == 0 ? 'Par' : 'Impar';
}

export default props => 
<View>
    <Text style={Default.ex}>{ paridade(props.numero) }</Text>
</View>