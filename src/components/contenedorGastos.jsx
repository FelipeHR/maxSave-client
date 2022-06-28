import React from "react";
import { Text, StyleSheet, View } from "react-native";
import StyledText from "./StyledText.jsx";
import RoundIcon from "./roundIcon.jsx";
import theme from '../theme.js';


const ContenedorGastos = (props) => (
    <View style={{     
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 10
    }}>
        <RoundIcon size='medium'  icon={props.title} />
        <View style= {{ flexDirection: 'row', justifyContent: 'center', margin: 5}}>
            <View style= {{ justifyContent: 'center', alignItems: 'flex-start', width: 150}}>
                <StyledText color = 'fontRed' type = 'title'> {props.title} </StyledText>
                <StyledText color = 'white' type = 'body'> {props.description} </StyledText>
            </View>
            <View style= {{ justifyContent: 'center', alignItems: 'flex-end', width: 120 }}>
                <StyledText color = 'white' type = 'title'> {props.value} </StyledText>
                <StyledText color = 'white' type = 'body'> {props.date} </StyledText>
            </View>
        </View>
    </View>
)

export default ContenedorGastos