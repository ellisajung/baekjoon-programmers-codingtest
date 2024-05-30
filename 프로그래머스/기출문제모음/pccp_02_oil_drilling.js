/* 
Description
[This test has separate scores for accuracy and efficiency testing.]

Oil has been discovered in a grid-shaped piece of land with a vertical length 
of n and a horizontal length of m. The oil is buried in multiple chunks. 
You want to find the position for drilling a borehole vertically, 
only once, to extract the most oil. The borehole must penetrate only one column, 
and you cannot drill between columns.

석유시추-1.drawio.png

For example, let's assume that oil has been discovered in a grid-shaped 
piece of land with a width of 8 and a height of 5, as shown in the above image.
Oil connected vertically and horizontally forms a single chunk, 
and the size of an oil chunk is determined by the number of cells it contains. 
In the image, the sizes of the oil chunks are 8, 7, and 2 from left to right.

석유시추-2.drawio.png

The borehole extends downward from the installed position, as shown in the above image. 
If the borehole passes through a part of an oil chunk, 
it can extract all the oil belonging to that chunk. 
The amount of oil that the borehole can extract is the sum of the sizes of all the oil chunks 
that the borehole passes through. The amount of oil that can be extracted depending on the 
position of the borehole is as follows.

Position of borehole	Obtained chunks	    Total oil amount
1	                    [8]	                8
2	                    [8]	                8
3	                    [8]	                8
4	                    [7]	                7
5	                    [7]	                7
6	                    [7]	                7
7	                    [7, 2]          	9
8	                    [2]	                2

As shown in the image on the right, installing the borehole at column 7 allows the extraction of oil from chunks of sizes 7 and 2, resulting in the highest oil extraction amount of 9.

A two-dimensional integer array land representing the land with buried oil and oil chunks is given as a parameter. Complete the solution function to return the maximum amount of oil that can be extracted by installing one borehole.

Limitations
1 ≤ Length of land = Vertical length of the land = n ≤ 500
1 ≤ Length of land[i] = Horizontal length of the land = m ≤ 500
land[i][j] represents the information of the land at row i+1 and column j+1.
land[i][j] is either 0 or 1.
If land[i][j] is 0, it represents empty land; if it's 1, it represents land with oil.
Limitations for accuracy test cases
1 ≤ Length of land = Vertical length of the land = n ≤ 100
1 ≤ Length of land[i] = Horizontal length of the land = m ≤ 100
Limitations for efficiency test cases
There are no additional limitations beyond the given conditions.

Input/Output example
land	                                                                                                                                        result
[[0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0], [1, 1, 0, 0, 0, 1, 1, 0], [1, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 1, 1]]	            9
[[1, 0, 1, 0, 1, 1], [1, 0, 1, 0, 0, 0], [1, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0], [1, 0, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1]]    16
*/

// 풀이 1 아 진짜 모르겠다...

// borehole 순회하며
// map으로 순회하며
// 이웃하는 요소 중 1만 filter
// map 배열의 길이 = chunks
// maxChunks와 비교후 최댓값 maxChunks에 할당

const getNeighborsIndex = (row, col, rows, cols) =>
  [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ]
    .map(([_row, _col]) => [row + _row, col + _col]) // map(e => row + e[0], col + e[1])
    .filter(
      ([_row, _col]) => 0 <= _row && _row < rows && 0 <= _col && _col < cols
    );
// console.log(getNeighbors(1, 2, 7, 6));
// [ [ 1, 1 ], [ 1, 3 ], [ 0, 2 ], [ 2, 2 ] ]

const solution = (land) => {
  const [m, n] = [land[0].length, land.length];
  let cp = 0;
  let rp = 0;
  let currChunks = 0;
  let maxChunks = 0;

  for (let borehole = 0; borehole <= m; borehole++) {
    if (land[0][borehole]) {
      currChunks++;
    }
  }
};

// 풀이 2
// 행렬 뒤집은 후
// borehole(row) 순회하며
// 해당 row에서 1인 요소의 인덱스들만 구한 후, 배열의 길이를 ch에 더함
// 아래 위 행에서 해당 인덱스에서 1인 요소의 인덱스 구하고, 배열의 길이를 ch에 더함
// 또 다시 반복 ...
// 이걸 다 끝낸 후의 ch들을 비교 후
// 최댓값 반환

function transposeMatrix(matrix) {
  // 입력 행렬의 행과 열 길이를 구합니다.
  const rows = matrix.length;
  const cols = matrix[0].length;
  // 열과 행이 바뀐 행렬을 저장할 배열을 생성합니다.
  const transposed = [];
  // 각 열을 순회하면서 해당 열의 값을 새로운 행에 추가합니다.
  for (let j = 0; j < cols; j++) {
    transposed[j] = [];
    for (let i = 0; i < rows; i++) {
      transposed[j][i] = matrix[i][j];
    }
  }
  return transposed;
}

const solution = (land) => {
    let currCh = 0
    let maxCh = 0
    transposeMatrix(land)

    for (e in land) {
        
    }

}

const land = [
  [1, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0],
  [1, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1],
];
// 16

console.log(transposeMatrix(land));
// [
//   [1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 1],
//   [1, 1, 1, 0, 0, 0, 1],
//   [0, 0, 0, 1, 1, 0, 1],
//   [1, 0, 0, 0, 0, 0, 1],
//   [1, 0, 1, 0, 1, 0, 1],
// ];
