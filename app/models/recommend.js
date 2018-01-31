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
 *     Initial: 2018/01/27        Cheng Jifeng
 */

export default {
  namespace: 'recommend',

  state: {
    games: [
      {
        key: 1,
        gicon: 'https://img.tapimg.com/market/lcs/0f944ee48f2bf78138504cc98980e508_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1',
        gfrom: '来自编辑的推荐',
        gtitle: '旅かえる',
        gimage: 'https://img.tapimg.com/market/images/c04ab999f692a4407d64156e51613834.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1',
        ginfo: '三叶草已经收了四次了，我的蛙怎么还不回家啊……',
        grade: 9.8,
        message: 999,
      },
      {
        key: 2,
        gicon: 'https://img.tapimg.com/market/lcs/80730d5b2027f95a316d1bb674b2c48f_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1',
        gfrom: '来自编辑的推荐',
        gtitle: '边境之旅',
        gimage: 'https://img.tapimg.com/market/images/83c8a1d5574c1dc1e9a80b019dc51394.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1',
        ginfo: '山川湖海，唯美旅途。',
        grade: 8.0,
        message: 600,
      },
      {
        key: 3,
        gicon: 'https://img.tapimg.com/market/lcs/d001b4b53e14f4c4498fe11c1564d945_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1',
        gfrom: '来自编辑的推荐',
        gtitle: '飞跃仙境',
        gimage: 'https://img.tapimg.com/market/images/50c65228848143de6361cf52808e40b8.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1',
        ginfo: '跟随桃乐丝的梦境，找寻未知的自己。',
        grade: 8.4,
        message: 630,
      },
      {
        key: 4,
        gicon: 'https://img.tapimg.com/market/lcs/a7cd8cfafcbbed27a4e4eabb15b3179d_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1',
        gfrom: '来自编辑的推荐',
        gtitle: 'Dancing Ball!',
        gimage: 'https://img.tapimg.com/market/images/6b5ecdb1bfc99f3fdaeea44cb4537446.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1',
        ginfo: '独特的玩法与配乐，让你体验一场充满挑战的音乐之旅！',
        grade: 8.0,
        message: 700,
      },
      {
        key: 5,
        gicon: 'https://img.tapimg.com/market/lcs/0f944ee48f2bf78138504cc98980e508_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1',
        gfrom: '来自编辑的推荐',
        gtitle: '旅かえる',
        gimage: 'https://img.tapimg.com/market/images/c04ab999f692a4407d64156e51613834.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1',
        ginfo: '四叶草已经收了三次了，我的蛙怎么还不回家啊……',
        grade: 9.8,
        message: 999,
      },
      {
        key: 6,
        gicon: 'https://img.tapimg.com/market/lcs/80730d5b2027f95a316d1bb674b2c48f_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1',
        gfrom: '来自编辑的推荐',
        gtitle: '边境之旅',
        gimage: 'https://img.tapimg.com/market/images/83c8a1d5574c1dc1e9a80b019dc51394.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1',
        ginfo: '山川湖海，唯美旅途。',
        grade: 8.0,
        message: 600,
      },
      {
        key: 7,
        gicon: 'https://img.tapimg.com/market/lcs/d001b4b53e14f4c4498fe11c1564d945_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1',
        gfrom: '来自编辑的推荐',
        gtitle: '飞跃仙境',
        gimage: 'https://img.tapimg.com/market/images/50c65228848143de6361cf52808e40b8.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1',
        ginfo: '跟随桃乐丝的梦境，找寻未知的自己。',
        grade: 8.4,
        message: 630,
      },
      {
        key: 8,
        gicon: 'https://img.tapimg.com/market/lcs/a7cd8cfafcbbed27a4e4eabb15b3179d_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1',
        gfrom: '来自编辑的推荐',
        gtitle: 'Dancing Ball!',
        gimage: 'https://img.tapimg.com/market/images/6b5ecdb1bfc99f3fdaeea44cb4537446.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1',
        ginfo: '独特的玩法与配乐，让你体验一场充满挑战的音乐之旅！',
        grade: 8.0,
        message: 700,
      },
      {
        key: 9,
        gicon: 'https://img.tapimg.com/market/lcs/80730d5b2027f95a316d1bb674b2c48f_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1',
        gfrom: '来自编辑的推荐',
        gtitle: '边境之旅',
        gimage: 'https://img.tapimg.com/market/images/83c8a1d5574c1dc1e9a80b019dc51394.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1',
        ginfo: '山川湖海，唯美旅途。',
        grade: 8.0,
        message: 600,
      },
      {
        key: 10,
        gicon: 'https://img.tapimg.com/market/lcs/d001b4b53e14f4c4498fe11c1564d945_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1',
        gfrom: '来自编辑的推荐',
        gtitle: '飞跃仙境',
        gimage: 'https://img.tapimg.com/market/images/50c65228848143de6361cf52808e40b8.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1',
        ginfo: '跟随桃乐丝的梦境，找寻未知的自己。',
        grade: 8.4,
        message: 630,
      },
      {
        key: 11,
        gicon: 'https://img.tapimg.com/market/lcs/a7cd8cfafcbbed27a4e4eabb15b3179d_360.png?imageView2/1/w/60/q/40/interlace/1/ignore-error/1',
        gfrom: '来自编辑的推荐',
        gtitle: 'Dancing Ball!',
        gimage: 'https://img.tapimg.com/market/images/6b5ecdb1bfc99f3fdaeea44cb4537446.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1',
        ginfo: '独特的玩法与配乐，让你体验一场充满挑战的音乐之旅！',
        grade: 8.0,
        message: 700,
      },
    ],
    wall: [
      {
        key: 0,
        img: 'https://img.tapimg.com/market/lcs/60e76890fd888d2491bc8a048bdd0d45_360.png?imageView2/1/w/100/q/40/interlace/1/ignore-error/1',
        title: 'Late Shift',
        describe: '看别人玩过！超棒！像是看电影啊！小哥很帅啊而且！',
        user: '无谶',
      },
      {
        key: 1,
        img: 'https://img.tapimg.com/market/icons/04242f784d642d5cc08b38247b30d0b9_360.png?imageView2/1/w/100/q/40/interlace/1/ignore-error/1',
        title: '10 Project（测试服）',
        describe: '这游戏总的来说还是可以的，虽说感觉上玩起来不够流畅，可能是优化得不是很...',
        user: '。＆——狱。',
      },
      {
        key: 2,
        img: 'https://img.tapimg.com/market/lcs/0f944ee48f2bf78138504cc98980e508_360.png?imageView2/1/w/100/q/40/interlace/1/ignore-error/1',
        title: '旅かえる',
        describe: '我家萌萌不要我了好长时间没回来名信片都没寄',
        user: '＊Sky～神烦＊',
      },
      {
        key: 3,
        img: 'https://img.tapimg.com/market/lcs/d9a78696d796114ee738d1c4cda20405_360.png?imageView2/1/w/100/q/40/interlace/1/ignore-error/1',
        title: '粉碎狂热',
        describe: '游戏很好因为刚入坑前期上手要求也不高到目前为止吧。感觉游戏还可以上来给...',
        user: '淼淼淼淼淼',
      },
    ],
    previous: [
      {
        key: 0,
        img: 'https://img.tapimg.com/market/images/0183cdbf8043346db45d77fb44a6ef37.jpg?imageView2/1/w/780/h/300/q/40/format/jpg/interlace/1/ignore-error/1',
      },
      {
        key: 1,
        img: 'https://img.tapimg.com/market/images/82748411f43e0fbe9f2ee054e6bca1b5.jpg?imageView2/1/w/780/h/300/q/40/format/jpg/interlace/1/ignore-error/1',
      },
      {
        key: 2,
        img: 'https://img.tapimg.com/market/images/2e7530db631f57b352a262e927a22917.jpg?imageView2/1/w/780/h/300/q/40/format/jpg/interlace/1/ignore-error/1',
      },
      {
        key: 3,
        img: 'https://img.tapimg.com/market/images/fff832326afd70919aadc1c02b99c816.png?imageView2/1/w/672/h/268/q/40/format/jpg/interlace/1/ignore-error/1',
      },
      {
        key: 4,
        img: 'https://img.tapimg.com/market/images/09943209699f11dac1a0025e4397df7f.jpg?imageView2/1/w/672/h/268/q/40/format/jpg/interlace/1/ignore-error/1',
      },
      {
        key: 5,
        img: 'https://img.tapimg.com/market/images/892ed0e962aeacf1678a6947cac1647d.jpg?imageView2/1/w/672/h/268/q/40/format/jpg/interlace/1/ignore-error/1',
      },
      {
        key: 6,
        img: 'https://img.tapimg.com/market/images/b07c1213f45b57f44c7364a9e4e81991.jpg?imageView2/1/w/672/h/268/q/40/format/jpg/interlace/1/ignore-error/1',
      },
    ],
    admire: [
      {
        key: 0,
        img: 'https://img.tapimg.com/market/images/c04ab999f692a4407d64156e51613834.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1',
        title: '旅行青蛙',
        avatar: 'https://img3.tapimg.com/avatars/aa55a2a789bc47713f1990a2107107d0.png?imageView2/1/w/300/q/80/format/jpg/interlace/1/ignore-error/1',
        nickname: '屠梦人',
        describe: '讲真，玩这个游戏让我有点手足无措。。。',
      },
      {
        key: 1,
        img: 'https://img.tapimg.com/market/images/73b7e8a199fbe015e993986b8ef36987.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1',
        title: '肥皂大作战',
        avatar: 'https://img3.tapimg.com/avatars/2b4a9f9bd8e9817c28880144438825fe.jpg?imageView2/1/w/300/q/80/format/jpg/interlace/1/ignore-error/1',
        nickname: '浅水',
        describe: '不得不承认，这是一个自带话题和毒性的游戏',
      },
      {
        key: 2,
        img: 'https://img.tapimg.com/market/images/6b5ecdb1bfc99f3fdaeea44cb4537446.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1',
        title: 'Dancing Ball!',
        avatar: 'https://img3.tapimg.com/avatars/a50a33cafea2b4569394c2c94e2f88d6.jpg?imageView2/1/w/300/q/80/format/jpg/interlace/1/ignore-error/1',
        nickname: '桐生一马',
        describe: '玩法上不只是肌肉记忆，还将节奏感完美融入。',
      },
      {
        key: 3,
        img: 'https://img.tapimg.com/market/images/922da7127b7221a7d592b3b54c7ec160.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1',
        title: '养不大',
        avatar: 'https://img3.tapimg.com/avatars/2b4a9f9bd8e9817c28880144438825fe.jpg?imageView2/1/w/60/q/40/interlace/1/ignore-error/1',
        nickname: '浅水',
        describe: '各种崽们的外观设计得非常的Q版可爱。',
      },
      {
        key: 4,
        img: 'https://img.tapimg.com/market/images/5755b310174dcc1a9d1deb71300056c4.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/40/interlace/1',
        title: '决战平安京',
        avatar: 'https://img3.tapimg.com/avatars/9f54e6f25b352b5184f141c1a53a0a3e.png?imageView2/1/w/300/q/80/format/jpg/interlace/1/ignore-error/1',
        nickname: '南小鸟',
        describe: '美术水平非常好，老YYS的粉儿应该很吃这一套。',
      },
    ],
  },

  effects: {
  },

  reducers: {
  },
};
