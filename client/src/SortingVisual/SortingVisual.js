import React, {useState} from 'react';
import { getMergeSortAnimations } from '../SortingAlgorithm/sortingAlgorithm';
// import './SortingVisual.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 50;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'blue';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default function SortingVisual() {

  const [array, setArray] = useState([]);

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 730));
    }
    setArray(array);
    console.log(array)
  }
//ISSUE HERE WITH ANIMATION
  const mergeSort=()=> {
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementById('array-bar');
      const isColorChange = i % 3 !== 2;
      
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        console.log(arrayBars[barOneIdx].style)
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }

    }
  }

  const quickSort= () => {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }

  const heapSort= () => {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }

  const bubbleSort= () => {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }

  // NOTE: This method will only work if your sorting algorithms actually return
  // the sorted arrays; if they return the animations (as they currently do), then
  // this method will be broken.
  const testSortingAlgorithms= () => {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getMergeSortAnimations(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray), "test");
    }
  }

    return (
      <div className=" bg-slate-300 "
          style={{
            // display: "inline-block",
          }}>
    {/* SORT NAV */}
        <div className="space-x-4">
          <button onClick={resetArray} className="bg-indigo-200 rounded-md" type="button">
            Generate New Array
          </button>
          <button onClick={mergeSort}>Merge Sort</button>
          <button onClick={quickSort}>Quick Sort</button>
          <button onClick={heapSort}>Heap Sort</button>
          <button onClick={bubbleSort}>Bubble Sort</button>
          <button onClick={testSortingAlgorithms}>
            Test Sorting Algorithms
          </button>
        </div>
    {/* Array Bars */}
        <div className="w-full">
         {array.map((value, index) => (
          <div
            id = 'array-bar'
            key={index}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
              display: "inline-block",
              color: PRIMARY_COLOR,
              fontSize: "10px",
              margin: "0 1px",
              width: "10px",
              position: "absolute",
              bottom: "0px"
            }}
          >
            1
          </div>
          ))}
        </div>
      </div>
    );
}


// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}