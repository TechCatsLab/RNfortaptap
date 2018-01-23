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
} from 'react-native';

// const users = [
//   {
//     gfrom: '来自编辑的推荐',
//     gtitle: '旅かえる',
//     aimage: 'https://img.tapimg.com/market/images/c04ab999f692a4407d64156e51613834.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1',
//   },
// ];

export default class SingleCommend extends React.Component {
  render() {
    return (
      <View>
        <Card>
          <View style={styles.header}>
            <View style={styles.leftheader}>
              <Avatar
                small
                source={{ uri: "https://img.tapimg.com/market/lcs/0f944ee48f2bf78138504cc98980e508_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1" }}
                activeOpacity={0.7}
              />
              <Text style={styles.from}>来自编辑的推荐</Text>
            </View>
            <View style={styles.rightheader}>
              <Ionicons
                name="md-more"
                size={26}
              />
            </View>
          </View>
          <View>
            <Text style={styles.title}>旅かえる</Text>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftheader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // borderRadius: 15,
  },
  rightheader: {
    margin: 10,
  },
  from: {
    marginLeft: 10,
    fontSize: 12,
    color: '#888888',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

