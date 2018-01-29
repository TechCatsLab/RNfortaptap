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
 *     Initial: 2018/01/27        Cheng Jifeng
 */

import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import iconSize from '../../res/IconSize/iconSize';
import fontSize from '../../res/FontSize/fontSize';

function GradeIcon(props) {
  return (
    <View style={styles.gradeLayout}>
      <Ionicons name="md-star" size={iconSize.tinyIcon.size} color="black" />
      <Text style={styles.gradeText}>{props.grade}</Text>
      <Ionicons name="ios-chatbubbles" size={iconSize.tinyIcon.size} color="black" />
      <Text style={styles.gradeText}>{props.message}</Text>
    </View>
  );
}

export default GradeIcon;

const styles = StyleSheet.create({
  gradeLayout: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  gradeText: {
    fontSize: fontSize.tiny.fontSize,
    margin: 5,
  },
});
