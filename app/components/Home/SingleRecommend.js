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
import { connect } from 'dva';
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
// import windowSize from '../../res/WindowSize/window';

class SingleRecommend extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <View>
        <ScrollView>
          {
            data.map(item => (
              <Card
                // containerStyle={{
                //   width: windowSize.ScreenWidth,
                //   // margin: 'auto',
                // }}
                key={item.gId}
              >
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

export default connect(state => ({
  data: state.recommend.data,
}))(SingleRecommend);

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

