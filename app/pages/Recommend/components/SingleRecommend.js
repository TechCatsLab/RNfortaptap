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
  Avatar,
  Card,
} from 'react-native-elements';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';

import FontsSize from '../../../res/Fonts/size';
import IconsSize from '../../../res/Icons/size';

import GradeIcon from './GradeIcon';

export default function SingleRecommend(props) {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <FlatList
        data={props.games}
        renderItem={({ item }) => (
          <Card
            key={item.data}
          >
            <View style={styles.header}>
              <View style={styles.leftHeader}>
                <Avatar
                  tiny
                  source={{ uri: item.gicon }}
                  activeOpacity={0.7}
                  avatarStyle={{
                    backgroundColor: '#fff',
                    borderRadius: 5,
                  }}
                />
                <Text style={styles.from}>{item.gfrom}</Text>
              </View>
              <View style={styles.rightHeader}>
                <Ionicons
                  name="md-more"
                  size={IconsSize.xlarge}
                />
              </View>
            </View>
            <View>
              <Text style={styles.title}>{item.gtitle}</Text>
            </View>
            <View>
              <Image
                source={{ uri: item.gimage }}
                style={styles.mainImage}
              />
              <GradeIcon
                style={styles.grade}
                grade={item.grade}
                message={item.message}
              />
            </View>
            <Text style={styles.info}>{item.ginfo}</Text>
          </Card>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  },
  from: {
    marginLeft: 10,
    color: '#888888',
    fontSize: FontsSize.small,
  },
  rightHeader: {
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: FontsSize.medium,
    marginBottom: 3,
  },
  info: {
    marginTop: 5,
    fontSize: FontsSize.small,
  },
  grade: {
    position: 'absolute',
    bottom: 10,
    right: 20,
  },
  mainImage: {
    width: '100%',
    height: 150,
  },
});
