import React, { useRef } from 'react';
import exampleImage from './assets/u1.jpg';
import * as tf from '@tensorflow/tfjs';
import hoverSound from './assets/audio/dawg1.mp4';
import noSound from './assets/audio/No.mp4';
import nononoSound from './assets/audio/Nonono.mp4';

let model = null;
tf.loadLayersModel('/model.json').then(loadedModel => {
    model = loadedModel;
}).catch(error => console.error('Failed to load model', error));

const classLabels = ['NO!', 'Yes!', "That's not a dawg"]

function ImageRecognizerComponent1() {
    const imageRef = useRef(null);
    var audioRef = useRef(new Audio(hoverSound));

    async function recognizeImage() {
        // 
        if (!model) {
            console.log('Model not loaded yet');
            return;
        }

        const tensor = tf.browser.fromPixels(imageRef.current)
            .resizeNearestNeighbor([224, 224])
            .toFloat()
            .expandDims(0);

        try {
            const prediction = await model.predict(tensor);
            const probabilities = await prediction.data();
            // Get the class index with the highest probability
            const predictedIndex = prediction.argMax(1).dataSync()[0];
            document.getElementById('i1').value = classLabels[predictedIndex];
            if (predictedIndex == 0){
                audioRef = useRef(new Audio(nononoSound));
                playAnswerAudio;
            }
            if (predictedIndex == 2){
                audioRef = useRef(new Audio(noSound));
                playAnswerAudio;
            }
           
        } catch (error) {
            console.error('Error during prediction', error);
        }
    }
    const playAudio = () => {
        audioRef.current.currentTime = 0; // Reset audio to the beginning
        audioRef.current.play();
    };

    const playAnswerAudio = () => {
        audioRef.current.currentTime = 0; // Reset audio to the beginning
        audioRef.current.play();
    }

    return (
        <div className="centered-heading">
            <h3>Is it a daaawg? #1</h3>
            <img ref={imageRef} src={exampleImage} width="224" height="224" style={{ borderRadius: '50%', objectFit: 'cover' }} /> <br/>
            <button onMouseEnter={playAudio} onClick={recognizeImage}>Can I pet that daawg?</button> <br/>
            <input id="i1" onMouseEnter={playAudio} type="text"  readOnly />
        </div>
    );
}

export default ImageRecognizerComponent1;