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
 *     Initial: 2018/01/21        Cheng Jifeng
 */

import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  Header,
  Avatar,
  Divider,
} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import IconsSize from '../../res/Icons/size';
import FontsSize from '../../res/Fonts/size';
import Colors from '../../res/Colors';

import Carousel from '../../components/Carousel';
import LabelClassify from '../../components/LabelClassify';
import EspecialView from './Components/EspecialView';

class FindPage extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: '发现',
    title: '发现',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-search' : 'ios-search-outline'}
        size={IconsSize.xlarge}
        style={{ color: tintColor }}
      />
    ),
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Header
            leftComponent={
              <Avatar
                small
                rounded
                source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
                activeOpacity={0.7}
              />
            }
            centerComponent={{
              text: '发现',
              style: {
                color: '#fff',
                fontSize: FontsSize.large,
              },
            }}
            rightComponent={
              <Ionicons
                name="ios-search"
                size={IconsSize.xlarge}
                color="white"
              />
            }
            backgroundColor={Colors.primary}
          />
          <Carousel slides={this.props.slides} />
          <LabelClassify labels={this.props.labels} />
          <Divider />
          <EspecialView content={this.props.content} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flexGrow: 1,
  },
});

export default connect(({ discover }) => ({
  content: discover.content,
  slides: discover.slides,
  labels: discover.labels,
}))(FindPage);
