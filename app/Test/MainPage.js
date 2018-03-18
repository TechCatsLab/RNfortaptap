import React from 'react';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import MainScene from './MainScene';
import PlaylistScene from './PlaylistScene';
import RadioScene from './RadioScene';
import TopScene from './TopScene';

import Attention from '../pages/Attention/Components/Attention';
import Video from '../pages/Attention/Components/Video';
import Hot from '../pages/Attention/Components/Hot';
import Community from '../pages/Attention/Components/Community';

import DetailsTabBar from '../pages/Details/DetailsTabBar';

export default class MainPage extends React.Component {
  render() {
    const types = [
      { title: '个性推荐', component: Attention },
      { title: '歌单', component: Video },
      { title: '主播电台', component: Hot },
      { title: '排行榜', component: Community },
      { title: '个性推荐', component: MainScene },
      { title: '歌单', component: PlaylistScene },
      { title: '主播电台', component: RadioScene },
      { title: '排行榜', component: TopScene },
    ];
    return (
      // <DetailsTabBar />
      <ScrollableTabView
        style={{ flex: 1, backgroundColor: '#FBFCFE' }}
        tabBarBackgroundColor="#ffffff"
        tabBarActiveTextColor="#D43C33"
        tabBarInactiveTextColor="#000000"
        tabBarUnderlineStyle={{ backgroundColor: '#D43C33' }}
        renderTabBar={() => <ScrollableTabBar />}
      >
        { types.map((v, i) => {
            const Component = v.component;
            return <Component key={i} tabLabel={v.title} navigation={this.props.navigation} />; // eslint-disable-line
        })}
      </ScrollableTabView>
    );
  }
}
