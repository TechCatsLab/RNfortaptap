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
import {
  Avatar,
  Button,
  Divider,
} from 'react-native-elements';
import Feater from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import VideoPlayer from 'react-native-video-controls';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import FontsSize from '../../res/Fonts/size';
import FontsWeight from '../../res/Fonts/weight';
import IconsSize from '../../res/Icons/size';
import Colors from '../../res/Colors';
import Styles from '../../res/Styles';

import DetailsTabBar from './DetailsTabBar';
// import DetailsContent from './DetailsContent';


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
          data={this.state.labels}
          renderItem={({ item }) => (
            <Text style={styles.list}>{item.content}</Text>
          )}
          onScroll={this._onScroll.bind(this)}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={styles.view}>
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
              <View style={styles.briefInfo}>
                <View style={styles.briefLeft}>
                  <Avatar
                    large
                    source={{ uri: "https://img.tapimg.com/market/lcs/0f944ee48f2bf78138504cc98980e508_360.png?imageMogr2/auto-orient/strip" }}
                    avatarStyle={{
                      borderRadius: 15,
                      backgroundColor: Colors.white,
                    }}
                  />
                  <View>
                    <Text style={styles.title}>旅行青蛙</Text>
                    <Text style={styles.manufacturer}>厂商：Hit-Point Co.,Ltd.</Text>
                    <Text style={styles.count}>12454人预约</Text>
                    <Text style={styles.from}> 编辑推荐 </Text>
                  </View>
                </View>
                <View style={styles.briefRight}>
                  <Text style={styles.taptap}>taptap</Text>
                  <Text style={styles.grade}>9.4</Text>
                </View>
              </View>
              <View style={styles.download}>
                <FontAwesome
                  name="heart-o"
                  size={IconsSize.large}
                  color={Colors.primary}
                />
                <Button
                  clear
                  title="已关注"
                  textStyle={{
                    color: Colors.primary,
                    fontSize: FontsSize.tiny,
                  }}
                  buttonStyle={{
                    height: Styles.Height(42),
                    width: Styles.Width(100),
                    borderRadius: 5,
                    backgroundColor: 'transparent',
                    borderColor: Colors.primary,
                    borderWidth: Styles.Height(2),
                  }}
                />
                <Button
                  clear
                  title="下载"
                  textStyle={{
                    color: Colors.white,
                    fontSize: FontsSize.tiny,
                  }}
                  buttonStyle={{
                    height: Styles.Height(42),
                    width: Styles.Width(100),
                    borderRadius: 5,
                    backgroundColor: Colors.primary,
                    borderColor: Colors.primary,
                    borderWidth: Styles.Height(2),
                  }}
                />
              </View>
              <Divider
                style={{
                  backgroundColor: Colors.gray1,
                  width: Styles.ScreenWidth,
                  height: Styles.Height(3),
                  marginTop: Styles.Height(20),
                }}
              />
              <DetailsTabBar />
              {/* <Divider
                style={{
                  backgroundColor: Colors.gray1,
                  width: Styles.ScreenWidth,
                  height: Styles.Height(3),
                  marginTop: Styles.Height(20),
                }}
              /> */}
              {/* <DetailsContent /> */}
            </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.white,
  },
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
  briefInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: Styles.Width(5),
    marginRight: Styles.Width(20),
  },
  briefLeft: {
    display: 'flex',
    flexDirection: 'row',
    padding: Styles.Height(25),
  },
  title: {
    fontSize: FontsSize.medium,
    fontWeight: FontsWeight.blod,
    color: Colors.black,
    marginLeft: Styles.Width(13),
  },
  manufacturer: {
    fontSize: FontsSize.tiny,
    fontWeight: FontsWeight.blod,
    color: Colors.primary,
    marginTop: Styles.Height(8),
    marginLeft: Styles.Width(13),
  },
  from: {
    fontSize: FontsSize.tiny,
    fontWeight: FontsWeight.blod,
    backgroundColor: Colors.primary,
    color: Colors.white,
    borderStyle: 'solid',
    borderRadius: 4,
    width: Styles.Width(80),
    marginTop: Styles.Height(10),
    marginLeft: Styles.Width(13),
  },
  count: {
    fontSize: FontsSize.tiny,
    fontWeight: FontsWeight.blod,
    marginTop: Styles.Height(3),
    marginLeft: Styles.Width(13),
  },
  briefRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: '#00AAAA',
    borderColor: Colors.primary,
    borderWidth: Styles.Width(8),
  },
  taptap: {
    fontSize: FontsSize.mini,
    fontWeight: FontsWeight.blod,
    color: Colors.white,
    marginTop: Styles.Height(3),
  },
  grade: {
    fontSize: FontsSize.large,
    fontWeight: FontsWeight.blod,
    color: Colors.white,
  },
  download: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default DetailsPage;
