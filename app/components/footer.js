import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import { Icons, Themes } from '../../assets/Themes';

export default function Footer() {
    return (
        <View style={styles.container}>
            <ImageBackground style = {styles.image}
            imageStyle = {styles.imageStyle}
            source={Icons.discover.light}>
                <Text style = {styles.text}>
                Discover
                </Text>
            </ImageBackground>
            <ImageBackground style = {styles.image}
            imageStyle = {styles.imageStyle}
            source={Icons.heart.light}>
                <Text style = {styles.text}>
                Matches
                </Text>
            </ImageBackground>
            <ImageBackground style = {styles.image}
            imageStyle = {styles.imageStyle}
            source={Icons.messages.light}>
                <Text style = {styles.text}>
                DMs
                </Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Themes.light.navigation,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: Dimensions.get('window').width/10,
      alignItems: "flex-start",
      width: Dimensions.get('window').width,
      height: '100%'
    },
    text: {
        color: Themes.light.textSecondary,
        fontSize: 18,
        position: 'absolute',
        bottom: -80,
        fontFamily: 'Sydney'
    },
    image: {
        flex: 1,
        alignItems: 'center',
    },
    imageStyle: {
        height: '40%',
        resizeMode: 'contain'
    }
  });

