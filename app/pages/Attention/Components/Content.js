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
 *     Initial: 2018/02/2        Cheng Jifeng
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
    <View>
      <View style={styles.head}>
        <Text style={styles.title}>{props.cTitle}</Text>
        <View>
          <Text style={styles.label}>{props.cFrom}</Text>
        </View>
      </View>
      <View style={styles.from}>
        <Text style={styles.fromText}>来自</Text>
        <Image
          source={{ uri: props.cAvatar }}
          style={{
            width: Styles.Width(20),
            height: Styles.Width(20),
            borderRadius: 50,
            borderWidth: 1,
            borderColor: Colors.gray,
            marginLeft: Styles.Width(10),
            marginRight: Styles.Height(5),
          }}
        />
        <Text style={styles.fromText}>{props.cName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Styles.Width(10),
    marginTop: Styles.Height(20),
  },
  title: {
    fontSize: FontsSize.medium,
    fontWeight: FontsWeight.blod,
    color: Colors.black,
  },
  label: {
    fontSize: FontsSize.tiny,
    color: Colors.primary,
    marginLeft: Styles.Width(10),
    borderColor: Colors.primary,
    borderWidth: 0.8,
    borderRadius: 3,
    padding: Styles.Width(0.5),
  },
  from: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: Styles.Width(5),
    marginVertical: Styles.Height(10),
  },
  fromText: {
    fontSize: FontsSize.tiny,
    marginLeft: Styles.Width(5),
  },
  briefInfo: {
    fontSize: FontsSize.small,
    padding: Styles.Width(10),
  },
});
