import styled from 'styled-components/native';
import { ScrollView , StyleSheet , Text } from 'react-native'
import Title from '../components/title';


const Container = styled.View`
  background-color: white;
  flex: 1;
  padding: 24px;
`;

const Header = styled.Text`
  color: black;
  fontSize: 24px;
  fontWeight: bold;
  marginBottom: 10px
`
const Paragraph = styled.Text`
  color: black;
  fontSize: 20px;
  fontWeight: 500;
  marginBottom: 10px
`

const Subtitle = styled.Text`
   color: black;
   fontSize: 20px;
   fontWeight: bold;
   marginBottom: 10px;
   paddingLeft: 15px;
`

export default function SeneBaheri({ navigation }) {
   
  return (
    <Container>
      <Title titleText='የማሽከርከር ስነ-ባህሪ' />
      <ScrollView>
      
      <Header>1. ስነ- ባህሪ ማለት ምን ማለት ነው? </Header>
      <Paragraph>
       - የሰዎችን የእንሰሳት ባህሪ ሳይንሳዊ በሆነ መንገድ የሚያጠና ዲስፒሊን ነው {'\n'} 
       - ባህሪንና የአምሮን አስተሳሰብ ሂደት ሳይንሳዊ በሆነ መንገድ የሚያጠና ዲስፒሊን ነው
      </Paragraph>

      <Subtitle>1.1 ባህሪ :- </Subtitle>
      <Paragraph>
        - የሰው የአስተሳሰብ አመለካከት ድርጊት ውጤት ነው፡፡ {'\n'}
        - በቀጥታ ሊቃኝ፣ ሊመዘገብና ሊለካ እንዲሁም በተዘዋዋሪ መንገድ ሊታወቅ ይችላል
      </Paragraph>
      <Subtitle>1.2 ባህሪ ላይ ተፅዕኖ ያላቸው ነገሮች :- </Subtitle>
      <Paragraph>
        - የውርስ ባሀሪ /በተፈጥሮ የሚወረስ/{'\n'}
        - የአካባቢ ባሀሪ /የሚያድግበት ወይም የሚኖርበት አካባቢ ተጽእኖ/{'\n'}
        - አካላዊ ሁኔታ /ድካም የህመም ስሜት/{'\n'}
        - ሐይለ-ስሜት /ውስጣዊ ፍላጎት/{'\n'}
        - ሥላጠና /ትምህርት/፡-እቅድ ባለው መንገድ የሚከናወን ትምህርት
      </Paragraph>
      <Subtitle>1.3 የስነ-ባህሪ ግቦች :-</Subtitle>
      <Paragraph>
      - የስነ-ባህሪ ግቦች የሚባሉት ባህሪን መግለፅ፣ የተለያዩ ባህሪያትን ምክንያት ማብራራት፣ወቅታዊ
         የባህሪን ሁኔታ ግምት ዉስጥ በማስገባት የወደፊቱን መተንበይና ባህሪን ማሻሻል የሚሉት
         ናቸው፡፡
      </Paragraph>
      <Subtitle>1.4 የማሽከርከር ስነ -ባህሪ :-</Subtitle>
      <Paragraph>
      * የማሽከርከር ስነ-ባህሪ ማለት በማሽከርከር ወቅት አሽከርካሪዎች የሚያሳዮትን ባህሪ የሚያጠና የስነ -
      ባህሪ ዘርፍ ሲሆን የማሽከርከር ሰነ- ባህሪ ጠቀሜታ :-{'\n'}
      - በተሽከርካሪ የሚደርስ አደጋን መቀነስ {'\n'}
      - የአሽከርካሪ ባህሪን ማስተካከል {'\n'}
      - የአሽከርካሪዎችን መልካም ባህሪ ለማዳበር /ትህትናን ፤ ርህራሄን ፤ ቤተሰባዊ እይታን የፈጠረ
        አንዳንድ ልምምድ ማድረግ ወዘተ ነው፡፡

      </Paragraph>
      <Subtitle>1.5 የማሽከርከር ስነ - ባህረያዊ ሂደቶች (Driving Psychology Affairs) :-</Subtitle>
      <Paragraph>
       - <Text style={styles.bold}>ዝግጁነት</Text>:- የብስለት ፤የችሎታ ፤የትምህርትና የመነሳሳት የጋራ ውጤት ነው፡፡ ዝግጁነት
         ከማሽከርከር በፊት ሊጤን የሚገባው ጉዳይ ነው፡፡ ለምሳሌ ከማሽከርከር በፊት ፡- ለማሽከርከር ጤነኛ መሆን ፤ ተሸከርካሪን መፈተሸ ፤ የመንገድ የአየርና የትራፊክ ሁኔታ በማሽከርከር ስራ ላይ የሚያመጣው ችግር መገመት
         ወዘተ ማለት ነው፡፡{'\n'}
       - <Text style={styles.bold}>መነቃቃት/ተነሳሽነት/</Text>:-  በሰዎች ዉስጥ ያለ ሁኔታ ሁኖ ባህሪን ወደ ግብ የሚያንቀሳቅሰ
     ሂደት ነው፡፡ መንቀሳቀስ ባህሪን ለመምራትና ጠንክሮ እዲቀጥል ለማድረግ፣ ችግሮችን በመፍታትና
     በመቆጣጠር ለውጤት እንድንሠራ እንዲሁም በትራፊክ ፍሰት ውስጥ ምን ምርጫ እንዳለው
     ለመወሰን ያስችላሉ፡፡ {'\n'} 
       - <Text style={styles.bold}>መረጃን የመሠብሰብና የመተርጎም ሂደት</Text>:- በስሜት ህወዋሶችን የመጣን መረጃ የመቀበል
      ፤የመለወጥና ወደ አምሮኦችን የመላክ ሂደት ነው፡፡ የስሜት ህዋሶች የሚባሉት መስማት፣ማሽተት
     መቅመስና /ለአሽከርካሪ መረጃ ለሠብሠብ አያገለግልም/ መዳሰስ ናቸው፡ ከ80 -90 % አካባቢን
     ለማወቅና መረጃን ለመሠብሰብ የሚያገለግል በማየት ነው፡፡{'\n'}
      - <Text style={styles.bold}>ትኩረት</Text>:- በስሜት ህዋሶቻችን አማካኝነት ከሚደርሱን መረጃዎች መካከል ዋናውንና
     ተፈላጊውን የመምረጥ ሂደት ነው፡፡{'\n'}
      - <Text style={styles.bold}>ማስተዋል</Text>:- በስሜት ህዋሳቶቻችን አማካኝነት የመጠን መረጃ የመምረጥ ማቀናበርና ትርጉም
     የመስጠት ሂደት ነው፡፡
      </Paragraph>
      <Subtitle>1.6 የአሽከርካሪዎች ሙያዊ ስነ - ምግባር :-</Subtitle>
      <Paragraph>ሙያ የተከበረና የተወደደ የስራ መስክ ሆኖ በተወሰነ የዕውቀት መስክ በትምህርትና በስልጠና
      የሚገኝ ሲሆን ዞሮ ተመልሶ ህብረተሰቡን የሚያገለግል ነው፡፡{'\n'}
      - <Text style={styles.bold}>ስነ - ምግባር </Text> - መጥፎውን በመተው መልካሙን እንድንከተል የሚያበረታታ እሴት ነው፡፡ {'\n'}
      - <Text style={styles.bold}>ሙያዊ ስነ -ምግባር</Text> - ባለሙያው እንደተሠማራበት የሙያ አይነት ያለምንም የውጭ ኃይል
መገፍፋት ስራውን በተሟላ ሁኔታ ለማከናውን የሚያስችል እሴት ነው፡፡

      </Paragraph>
      <Subtitle>1.7 አሽከርካሪዎች ሊከተሏቸው የሚገቡ መርሆች :- </Subtitle>
      <Paragraph>
        - የትራፊክ ደህንነትና የመንገድ ትራንስፓርት ሰላማዊ እንቅስቃሴን በሚመለከት ወሳኝ ሚና
መጫወት {'\n'}
        - አሽከርካሪው የራሱን ብቻ ሳያሆን የህብረተሠቡንም ደህንነትና ህይወት መጠበቅ{'\n'}
        - በአሽከርካሪው ስህተትና የቴክኒክ ጉድለት የሚመጣን አደጋ መቀነስ {'\n'}
        - ባለማወቅና በቸልተኝነት ሊደርሱ ከሚችሉ አደጋዋች አስቀድሞ መጠንቀቅ
      </Paragraph>
      <Text style={styles.bold}>ሞገደኛና ክልፍልፍ አነዳድ</Text>
      <Paragraph>ሞገደኛ አነዳድ በመጥፎ ስሜት ውስጥ ሆኖ የማሽከርከር ውጤት ነው፡፡
      የሞገደኛ አሽከርካሪ ባህሪያት{'\n'}
       - አልኮል ፤አደንዛዥ ዕፅ ፤ከባድ መድሃኒት ወስዶ ማሽከርከር {'\n'}
       - ንዴት ውስጥ ሆኖ ማሽከርከር {'\n'}
       - ፍርሐት ውስጥ ሆኖ ማሽከርከር {'\n'}
       - የአነዳድ ስህተትን አለመቀበል {'\n'}
       - ትኩረት ሳይሰጡ ማሽከርከር {'\n'}
       - ሱስ ውስጥ ሆኖ ማሽከርከር {'\n'}
       - ህግ አለማክበር
      </Paragraph>
      <Text style={styles.bold}>* የሞገደኛ አነዳድ ባህሪያትን በ 3 ክፍሎች ማየት ይችላል፡፡</Text>
      <Paragraph>
      1.<Text style={styles.bold}> ትዕግስት ማጣትና ትኩረት አለመስጠት :- </Text>
        ከትዕግስት ማጣት እና ትኩረት አለመስጠት የሚመደብ ሞገደኛ አነዳድ ፈርጆች {'\n'}
        - ትራፊክ መብራት መጣስ /ቀይ መብራት መጣስ /  {'\n'}
        - ያለአግባብ ረድፍን መቀየር {'\n'}
        - ከፍጥነት በላይ ማሽከርከር {'\n'}
        - ተጠግቶ ማሽከርከር {'\n'}
        - የማቋረጫ መንገዶችን መዝጋት /ቅድሚያ አለመስጠት / {'\n'}
        - አስፈላጊውን ምልክት አለማሳየት {'\n'}
        - ፍጥነት መቀነስና መጨመር{'\n'}
        2.<Text style={styles.bold}> ተፅዕኖ የማድረግ ትግል ውስጥ የሚመደብ :- </Text>
         - መንገድ መዝጋት {'\n'}
         - በቂ ርቀት እንዳኖር አድርጉ ማስከርከር{'\n'}
         - ፅሩምባ በተደጋጋሚ ማጮህ{'\n'}
         - መሳደብ ፤ ማስፈራራት{'\n'}
         - በበቀል ስሜት በድንገት ፍሬን መያዝ{'\n'}
         3.<Text style={styles.bold}> ግዴለሽነትና መንገድ ላይ ፀብ መፍጠር :- </Text>
         - በአልኮል መጠጥ ተመርዞ ማሽከርከረ {'\n'}
         - በጣም በከፍተኛ ፍጥነት ማሽከርከር መሳሪያ መደቀን ወይም መተኮስ {'\n'}
         - በመንገድ ዳር መኪና በማቆም ማስፈራራት ወይም መደባደብ {'\n'}
         - ለአደጋ በሚጋልጥ መልኩ ተሸከርካር አቁሞ መሄድ
      </Paragraph>

      <Subtitle>1.8 ሶስቱ የማሽከርከር ባህሪያት ዘርፎች</Subtitle>
      <Paragraph>
        - ሶስቱ የማሽከርከር ባህሪያት ዘርፎች የሚባሉት የስሜት ባህሪ፣ የመገንዘብ ባህሪ እና የክህሎት
ባህሪ ናቸው {'\n'}
1.<Text style={styles.bold}> የስሜት ባህሪ :-</Text> ፍላጉትን ፤ አመለካከትን ፤እሴትን ፤ መነሳሳትን ፤ ማንኛውንም ግብ ያለመ
የሰዎች ድርግት የሚመለከት ነው {'\n'}
2.<Text style={styles.bold}> የመገንዘብ ባህሪ :-</Text> መርዳትን ፤ ማሰብን ፤ ማናቸውንም ውሳኔ መስጠትንና የሰዎችን ድርጊት
ማጤን ነው፡፡ {'\n'}
3.<Text style={styles.bold}> የክህሎት ባህሪ :-</Text> በአዕምሮ አዛዥነትና በአካል እንቅስቃሴ የሚፈፀሙ ማናቸውንም የክህሎት
ባህሪያ ያካተተ ነው፡፡ እነኝህ ባህሪያት የአዕምሮና የአካል እንቅስቃሴ ቅንጅትን የሚጠይቁ
ናቸው፡፡ ለምሳሌ፡- ረድፍ ከመቀየር በፊት ምልክት ማሳየት ትልቅ እንቅስቃሴን የሚጠይቅ
ድርጊት ሲሆን የአይናችንና የእጃችንን ቅንጅት ፤ የአካል ዝግጁነትን / ምናልባት ፍሬን መያዝ
ካላስፈለገ / ፤ወደ ኃላ ለማየት የአንገት እንቅስቃሴን ፤ የአተነፋፈስ ለውጥ ሂደትንና የመሳሰሉትን
በተመሳሳይ ጊዜ ውስጥ መፈፀምን የሚጠይቅ ነው፡፡
      </Paragraph>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  bold: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10
  },
})


