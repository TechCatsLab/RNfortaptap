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
  FlatList,
} from 'react-native';
import {
  Avatar,
} from 'react-native-elements';

import FontsSize from '../../../res/Fonts/size';
import FontsWeight from '../../../res/Fonts/weight';
import Colors from '../../../res/Colors';
import Styles from '../../../res/Styles';

export default function GameType(props) {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={props.daily}
      renderItem={({ item }) => (
        <View key={item.key} style={styles.singleInfo}>
          <Avatar
            source={{ uri: item.img }}
            activeOpacity={0.7}
            width={Styles.ScreenWidth * 10/46} // eslint-disable-line
            height={Styles.ScreenWidth * 10/46} // eslint-disable-line
            avatarStyle={{
              borderRadius: 10,
              backgroundColor: Colors.white,
            }}
          />
          <Text style={styles.text}>{item.title}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  singleInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 15,
    width: Styles.ScreenWidth * 10/46, // eslint-disable-line
  },
  text: {
    fontSize: FontsSize.tiny,
    fontWeight: FontsWeight.blod,
    marginTop: 5,
    marginBottom: 10,
  },
});
