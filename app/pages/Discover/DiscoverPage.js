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
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  Avatar,
  Divider,
} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import FontsSize from '../../res/Fonts/size';
import IconsSize from '../../res/Icons/size';
import Colors from '../../res/Colors';
import Styles from '../../res/Styles';

import Carousel from '../../components/Carousel';
import LabelClassify from '../../components/LabelClassify';
import GameType from './Components/GameType';
import ClassifyHead from '../../components/ClassifyHead';
import Quality from './Components/Quality';
import Player from './Components/Player';

class DiscoverPage extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Text
        style={{
          color: Colors.white,
          alignSelf: 'center',
          fontSize: FontsSize.large,
        }}
      >发现
      </Text>
    ),
    headerLeft: (
      <TouchableOpacity style={{ marginLeft: Styles.Width(20) }}>
        <Avatar
          small
          rounded
          source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
          activeOpacity={0.7}
          avatarStyle={{
            borderWidth: 1,
            borderColor: Colors.white,
          }}
        />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity style={{ marginRight: Styles.Width(20) }}>
        <Ionicons
          name="ios-search"
          size={IconsSize.xlarge}
          color={Colors.white}
        />
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: Colors.primary,
      borderBottomWidth: 0,
    },
    // header: null,
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

  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
    };
  }

  _onRefresh() {
    this.setState({
      isRefreshing: true,
    });
    setTimeout(() => {
      this.setState({
        isRefreshing: false,
      });
    }, 1500);
  }

  render() {
    return (
      <View>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh.bind(this)}
              tintColor="#000000"
              title="loading"
              colors={['#000000']}
              progressBackgroundColor="#ffffff"
              enabled
            />
          }
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={styles.container}>
              <Carousel slides={this.props.slides} />
              <LabelClassify labels={this.props.labels} />
              <Divider />
              <View>
                <ClassifyHead type="每日新发现" />
                <GameType data={this.props.daily} />
                <Divider />
                <ClassifyHead type="新游预约" />
                <GameType data={this.props.order} />
                <Divider />
                <Quality qualityImg={this.props.qualityImg} />
                <Divider />
                <ClassifyHead type="推荐玩家" />
                <Player users={this.props.users} />
                <Divider />
                <ClassifyHead type="游戏测试" />
                <GameType data={this.props.beta} />
                <Divider />
                <ClassifyHead type="近期最热" />
                <GameType data={this.props.hot} />
                <Divider />
                <ClassifyHead type="往期专题" />
                <Quality qualityImg={this.props.previous} />
                <Divider />
              </View>
            </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
});

export default connect(({ discover, player }) => ({
  ...discover,
  users: player.users,
}))(DiscoverPage);
