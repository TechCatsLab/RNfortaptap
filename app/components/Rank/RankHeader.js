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
  StyleSheet,
  Text,
} from 'react-native';
// import {
//   Button,
// } from 'react-native-elements';

// import BasicColor from '../../res/Color/BasicColor';
import fontSize from '../../res/FontSize/fontSize';
import ScrollClassify from './ScrollClassify';

export default class RankHeader extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <View>
          <ScrollClassify />
          <View style={styles.allranktype}>
            <Text style={styles.textrank}>下载榜</Text>
            <Text style={styles.textrank}>|</Text>
            <Text style={styles.textrank}>新品榜</Text>
            <Text style={styles.textrank}>|</Text>
            <Text style={styles.textrank}>预约榜</Text>
            <Text style={styles.textrank}>|</Text>
            <Text style={styles.textrank}>热卖榜</Text>
            <Text style={styles.textrank}>|</Text>
            <Text style={styles.textrank}>热玩榜</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headtype: {
    display: 'flex',
    flexDirection: 'row',
  },
  allranktype: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
  },
  textrank: {
    marginRight: 10,
    fontSize: fontSize.small.fontSize,
  },
});
