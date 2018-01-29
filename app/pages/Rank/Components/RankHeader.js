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

import FontsSize from '../../../res/Fonts/size';

export default class RankHeader extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <View>
          <View style={styles.allRankType}>
            <Text style={styles.textRank}>下载榜</Text>
            <Text style={styles.textRank}>|</Text>
            <Text style={styles.textRank}>新品榜</Text>
            <Text style={styles.textRank}>|</Text>
            <Text style={styles.textRank}>预约榜</Text>
            <Text style={styles.textRank}>|</Text>
            <Text style={styles.textRank}>热卖榜</Text>
            <Text style={styles.textRank}>|</Text>
            <Text style={styles.textRank}>热玩榜</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  allRankType: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
  },
  textRank: {
    marginRight: 10,
    fontSize: FontsSize.small,
  },
});