import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {appColors} from '@constants/colors';
import TouchableText from '@atoms/TouchableText';

const {width, height} = Dimensions.get('screen');

interface ButtonsProps {
  onDismiss: () => void;
  onRetakeVideo: () => void;
  onUpload: () => void;
}

const Buttons = (props: ButtonsProps) => {
  return (
    <View style={styles.container}>
      <TouchableText
        text={'Dismiss Video'}
        onPress={props.onDismiss}
        textStyle={styles.recordText}
        touchableStyle={styles.recordTouchableContainer}
      />
      <TouchableText
        text={'Retake the Video'}
        onPress={props.onRetakeVideo}
        textStyle={styles.recordText}
        touchableStyle={styles.recordTouchableContainer}
      />
      <TouchableText
        text={'Upload Video'}
        onPress={props.onUpload}
        textStyle={styles.recordText}
        touchableStyle={styles.recordTouchableContainer}
      />
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 15,
    backgroundColor: appColors.black60,
    width: width,
    height: height * 0.1,
  },
  recordTouchableContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 10,
    borderColor: appColors.white,
    width: width / 3.5,
  },
  recordText: {
    textAlign: 'right',
    fontSize: 10,
    fontWeight: 'bold',
    color: appColors.white,
  },
});