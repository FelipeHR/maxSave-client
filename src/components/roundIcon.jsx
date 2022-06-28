import theme from '../theme.js';
import React from 'react';
import { Text, StyleSheet, View } from "react-native";
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import IconIonicons from 'react-native-vector-icons/Ionicons';


const styles = StyleSheet.create({
   defaultCircle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.secondary,
    },
    bigCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    mediumCircle: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    smallCircle: {
        width : 60,
        height: 60,
        borderRadius: 30,
    },


})

export default function roundIcon( {children, size, icon, style, ...props} ) {
    const ionicons = {
        'Comida': 'fast-food',
        'Transporte': 'bus',
        'Ropa': 'shirt',
        'Juegos': 'game-controller'
    }
    const fontAwesome = {
        'Mascota': 'cat',
        'Pasatiempos': 'theater-masks',
        'Cuentas': 'lightbulb',
        'Estudios': 'university',
        'Salud': 'heartbeat'
    }
    const roundStyle = [
        styles.defaultCircle, 
        size == 'small' && styles.smallCircle,
        size == 'medium' && styles.mediumCircle,
        size == 'large' && styles.bigCircle,
    ]
    const iconSize = {
        'small': 30,
        'medium': 40,
        'large': 50
    }
    return (
        <View style={roundStyle}>
            {icon in ionicons ?
                <IconIonicons name={ionicons[icon]} size={iconSize[size]} color={theme.colors.primary} />
            :
                <IconAwesome name={fontAwesome[icon]} size={iconSize[size]} color={theme.colors.primary} />
            }
        </View>
    )
}