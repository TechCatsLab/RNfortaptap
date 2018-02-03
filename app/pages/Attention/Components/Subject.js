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
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import FontsSize from '../../../res/Fonts/size';
import FontsWeight from '../../../res/Fonts/weight';
import Colors from '../../../res/Colors';
import Styles from '../../../res/Styles';

export default (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image
          style={{
            width: Styles.Width(70),
            height: Styles.Height(70),
          }}
          source={{ uri: props.img }}
        />
        <View style={styles.headRight}>
          <Text style={styles.headTitle}>{props.title}</Text>
          <Text style={styles.from}>主题数：{props.num}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    marginTop: Styles.Height(15),
    width: Styles.Width(300),
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: Styles.Width(30),
    marginBottom: Styles.Height(10),
  },
  headTitle: {
    color: Colors.black,
    fontWeight: FontsWeight.blod,
    marginBottom: 5,
  },
  headRight: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: Styles.Width(10),
    marginBottom: Styles.Height(10),
  },
  from: {
    fontSize: FontsSize.small,
  },
});
