import React, {useEffect, useState} from 'react'
import { Text, TouchableOpacity, View , StyleSheet } from 'react-native'
import Questions1 from '../../asset/question-1';
import Questions2 from '../../asset/question-2';
import Questions3 from '../../asset/question-3';
import Questions4 from '../../asset/question-4';
import Questions5 from '../../asset/question-5';
import Questions6 from '../../asset/question-6';
import Questions7 from '../../asset/question-7';
import Questions8 from '../../asset/question-8';
import Questions9 from '../../asset/question-9';
import Questions10 from '../../asset/question-10';


const shuffleArray = (array) => {
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j] , array[i]];
  }
}

export default function Test1({ navigation , route }) {
    let Questions;
    const testNumber = route.params.quiz

    switch (testNumber) {
      case 'test-1':
        Questions = Questions1
        break ;
      case 'test-2':
        Questions = Questions2 
        break ;
      case 'test-3' :
        Questions = Questions3
        break
      case 'test-4':
        Questions = Questions4
        break ;
      case 'test-5':
        Questions = Questions5 
        break ;
      case 'test-6' :
        Questions = Questions6
        break
      case 'test-7' :
        Questions = Questions7
        break; 
      case 'test-8' :
        Questions = Questions8
        break;
      case 'test-9' : 
        Questions = Questions9 
        break;
      case 'test-10' : 
        Questions = Questions10;
        break;      
    }

    
    const [questions , setQuestions] = useState();
    const [options , setOptions] = useState([]);
    const [ques , setQues] = useState(0);
    const [score , setScore] = useState(0);

    const getQuiz = async() => {
      setQuestions(Questions)
      setOptions(generateOptionsAndShuffle(Questions[0]))
    }
  useEffect(() => {
    getQuiz()
  } ,[])


  const generateOptionsAndShuffle = (_question) => {
       const options = [..._question.incorrect_answers];
       options.push(_question.correct_answer)
       shuffleArray(options)
       
       return options
  }

  const handleSelectedOption = (_option) => {
    if(_option === questions[ques].correct_answer){
      setScore(score+ 2)
    }
    if(ques !==49 ){
      setQues(ques + 1)
      setOptions(generateOptionsAndShuffle(questions[ques + 1]))
    }
    if(ques === 49){
      navigation.navigate('Result' , {
        score: score
      })
    }}


   return (
      <View style={styles.container}>
        { questions && 
        (<View style={styles.parent}>
          <View style={styles.top}>
          <Text style={styles.question}>{ques + 1}. {Questions[ques].question}</Text>
        </View>
        <View style={styles.opitions}>
          {Questions[ques].type == 'true false' ? 
          <View>
          <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOption(options[0])}>
            <Text style={styles.opition}>{options[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOption(options[1])}>
            <Text style={styles.opition}>{options[1]}</Text>
          </TouchableOpacity>
          </View> : 
          <View>
         <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOption(options[0])}>
            <Text style={styles.opition}>{options[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOption(options[1])}>
            <Text style={styles.opition}>{options[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOption(options[2])}>
            <Text style={styles.opition}>{options[2]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOption(options[3])}>
            <Text style={styles.opition}>{options[3]}</Text>
          </TouchableOpacity>
          </View> }
          
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.pop()}>
            <Text style={styles.buttonText}>አቋርጥ </Text>
          </TouchableOpacity>
        </View>
        </View>)}
      </View>
    )
  }

  const styles = StyleSheet.create({
   
    bottom: {
      marginBottom: 24,
      flexDirection: 'row',
    },

    button: {
      backgroundColor: '#1A759F',
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 16,
      alignItems: 'center',
      marginVertical: 24
    },

    buttonText: {
      fontSize: 18,
      fontWeight: '600',
      color: '#fff'
    },

    container: {
      paddingTop: 40,
      paddingHorizontal: 20,
      height: '100%'
    },

    opition: {
      fontSize: 18,
      fontWeight: '500',
      color: '#fff'
    },

    opitions: {
      marginVertical: 16,
      flex: 1,
    },

   optionButton: {
     padding: 12,
     marginVertical: 6,
     backgroundColor: '#34A0A4',
     borderRadius: 12
   },

   parent: {
    height: '100%'
   },

   question: {
    fontSize: 28,
    color: 'black'
  },
  
   top: {
    marginBottom: 16,
  },
  })

