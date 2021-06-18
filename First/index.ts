//The basics

// 1. type inference
const my_unspecific_var = 600;
my_unspecific_var = "typescript, save me from being a dumb🐴";


// 2. Autocompletion 
/**
 * We literally program computers that have indefinite memory. 
 * Let's let them do the hard work.
 */

type MyAwesomeObj = {
	without: string;
	typescript: number[];
	iDef: {
		wouldve: "forgotten" | "remembered";
		allOf: boolean;
		theKeys: string[];
	};
	ofThisObj: boolean | "cheesecake";
}

// ----define an object of type MyAwesomeObj---- 



// 3a. Functions
type FuncVar = (number) => boolean;

function outerFunc(func: FuncVar): string {
	return func(5) ? "five ain't the one" : "lucky day!";
}

const innerFunc: FuncVar = num => {
	return num === 5;
}

// ----call outerFunc below passing in innerFunc as the parameter----


// 3b. Functions cont.
const x = '29';
const y = '522';
let myNumber = 700;

function addToString(a: number, b: number): string {
	return `${a + b}`;
}

addToString(x, y); //an example of previous you & TS helping future you out

myNumber = addToString(58, 10); //mutability of types for variables is not allowed, well, because you should never do this

//if you set a type for a var that you're defining from non-hardcoded values,
//TS will save you from making mistakes like this:
const myOtherNumber: number = addToString(40, 19) * 2;


// 3c. Functions cont.
function myFunc(num: number): boolean {
	//TS can help you while you're writing your functions as well
	if (num) {
		if (num > 5) {
			return true;
		}
		if (num === 100) {
			return false;
		}
		if (num === 'hello') {
			return true;
		}
		if (5 === 6) {
			return true;
		}
	}
}



// 4. TS will make you a better JS developer over time
const fetchMyData = async (): Promise<{success: boolean; msg: string}> => {
	let x = 0;
	for (let i = 0; i < 100000; i++) {
		x += i;
	}
	return {success: true, msg: "fakeData"};
}

const handleFetch = async (): Promise<string> => {
	const res = fetchMyData();

	if (res.success) {
		return `GOOD --- ${res.msg}`;
	}
	return `BAD --- ${res.msg}`
}

