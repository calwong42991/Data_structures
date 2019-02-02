const BubbleSortFn = require('../Bubble-Sort/BubbleSort');
const CountingSortFn = require('../Counting-Sort/CountingSort');
const InsertionSortFn = require('../Insertion-Sort/InsertionSort');
const MergeSortFn = require('../Merge-Sort/MergeSort');
const QuickSortFn = require('../Quick-Sort/QuickSort');
const SelectionSortFn = require('../Selection-Sort/SelectionSort');


const BubbleSort = new BubbleSortFn();
const CountingSort = new CountingSortFn();
const InsertionSort = new InsertionSortFn();
const MergeSort = new MergeSortFn();
const QuickSort = new QuickSortFn();
const SelectionSort = new SelectionSortFn();

let arr = [3,4,567,71,12,3,4,73,4,5,3,57,8,9,324,43,4,345,];

console.log('BubbleSort:    ', BubbleSort.sort(arr));
console.log('CountingSort:  ', CountingSort.sort(arr));
console.log('InsertionSort: ', InsertionSort.sort(arr));
console.log('MergeSort:     ', MergeSort.sort(arr));
console.log('QuickSort:     ', QuickSort.sort(arr));
console.log('SelectionSort: ', SelectionSort.sort(arr));