import React from 'react';
import { StyleSheet, Image } from 'react-native';

const Header = () => {
    return <Image 
        style={styles.image}
        source={require('../../assets/borat.jpeg')}
        resizeMode="contain"
    />
}

const styles = StyleSheet.create({
    image: {
        width: 110,
        height: 80,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

export default Header;