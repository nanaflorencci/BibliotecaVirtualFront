import React from "react";
import {Image,StyleSheet,  TouchableOpacity, View } from "react-native";

function  Footer(): React.JSX.Element{
    return(
        <View style={styles.footer}>
   <TouchableOpacity >
  <Image source={require('../assets/images/usuario.png')}style={styles.footerIcon}/>
   </TouchableOpacity >
   <TouchableOpacity >
   <Image source={require('../assets/images/catalogo.png')}style={styles.footerIcon}/>
   </TouchableOpacity>
   <TouchableOpacity>
   <Image source={require('../assets/images/compra.png')}style={styles.footerIcon}/>
   </TouchableOpacity>


        </View>
    );
}

const styles= StyleSheet.create({
    menuList: {
        flexGrow: 1
    },
    footer: {
        backgroundColor: '#C0C0C0',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        marginTop: -5
    },
    footerIcon: {
        width: 50,
        height: 50
    }
})

export default Footer;