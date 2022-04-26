//The Matrix class has the following properties:
//number of rows of the matrix
//number of columns of the matrix
//elements of the matrix in the form of a 2D array

//get the number of rows
//get the number of columns
//set the elements of the matrix at the given position (i,j)
//add two matrices. If the matrices cannot be added log, "NOOP"
//multiplying the two matrices

class Matrix{
    private _rows: number;
    private _columns: number;
    private _elements: number[][] = [];

    constructor(_rows:number,_columns:number){
        this._rows = _rows;
        this._columns = _columns;
        this._elements = this.createMatrix();
    }
    public get rows(): number {
        return this._rows;
    }
    public get column(): number {
        return this._columns;
    }
    public get elements(): number[][] {
        return this._elements;
    }
    public setElements(row:number, column: number,value: number) {
        this._elements[row-1][column-1] = value;
    }

    private createMatrix = (): number[][] => {
        let arrayOfElements: number[][] =[]
        for (let i = 0; i < this._rows; i++) {
            arrayOfElements[i] =[]
            for (let j = 0; j < this._columns; j++) {
                arrayOfElements[i][j] = 0
            }
        }
        return arrayOfElements
    }
     public addOfMatrix = (matrix: number[][]): string | number[][] => {
        if (matrix[0].length !== this._columns || matrix.length !== this._rows ) {
            return "NOOP"
        } else {
            for (let i = 0; i < this._rows; i++) {
                for (let j = 0; j < this._columns; j++) {
                    this._elements[i][j] += matrix[i][j];
                }
            }
            return this._elements;
        }
    }

    public timesOfMatrix = (matrix: number[][]) => {
        if (this._columns !== matrix.length) {
            return "NOOP"
        } else {
            let res: number[][] = [];
            let summmedElement: number = 0;
            for (let i = 0; i < this._rows; i++) {
                res[i] = []
                for (let j = 0; j < matrix[0].length; j++) {
                    for (let k = 0; k < this._columns; k++) {
                        summmedElement += this._elements[i][k]*matrix[k][j];
                    }
                    res[i][j] = summmedElement;
                    summmedElement = 0;
                }
            }
            this._elements = res
            return res;
        }
    }
}
let matrixSum1 = new Matrix(2,2)
let matrixSum2 = new Matrix(2,2)
let matrixSum1NOOP = new Matrix(3,3)
let matrixSum2NOOP = new Matrix(2,2)
let matrixTimes1 = new Matrix(2,2)
let matrixTimes2 = new Matrix(2,2)

matrixSum1.setElements(1,1, 1)
matrixSum1.setElements(1,2, 2)
matrixSum1.setElements(2,1, 1)
matrixSum1.setElements(2,2, 2)

matrixSum2.setElements(1,1, 1)
matrixSum2.setElements(1,2, 2)
matrixSum2.setElements(2,1, 1)
matrixSum2.setElements(2,2, 2)

matrixSum1NOOP.setElements(1,1, 1)
matrixSum1NOOP.setElements(1,2, 2)
matrixSum1NOOP.setElements(1,3, 2)
matrixSum1NOOP.setElements(2,1, 1)
matrixSum1NOOP.setElements(2,2, 2)
matrixSum1NOOP.setElements(2,3, 2)
matrixSum1NOOP.setElements(3,1, 1)
matrixSum1NOOP.setElements(3,2, 2)
matrixSum1NOOP.setElements(3,3, 2)


matrixSum2NOOP.setElements(1,1, 1)
matrixSum2NOOP.setElements(1,2, 2)
matrixSum2NOOP.setElements(2,1, 1)
matrixSum2NOOP.setElements(2,2, 2)

matrixTimes1.setElements(1,1, 1)
matrixTimes1.setElements(1,2, 2)
matrixTimes1.setElements(2,1, 1)
matrixTimes1.setElements(2,2, 2)

matrixTimes2.setElements(1,1, 1)
matrixTimes2.setElements(1,2, 2)
matrixTimes2.setElements(2,1, 1)
matrixTimes2.setElements(2,2, 2)

console.log(matrixSum1.addOfMatrix(matrixSum2.elements));
console.log(matrixSum1NOOP.addOfMatrix(matrixSum2NOOP.elements));
console.log(matrixTimes1.timesOfMatrix(matrixTimes2.elements));

