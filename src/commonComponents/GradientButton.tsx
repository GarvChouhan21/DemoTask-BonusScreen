import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../utils/Colors';

const GradientButton = ({
  colors,
  initialTime = 24 * 60 * 60,
  onPress,
  style,
}: any) => {
  const [disable,setDisable]=useState(false)
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    let timer: any;
    if (timerStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime: any) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timerStarted, timeLeft]);

  const formatTime = (seconds: any) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePress = () => {
    setDisable(true)
    if (!timerStarted) {
      setTimerStarted(true);
    }
    onPress();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.buttonContainer, style]}>
      <LinearGradient
        colors={colors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[styles.gradient , disable && {opacity:0.6}]}>
        <Text style={styles.buttonText}>
          {timerStarted ? formatTime(timeLeft) : 'Claim'}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    marginVertical: 10,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  gradient: {
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GradientButton;
