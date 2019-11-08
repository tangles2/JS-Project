# JS-Project
Thomas Angles

JavaScript Project

Sudoku Board Generator

11/8/2019

**STEPS FOR ALGORITHM**

1.  Create multiple 2D arrays for indexing and filling the entire board.\

  a. Array 1: 2D array for holding the final values of the Sudoku Board.
  
  b. Array2: a 2D array of size 81 each of which has a size of 2. Of which, element 0 is the corresponding Row, and element 1 is the corresponding Column.
  
2.  Call my insert number function.

  a.  This function goes through the entire board and initializes each space with a random number for the board positions array to act as the position in the 2nd array from step 1. Then, it makes 2 variables: rowCheck and colCheck.
  
  b. After each value is checked, the Sudoku board at the rowCheck colCheck is set to the checked Value.
  
  c. After the valid value is added to the Sudoku Board, the corresponding spot from the Board Positions array is removed so it does not check it again.
  
  d. It does this for 81 values.
  
3. Check location which takes in a row and col variable.

  a. Makes an array from 1 to 9. For keeping track of which numbers are not used in each row, column, and 3x3 block.
  
  b. Row Check
  
    -. Loop through all values from passed in row.
    
    -. If it is a valid number (not 0 or &#39;-&#39;), get the index and remove it from the array.
    
  c. Column check
  
    -. Loop through all values from passed in Column.
    
    -. If it is a valid number (not 0 or &#39;-&#39;), get the index and remove it from the array.
    
  d. Block check
  
    -. Initialize two new variables rowBlock, and colBlock. These values are set to the corresponding block from the passed in row and column.
    
    -. Loop through all values from passed in the Block.
    
    -. If it is a valid number (not 0 or &#39;-&#39;), get the index and remove it from the array.
    
  e. Return a random value from the remaining array to be used in step 2b.
  
4. Sudoku Board is the logged in the console as a JavaScript Table.

5. Use toHTML function to conver JavaScript Table to an HTML Table.
