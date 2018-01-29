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
  namespace: 'discover',

  state: {
    slides: [
      'https://img.tapimg.com/market/images/0183cdbf8043346db45d77fb44a6ef37.jpg?imageView2/1/w/2080/h/800/q/80/format/jpg/interlace/1/ignore-error/1',
      'https://img.tapimg.com/market/images/fff832326afd70919aadc1c02b99c816.png?imageView2/1/w/2080/h/800/q/80/format/jpg/interlace/1/ignore-error/1',
      'https://img.tapimg.com/market/images/fb871999780188cc9b689abf4e09123c.jpg?imageView2/1/w/2080/h/800/q/80/format/jpg/interlace/1/ignore-error/1',
    ],
    labels: [
      {
        key: 0,
        content: '热门',
      },
      {
        key: 1,
        content: '美国',
      },
      {
        key: 2,
        content: '日本',
      },
      {
        key: 3,
        content: '韩国',
      },
      {
        key: 4,
        content: '台湾',
      },
      {
        key: '5',
        content: '香港',
      },
      {
        key: 5,
        content: '厂商',
      },
    ],
    daily: [
      {
        key: 0,
        img: 'https://img.tapimg.com/market/lcs/bcd784428b5f6519f58d4e3a5da78a48_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1',
        title: 'ディグディグ３',
      },
      {
        key: 1,
        img: 'https://img.tapimg.com/market/lcs/e47feefcf7c4d947b3bdc3e657ca0eae_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1',
        title: 'Nitro Nation Racing',
      },
      {
        key: 2,
        img: 'https://img.tapimg.com/market/lcs/9602d564b9a5a842c1b85059ab6bf06b_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1',
        title: 'Ketchapp Winter Sports',
      },
      {
        key: 3,
        img: 'https://img.tapimg.com/market/lcs/5d350af236068532e7e9f63d89193d76_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1',
        title: '不讓你吃咧',
      },
      {
        key: 4,
        img: 'https://img.tapimg.com/market/lcs/0ac98bad530ef14886ba5f8ea599741b_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1',
        title: 'TALLNUM（Unreleased）',
      },
      {
        key: 5,
        img: 'https://img.tapimg.com/market/lcs/3853da5a3c6c7ddf43bca0b0f9d973d0_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1',
        title: 'DUNIDLE - Idle Pixel RPG',
      },
    ],
    order: [
      {
        key: 0,
        img: 'https://img.tapimg.com/market/icons/52cafc5b5e46739e583dd0c48c4d918f_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1',
        title: '凯瑞利亚·黑暗之潮',
      },
      {
        key: 1,
        img: 'https://img.tapimg.com/market/icons/17e55f1cd54e8300d85346b565571337_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1',
        title: '要塞突袭',
      },
      {
        key: 2,
        img: 'https://img.tapimg.com/market/lcs/0ee514fb727a36ff418131f5fa7cbdb0_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1',
        title: '特工小队',
      },
      {
        key: 3,
        img: 'https://img.tapimg.com/market/icons/04242f784d642d5cc08b38247b30d0b9_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1',
        title: '10 Project',
      },
      {
        key: 4,
        img: 'https://img.tapimg.com/market/lcs/f290c407222f18e9e81f8f0d5b46f250_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1',
        title: 'Abi',
      },
      {
        key: 5,
        img: 'https://img.tapimg.com/market/lcs/1260de0dbf65f90df6da5cd70afae15b_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1',
        title: '恶魔狂想曲2',
      },
    ],
    beta: [
      {
        key: 0,
        img: 'https://img.tapimg.com/market/lcs/8edfb19fc9d3c7f0e50136dff8053a8b_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1',
        title: '嗨皮精灵3',
      },
      {
        key: 1,
        img: 'https://img.tapimg.com/market/lcs/0b25d70817dd1968c45f37d775c681cd_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1',
        title: '末日远征(AMG)（测试服）',
      },
      {
        key: 2,
        img: 'https://img.tapimg.com/market/lcs/2f20c2bfd467a05b370cd3a085cb50f3_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1',
        title: '兵人大战',
      },
      {
        key: 3,
        img: 'https://img.tapimg.com/market/icons/153b754f586f6be670dc24d8f31b8258_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1',
        title: '血染征袍（预下载）',
      },
      {
        key: 4,
        img: 'https://img.tapimg.com/market/icons/6b6984bdc0a28cd088d733c511186da2_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1',
        title: '轮回诀（测试服）',
      },
      {
        key: 5,
        img: 'https://img.tapimg.com/market/lcs/4225f541712f571aeb19778ba6f1d373_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1',
        title: '海岛战争',
      },
    ],
    qualityImg: [
      {
        key: 0,
        img: 'https://img.tapimg.com/market/images/695f17e0632b952d44d6e7d97158c9a0.jpg',
      },
      {
        key: 1,
        img: 'https://img.tapimg.com/market/images/035be48506ee19e05af7c18881e7bb3e.jpg',
      },
      {
        key: 2,
        img: 'https://img.tapimg.com/market/images/a136a4dd47abf4902d9042644bab2500.jpg',
      },
      {
        key: 3,
        img: 'https://img.tapimg.com/market/images/96fb8f3f1b8c789b9fca12e6ee72d2ad.jpg',
      },
    ],
    users: [
      {
        key: 0,
        img: 'https://img3.tapimg.com/avatars/552cec4def61a2033cc7633efea99ade.jpg?imageView2/1/w/300/q/80/format/jpg/interlace/1/ignore-error/1',
        name: '魚亁',
        tag: 'TapTap编辑',
      },
      {
        key: 1,
        img: 'https://img3.tapimg.com/avatars/552cec4def61a2033cc7633efea99ade.jpg?imageView2/1/w/300/q/80/format/jpg/interlace/1/ignore-error/1',
        name: '魚亁',
        tag: 'TapTap编辑',
      },
      {
        key: 2,
        img: 'https://img3.tapimg.com/avatars/552cec4def61a2033cc7633efea99ade.jpg?imageView2/1/w/300/q/80/format/jpg/interlace/1/ignore-error/1',
        name: '魚亁',
        tag: 'TapTap编辑',
      },
      {
        key: 3,
        img: 'https://img3.tapimg.com/avatars/552cec4def61a2033cc7633efea99ade.jpg?imageView2/1/w/300/q/80/format/jpg/interlace/1/ignore-error/1',
        name: '魚亁',
        tag: 'TapTap编辑',
      },
      {
        key: 4,
        img: 'https://img3.tapimg.com/avatars/552cec4def61a2033cc7633efea99ade.jpg?imageView2/1/w/300/q/80/format/jpg/interlace/1/ignore-error/1',
        name: '魚亁',
        tag: 'TapTap编辑',
      },
      {
        key: 5,
        img: 'https://img3.tapimg.com/avatars/552cec4def61a2033cc7633efea99ade.jpg?imageView2/1/w/300/q/80/format/jpg/interlace/1/ignore-error/1',
        name: '魚亁',
        tag: 'TapTap编辑',
      },
    ],
  },

  effects: {
  },

  reducers: {
  },
};
