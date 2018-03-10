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
 *     Initial: 2018/03/10        Cheng Jifeng
 */

import React from 'react';
import {
  View,
  Image,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

import Colors from '../../../res/Colors';
import Styles from '../../../res/Styles';

export default class ImageShow extends React.Component {
  state = {
    modalVisible: false,
    images: [{
      url: 'https://img.tapimg.com/market/images/24a35830930c88a9a9d0c0c439fcfd30.jpg?imageView2/2/h/560/q/40/format/jpg/interlace/1/ignore-error/1',
    }, {
      url: 'https://img.tapimg.com/market/images/f6b349ca21419bc24cdfe49f77b44be3.jpg?imageView2/2/h/560/q/40/format/jpg/interlace/1/ignore-error/1',
    }, {
      url: 'https://img.tapimg.com/market/images/213f18fe886ade18407ae7eef5147dc6.jpg?imageView2/2/h/560/q/40/format/jpg/interlace/1/ignore-error/1',
    }, {
      url: 'https://img.tapimg.com/market/images/30599ffb45a3678ff3200d542957c01d.png?imageView2/2/h/560/q/40/format/jpg/interlace/1/ignore-error/1',
    }],
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.imageLayout}
        >
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
          >
            {
              this.state.images.map((item, index) => (
                <Image
                  key={index} // eslint-disable-line
                  source={{ uri: item.url }}
                  style={{
                    height: Styles.Height(250),
                    width: Styles.Width(160),
                    backgroundColor: Colors.primary,
                    padding: Styles.Width(20),
                  }}
                />
              ))
            }
          </TouchableOpacity>
        </ScrollView>
        <Modal
          onPress={() => { this.setModalVisible(!this.state.modalVisible); }}
          visible={this.state.modalVisible}
          transparent
          onRequestClose={() => { this.setModalVisible(!this.state.modalVisible); }}
        >
          <ImageViewer
            imageUrls={this.state.images}
            onCancel={() => { this.setModalVisible(!this.state.modalVisible); }}
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageLayout: {
    marginLeft: Styles.Width(20),
    marginVertical: Styles.Height(15),
  },
});
