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
} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import fontSize from '../../res/FontSize/fontSize';
// import BasicColor from '../../res/Color/BasicColor';
// import blod from '../../res/FontWeight/bold';
import iconSize from '../../res/IconSize/iconSize';
// import BriefImage from './BrifImage';
import BriefInfo from './BriefInfo';

// const WATER_IMAGE = require('../../res/image/star.png');

const _separator = () => {
  return <View style={{ height: 0.5, backgroundColor: '#aaa' }} />;
};

function RankContent(props) {
  return (
    <FlatList
      ItemSeparatorComponent={_separator}
      data={props.rankContent}
      renderItem={({ item }) => (
        <View style={styles.overAll} key={item.key}>
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
            {/* <BriefImage img={item.img} /> */}
          </View>
          <BriefInfo
            title={item.title}
            star={item.star}
            label1={item.label1}
            label2={item.label2}
            label3={item.label3}
            label4={item.label4}
          />
          <Ionicons
            name="md-more"
            size={iconSize.xlargeIcon.size}
            style={styles.rightIcon}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  number: {
    fontSize: fontSize.medium.fontSize,
    margin: 10,
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
  rightIcon: {
    position: 'absolute',
    top: 10,
    right: 13,
  },
});

export default connect(({ rank }) => ({
  rankContent: rank.rankContent,
}))(RankContent);
