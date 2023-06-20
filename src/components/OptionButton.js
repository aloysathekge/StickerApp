import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function OptionButton({onPress}) {
return (
    <View style={styles.OptionButtonContainer}>
        <Pressable style={styles.OptionButton} onPress={onPress}>
            <MaterialIcons name="add" size={38} color="#25292e" />

        </Pressable>
    
    </View>
)
}

const styles = StyleSheet.create({

    OptionButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: '#ffd33d',
        borderRadius: 42,
        padding: 3,},
    OptionButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: '#fff'

    }
})