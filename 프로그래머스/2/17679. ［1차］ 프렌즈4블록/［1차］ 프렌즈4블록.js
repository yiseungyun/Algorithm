function solution(m, n, board) {
    let board_list = [];
    board.forEach((board) => {
        board_list.push(board.split(""));
    })
    board = board_list;
    
    function checkBoard() {
      let location = new Set();
      for (let i = 0; i < m-1; i++) {
        for (let j = 0; j < n-1; j++) {
          if ((board[i][j] !== 0) && (board[i][j] === board[i][j+1]) && (board[i][j] === board[i+1][j]) && (board[i+1][j] === board[i+1][j+1])) {
            location.add([i, j]);
          }
        }
      }
      return location;
    }
    
    function fillBlank() {
      for (let i = m-1; i > 0; i--) {
        for (let j = 0; j < n; j++) {
          if (board[i][j] === 0) {
            let k = i-1;
            while (board[k][j] === 0 && k > 0) {
                k--;
            }
            board[i][j] = board[k][j];
            board[k][j] = 0;
          }
        }
      }
    }
    
    function countBlank() {
      let count = 0;
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          if (board[i][j] === 0) count++;
        }
      }
      return count;
    }
    
    let location = checkBoard();
    while (location.size !== 0) {
      for (const [x, y] of location) {
        [board[x][y], board[x][y+1], board[x+1][y], board[x+1][y+1]] = [0, 0, 0, 0];
      }
      fillBlank();
      location = checkBoard();
    }
    
    return countBlank();
}

