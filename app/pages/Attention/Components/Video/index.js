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
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

import Colors from '../../../../res/Colors';
import Styles from '../../../../res/Styles';

import Head from '../Head';
import Videos from './Components/Videos';
import Content from '../Content';
import Footer from '../Footer';

export default (props) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={props.matter}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Head
            iconImg={item.iconImg}
            title={item.title}
            from={item.from}
            count={item.count}
          />
          <Videos image={item.video} />
          <Content
            cTitle={item.cTitle}
            cFrom={item.cFrom}
            cAvatar={item.cAvatar}
            cName={item.cName}
          />
          <Text style={styles.briefInfo}>{item.describe}</Text>
          <Footer
            time={item.time}
            likes={item.likes}
          />
        </View>
      )}
    />
    // <View style={styles.container}>
    //   <Head />
    //   <Videos />
    //   <Content />
    //   <Footer />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Styles.Height(600),
    marginTop: Styles.Height(15),
    backgroundColor: Colors.white,
  },
});
