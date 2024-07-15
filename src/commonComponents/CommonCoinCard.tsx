import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../utils/Colors';

const CommonCoinCard = () => {
  const [isSelected,setIsSelected]=useState(false)

    const handleToggle=()=>{
        if (isSelected) {
            setIsSelected(false)
        }
        else{
            setIsSelected(true)
        }
    }
  return (
    <TouchableOpacity onPress={handleToggle} style={styles.container}>
      {
        isSelected ? <LinearGradient
        colors={['#4D55B3', '#A95093']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>+20</Text>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/images/Coin.png')}
        />
      </LinearGradient>
      :
      <View style={styles.unselectedBox}>
        <Text style={styles.buttonText}>+20</Text>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/images/Coin.png')}
        />
      </View>
      }
      <Text style={styles.dayText}>Day1</Text>
    </TouchableOpacity>
  );
};

export default CommonCoinCard;

const styles = StyleSheet.create({
  linearGradient: {
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    width: 42,
    gap: 7,
    marginRight: 5,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
  imageStyle: {
    height: 18,
    width: 18,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayText: {
    color: Colors.gray,
    fontWeight: '600',
    fontSize: 10,
    fontFamily: 'Poppins-SemiBold',
    marginTop:2
  },
  unselectedBox:{
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    width: 42,
    gap: 7,
    marginRight: 5,
    backgroundColor: Colors.secondaryGray,
  }
});
