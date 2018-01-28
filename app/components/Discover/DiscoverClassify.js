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
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';

import FontSize from '../../res/FontSize/fontSize';
import blod from '../../res/FontWeight/bold';
import basicColor from '../../res/Color/BasicColor';
import SingleDiscoverInfo from './SingleDiscoverInfo';

const _separator = () => {
  return <View style={{ height: 0.5, backgroundColor: '#aaa' }} />;
};

function DiscoverClassify(props) {
  return (
    <FlatList
      ItemSeparatorComponent={_separator}
      data={props.discoverContent}
      renderItem={({ item }) => (
        <View key={item.data}>
          <View style={styles.head}>
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.moreInfo}>查看更多</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <SingleDiscoverInfo img={item.img} title={item.title} />
          </ScrollView>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  head: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  type: {
    fontSize: FontSize.medium.fontSize,
    fontWeight: blod.size,
    marginLeft: 5,
    color: 'black',
  },
  moreInfo: {
    fontSize: FontSize.tiny.fontSize,
    color: basicColor.color,
    marginRight: 10,
  },
});

export default connect(({ discoverInfo }) => ({
  discoverContent: discoverInfo.discoverContent,
}))(DiscoverClassify);
