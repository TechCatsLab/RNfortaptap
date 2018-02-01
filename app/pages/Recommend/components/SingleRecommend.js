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
 *     Initial: 2018/01/23        Cheng Jifeng
 */

import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import FontsSize from '../../../res/Fonts/size';
import IconsSize from '../../../res/Icons/size';
import Colors from '../../../res/Colors';
import Styles from '../../../res/Styles';

import GradeIcon from './GradeIcon';

export default (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Image
            source={{ uri: props.gicon }}
            style={{
              height: IconsSize.large,
              width: IconsSize.large,
            }}
          />
          <Text style={styles.from}>{props.gfrom}</Text>
        </View>
        <View style={styles.rightHeader}>
          <Ionicons
            name="md-more"
            size={IconsSize.xlarge}
          />
        </View>
      </View>
      <Text style={styles.title}>{props.gtitle}</Text>
      <Image
        source={{ uri: props.gimage }}
        style={styles.mainImage}
      />
      <GradeIcon
        style={styles.grade}
        grade={props.grade}
        message={props.message}
      />
      <Text style={styles.info}>{props.ginfo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    marginBottom: Styles.Height(10),
  },
  container: {
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Styles.Width(10),
  },
  from: {
    marginLeft: Styles.Width(10),
    color: '#888888',
    fontSize: FontsSize.small,
  },
  rightHeader: {
    marginVertical: Styles.Height(10),
    marginHorizontal: Styles.Width(10),
  },
  title: {
    fontWeight: 'bold',
    fontSize: FontsSize.medium,
    marginBottom: Styles.Height(3),
    marginLeft: Styles.Width(10),
  },
  info: {
    marginBottom: Styles.Height(10),
    marginLeft: Styles.Width(10),
    fontSize: FontsSize.small,
  },
  grade: {
    position: 'absolute',
    bottom: Styles.Height(150),
    right: Styles.Width(20),
  },
  mainImage: {
    height: Styles.Height(250),
  },
});
