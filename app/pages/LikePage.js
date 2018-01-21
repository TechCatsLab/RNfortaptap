/*
 * Revision History:
 *     Initial: 2018/01/21        Cheng Jifeng
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class LikePage extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'like',
  }
  render() {
    return (
      <View>
        <Text>
        like page
        </Text>
      </View>
    );
  }
}
