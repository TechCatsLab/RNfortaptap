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
 *     Initial: 2018/03/02        Cheng Jifeng
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  Divider,
} from 'react-native-elements';

import FontsSize from '../../res/Fonts/size';
import FontsWeight from '../../res/Fonts/weight';
import IconsSize from '../../res/Icons/size';
import Colors from '../../res/Colors';
import Styles from '../../res/Styles';

export default class DetailsContent extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.staffwordHead}>开发者的话</Text>
          <Text style={styles.starffwordContent}>その他不具合やお気づきの点がございましたら、お手数ですが 弊社サポートまでお問い合わせください。その他不具合やお気づきの点がございましたら、お手数ですが 弊社サポートまでお問い合わせください。その他不具合やお気づきの点がございましたら、お手数ですが 弊社サポートまでお問い合わせください。その他不具合やお気づきの点がございましたら、お手数ですが 弊社サポートまでお問い合わせください。</Text>
          <TouchableOpacity>
            <Text style={styles.showAll}>显示全部</Text>
          </TouchableOpacity>
        </View>
        <Divider
          style={{ backgroundColor: Colors.gray2, height: 0.5, marginTop: Styles.Height(10) }}
        />
        <View>
          <Text style={styles.staffwordHead}>编辑的话</Text>
          <Text style={styles.starffwordContent}>我的蛙怎么还不回来啊！！！</Text>
        </View>
        <Divider
          style={{ backgroundColor: Colors.gray, height: Styles.Height(7), marginTop: Styles.Height(10) }}
        />
        <Text>xiangqing</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  staffwordHead: {
    fontSize: FontsSize.medium,
    fontWeight: FontsWeight.blod,
    color: Colors.black,
    padding: Styles.Height(15),
  },
  starffwordContent: {
    width: Styles.Width(620),
    fontSize: FontsSize.small,
    fontWeight: FontsWeight.blod,
    color: Colors.gray2,
    marginLeft: Styles.Height(15),
  },
  showAll: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    fontSize: FontsSize.medium,
    fontWeight: FontsWeight.blod,
    color: Colors.primary,
    padding: Styles.Height(15),
  },
});
