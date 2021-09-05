// terminal
// tsc --init 하면 tsconfig.json 생성됨
// tsc main.ts 하면 main.ts를 main.js로 컴파일함

// compiling and variables

const a: number = 5.321;

interface MyObj {
    x: number;
    y: number;
    z?: number;
}

const obj: MyObj = {
    x: 5.32,
    y: 7
}

const obj2: MyObj = {
    x: 123,
    y: 213
}

let isDob = true;

obj.z = 123;
