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
 *     Initial: 2018/02/1        Cheng Jifeng
 */

import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import {
  Button,
  Avatar,
} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FontsSize from '../../../res/Fonts/size';
import FontsWeight from '../../../res/Fonts/weight';
import IconsSize from '../../../res/Icons/size';
import Colors from '../../../res/Colors';
import Styles from '../../../res/Styles';

import BriefInfo from '../../../components/BriefInfo';

const _separator = () => {
  return <View style={{ height: 0.5, backgroundColor: Colors.black }} />;
};

class Installed extends React.Component {
  render() {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.container}
        ItemSeparatorComponent={_separator}
        data={this.props.install}
        renderItem={({ item }) => (
          <View style={styles.overAll} key={item.key}>
            <View style={styles.leftContent}>
              <Avatar
                medium
                source={{ uri: item.img }}
                activeOpacity={0.7}
                avatarStyle={{
                  borderRadius: 8,
                  backgroundColor: Colors.white,
                }}
              />
              <BriefInfo
                title={item.title}
                star={item.star}
                ratingSize={10}
              />
            </View>
            <View>
              <Ionicons
                name="md-more"
                size={IconsSize.large}
                style={styles.rightIcon}
              />
              <Button
                title="打开"
                buttonStyle={{
                  height: Styles.Height(20),
                  position: 'absolute',
                  top: Styles.Height(62),
                  right: Styles.Width(1),
                  borderRadius: 5,
                  backgroundColor: Colors.primary,
                }}
                fontSize={FontsSize.small}
              />
            </View>
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: Styles.Height(15),
  },
  number: {
    fontSize: FontsSize.medium,
    fontWeight: FontsWeight.bold,
    marginHorizontal: Styles.Height(10),
    width: Styles.Width(30),
  },
  overAll: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Styles.Height(3),
    position: 'relative',
  },
  leftContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Styles.Width(15),
  },
  rightIcon: {
    position: 'absolute',
    top: Styles.Height(10),
    right: Styles.Width(32),
  },
});

export default connect(({ games }) => ({
  ...games,
}))(Installed);
