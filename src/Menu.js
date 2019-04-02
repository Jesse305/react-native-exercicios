import React from "react";
import { createDrawerNavigator } from "react-navigation"
import Paridade from './components/Paridade'
import { Inverter, MegaSena } from './components/Multi'

export default createDrawerNavigator({
    MegaSena: {
        screen: () => <MegaSena numeros={8}/>,
        navigationOptions: {title: "Mega Sena"}
    },
    Inverter: {
        screen: () => <Inverter texto="React Native"/>
    },
    Paridade: {
        screen: () => <Paridade numero={30}/>,
        navigationOptions: {title: "Par & Ímpar"}
    }
}, 
{drawerWidth: 300})