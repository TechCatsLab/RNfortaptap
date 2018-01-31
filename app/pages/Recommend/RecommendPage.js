
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
 *     Initial: 2018/01/21        Cheng Jifeng
 */

import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Header,
  Avatar,
} from 'react-native-elements';
import { connect } from 'react-redux';

import FontsSize from '../../res/Fonts/size';
import IconsSize from '../../res/Icons/size';
import Colors from '../../res/Colors';

import SingleRecommend from './components/SingleRecommend';
import ClassifyHead from '../../components/ClassifyHead';
import Wall from './components/Wall';

class RecommendPage extends React.Component {
  static navigationOptions = {
    header: null,
    headerTitle: 'TapTap',
    tabBarLabel: '游戏推荐',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-star' : 'ios-star-outline'}
        size={IconsSize.xlarge}
        style={{ color: tintColor }}
      />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={
            <Avatar
              small
              rounded
              source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
              activeOpacity={0.7}
            />
          }
          centerComponent={{
            text: 'TapTap',
            style: { color: '#fff', fontSize: FontsSize.xlarge },
          }}
          rightComponent={
            <Ionicons
              name="ios-search"
              size={IconsSize.xlarge}
              color="white"
            />
          }
          backgroundColor={Colors.primary}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scroll}
        >
          <SingleRecommend
            gicon="https://img.tapimg.com/market/lcs/0f944ee48f2bf78138504cc98980e508_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1"
            gfrom="来自编辑的推荐"
            gtitle="旅かえる"
            gimage="https://img.tapimg.com/market/images/c04ab999f692a4407d64156e51613834.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1"
            ginfo="三叶草已经收了四次了，我的蛙怎么还不回家啊……"
            grade="9.8"
            message="999"
          />
          <SingleRecommend
            gicon="https://img.tapimg.com/market/lcs/80730d5b2027f95a316d1bb674b2c48f_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1"
            gfrom="来自编辑的推荐"
            gtitle="边境之旅"
            gimage="https://img.tapimg.com/market/images/83c8a1d5574c1dc1e9a80b019dc51394.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1"
            ginfo="山川湖海，唯美旅途。"
            grade="8.0"
            message="600"
          />
          <ClassifyHead type="安利墙" />
          <Wall wall={this.props.wall} />
          <SingleRecommend
            gicon="https://img.tapimg.com/market/lcs/0f944ee48f2bf78138504cc98980e508_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1"
            gfrom="来自编辑的推荐"
            gtitle="旅かえる"
            gimage="https://img.tapimg.com/market/images/c04ab999f692a4407d64156e51613834.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1"
            ginfo="三叶草已经收了四次了，我的蛙怎么还不回家啊……"
            grade="9.8"
            message="999"
          />
          <SingleRecommend
            gicon="https://img.tapimg.com/market/lcs/80730d5b2027f95a316d1bb674b2c48f_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1"
            gfrom="来自编辑的推荐"
            gtitle="边境之旅"
            gimage="https://img.tapimg.com/market/images/83c8a1d5574c1dc1e9a80b019dc51394.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1"
            ginfo="山川湖海，唯美旅途。"
            grade="8.0"
            message="600"
          />
        </ScrollView>
        {/* <SingleRecommend games={this.props.games} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
  },
  scroll: {
    flexGrow: 1,
  },
});

export default connect(({ recommend }) => ({
  games: recommend.games,
  wall: recommend.wall,
}))(RecommendPage);
