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
        let elementsArr: number[][] =[]
        for (let i = 0; i < this._rows; i++) {
            elementsArr[i] =[]
            for (let j = 0; j < this._columns; j++) {
                elementsArr[i][j] = 0
            }
        }
        return elementsArr
    }
}

let matrix1 = new Matrix(2,2)
let matrix2 = new Matrix(2,2)
matrix1.setElements(1,1,2)
matrix1.setElements(1,2,3)
matrix1.setElements(2,1,2)
console.log(matrix1.elements);

matrix2.setElements(1,1,2)
matrix2.setElements(1,2,1)
matrix2.setElements(2,1,1)

console.log(matrix2.elements);

