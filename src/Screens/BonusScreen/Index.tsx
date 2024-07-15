import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import {CONSTANTS} from '../../utils/Contstants';
import CommonCoinCard from '../../commonComponents/CommonCoinCard';
import {DAYS} from '../../utils/StaticData';
import GradientButton from '../../commonComponents/GradientButton';
import CommonRewardCard from '../../commonComponents/CommonRewardCard';
import CommonAdvertisementCard from '../../commonComponents/AdvertismentCard';

const bgimage = require('../../../assets/images/BonusBg.png');
const BackIcon = require('../../../assets/images/BackIcon.png');

const BonusScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
      <ImageBackground style={styles.imageStyle} source={bgimage}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.mainView}>
          <TouchableOpacity style={styles.backContainer}>
            <Image style={styles.backhandler} source={BackIcon} />
          </TouchableOpacity>
          <View style={styles.headerView}>
            <Text style={styles.headingText}>{CONSTANTS.BONUS_HEADING}</Text>
            <Text style={styles.subText}>20</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <View style={styles.rewardView}>
        <View style={styles.rewardHeadingContainer}>
          <Text style={styles.headingText}>{CONSTANTS.REWARD_HEADING}</Text>
          <Text style={styles.rewardSubText}>{CONSTANTS.REWARD_SUB_TEXT}</Text>
          <View style={styles.flatListView}>
            {DAYS.map((item, index) => (
              <CommonCoinCard key={index} />
            ))}
          </View>
          <GradientButton
            colors={['#5470FE', '#FA67C6']}
            text="23:59:59"
            isDisable={true}
            onPress={() => console.log('Button Pressed')}
          />
          <View style={styles.biginnerRewardContainer}>
            <Text style={styles.headingText}>
              {CONSTANTS.TASK_FOR_BEGGINER}
            </Text>
            <Text style={styles.rewardSubText}>
              {CONSTANTS.ONLY_ONE_CHANCE}
            </Text>
            {DAYS.map((item, index) => (
              <CommonRewardCard key={index} />
            ))}
            <View style={styles.advertismentContainer}>
              <View style={styles.advertisementSubContainer}>
                <Text style={styles.headingText}>{CONSTANTS.ADVERTISMENT_HEADING}</Text>
                <Text style={styles.rewardSubText}>
                  {CONSTANTS.ADVERTISMENT_SUB_HEADING}{' '}
                  <Text style={styles.bonusText}>
                    {CONSTANTS.PLUS_20_COINS}
                  </Text>
                </Text>
              </View>
              {DAYS.map((item, index) => (
                <CommonAdvertisementCard key={index} />
              ))}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.descriptionCotnainer}>
        <Text style={styles.descriptionHeading}>Description</Text>
        <Text style={[styles.descriptionSubHeading,{marginTop:15}]}>{CONSTANTS.DESCRIPTION1}</Text>
        <Text style={styles.descriptionSubHeading}>{CONSTANTS.DESCRIPTION2}</Text>
        <Text style={styles.descriptionSubHeading}>{CONSTANTS.DESCRIPTION3}</Text>
        <Text style={styles.descriptionSubHeading}>{CONSTANTS.DESCRIPTION4}</Text>
        <Text style={styles.descriptionSubHeading}>{CONSTANTS.DESCRIPTION5}</Text>
      </View>
    </ScrollView>
  );
};

export default BonusScreen;
