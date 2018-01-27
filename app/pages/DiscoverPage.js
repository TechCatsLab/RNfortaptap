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
  StyleSheet,
} from 'react-native';
import {
  Header,
  Avatar,
} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

import iconSize from '../res/IconSize/iconSize';
import fontSize from '../res/FontSize/fontSize';
import BasicColor from '../res/Color/BasicColor';
import Carousel from '../components/Discover/HomeCarousel';
import Line from '../components/Rank/Line';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class FindPage extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: '发现',
    title: '发现',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-search' : 'ios-search-outline'}
        size={iconSize.xlargeIcon.size}
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
          centerComponent={{ text: '发现', style: { color: '#fff', fontSize: fontSize.large.fontSize } }}
          rightComponent={<Ionicons name="ios-search" size={iconSize.xlargeIcon.size} color="white" />}
          backgroundColor={BasicColor.color}
        />
        <Carousel />
        <Line />
        <Text style={{ height: 100 }}>qeqwe</Text>
        <Line />
        <Text style={{ height: 100 }}>qeqwe</Text>
        <Line />
        <Text style={{ height: 100 }}>qeqwe</Text>
        <Text style={{ height: 100 }}>qeqwe</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
