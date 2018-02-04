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
 *     Initial: 2018/02/03        Cheng Jifeng
 */

import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  Divider,
} from 'react-native-elements';
import { connect } from 'react-redux';

import Colors from '../../../../../res/Colors';
import Styles from '../../../../../res/Styles';

import Subject from '../../Subject';

class Info extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowLayout}>
          <Subject item={this.props.forum[0]} />
          <View style={styles.line} />
          <Subject item={this.props.forum[1]} />
        </View>
        <Divider style={{ backgroundColor: Colors.gray }} />
        <View style={styles.rowLayout}>
          <Subject item={this.props.forum[2]} />
          <View style={styles.line} />
          <Subject item={this.props.forum[3]} />
        </View>
        <Divider style={{ backgroundColor: Colors.gray }} />
        <View style={styles.rowLayout}>
          <Subject item={this.props.forum[4]} />
          <View style={styles.line} />
          <Subject item={this.props.forum[5]} />
        </View>
        <Divider style={{ backgroundColor: Colors.gray }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: Styles.Height(15),
  },
  line: {
    height: Styles.Height(60),
    width: Styles.Width(1),
    backgroundColor: Colors.gray1,
    marginTop: Styles.Height(15),
  },
  rowLayout: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default connect(({ community }) => ({
  ...community,
}))(Info);
