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
  },

  effects: {
  },

  reducers: {
  },
};
