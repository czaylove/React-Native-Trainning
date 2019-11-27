import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import {
  Body,
  Left,
  Right,
  ListItem,
  CheckBox,
  Button,
  Icon,
} from 'native-base';
import deleteTask from '../screens/Home';
const ItemList = props => {
  const [checked, setChecked] = useState(props.c);
  return (
    <ListItem avatar>
      <Left>
        <CheckBox
          color="black"
          checked={checked}
          onPress={() => setChecked(checked => !checked)}
          style={{ borderRadius: 25 }}
        />
      </Left>
      <Body>
        <Text style={{ paddingLeft: 20, fontSize: 14 }}>{props.text}</Text>
        <Text />
      </Body>
      <Right>
        <Button transparent onPress={props.d}>
          <Icon name="trash" />
        </Button>
      </Right>
    </ListItem>
  );
};
// const styles = StyleSheet.create({

// })
export default ItemList;
