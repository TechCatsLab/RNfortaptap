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
 *     Initial: 2018/02/03        Cheng Jifeng
 */

import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  Divider,
} from 'react-native-elements';

import Colors from '../../../../../res/Colors';
import Styles from '../../../../../res/Styles';

import Subject from '../../Subject';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowLayout}>
        <Subject
          img="https://img.tapimg.com/market/lcs/e92af0cdfc03c10ea8e9a5a15414119a_360.png?imageView2/1/w/135/q/80/interlace/1/ignore-error/1"
          title="七骑士2"
          num={15}
        />
        <View style={styles.line} />
        <Subject
          img="https://img.tapimg.com/market/lcs/b73357a9b73f7dd27c62ad1093f5d22d_360.png?imageView2/1/w/135/q/80/interlace/1/ignore-error/1"
          title="跳舞的线"
          num={5256}
        />
      </View>
      <Divider style={{ backgroundColor: Colors.gray }} />
      <View style={styles.rowLayout}>
        <Subject
          img="https://img.tapimg.com/market/lcs/b73357a9b73f7dd27c62ad1093f5d22d_360.png?imageView2/1/w/135/q/80/interlace/1/ignore-error/1"
          title="还有这种操作2"
          num={471}
        />
        <View style={styles.line} />
        <Subject
          img="https://img.tapimg.com/market/lcs/0f944ee48f2bf78138504cc98980e508_360.png?imageView2/1/w/135/q/80/interlace/1/ignore-error/1"
          title="旅行青蛙"
          num={6660}
        />
      </View>
      <Divider style={{ backgroundColor: Colors.gray }} />
      <View style={styles.rowLayout}>
        <Subject
          img="https://img.tapimg.com/market/lcs/e8550b005d435bdf8a235a306d0bacd3_360.png?imageView2/1/w/135/q/80/interlace/1/ignore-error/1"
          title="崩坏3"
          num={32235}
        />
        <View style={styles.line} />
        <Subject
          img="https://img.tapimg.com/market/lcs/9fcc8416b506b98393ed373d919da5b4_360.png?imageView2/1/w/135/q/80/interlace/1/ignore-error/1"
          title="纪念碑谷2"
          num={1035}
        />
      </View>
      <Divider style={{ backgroundColor: Colors.gray }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: Styles.Height(15),
  },
  line: {
    height: Styles.Height(60),
    width: Styles.Width(1),
    backgroundColor: Colors.gray1,
    marginTop: Styles.Height(15),
  },
  rowLayout: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
