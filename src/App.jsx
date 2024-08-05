
function App() {

  console.time("Time")
  function bubbleSort(arr = [34, 7, 23, 32, 5, 62, 13, 45]) {
    let n = arr.length - 1
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }
    return arr
  }
  console.log(bubbleSort());
  console.timeEnd("Time")

  return (<></>)
}

export default App
