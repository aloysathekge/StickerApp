import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'



const ImageViewer = ({ placeholderImageSource,selectedImage }) => {
    const imageSource=selectedImage!==null ?{uri:selectedImage} : placeholderImageSource;
    return <View>
        <Image source={imageSource}  style={styles.image}/>

    </View>
    
}


export default ImageViewer

const styles = StyleSheet.create({
    image:{
        width: 320,
        height: 440,
        borderRadius: 18,
    }


})