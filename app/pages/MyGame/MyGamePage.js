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
  Text,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header, Avatar } from 'react-native-elements';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';

import FontsSize from '../../res/Fonts/size';
import IconsSize from '../../res/Icons/size';
import Colors from '../../res/Colors';
import Styles from '../../res/Styles';

import Installed from './Components/Installed';
import Played from './Components/Played';
import Collected from './Components/Collected';
import Ordered from './Components/Ordered';

const tabIndexInstalled = 0;
const tabIndexPlayed = 1;
const tabIndexCollected = 2;
const tabIndexOrdered = 3;

export default class MyGamePage extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: '我的游戏',
    title: '我的游戏',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-game-controller-b' : 'ios-game-controller-b-outline'}
        size={IconsSize.xlarge}
        style={{ color: tintColor }}
      />
    ),
  }

  state= {
    tabIndex: tabIndexInstalled,
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
              borderWidth: 1,
              borderColor: Colors.white,
            }}
          />
        }
        centerComponent={{
          text: '我的游戏',
          style: {
            color: '#fff',
            fontSize: FontsSize.large,
          },
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

  renderTabContent = () => {
    const _tab = this.state.tabIndex;

    switch (_tab) {
      case tabIndexInstalled:
        return (
          <Installed />
        );

      case tabIndexPlayed:
        return (
          <Played />
        );

      case tabIndexCollected:
        return (
          <Collected />
        );

      case tabIndexOrdered:
        return (
          <Ordered />
        );

      default:
        return (<View />);
    }
  }

  render() {
    return (
      <View>
        { this.renderHeader() }
        <ScrollView>
          <ScrollableTabView
            tabBarBackgroundColor={Colors.white}
            scrollEnable
            scrollWithoutAnimation
            tabBarUnderlineStyle={{
              backgroundColor: Colors.primary,
              width: Styles.Width(160),
            }}
            tabBarActiveTextColor={Colors.primary}
            tabBarInactiveTextColor={Colors.black}
            locked={false}
            renderTabBar={() => (
              <DefaultTabBar />
            )}
            initialPage={tabIndexInstalled}
            onChangeTab={({ i }) => (
              this.setState({ tabIndex: i })
            )}
          >
            <Text tabLabel="已装">My</Text>
            <Text tabLabel="玩过">favorite</Text>
            <Text tabLabel="收藏">project</Text>
            <Text tabLabel="预约">project</Text>
          </ScrollableTabView>
          { this.renderTabContent() }
        </ScrollView>
      </View>
    );
  }
}
