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
  ScrollView,
} from 'react-native';

import BasicIcon from '../../res/IconSize/BasicIcon';
import small from '../../res/FontSize/small';
import medium from '../../res/FontSize/medium';

export default class SingleCommend extends React.Component {
  render() {
    const data = [
      {
        gId: 1,
        gicon: 'https://img.tapimg.com/market/lcs/0f944ee48f2bf78138504cc98980e508_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1',
        gfrom: '来自编辑的推荐',
        gtitle: '旅かえる',
        gimage: 'https://img.tapimg.com/market/images/c04ab999f692a4407d64156e51613834.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1',
        ginfo: '四叶草已经收了三次了，我的蛙怎么还不回家啊……',
      },
      {
        gId: 2,
        gicon: 'https://img.tapimg.com/market/lcs/80730d5b2027f95a316d1bb674b2c48f_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1',
        gfrom: '来自编辑的推荐',
        gtitle: '边境之旅',
        gimage: 'https://img.tapimg.com/market/images/83c8a1d5574c1dc1e9a80b019dc51394.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1',
        ginfo: '山川湖海，唯美旅途。',
      },
      {
        gId: 3,
        gicon: 'https://img.tapimg.com/market/lcs/d001b4b53e14f4c4498fe11c1564d945_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1',
        gfrom: '来自编辑的推荐',
        gtitle: '飞跃仙境',
        gimage: 'https://img.tapimg.com/market/images/50c65228848143de6361cf52808e40b8.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1',
        ginfo: '跟随桃乐丝的梦境，找寻未知的自己。',
      },
      {
        gId: 4,
        gicon: 'https://img.tapimg.com/market/lcs/a7cd8cfafcbbed27a4e4eabb15b3179d_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1',
        gfrom: '来自编辑的推荐',
        gtitle: 'Dancing Ball!',
        gimage: 'https://img.tapimg.com/market/images/6b5ecdb1bfc99f3fdaeea44cb4537446.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1',
        ginfo: '独特的玩法与配乐，让你体验一场充满挑战的音乐之旅！',
      },
    ];
    return (
      <View>
        <ScrollView>
          {
            data.map(item => (
              <Card key={item.gId}>
                <View style={styles.header}>
                  <View style={styles.leftheader}>
                    <Avatar
                      small
                      source={{ uri: item.gicon }}
                      activeOpacity={0.7}
                    />
                    <Text style={styles.from}>{item.gfrom}</Text>
                  </View>
                  <View style={styles.rightheader}>
                    <Ionicons
                      name="md-more"
                      size={BasicIcon.size}
                    />
                  </View>
                </View>
                <View>
                  <Text style={styles.title}>{item.gtitle}</Text>
                </View>
                <Image
                  source={{ uri: item.gimage }}
                  style={{ width: '100%', height: 150 }}
                />
                <Text style={styles.info}>{item.ginfo}</Text>
              </Card>
            ))
          }
        </ScrollView>
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
  },
  from: {
    marginLeft: 10,
    color: '#888888',
    fontSize: small.fontSize,
  },
  rightheader: {
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: medium.fontSize,
    marginBottom: 3,
  },
  info: {
    marginTop: 5,
    fontSize: small.fontSize,
  },
});

