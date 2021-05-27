import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const HomeScreen = () => {

    return <View style={styles.viewStyle}>

       <Text>Home Screen</Text>
    </View>
};

const styles = StyleSheet.create({
    loaderStyle: {
        alignSelf: 'center',
        ...StyleSheet.absoluteFillObject
    },
    viewStyle: {
        height: '100%',
        backgroundColor: '#ededed'
    },
    errorStyle: {
        color: 'red',
        margin: 20,
        marginTop: 40,
        textAlign: 'center',
        fontSize: 20
    }
});

// Custom header for the Home Screen
HomeScreen.navigationOptions = ({ navigation }) => ({
    headerLeft: <View></View>,
    headerRight: <TouchableOpacity
      style={{ display: 'flex', height: '100%', justifyContent: 'flex-end', paddingRight: 10, paddingBottom: 10 }}
      onPress={() => {
        navigation.navigate("Info");
      }}>
        <Feather name="info" size={30}/>
      </TouchableOpacity>
});

export default HomeScreen;