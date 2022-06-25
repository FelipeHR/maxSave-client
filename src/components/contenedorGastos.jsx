import React from "react";
import { Text, StyleSheet, View } from "react-native";
import StyledText from "./StyledText.jsx";
import Icon5 from 'react-native-vector-icons/FontAwesome';
import theme from '../theme.js';


const ContenedorGastos = (props) => (
    <View style={{flexDirection: 'row', 
    justifyContent: 'center', 
    alignContent: 'space-between',
    width: '90%',
    borderRadius: 20,
    padding: 10}}>
        <View style= {{alignItems: 'center', justifyContent: 'center', width: 100, 
            backgroundColor : theme.colors.secondary,
            height: 100,
            borderRadius: 50,
        }}>
            <Icon5 name="glass" size={50} color= {theme.colors.primary} />
        </View>
        <View style= {{ flexDirection: 'row', width: '75%', alignItems: 'center', marginLeft: 10}}>
            <View style= {{ justifyContent: 'center', alignItems: 'flex-start' }}>
                <StyledText color = 'fontRed' type = 'title'> {props.title} </StyledText>
                <StyledText color = 'white' type = 'body'> {props.description} </StyledText>
            </View>
            <View style= {{ justifyContent: 'center', alignItems: 'flex-end' }}>
                <StyledText color = 'white' type = 'title'> {props.value} </StyledText>
                <StyledText color = 'white' type = 'body'> {props.date} </StyledText>
            </View>
        </View>
    </View>
)

export default ContenedorGastos