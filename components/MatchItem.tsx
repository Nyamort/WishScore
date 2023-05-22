import { View, Text, StyleSheet, ImageSourcePropType } from "react-native";
import { Image } from "react-native";

export type MatchItemProps = {
    // logo1: ImageSourcePropType,
    // logo2: ImageSourcePropType,
    equipe1: string,
    equipe2: string,
    score1 : number,
    score2 : number
  }
  
  export default function MatchItem(props: MatchItemProps) {
    return (
      <View>
          <View style={styles.match}>
            {/* <Image style={styles.logo} source={props.logo1}/>*/}
            <Text>{props.equipe1}</Text>
            <Text style={styles.score}>{props.score1}</Text>
          </View>
          <View style={styles.match}>
            {/* <Image style={styles.logo} source={props.logo2}/> } */}
            <Text>{props.equipe2}</Text>
            <Text style={styles.score}>{props.score2}</Text>
          </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    logo: {
        width: '50%',
        height: '50%',
    },
    match: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    score: {
    }

  });
  