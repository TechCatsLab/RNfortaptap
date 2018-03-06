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
  FlatList,
} from 'react-native';
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

  constructor(props) {
    super(props);
    this.headerTitle = null;
    this.header = null;
    this.state = {
      labels: [
        {
          key: 0,
          content: '新游预约',
        },
        {
          key: 1,
          content: '单机',
        },
        {
          key: 2,
          content: '角色扮演',
        },
        {
          key: 3,
          content: '动作',
        },
        {
          key: 4,
          content: 'MOBA',
        },
        {
          key: 5,
          content: '策略',
        },
        {
          key: 6,
          content: '卡牌',
        },
        {
          key: 7,
          content: '生存',
        },
        {
          key: 8,
          content: '模拟',
        },
        {
          key: 9,
          content: '竞速',
        },
        {
          key: 10,
          content: '益智',
        },
        {
          key: 11,
          content: '二次元',
        },
      ],
    };
  }

  _onScroll(event) {
    let y = event.nativeEvent.contentOffset.y; // eslint-disable-line
    const opacityPercent = y / Styles.Height(220);
    if (y < Styles.Height(220)) {
      this.headerTitle.setNativeProps({
        style: { opacity: opacityPercent },
      });
      this.header.setNativeProps({
        style: { opacity: opacityPercent },
      });
    } else {
      this.header.setNativeProps({
        style: { opacity: 1 },
      });
    }
  }

  render() {
    return (
      <View>
        <View style={[styles.header, { backgroundColor: 'transparent' }]}>
          <TouchableOpacity style={styles.rowHeader}>
            <Feater
              name="arrow-left"
              size={IconsSize.large}
              color="white"
              onPress={() => this.props.navigation.goBack()}
            />
            <Text style={[styles.headerTitle, { color: 'transparent' }]}>标题asdqwrqwrqw</Text>
          </TouchableOpacity>
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
        </View>
        <View
          ref={ref => this.header = ref} // eslint-disable-line
          style={[styles.header, { opacity: 0 }]}
        >
          <TouchableOpacity style={styles.rowHeader}>
            <Feater
              name="arrow-left"
              size={IconsSize.large}
              color="white"
              onPress={() => this.props.navigation.goBack()}
            />
            <Text
              ref={ref => this.headerTitle = ref} // eslint-disable-line
              style={[styles.headerTitle, { opacity: 0 }]}
            >标题asdqwrqwrqw
            </Text>
          </TouchableOpacity>
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
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
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
          }
          data={this.state.labels}
          renderItem={({ item }) => (
            <Text style={styles.list}>{item.content}</Text>
          )}
          onScroll={this._onScroll.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    width: Styles.ScreenWidth,
    height: Styles.Height(110),
    borderBottomWidth: 0,
    backgroundColor: Colors.primary,
  },
  container: {
    height: Styles.Height(330),
    width: Styles.ScreenWidth,
    backgroundColor: Colors.orange,
  },
  rowHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Styles.Width(20),
  },
  headerTitle: {
    fontSize: FontsSize.medium,
    color: Colors.white,
    marginLeft: Styles.Width(15),
  },
  list: {
    height: 100,
  },
});

export default DetailsPage;
