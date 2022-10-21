import Profiles from "/Users/Apple/Downloads/cs47-a2-starter-main/assets/Profiles";
import { StyleSheet, Text, Image, ImageBackground, View, Dimensions } from 'react-native';
import { Icons, Themes } from '/Users/Apple/Downloads/cs47-a2-starter-main/assets/Themes';

export function ProfileImage(){
    return (
        <View style={styles.profileImageContainer}>
            <ImageBackground style = {styles.profileImage}
            imageStyle = {styles.profileImageStyle}
            source={Profiles.mtl.image}>
                <Text style = {styles.userName}>
                {Profiles.mtl.name}
                </Text>
                <Text style = {styles.caption}>
                {Profiles.mtl.caption}
                </Text>
            </ImageBackground>
        </View>
    );
}

export function HottestTake(){
    return (
        <View style={styles.hottestTakeContainer}>
            <Text style = {styles.hottestTakeText}>My hottest take</Text>
            <View style={styles.audioContainer}>
                <Image style = {styles.player}
                source={Icons.player.light}>
                </Image>
                <Image style = {styles.audioWave}
                source={Icons.audioWave.light}>
                </Image>
            </View>
        </View>
    );
}

export default function Body() {
    return (
        <View style={styles.container}>
            <ProfileImage></ProfileImage>
            <HottestTake></HottestTake>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: Themes.light.bg,
        alignItems: 'center',
        width: Dimensions.get('window').width,
        marginBottom: Dimensions.get('window').height / 8,
        paddingHorizontal: Dimensions.get('window').width/8
    },
    profileImageContainer: {
        flex: 3,
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').width * 0.8 * 1.1,
        alignItems: 'center',
        marginBottom: Dimensions.get('window').height / 30,
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
    },
    profileImageStyle: {
        borderRadius: 10,
    },
    hottestTakeContainer: {
        backgroundColor: Themes.light.bgSecondary,
        flex: 1,
        width: Dimensions.get('window').width * 0.8,
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
        borderRadius: 40,
        padding: 20,
    },
    hottestTakeText: {
        flex: 2,
        color: 'black',
        fontSize: 25,
        fontFamily: 'Sydney'
    },
    audioContainer: {
        flex: 4,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
    },
    profileImage: {
        flex: 1,
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').width * 0.8 * 1.1,
    },
    userName: {
        position: 'absolute',
        top: 10,
        left: 10,
        color: 'white',
        fontSize: 32,
        fontFamily: 'Sydney'
    },
    caption: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: 'white',
        fontSize: 18,
        fontFamily: 'Sydney'
    },
    player: {
        flex: 1,
        resizeMode: 'contain',
        width: Dimensions.get('window').width/10,
        height: Dimensions.get('window').height/10,
    },
    audioWave: {
        flex: 2,
        height: Dimensions.get('window').height/20,
    }
  });

