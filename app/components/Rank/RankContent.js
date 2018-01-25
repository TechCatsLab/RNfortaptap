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
 *     Initial: 2018/01/23        Cheng Jifeng
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Avatar,
  Button,
  Rating,
} from 'react-native-elements';

import medium from '../../res/FontSize/medium';
import small from '../../res/FontSize/small';
import BasicColor from '../../res/Color/BasicColor';

export default class RankContent extends React.Component {
  render() {
    return (
      <View style={styles.overAll}>
        <View style={styles.leftContent}>
          <Text style={styles.number}>1</Text>
          <Avatar
            medium
            source={{ uri: "https://img.tapimg.com/market/lcs/0f944ee48f2bf78138504cc98980e508_360.png?imageMogr2/auto-orient/strip" }}
            activeOpacity={0.7}
            avatarStyle={{
              borderRadius: 8,
              backgroundColor: 'white',
            }}
          />
        </View>
        <View>
          <Text style={styles.leftContent}>旅行青蛙</Text>
          {/* <View>
            <Button
              title="治愈"
              buttonStyle={styles.label}
              fontSize={small.fontSize}
              color={BasicColor.color}
              containerViewStyle={styles.label}
            />
            <Button
              title="经营"
              buttonStyle={styles.label}
              fontSize={small.fontSize}
              color={BasicColor.color}
            />
            <Button
              title="日文"
              buttonStyle={styles.label}
              fontSize={small.fontSize}
              color={BasicColor.color}
            />
            <Button
              title="休闲"
              buttonStyle={styles.label}
              fontSize={small.fontSize}
              color={BasicColor.color}
            />
          </View> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  number: {
    fontSize: medium.fontSize,
    margin: 10,
  },
  label: {
    padding: 10,
  },
  overAll: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  leftContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerContent: {
    marginLeft: 100,
  },
});
