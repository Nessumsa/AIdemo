import React from 'react';


import ImageRecognizerComponent1 from './ImageRecognizerComponent1'
import ImageRecognizerComponent2 from './ImageRecognizerComponent2'
import ImageRecognizerComponent3 from './ImageRecognizerComponent3'
import ImageRecognizerComponent4 from './ImageRecognizerComponent4'
import ImageRecognizerComponent5 from './ImageRecognizerComponent5'
import './ImgRegCom.css';

function App() {
  return (
    <div className="centered-heading">
      <h1> Who's a good boy/girl?</h1>
      <table>    
         <tr> <td> <ImageRecognizerComponent1 /> </td>
              <td> <ImageRecognizerComponent2 /> </td> 
              <td> <ImageRecognizerComponent3 /> </td> 
              <td> <ImageRecognizerComponent4 /> </td> 
              <td> <ImageRecognizerComponent5 /> </td></tr> 
      </table>
    </div>
  );
}

export default App;
