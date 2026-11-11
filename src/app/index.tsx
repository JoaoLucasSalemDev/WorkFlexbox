import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.menuIcon}>
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
        </View>
        <View style={styles.headerCircle} />
      </View>

      {/* Conteúdo Principal Centralizado */}
      <View style={styles.content}>
        
        {/* Seção de Perfil */}
        <View style={styles.profileSection}>
          <View style={styles.avatarBorder}>
            <Image
              style={styles.avatar}
              source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
            />
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.name}>João Silva</Text>
            <Text style={styles.bio}>Dev Mobile Jr.</Text>
          </View>
        </View>

        {/* Seção de Estatísticas */}
        <View style={styles.statsSection}>
          <View style={styles.statItem}>
            <View style={styles.statLabelBox}>
              <Text style={styles.statLabel}>Seguindo</Text>
            </View>
            <Text style={styles.statValue}>120</Text>
          </View>

          <View style={styles.statItem}>
            <View style={styles.statLabelBox}>
              <Text style={styles.statLabel}>Seguidores</Text>
            </View>
            <Text style={styles.statValue}>300</Text>
          </View>
        </View>

        {/* Botão de Ação */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Seguir</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: 60,
    backgroundColor: '#222222',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  menuIcon: {
    height: 18,
    justifyContent: 'space-between',
  },
  menuLine: {
    width: 25,
    height: 2,
    backgroundColor: '#ffffff',
  },
  headerCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  avatarBorder: {
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 30,
    padding: 2,
    marginBottom: 20,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  infoBox: {
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 50,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    color: '#333333',
    marginTop: 5,
  },
  statsSection: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginBottom: 50,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabelBox: {
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 25,
    marginBottom: 15,
  },
  statLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 80,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});