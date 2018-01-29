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
  FlatList,
} from 'react-native';
import {
  Button,
} from 'react-native-elements';

import BasicColor from '../res/Colors';

export default class LabelClassify extends React.Component {
  render() {
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[
          {
            key: '0',
            content: '热门',
          },
          {
            key: '1',
            content: '美国',
          },
          {
            key: '2',
            content: '日本',
          },
          {
            key: '3',
            content: '韩国',
          },
          {
            key: '4',
            content: '台湾',
          },
          {
            key: '5',
            content: '香港',
          },
          {
            key: '6',
            content: '厂商',
          },
        ]}
        renderItem={({ item }) => (
          <Button
            key={item.key}
            title={item.content}
            buttonStyle={{
              width: 60,
              height: 30,
              marginTop: 10,
              marginBottom: 10,
              borderRadius: 15,
              backgroundColor: BasicColor.color,
            }}
          />
        )}
      />
    );
  }
}
