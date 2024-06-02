function fibonacci(num) {
// your code here
	let a=0,b=1,res=0;
	num-=2;
	while(num-->0){
		res=a+b;
		a=b;
		b=res;
	}
	return res
}

module.exports = fibonacci;
