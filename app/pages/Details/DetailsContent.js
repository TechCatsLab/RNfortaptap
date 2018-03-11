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
 *     Initial: 2018/03/02        Cheng Jifeng
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  Divider,
  Badge,
} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';

import FontsSize from '../../res/Fonts/size';
import FontsWeight from '../../res/Fonts/weight';
import IconsSize from '../../res/Icons/size';
import Colors from '../../res/Colors';
import Styles from '../../res/Styles';

import ImageShow from './Component/ImageShow';
import Caption from './Component/Caption';

export default class DetailsContent extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.staffwordHead}>开发者的话</Text>
          <Text numberOfLines={3} style={styles.starffwordContent}>その他不具合やお気づきの点がございましたら、お手数ですが 弊社サポートまでお問い合わせください。その他不具合やお気づきの点がございましたら、お手数ですが 弊社サポートまでお問い合わせください。その他不具合やお気づきの点がございましたら、お手数ですが 弊社サポートまでお問い合わせください。その他不具合やお気づきの点がございましたら、お手数ですが 弊社サポートまでお問い合わせください。</Text>
          <TouchableOpacity>
            <Text style={styles.showAll}>显示全部</Text>
          </TouchableOpacity>
        </View>
        <Divider
          style={
            {
              backgroundColor: Colors.gray1,
              height: 1,
              marginTop: Styles.Height(5),
            }
          }
        />
        <View>
          <Text style={styles.staffwordHead}>编辑的话</Text>
          <Text style={styles.starffwordContent}>我的蛙怎么还不回来啊！！！</Text>
        </View>
        <Divider
          style={
            {
              backgroundColor: Colors.gray,
              height: Styles.Height(7),
              marginTop: Styles.Height(10),
            }
          }
        />
        <View style={styles.labelView}>
          <TouchableOpacity style={styles.label}>
            <Badge
              containerStyle={
                {
                  backgroundColor: 'transparent',
                  borderRadius: 5,
                  borderColor: Colors.primary,
                  borderWidth: 1,
                  padding: Styles.Height(10),
                  marginHorizontal: Styles.Width(10),
                }
              }
            >
              <Text style={styles.labelText}>日文</Text>
            </Badge>
            <Badge
              containerStyle={
                {
                  backgroundColor: 'transparent',
                  borderRadius: 5,
                  borderColor: Colors.primary,
                  borderWidth: 1,
                  padding: Styles.Height(10),
                  marginHorizontal: Styles.Width(10),
                }
              }
            >
              <Text style={styles.labelText}>宠物</Text>
            </Badge>
            <Badge
              containerStyle={
                {
                  backgroundColor: 'transparent',
                  borderRadius: 5,
                  borderColor: Colors.primary,
                  borderWidth: 1,
                  padding: Styles.Height(10),
                  marginHorizontal: Styles.Width(10),
                }
              }
            >
              <Text style={styles.labelText}>治愈</Text>
            </Badge>
            <Badge
              containerStyle={
                {
                  backgroundColor: 'transparent',
                  borderRadius: 5,
                  borderColor: Colors.primary,
                  borderWidth: 1,
                  padding: Styles.Height(10),
                  marginHorizontal: Styles.Width(10),
                }
              }
            >
              <Text style={styles.labelText}>养成</Text>
            </Badge>
            <Badge
              containerStyle={
                {
                  backgroundColor: 'transparent',
                  borderRadius: 5,
                  borderColor: Colors.primary,
                  borderWidth: 1,
                  padding: Styles.Height(10),
                  marginHorizontal: Styles.Width(10),
                }
              }
            >
              <Text style={styles.labelText}>+</Text>
            </Badge>
          </TouchableOpacity>
          <Feather
            name="chevron-right"
            size={IconsSize.large}
          />
        </View>
        <ImageShow />
        <View>
          <View style={styles.circleLabel}>
            <Badge
              containerStyle={
                {
                  borderRadius: 50,
                  padding: Styles.Height(10),
                  marginLeft: Styles.Width(25),
                  backgroundColor: Colors.primary,
                  marginVertical: Styles.Height(20),
                }
              }
            >
              <Text style={styles.circleIcon}>日</Text>
            </Badge>
            <Text style={styles.circleText}>日文</Text>
          </View>
        </View>
        <Divider
          style={
            {
              backgroundColor: Colors.gray1,
              height: 1,
            }
          }
        />
        <Caption title="简介" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  staffwordHead: {
    fontSize: FontsSize.medium,
    fontWeight: FontsWeight.blod,
    color: Colors.black,
    padding: Styles.Height(15),
  },
  starffwordContent: {
    fontSize: FontsSize.small,
    fontWeight: FontsWeight.blod,
    color: Colors.gray2,
    marginLeft: Styles.Height(15),
    maxWidth: Styles.ScreenWidth - 12,
  },
  showAll: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    fontSize: FontsSize.medium,
    fontWeight: FontsWeight.blod,
    color: Colors.primary,
    padding: Styles.Height(15),
  },
  labelView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Styles.Height(15),
  },
  label: {
    display: 'flex',
    flexDirection: 'row',
  },
  labelText: {
    color: Colors.primary,
  },
  circleLabel: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleIcon: {
    color: Colors.white,
    fontSize: FontsSize.medium,
    fontWeight: FontsWeight.blod,
  },
  circleText: {
    color: Colors.black,
    marginLeft: Styles.Width(15),
  },
});
