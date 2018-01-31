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
 *     Initial: 2018/01/30        Cheng Jifeng
 */

import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import {
  Card,
  Rating,
} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';

import Styles from '../../../res/Styles';
import FontsSize from '../../../res/Fonts/size';
import FontsWeight from '../../../res/Fonts/weight';
import IconsSize from '../../../res/Icons/size';
import Colors from '../../../res/Colors';

function Wall(props) {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={props.wall}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.head}>
            <Image
              style={{
                width: 40,
                height: 40,
              }}
              source={{ uri: item.img }}
            />
            <View style={styles.headRight}>
              <Text style={styles.headTitle}>{item.title}</Text>
              <Rating
                fractions={1}
                ratingCount={5}
                imageSize={15}
                readonly={false}
                startingValue={5}
              />
            </View>
          </View>
          <Text style={styles.discuss}>{item.describe}</Text>
          <View style={styles.bottomLeft}>
            <Feather
              name="thumbs-up"
              size={IconsSize.small}
            />
          </View>
          <View style={styles.bottomRight}>
            <Text style={styles.name}>{item.user}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: Styles.ScreenWidth * 36/46, // eslint-disable-line
    height: Styles.ScreenWidth * 18/46, // eslint-disable-line
    marginLeft: 10,
    marginBottom: 20,
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  headTitle: {
    color: 'black',
    fontWeight: FontsWeight.blod,
    marginBottom: 5,
  },
  headRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  discuss: {
    fontSize: FontsSize.small,
    marginLeft: 5,
    marginTop: 5,
    padding: 5,
    color: 'black',
  },
  bottomLeft: {
    position: 'absolute',
    bottom: 15,
    left: 10,
  },
  bottomRight: {
    position: 'absolute',
    bottom: 15,
    right: 10,
  },
  name: {
    color: 'black',
    marginRight: 10,
  },
});

export default Wall;
