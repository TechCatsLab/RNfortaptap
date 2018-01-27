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
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import {
  Avatar,
  Rating,
} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

import medium from '../../res/FontSize/medium';
import tiny from '../../res/FontSize/tiny';
import BasicColor from '../../res/Color/BasicColor';
import blod from '../../res/FontWeight/bold';
import BasicIcon from '../../res/IconSize/BasicIcon';

// const WATER_IMAGE = require('../../res/image/star.png');

export default class RankContent extends React.Component {
  _separator = () => {
    return <View style={{ height: 0.5, backgroundColor: '#aaa' }} />;
  }
  render() {
    return (
      <FlatList
        ItemSeparatorComponent={this._separator}
        data={[
          {
            key: 1,
            number: 1,
            img: 'https://img.tapimg.com/market/lcs/0f944ee48f2bf78138504cc98980e508_360.png?imageMogr2/auto-orient/strip',
            title: '旅行青蛙',
            label1: '治愈',
            label2: '日文',
            label3: '经营',
            label4: '可爱',
            star: 4.8,
          },
          {
            key: 2,
            number: 2,
            img: 'https://img.tapimg.com/market/lcs/c118963872d02ccbad2905842e4a6c20_360.png?imageMogr2/auto-orient/strip',
            title: '楚留香（预下载）',
            label1: '画质党',
            label2: '高画质',
            label3: '高自由度',
            label4: '预约',
            star: 4.6,
          },
          {
            key: 3,
            number: 3,
            img: 'https://img.tapimg.com/market/icons/d2cbb82d7eb85b18a0983191edc1f181_360.png?imageMogr2/auto-orient/strip',
            title: '终结者2：审判日',
            label1: '吃鸡',
            label2: '生存',
            label3: '末日',
            label4: '网易',
            star: 3,
          },
          {
            key: 4,
            number: 4,
            img: 'https://img.tapimg.com/market/lcs/53ef45a26814f286fa2efcb338c68ba4_360.png?imageMogr2/auto-orient/strip',
            title: '荒野行动',
            label1: '吃鸡',
            label2: '多人在线',
            label3: '网易',
            label4: '联机',
            star: 4,
          },
          {
            key: 5,
            number: 5,
            img: 'https://img.tapimg.com/market/lcs/57fcfb36a1dedcc3841479bce1e842e1_360.png?imageMogr2/auto-orient/strip',
            title: 'アリス・ギア・アイギス',
            label1: '动漫',
            label2: '日系',
            label3: '美少女',
            label4: '可爱',
            star: 4,
          },
          {
            key: 6,
            number: 6,
            img: 'https://img.tapimg.com/market/lcs/0f944ee48f2bf78138504cc98980e508_360.png?imageMogr2/auto-orient/strip',
            title: '旅行青蛙',
            label1: '治愈',
            label2: '日文',
            label3: '经营',
            label4: '可爱',
            star: 4.8,
          },
          {
            key: 7,
            number: 7,
            img: 'https://img.tapimg.com/market/lcs/c118963872d02ccbad2905842e4a6c20_360.png?imageMogr2/auto-orient/strip',
            title: '楚留香（预下载）',
            label1: '画质党',
            label2: '高画质',
            label3: '高自由度',
            label4: '预约',
            star: 4.6,
          },
          {
            key: 8,
            number: 8,
            img: 'https://img.tapimg.com/market/icons/d2cbb82d7eb85b18a0983191edc1f181_360.png?imageMogr2/auto-orient/strip',
            title: '终结者2：审判日',
            label1: '吃鸡',
            label2: '生存',
            label3: '末日',
            label4: '网易',
            star: 3,
          },
          {
            key: 9,
            number: 9,
            img: 'https://img.tapimg.com/market/lcs/53ef45a26814f286fa2efcb338c68ba4_360.png?imageMogr2/auto-orient/strip',
            title: '荒野行动',
            label1: '吃鸡',
            label2: '多人在线',
            label3: '网易',
            label4: '联机',
            star: 4.4,
          },
          {
            key: 10,
            number: 10,
            img: 'https://img.tapimg.com/market/lcs/57fcfb36a1dedcc3841479bce1e842e1_360.png?imageMogr2/auto-orient/strip',
            title: 'アリス・ギア・アイギス',
            label1: '动漫',
            label2: '日系',
            label3: '美少女',
            label4: '可爱',
            star: 4,
          },
          {
            key: 11,
            number: 11,
            img: 'https://img.tapimg.com/market/lcs/c118963872d02ccbad2905842e4a6c20_360.png?imageMogr2/auto-orient/strip',
            title: '楚留香（预下载）',
            label1: '画质党',
            label2: '高画质',
            label3: '高自由度',
            label4: '预约',
            star: 4.6,
          },
          {
            key: 12,
            number: 12,
            img: 'https://img.tapimg.com/market/icons/d2cbb82d7eb85b18a0983191edc1f181_360.png?imageMogr2/auto-orient/strip',
            title: '终结者2：审判日',
            label1: '吃鸡',
            label2: '生存',
            label3: '末日',
            label4: '网易',
            star: 3,
          },
          {
            key: 13,
            number: 13,
            img: 'https://img.tapimg.com/market/lcs/53ef45a26814f286fa2efcb338c68ba4_360.png?imageMogr2/auto-orient/strip',
            title: '荒野行动',
            label1: '吃鸡',
            label2: '多人在线',
            label3: '网易',
            label4: '联机',
            star: 4.4,
          },
          {
            key: 14,
            number: 14,
            img: 'https://img.tapimg.com/market/lcs/57fcfb36a1dedcc3841479bce1e842e1_360.png?imageMogr2/auto-orient/strip',
            title: 'アリス・ギア・アイギス',
            label1: '动漫',
            label2: '日系',
            label3: '美少女',
            label4: '可爱',
            star: 4,
          },
        ]}
        renderItem={({ item }) => (
          <View style={styles.overAll} key={item.key}>
            {/* <View> */}
            <View style={styles.leftContent}>
              <Text style={styles.number}>{item.number}</Text>
              <Avatar
                medium
                source={{ uri: item.img }}
                activeOpacity={0.7}
                avatarStyle={{
                  borderRadius: 8,
                  backgroundColor: 'white',
                }}
              />
            </View>
            <View style={styles.centerContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Rating
                // showRating
                // type="custom"
                // ratingImage={WATER_IMAGE}
                fractions={1}
                ratingCount={5}
                imageSize={10}
                readonly={false}
                startingValue={item.star}
              />
              <View style={styles.labelLayout}>
                <Text style={styles.label}>{item.label1}</Text>
                <Text style={styles.label}>{item.label2}</Text>
                <Text style={styles.label}>{item.label3}</Text>
                <Text style={styles.label}>{item.label4}</Text>
              </View>
            </View>
            {/* </View> */}
            <Ionicons
              name="md-more"
              size={BasicIcon.size}
              style={styles.rightIcon}
            />
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  number: {
    fontSize: medium.fontSize,
    margin: 10,
  },
  label: {
    borderColor: '#14B9C8',
    color: BasicColor.color,
    fontSize: tiny.fontSize,
    marginRight: 10,
    fontWeight: blod.size,
  },
  labelLayout: {
    flexDirection: 'row',
    marginTop: 3,
  },
  overAll: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 3,
    position: 'relative',
  },
  leftContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 10,
  },
  title: {
    fontSize: medium.fontSize,
    marginBottom: 3,
    fontWeight: blod.size,
  },
  rightIcon: {
    position: 'absolute',
    top: 10,
    right: 13,
  },
});
