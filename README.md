React Native 📱
=============
Todo App ✔
-------------

<br/>

### View
+ View is container like div
+ suports layout with flexbox, style, some touch handling, and accessibility controls.
```
<View styles={{flex:1}}> 
  <View styles={{flex:2}}></View>
  <View styles={{flex:1}}></View>
</View>
// 제일 상단에 있는 View 내부에 있는 View 는 순서대로 각각 2:1 비율로 화면을 차지한다. 
// width: ~, height: ~ 와 같이 설정이 가능하지만, 가로 세로 길이를 임의로 설정할 경우 각 모바일 디바이스에 출력되는 값이 의도와 달라질 수 있음
```
#### ScrollView
+ View what is possible to scroll
+ props..
```
<ScrollView
  horizontal or vertical // 가로 세로
  pagingEnabled // page 단위로만 스크롤이 가능하도록 설정, 자유로운 스크롤을 제한함
  showsHorizontalScrollIndicator={false} // indicator 의 표시 여부 설정 가능 (default: ture)
>
</ScrollView>
```

</br>

### Text
+ 모든 text 는 Text component 안에 위치해야한다.

</br>

### TextInput
+ 키보드를 통해 text 를 입력할 수 있게 해주는 foundational component
+ props, method..
```
<TextInput
  onChangeText={function} // input event 발생 시
  onSubmitEditing={function} //submit evnet 발생 시
  returnKeyType="done" // how the return key should look (done, go, next..)
  placeholder="Write whatever you want"
  value={prop} // The value to show for the text input
>
</TextInput>
```

</br> 

### TouchableOpacity
+ touch evnet 를 인식할 수 있는 View
+ props, method..
```
<TouchableOpacity
  onPress={function} // wrraper 가 touch 되면 
  hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }} // touch 범위를 확장 시킬 수 있음
/>
```

</br>

### Alert
+ Launches an alert dialog with the specified title and message.
```
const App = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
```

<br/>

### Style
+ 컴포넌트 내에서 style 을 설정할 수 있음
```
<View style={{paddingHorizontal: 20, paddingVertical: 10, flexDirection: "row", }}>
  <Text style={{color: "white", fontSize: 18}}>Hello</Text>
</View>
```
+ StyleSheet 를 통해 설정 가능
```
export default function App() {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
})
```
+ StyleSheet 를 사용하는데, 삼항 조건문에 따라 style 이 바뀌는 경우는
```
 <Text
  style={{
    ...styles.weather,
    color: colude ? "grey" : "blue",
  }}
>
```

<hr/>

### Sum 📖
```
직접 react native 를 통해 코딩을 해보고 간단한 app 을 2개 만들어 보았다. 
js 코드와 react 문법들을 사용하는 빈도가 잦고 사용하는 component 의 개념이 
크게 어렵지 않아, 접근성이 확실히 좋은 듯 하다.

다만 퍼포먼스의 한계를 느낄만큼의 app 이 아니라 아직은 체감할 수 없다.
오류 핸들링 또한 동일함.
```
