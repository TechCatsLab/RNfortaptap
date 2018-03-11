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
 *     Initial: 2018/03/11        Cheng Jifeng
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import FontsSize from '../../../res/Fonts/size';
import FontsWeight from '../../../res/Fonts/weight';
import Colors from '../../../res/Colors';
import Styles from '../../../res/Styles';

export default (props) => {
  return (
    <View style={styles.layout}>
      <Text
        style={{
          backgroundColor: Colors.primary,
          width: Styles.Width(10),
          height: Styles.Height(50),
          borderRadius: Styles.Width(4),
        }}
      />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: Styles.Width(20),
    marginVertical: Styles.Height(15),
  },
  title: {
    fontSize: FontsSize.large,
    fontWeight: FontsWeight.blod,
    color: Colors.black,
    marginLeft: Styles.Width(15),
  },
});
