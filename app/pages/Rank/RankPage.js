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
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux';

import FontsSize from '../../res/Fonts/size';
import IconsSize from '../../res/Icons/size';
import Colors from '../../res/Colors';
import Styles from '../../res/Styles';

import LabelTabBar from './Components/LabelTabBar';
import Order from './Components/Order';
import GenreStyle from './Components/GenreStyle';
import Manufacturer from './Components/Manufacturer';

class RankPage extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Text
        style={{
          color: Colors.white,
          alignSelf: 'center',
          fontSize: FontsSize.large,
        }}
      >排行榜
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
        <Ionicons
          name="ios-search"
          size={IconsSize.xlarge}
          color={Colors.white}
        />
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: Colors.primary,
      borderBottomWidth: 0,
    },
    tabBarLabel: '排行榜',
    title: '排行榜',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-trophy' : 'ios-trophy-outline'}
        size={IconsSize.xlarge}
        style={{ color: tintColor }}
      />
    ),
  }

  constructor() {
    super();
    this.state = {
      tabNames: ['下载榜', '新品榜', '预约榜', '热玩榜', '厂商'],
    };
  }

  render() {
    return (
      <ScrollableTabView
        style={{ flex: 1, backgroundColor: Colors.white }}
        tabBarBackgroundColor={Colors.white}
        renderTabBar={() => (
          <LabelTabBar tabNames={this.state.tabNames} />
        )}
      >
        <GenreStyle content={this.props.content} />
        <GenreStyle content={this.props.content} />
        <Order content={this.props.content} />
        <GenreStyle content={this.props.content} />
        <Manufacturer content={this.props.content} />
      </ScrollableTabView>
    );
  }
}

export default connect(({ rank }) => ({
  ...rank,
}))(RankPage);
