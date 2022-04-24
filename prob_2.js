"use strict";
//The Matrix class has the following properties:
//number of rows of the matrix
//number of columns of the matrix
//elements of the matrix in the form of a 2D array
//get the number of rows
//get the number of columns
//set the elements of the matrix at the given position (i,j)
//add two matrices. If the matrices cannot be added log, "NOOP"
//multiplying the two matrices
class Matrix {
    constructor(_rows, _columns) {
        this._elements = [];
        this.createMatrix = () => {
            let elementsArr = [];
            for (let i = 0; i < this._rows; i++) {
                elementsArr[i] = [];
                for (let j = 0; j < this._columns; j++) {
                    elementsArr[i][j] = 0;
                }
            }
            return elementsArr;
        };
        this._rows = _rows;
        this._columns = _columns;
        this._elements = this.createMatrix();
    }
    get rows() {
        return this._rows;
    }
    get column() {
        return this._columns;
    }
    get elements() {
        return this._elements;
    }
    setElements(row, column, value) {
        this._elements[row - 1][column - 1] = value;
    }
}
let matrix1 = new Matrix(2, 2);
let matrix2 = new Matrix(2, 2);
matrix1.setElements(1, 1, 2);
matrix1.setElements(1, 2, 3);
matrix1.setElements(2, 1, 2);
console.log(matrix1.elements);
matrix2.setElements(1, 1, 2);
matrix2.setElements(1, 2, 1);
matrix2.setElements(2, 1, 1);
console.log(matrix2.elements);
