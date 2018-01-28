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
 *     Initial: 2018/01/28        Cheng Jifeng
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Avatar,
} from 'react-native-elements';

import FontSize from '../../res/FontSize/fontSize';
import blod from '../../res/FontWeight/bold';
import windowSize from '../../res/WindowSize/window';

function SingleDiscoverInfo(props) {
  return (
    <View style={styles.singleInfo}>
      <Avatar
        large
        source={{ uri: props.img }}
        activeOpacity={0.7}
        avatarStyle={{
          borderRadius: 8,
          backgroundColor: 'white',
        }}
      />
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  singleInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 15,
    width: windowSize.ScreenWidth * 0.18,
  },
  text: {
    fontSize: FontSize.tiny.fontSize,
    fontWeight: blod.size,
    marginTop: 5,
    marginBottom: 10,
  },
});

export default SingleDiscoverInfo;
