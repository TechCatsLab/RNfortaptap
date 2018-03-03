/*
 * MIT License
 *
 * Copyright (c) 2018 SmartestEE Co., Ltd..
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * Revision History:
 *     Initial: 2018/03/02        Cheng Jifeng
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Header,
} from 'react-native-elements';
import Feater from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import VideoPlayer from 'react-native-video-controls';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import FontsSize from '../../res/Fonts/size';
import IconsSize from '../../res/Icons/size';
import Colors from '../../res/Colors';
import Styles from '../../res/Styles';

class DetailsPage extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View>
        <Header
          backgroundColor="transparent"
          outerContainerStyles={{
            position: 'absolute',
            zIndex: 1,
            width: Styles.ScreenWidth,
          }}
          leftComponent={
            <TouchableOpacity style={styles.rowHeader}>
              <Feater
                name="arrow-left"
                size={IconsSize.xlarge}
                color="white"
                onPress={() => this.props.navigation.goBack()}
              />
              <Text style={styles.headerTitle}>标题asdqwrqwrqw</Text>
            </TouchableOpacity>
          }
          rightComponent={
            <View style={styles.rowHeader}>
              <FontAwesome
                name="exclamation-circle"
                size={IconsSize.large}
                color="white"
              />
              <Entypo
                name="share"
                size={IconsSize.large}
                color="white"
                style={{
                  marginLeft: 15,
                }}
              />
            </View>
          }
        />
        <View style={styles.container}>
          <VideoPlayer
            source={{ uri: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' }}
            disableVolume
            disableBack
            disableSeekbar
            disableFullscreen
            paused
            resizeMode="cover"
          />
        </View>
        <Text>Details page is coming!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Styles.Height(330),
    width: Styles.ScreenWidth,
    backgroundColor: Colors.orange,
  },
  rowHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: FontsSize.medium,
    color: Colors.white,
    marginLeft: Styles.Width(15),
  },
});

export default DetailsPage;
