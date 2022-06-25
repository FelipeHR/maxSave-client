import theme from '../theme.js';
import React from 'react';


const styles = StyleSheet.create({
    default: {
        fontSize: theme.fontSize.medium,
        fontFamily: theme.fonts.main,
        color: theme.colors.white
    },
    colorPrimary: {
        color: theme.colors.white
    },
    colorSecondary: {
        color: theme.colors.black
    },
    colorTertiary: {
        color: theme.colors.fontRed
    },
    title: {
        fontSize: theme.fontSize.large,
        fontWeight: theme.fontWeight.bold,
    },
    subheading: {
        fontSize: theme.fontSize.medium,
        fontWeight: theme.fontWeight.medium,
    },
    body: {
        fontSize: theme.fontSize.small,
        fontWeight: theme.fontWeight.regular,
    }

})

export default function roundIcon( {children, colorIcon, colorRound, size, icon, style, ...props} ) {
    const textStyle = [
        styles.text, 
        color == 'white' && styles.colorPrimary,
        color == 'black' && styles.colorSecondary,
        color == 'fontRed' && styles.colorTertiary,
        type == 'title' && styles.title,
        type == 'subheading' && styles.subheading,
        type == 'body' && styles.body
    ]
    return (
        <View>
            <Text style = {textStyle} {...props}>
                {children}
            </Text>
        </View>
    )
}