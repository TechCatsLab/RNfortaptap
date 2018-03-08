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
  Text,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Avatar,
} from 'react-native-elements';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux';

import FontsSize from '../../res/Fonts/size';
import IconsSize from '../../res/Icons/size';
import Colors from '../../res/Colors';
import Styles from '../../res/Styles';

import Attention from './Components/Attention';
import Video from './Components/Video';
import Hot from './Components/Hot';
import Community from './Components/Community';
import FontsWeight from '../../res/Fonts/weight';

class AttentionPage extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Text
        style={{
          color: Colors.white,
          alignSelf: 'center',
          fontSize: FontsSize.large,
        }}
      >动态
      </Text>
    ),
    headerLeft: (
      <TouchableOpacity style={{ marginLeft: Styles.Width(20) }}>
        <Avatar
          small
          rounded
          source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
          activeOpacity={0.7}
          avatarStyle={{
            borderWidth: 1,
            borderColor: Colors.white,
          }}
        />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity style={{ marginRight: Styles.Width(20) }}>
        <Text
          style={{ fontSize: FontsSize.small, color: Colors.white, fontWeight: FontsWeight.blod }}
        >我的关注
        </Text>
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: Colors.primary,
      borderBottomWidth: 0,
    },
    tabBarLabel: '动态',
    title: '动态',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-heart' : 'ios-heart-outline'}
        size={IconsSize.xlarge}
        style={{ color: tintColor }}
      />
    ),
  }

  render() {
    const types = [
      { title: '关注', component: Attention },
      { title: '视频', component: Video },
      { title: '热点', component: Hot },
      { title: '论坛', component: Community },
    ];
    return (
      <ScrollableTabView
        style={{ flex: 1, backgroundColor: '#FBFCFE' }}
        tabBarBackgroundColor="#ffffff"
        tabBarActiveTextColor={Colors.primary}
        tabBarInactiveTextColor="#000000"
        tabBarUnderlineStyle={{ backgroundColor: Colors.primary, width: Styles.ScreenWidth * 0.25 }}
        renderTabBar={() => <DefaultTabBar />}
      >
        { types.map((v, i) => {
            const Component = v.component;
            return <Component key={i} tabLabel={v.title} navigation={this.props.navigation} />; // eslint-disable-line
        })}
      </ScrollableTabView>
    );
  }
}

export default connect(({ hot, videos }) => ({
  ...hot,
  ...videos,
}))(AttentionPage);
