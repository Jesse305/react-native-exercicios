import React from 'react'
import { Text } from 'react-native'
import Default from '../style/Default'

export default props => <Text style={Default.ex}>{props.texto}</Text>

//Dica: Usar array (não esquecer Key) para retornar mais de um componente, ou retornar uma View com os componentes dentro!!!