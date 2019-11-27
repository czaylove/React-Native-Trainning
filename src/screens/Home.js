import React, { useState } from 'react';
// import { login } from '../services';
import {
  Body,
  Text,
  Container,
  Header,
  Content,
  Input,
  Icon,
  Left,
  Title,
  Right,
  Button,
  Item,
  List,
  ListItem,
  Thumbnail,
  Footer,
  Badge,
  FooterTab,
} from 'native-base';
import { DATA } from '../repositories/index';
import { ScrollView, FlatList, View } from 'react-native';
import ItemList from '../screens/Item';

const Home = () => {
  const [task, setTask] = useState([]);
  const [text, setText] = useState('');
  const addTask = () => {
    let object = { text: task, key: Date.now(), checked: false };
    if (task.length > 0) {
      DATA.push(object);
      setTask(DATA);
    } else {
      alert('Khong Duoc Bo Trong');
    }
    setText('');
  };
  const deleteTask = id => {
    setTask(
      DATA.filter(t => {
        if (t.key !== id) {
          return false;
        }
      }),
    );
  };
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>To Do List</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
      <Item>
        <Input
          placeholder=" Textbox"
          value={task}
          onChangeText={task => setTask(task)}
        />
        <Button
          transparent
          onPress={() => {
            addTask();
          }}>
          <Icon name="add" />
        </Button>
      </Item>
      <Content>
        <ScrollView>
          <FlatList
            data={DATA}
            renderItem={item => (
              <ItemList
                text={item.item.text}
                t={item.item.key}
                c={item.item.checked}
                d={() => deleteTask()}
              />
            )}
            ListEmptyComponent={() => (
              <View>
                <Text>Empty List</Text>
              </View>
            )}
          />
        </ScrollView>
      </Content>
      <Footer>
        <FooterTab>
          <Button vertical>
            <Icon name="apps" />
            <Text>Apps</Text>
          </Button>
          <Button vertical>
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
          <Button vertical>
            <Icon active name="navigate" />
            <Text>Navigate</Text>
          </Button>
          <Button vertical>
            <Icon name="person" />
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};
export default Home;
