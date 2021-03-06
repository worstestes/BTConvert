import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import MainLayout from '../../Components/MainLayout'

import InfoText from '../../Components/InfoText'
import MainText from '../../Components/MainText'
import { ScrollView } from 'react-native-gesture-handler'

class About extends Component {
  render() {
    return (
      <MainLayout title="About" onMenuPress={() => openDrawer()}>
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <InfoText
              title="What is Bitcoin?"
              text="Bitcoin is a consensus network that enables a new payment system and a completely
            digital money. It is the first decentralized peer-to-peer payment network that is
            powered by its users with no central authority or middlemen. From a user perspective,
            Bitcoin is pretty much like cash for the Internet. Bitcoin can also be seen as the
            most prominent triple entry bookkeeping system in existence."
            />
            <InfoText
              title="How does Bitcoin work?"
              text="From a user perspective, Bitcoin is nothing more than a mobile app or computer program
              that provides a personal Bitcoin wallet and allows a user to send and receive bitcoins
              with them. This is how Bitcoin works for most users. Behind the scenes, the Bitcoin
              network is sharing a public ledger called the 'block chain'. This ledger contains
              every transaction ever processed, allowing a user's computer to verify the validity of
              each transaction. The authenticity of each transaction is protected by digital
              signatures corresponding to the sending addresses, allowing all users to have full
              control over sending bitcoins from their own Bitcoin addresses. In addition, anyone
              can process transactions using the computing power of specialized hardware and earn a
              reward in bitcoins for this service. This is often called 'mining'. To learn more
              about Bitcoin, you can consult the dedicated page and the original paper."
            />
            <MainText style={styles.footer}>
              Content shown attributed to bitcoin.org
            </MainText>
          </ScrollView>
        </View>
      </MainLayout>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    marginTop: 25,
  },
  scrollView: {
    flexGrow: 2,
    paddingTop: 10,
    alignItems: 'center',
    paddingBottom: 15,
  },
  footer: { fontSize: 10, fontWeight: 'bold' }
})
export default About
