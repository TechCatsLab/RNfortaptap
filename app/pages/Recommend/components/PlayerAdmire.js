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
 *     Initial: 2018/01/31        Cheng Jifeng
 */

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import Materiallcons from 'react-native-vector-icons/MaterialIcons';

import FontsSize from '../../../res/Fonts/size';
import FontsWeight from '../../../res/Fonts/weight';
import Colors from '../../../res/Colors';
import Styles from '../../../res/Styles';

function PlayerAdmire(props) {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={props.admire}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Image
            source={{ uri: item.img }}
            style={{
              height: 100,
              width: Styles.ScreenWidth * 0.75,
            }}
          />
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.player}>
            <Image
              source={{ uri: item.avatar }}
              style={{
                width: 20,
                height: 20,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: Colors.gray,
                marginLeft: 10,
                marginRight: 5,
              }}
            />
            <Text style={styles.playerName}>{item.nickname}</Text>
            <Materiallcons
              name="brightness-auto"
              size={11}
              color={Colors.orange}
            />
          </View>
          <Text style={styles.comment}>{item.describe}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: Styles.ScreenWidth * 0.75,
    height: Styles.ScreenWidth * 0.5,
    marginLeft: 15,
    marginVertical: 10,
  },
  title: {
    fontSize: FontsSize.medium,
    fontWeight: FontsWeight.blod,
    color: Colors.black,
    marginLeft: 10,
    marginTop: 10,
  },
  player: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  playerName: {
    fontSize: FontsSize.small,
    marginRight: 5,
  },
  comment: {
    fontSize: FontsSize.tiny,
    marginLeft: 10,
    color: Colors.black,
    marginVertical: 5,
    marginRight: 10,
  },
});

export default PlayerAdmire;
