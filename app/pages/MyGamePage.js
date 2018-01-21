/*
 * Revision History:
 *     Initial: 2018/01/21        Cheng Jifeng
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

export default class MyGamePage extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'myGame',
  }
  render() {
    return (
      <View>
        <Text>
        mygame page
        </Text>
      </View>
    );
  }
}
