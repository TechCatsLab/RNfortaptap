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
 *     Initial: 2018/02/02        Cheng Jifeng
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import FontsSize from '../../../res/Fonts/size';
import IconsSize from '../../../res/Icons/size';
import Styles from '../../../res/Styles';

export default (props) => {
  return (
    <View style={styles.layout}>
      <Text style={styles.text}>{props.time}</Text>
      <View style={styles.icon}>
        <Feather
          name="thumbs-up"
          size={IconsSize.medium}
        />
        <Text style={styles.count}>{props.likes}</Text>
        <Feather
          name="message-square"
          size={IconsSize.medium}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Styles.Width(20),
  },
  text: {
    fontSize: FontsSize.small,
    marginLeft: Styles.Width(10),
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Styles.Width(20),
  },
  count: {
    marginLeft: Styles.Width(10),
    marginRight: Styles.Width(30),
  },
});
