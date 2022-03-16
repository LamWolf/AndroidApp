import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const Vaccination = () => {
  return (
    <ScrollView>
      <Card style={style.cardBox}>
        <Card.Title title="Reference Number" />
        <Card.Content>
          <Paragraph>VA252526-1343673-1</Paragraph>
        </Card.Content>
        <Card.Title title="Identity Document No." />
        <Card.Content>
          <Paragraph>****532(2)</Paragraph>
        </Card.Content>
        <Card.Title title="Name" />
        <Card.Content>
          <Paragraph>Your Name</Paragraph>
        </Card.Content>
        <Card.Title title="Vaccination Date" />
        <Card.Content>
          <Paragraph>07-01-2022</Paragraph>
        </Card.Content>
        <Card.Title title="Vaccination Name" />
        <Card.Content>
          <Paragraph>Pfizer vaccine</Paragraph>
        </Card.Content>
      </Card>
      <Card style={style.cardBox}>
        <Card.Title title="Reference Number" />
        <Card.Content>
          <Paragraph>VA252526-1343673-1</Paragraph>
        </Card.Content>
        <Card.Title title="Identity Document No." />
        <Card.Content>
          <Paragraph>****532(2)</Paragraph>
        </Card.Content>
        <Card.Title title="Name" />
        <Card.Content>
          <Paragraph>Your Name</Paragraph>
        </Card.Content>
        <Card.Title title="Vaccination Date" />
        <Card.Content>
          <Paragraph>07-04-2022</Paragraph>
        </Card.Content>
        <Card.Title title="Vaccination Name" />
        <Card.Content>
          <Paragraph>Pfizer vaccine</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  )
}

const style = StyleSheet.create({
  cardBox: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  }
})

export default Vaccination;