import { View, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'

//memoItemの構造化
const List = (): JSX.Element => {
  return(
    <View style={styles.container}>

      <Header />

      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        
      </View>

      <CircleButton>+</CircleButton>
      
    </View>
  )
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#ffffff"
  }
})

export default List