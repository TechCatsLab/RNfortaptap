
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
import Styles from '../../res/Styles';

import SingleRecommend from './components/SingleRecommend';
import ClassifyHead from '../../components/ClassifyHead';
import Quality from '../../pages/Discover/Components/Quality';
import PlayerAdmire from './components/PlayerAdmire';
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

  renderHeader = () => {
    return (
      <Header
        leftComponent={
          <Avatar
            small
            rounded
            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
            activeOpacity={0.7}
            avatarStyle={{
              borderWidth: Styles.Height(1),
              borderColor: Colors.white,
            }}
          />
        }
        centerComponent={{
          text: 'TapTap',
          style: { color: Colors.white, fontSize: FontsSize.xlarge },
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
    );
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderHeader() }
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
            message="16759"
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
            gicon="https://img.tapimg.com/market/lcs/d001b4b53e14f4c4498fe11c1564d945_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1"
            gfrom="来自编辑的推荐"
            gtitle="飞跃仙境"
            gimage="https://img.tapimg.com/market/images/50c65228848143de6361cf52808e40b8.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1"
            ginfo="跟随桃乐丝的梦境，找寻未知的自己。"
            grade="8.4"
            message="630"
          />
          <SingleRecommend
            gicon="https://img.tapimg.com/market/lcs/a7cd8cfafcbbed27a4e4eabb15b3179d_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1"
            gfrom="来自编辑的推荐"
            gtitle="Dancing Ball!"
            gimage="https://img.tapimg.com/market/images/6b5ecdb1bfc99f3fdaeea44cb4537446.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1"
            ginfo="独特的玩法与配乐，让你体验一场充满挑战的音乐之旅！"
            grade="8.0"
            message="700"
          />
          <ClassifyHead type="精选专题" />
          <Quality qualityImg={this.props.previous} />
          <ClassifyHead type="玩赏家推荐游戏" />
          <PlayerAdmire admire={this.props.admire} />
          <SingleRecommend
            gicon="https://img.tapimg.com/market/lcs/042cadb5e3b7067b65959df21fa14ee4_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1"
            gfrom="来自编辑的推荐"
            gtitle="我的世界"
            gimage="https://img.tapimg.com/market/images/1426cd57509effc0fe3893647f8299df.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1"
            ginfo="花雨庭世界降临，新增多种网游玩法。"
            grade="8.0"
            message="18623"
          />
          <SingleRecommend
            gicon="https://img.tapimg.com/market/icons/9cda95234d8b48a9422d974333a0ab41_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1"
            gfrom="来自编辑的推荐"
            gtitle="疯狂碰碰车"
            gimage="https://img.tapimg.com/market/images/2368ac36604d6556c9c3c67572f5e805.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1"
            ginfo="重拾童年碰碰车乐趣，百变车型制霸赛场。"
            grade="8.7"
            message="1117"
          />
        </ScrollView>
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
  ...recommend,
}))(RecommendPage);
