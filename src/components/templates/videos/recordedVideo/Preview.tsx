import React from 'react';
import {StyleSheet, View} from 'react-native';
import ViewWithButtons from '@organisms/videos/recordedVideo/ViewWithButtons';
import {VideoFile} from 'react-native-vision-camera';
import {AppStackNavigationProp} from '@Types/appNavigation';
import _ from 'lodash';
import moment from 'moment';
import {useAppDispatch} from '@hooks/useAppDispatch';
import {addVideo, uploadVideo} from '@redux/slices/videosSlice';

interface PreviewProps {
  navigation: AppStackNavigationProp<'RecordVideo'>;
  videoFile: VideoFile;
  setVideoFile: (video?: VideoFile) => void;
}

const Preview = (props: PreviewProps): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const onDismiss = () => {
    props.setVideoFile();
    if (props.navigation.canGoBack()) {
      props.navigation.goBack();
    }
  };

  const onRetakeVideo = () => {
    props.setVideoFile();
  };

  const onUpload = () => {
    const extension = _.last(props.videoFile.path?.split('.')) || '';
    const type = `video/${extension}`;
    const videoFile = {
      uri: props.videoFile.path,
      type: type,
      name: `video-${moment().unix()}.${extension}`,
    };
    const formData = new FormData();
    formData.append('file', videoFile);
    // dispatch(uploadVideo(formData)).then(() => {
    //   dispatch(addVideo(videoFile));
    // });
    // console.log('Upload Functionality !!');
  };

  return (
    <View style={styles.container}>
      <ViewWithButtons
        videoFile={props.videoFile}
        onDismiss={onDismiss}
        onRetakeVideo={onRetakeVideo}
        onUpload={onUpload}
      />
    </View>
  );
};

export default Preview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
