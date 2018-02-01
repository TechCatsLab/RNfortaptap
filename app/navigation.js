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
 *     Initial: 2018/01/16        Cheng Jifeng
 */

import {
  TabNavigator,
} from 'react-navigation';


import FontsSize from './res/Fonts/size';
import Colors from './res/Colors';
import Styles from './res/Styles';

import RecommendScreen from './pages/Recommend/RecommendPage';
import RankScreen from './pages/Rank/RankPage';
import DiscoverScreen from './pages/Discover/DiscoverPage';
import AttentionScreen from './pages/Attention/AttentionPage';
import MyGameScreen from './pages/MyGame/MyGamePage';

const BasicApp = TabNavigator({
  Recommand: {
    screen: RecommendScreen,
  },
  Rank: {
    screen: RankScreen,
  },
  Find: {
    screen: DiscoverScreen,
  },
  Like: {
    screen: AttentionScreen,
  },
  MyGame: {
    screen: MyGameScreen,
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  lazy: true,
  tabBarOptions: {
    showIcon: true,
    activeTintColor: Colors.white,
    pressOpacity: 4,
    labelStyle: {
      fontSize: FontsSize.tiny,
    },
    style: {
      backgroundColor: Colors.primary,
      height: Styles.Height(100),
    },
    indicatorStyle: {
      height: 0,
    },
  },
});

const Navigations = {
  Main: { screen: BasicApp },
};

export default Navigations;
