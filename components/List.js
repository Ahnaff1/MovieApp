import React from 'react';
import {View, FlatList, Text} from 'react-native';
import Card from './Card';

class List extends React.PureComponent {
  render() {
    const {title, content, navigation} = this.props;
    return (
      <View style={{marginTop: 15}}>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              padding: 5,
              color: 'red',
            }}>
            {title}
          </Text>
        </View>
        <View>
          <FlatList
            data={content}
            renderItem={({item}) => (
              <Card navigation={navigation} item={item} />
            )}
            horizontal={true}
          />
        </View>
      </View>
    );
  }
}

export default List;
