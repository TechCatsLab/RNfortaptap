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
  Rating,
} from 'react-native-elements';

import fontSize from '../../res/FontSize/fontSize';
import BasicColor from '../../res/Color/BasicColor';
import blod from '../../res/FontWeight/bold';

function BrifInfo(props) {
  return (
    <View style={styles.overAll}>
      <View style={styles.centerContent}>
        <Text style={styles.title}>{props.title}</Text>
        <Rating
          fractions={1}
          ratingCount={5}
          imageSize={10}
          readonly={false}
          startingValue={props.star}
        />
        <View style={styles.labelLayout}>
          <Text style={styles.label}>{props.label1}</Text>
          <Text style={styles.label}>{props.label2}</Text>
          <Text style={styles.label}>{props.label3}</Text>
          <Text style={styles.label}>{props.label4}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    borderColor: '#14B9C8',
    color: BasicColor.color,
    fontSize: fontSize.tiny.fontSize,
    marginRight: 10,
    fontWeight: blod.size,
  },
  labelLayout: {
    flexDirection: 'row',
    marginTop: 3,
  },

  overAll: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 3,
    position: 'relative',
  },

  leftContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 10,
  },
  title: {
    fontSize: fontSize.medium.fontSize,
    marginBottom: 3,
    fontWeight: blod.size,
  },
});

export default BrifInfo;
