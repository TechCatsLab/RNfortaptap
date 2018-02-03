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
 *     Initial: 2018/02/1        Cheng Jifeng
 */

import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
} from 'react-native';

import FontsSize from '../../../../res/Fonts/size';
import Colors from '../../../../res/Colors';
import Styles from '../../../../res/Styles';

import Attention from './Components/Attention';

export default () => {
  return (
    <FlatList
      data={[
        { key: 0, type: '关注的游戏论坛' },
        { key: 1, type: '官方论坛' },
        { key: 2, type: '热门游戏论坛' },
      ]}
      renderItem={({ item }) => (
        <View
          style={styles.container}
        >
          <Attention
            type={item.type}
          />
          <Text style={styles.more}>进入更多</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: Styles.Height(15),
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Styles.Height(15),
  },
  line: {
    height: Styles.Height(60),
    width: Styles.Width(1),
    backgroundColor: Colors.black,
    marginTop: Styles.Height(15),
  },
  rowLayout: {
    display: 'flex',
    flexDirection: 'row',
  },
  more: {
    color: Colors.primary,
    fontSize: FontsSize.small,
    marginVertical: Styles.Height(15),
    marginLeft: Styles.Width(270),
    marginBottom: Styles.Height(15),
  },
});
