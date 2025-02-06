import React from 'react';
import {StyleSheet, Text, ScrollView, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lastra Reign
          </Text>
        <Text style={styles.text}>
          Nang ika'y ibigin ko
Mundo ko'y biglang nagbago
Akala ko ika'y langit
'Yun pala'y sakit ng ulo
Sabi mo noon sa akin
Kailan ma'y 'di magbabago
Naniwala naman sa iyo
Ba't ngayo'y iniwan mo
'Di mo alam dahil sa 'yo, ako'y 'di makakain
'Di rin makatulog buhat ng iyong lokohin
Kung ako'y muling iibig, sana'y 'di maging katulad mo
Tulad mo na may pusong bato
Kahit sa'n ka man ngayon
Dinggin mo itong awitin
Baka sakaling ikay magising
Ang matigas mong damdamin
'Di mo alam dahil sa 'yo, ako'y 'di makakain
'Di rin makatulog buhat ng iyong lokohin
Kung ako'y muling iibig, sana'y 'di maging katulad mo
Tulad mo na may pusong bato
Pusong bato
'Di mo alam dahil sa 'yo, ako'y 'di makakain
'Di rin makatulog buhat ng iyong lokohin
Kung ako'y muling iibig, sana'y 'di maging katulad mo
Tulad mo na may pusong bato
'Di mo alam dahil sa 'yo, ako'y 'di makakain
'Di rin makatulog buhat ng iyong lokohin
Kung ako'y muling iibig, sana'y 'di maging katulad mo
Tulad mo na may pusong bato
Tulad mo na may pusong bato
Tulad mo na may pusong bato

Di mo alam dahil sa 'yo, ako'y 'di makakain
'Di rin makatulog buhat ng iyong lokohin
Kung ako'y muling iibig, sana'y 'di maging katulad mo
Tulad mo na may pusong bato
Pusong bato
'Di mo alam dahil sa 'yo, ako'y 'di makakain
'Di rin makatulog buhat ng iyong lokohin
Kung ako'y muling iibig, sana'y 'di maging katulad mo
Tulad mo na may pusong bato
'Di mo alam dahil sa 'yo, ako'y 'di makakain
'Di rin makatulog buhat ng iyong lokohin
Kung ako'y muling iibig, sana'y 'di maging katulad mo
Tulad mo na may pusong bato
Tulad mo na may pusong bato
Tulad mo na may pusong bato
        </Text> 
      </ScrollView> 
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    padding: 12,
  },
});

export default App;