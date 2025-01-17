import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, Platform} from 'react-native';
import {Colors} from '../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import GradientButton from './GradientButton';

const CommonRewardCard = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggle = () => {
    if (isSelected) {
      setIsSelected(false);
    } else {
      setIsSelected(true);
    }
  };
  return (
    <View style={styles.cardContainer}>
      <StatusBar backgroundColor={Platform.OS=='android' &&"transparent"} translucent light-theme/>
      <Image
        source={require('../../assets/images/Coin.png')}
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Get reward notifications</Text>
        <Text style={styles.subtitle}>+ 20 Bonus</Text>
      </View>
      <TouchableOpacity onPress={handleToggle} style={styles.buttonContainer}>
        <LinearGradient
          colors={['#5470FE', '#FA67C6']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.gradient}>
          <Text style={styles.buttonText}>{isSelected ? 'Claim' : 'Get'}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.secondaryGray,
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: Colors.white,
    fontSize: 13,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#E91E63',
    fontSize: 12,
    marginTop: 5,
  },
  buttonContainer: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  gradient: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CommonRewardCard;
