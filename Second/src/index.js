import AWS from 'aws-sdk';

const myFirstObj = {
	a: '588',
	b: '123'
}

const user = 'typescript_lov3r_583';
const usr = ['T', 'S', ',', 'l', 'u', 'v'];

const strFromArr = user.join('');

const S3 = new AWS.S3({
	credentials: {
		accessKeyId: 234234,
		secretAccessKey: 134401123
	}
});

const handleFetch = async () => {
	const res = S3.upload({
		Key: `${keyPrefix}${pdfFileName}`,
		Body: doc,
		ContentType: 'application/pdf',
		ACL: 'public-read'
	}).promise();
	return res;
}

let data;
if (handleFetch().data) {
	data = handleFetch().data;
}

const myPerson = {
	name: "TSluver",
	age: 35
}


function personMethod() {
	return myPerson.friend;
}
personMethod();


let a = '100';
let b = 8;
let c = 19;
c = ++a;
b += a;

function addNumber(num1, num2) {
	return num1 + num2;
}

function handleSomething(obj) {
	let finalNum = 10;
	let weMadeIt = false;
	if (obj && obj.success) {
		weMadeIt = true;
		if (obj.age && typeof obj.age === 'number') {
			finalNum += addNumber(obj.a, obj.b);
		}
	}
	return finalNum;
}
handleSomething(myFirstObj);