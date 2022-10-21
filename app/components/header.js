import { StyleSheet, Text, Image, View, Platform, Dimensions} from 'react-native';
import { Themes, Icons } from '/Users/Apple/Downloads/cs47-a2-starter-main/assets/Themes';

export default function Header() {
    return (
        <View style={styles.container}>
            <Image style = {styles.imageStyle}
            source={Icons.menu.light}>
            </Image>
            <Text style={styles.textStyle}>
                ensom
            </Text>
            <Image style = {styles.imageStyle}
                source={Icons.sun}>
            </Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Themes.light.bg,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      height: Platform.OS === 'ios' ? 41 : 54,
      paddingHorizontal: 40,
      paddingVertical: 20,
    },
    textStyle: {
        color: Themes.light.text,
        fontSize: 32,
        fontFamily: 'SydneyBold',
    },
    imageStyle: {
        width: Dimensions.get('window').width/10,
        height: '50%',
        resizeMode: 'contain',
    }
  });

