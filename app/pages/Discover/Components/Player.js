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
 *     Initial: 2018/01/29        Cheng Jifeng
 */

import React from 'react';
import {
  FlatList,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';

import {
  Card,
  Button,
} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Styles from '../../../res/Styles';
import Colors from '../../../res/Colors';
import FontsSize from '../../../res/Fonts/size';
import FontsWeght from '../../../res/Fonts/weight';
import IconsSize from '../../../res/Icons/size';

function Player(props) {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={props.users}
      renderItem={({ item }) => (
        <Card
          containerStyle={{
            width: Styles.ScreenWidth * 12/46, //eslint-disable-line
            height: Styles.ScreenHeight * 18/82, //eslint-disable-line
            borderRadius: 10,
            marginBottom: 25,
            backgroundColor: Colors.white,
          }}
          wrapperStyle={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            style={{
              width: Styles.ScreenWidth * 6/46, //eslint-disable-line
              height: Styles.ScreenWidth * 6/46, //eslint-disable-line
              borderRadius: 50,
              borderWidth: 2,
              borderColor: 'white',
            }}
            source={{ uri: item.img }}
          />
          <Text style={styles.nickname}>{item.name}</Text>
          <View style={styles.describe}>
            <MaterialIcons
              name="brightness-auto"
              size={11}
              color={Colors.primary}
            />
            <Text style={styles.tag}>{item.tag}</Text>
          </View>
          <Button
            title="关注"
            buttonStyle={{
              width: Styles.ScreenWidth * 8/46, //eslint-disable-line
              height: Styles.ScreenWidth * 2.5/46, //eslint-disable-line
              backgroundColor: Colors.primary,
              borderRadius: 10,
            }}
          />
        </Card>
      )}
    />
  );
}

const styles = StyleSheet.create({
  nickname: {
    fontSize: FontsSize.small,
    fontWeight: FontsWeght.blod,
    marginTop: 3,
  },
  describe: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tag: {
    fontSize: FontsSize.tiny,
    marginBottom: 3,
  },
});

export default Player;
