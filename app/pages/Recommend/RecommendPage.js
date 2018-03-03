
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Header,
  Avatar,
} from 'react-native-elements';
import { connect } from 'react-redux';

import FontsSize from '../../res/Fonts/size';
import IconsSize from '../../res/Icons/size';
import Colors from '../../res/Colors';
import Styles from '../../res/Styles';

import SingleRecommend from './Components/SingleRecommend';
import ClassifyHead from '../../components/ClassifyHead';
import Quality from '../../pages/Discover/Components/Quality';
import PlayerAdmire from './Components/PlayerAdmire';
import Wall from './Components/Wall';

class RecommendPage extends React.Component {
  static navigationOptions = {
    tabBarVisible: true,
    header: null,
    headerTitle: 'TapTap',
    tabBarLabel: '游戏推荐',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-star' : 'ios-star-outline'}
        size={IconsSize.xlarge}
        style={{ color: tintColor }}
      />
    ),
  }

  renderHeader = () => {
    return (
      <Header
        leftComponent={
          <Avatar
            small
            rounded
            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
            activeOpacity={0.7}
            avatarStyle={{
              borderWidth: Styles.Height(1),
              borderColor: Colors.white,
            }}
          />
        }
        centerComponent={{
          text: 'TapTap',
          style: { color: Colors.white, fontSize: FontsSize.xlarge },
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
    );
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderHeader() }
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scroll}
        >
          <SingleRecommend item={this.props.games[0]} />
          <SingleRecommend item={this.props.games[1]} />
          <ClassifyHead type="安利墙" />
          <Wall wall={this.props.wall} />
          <SingleRecommend item={this.props.games[2]} />
          <SingleRecommend item={this.props.games[3]} />
          <ClassifyHead type="精选专题" />
          <Quality qualityImg={this.props.previous} />
          <ClassifyHead type="玩赏家推荐游戏" />
          <PlayerAdmire admire={this.props.admire} />
          <SingleRecommend item={this.props.games[4]} />
          <SingleRecommend item={this.props.games[5]} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
  },
  scroll: {
    flexGrow: 1,
  },
});

export default connect(({ recommend }) => ({
  ...recommend,
}))(RecommendPage);
