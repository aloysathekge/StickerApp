import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { useState } from 'react';
import ImageViewer from './src/components/ImageViewer';
import Button from './src/components/Button';
import IconButton from './src/components/IconButton';
import OptionButton from './src/components/OptionButton';
import * as ImagePicker from 'expo-image-picker';
import EmojiPicker from './src/components/EmojiPicker';
import EmojiList from './src/components/EmojiList';
import EmojiSticker from './src/components/EmojiSticker';
import { GestureHandlerRootView } from "react-native-gesture-handler";

const PlaceholderImage = require('./assets/images/background-image.png');




export default function App() {
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [showUseOptions,setShowUseOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onReset = () => {
    setShowUseOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };
  
  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowUseOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };
  return (
    <GestureHandlerRootView style={styles.container}>
      
      
        
        <View style={styles.imageContainer}>
          <ImageViewer
              placeholderImageSource={PlaceholderImage} 
              selectedImage={selectedImage} />
          {pickedEmoji !== null ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji} /> : null}
        </View>

        {showUseOptions ? (
          <View style={styles.optionContainer}>
            <View style={styles.optionRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset}/>
              <OptionButton onPress={onAddSticker}/>
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync}/>
            </View>

          </View>
        ) : (
          <View style={styles.footerContainer}>
              <Button  label={"Choose Image"} theme={"primary"} onPress={pickImageAsync}/>
              <Button label={"Use this Image"} onPress={() => setShowUseOptions(true)}/>

          </View>
        )} 
        <EmojiPicker  isVisible={isModalVisible}  onClose={onModalClose}>
          <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}/>
        </EmojiPicker>
          
          
        <StatusBar style="auto" />
    
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  optionContainer: {
    position: 'absolute',
    bottom: 80,
    },
    optionRow: {
      alignItems: 'center',
      flexDirection: 'row',
    },
  

  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    paddingTop: 15,
  },
});
