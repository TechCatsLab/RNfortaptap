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
 *     Initial: 2018/03/11        Cheng Jifeng
 */

import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Colors from '../../res/Colors';
import Styles from '../../res/Styles';

import BubbleTabBar from '../../components/BubbleTabBar';
import DetailsContent from './DetailsContent';
import CommentPage from './CommentPage';
import CommunityPage from './CommunityPage';

export default class DetailsTabBar extends React.Component {
  constructor() {
    super();
    this.state = {
      tabNames: ['详情', '评价', '论坛'],
      bubbles: [null, 4671, 426],
    };
  }
  render() {
    return (
      <ScrollableTabView
        style={{ flex: 1, backgroundColor: Colors.gray }}
        tabBarBackgroundColor={Colors.white}
        tabBarActiveTextColor={Colors.primary}
        tabBarInactiveTextColor={Colors.black}
        tabBarUnderlineStyle={
          {
            backgroundColor: Colors.primary,
            width: Styles.ScreenWidth * (1 / 3),
            height: Styles.Height(3),
          }
        }
        renderTabBar={() => (
          <BubbleTabBar
            tabNames={this.state.tabNames}
            bubbles={this.state.bubbles}
            // tabs={this.state.types}
          />
        )}
      >
        <DetailsContent tabLabel="详情" />
        <CommentPage tabLabel="评论" />
        <CommunityPage tabLabel="论坛" />
      </ScrollableTabView>
    );
  }
}
