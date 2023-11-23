import { View, Text, StyleSheet, Image } from "react-native";

export default ( { article } ) => {
    const { title, descripcion, image } = article;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.textDescription}>{article.descripcion}</Text>
            <Image style={styles.image} source={{ uri: article.image}} />
        </View>
    )

};

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  textDescription: {
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 30,
    marginBottom: 50
  },
  title: {
    fontSize: 24,
    marginBottom: 24

  },
  image: {
      height: 200,
      width: '100%'
  }
});