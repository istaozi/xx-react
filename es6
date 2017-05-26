let const声明变量

箭头函数

/*
* es6中允许使用 箭头 （=>）定义函数
* var f= v=>v;
*
* var f=function (v){
*   return v
* }
*
*如果箭头函数不需要参数或者需要多个参数，就是用一个圆括号代表参数部分
* var f=function(){return 5}
* var f=()=>5
*
* var f=function(a,b){return a+b};
* var f=(a,b)=>a+b
*
* const isEven=function (n){
*   if(n%2==0){
*       return n;
*   }
*   cons isEven=n =>n%2==0
* }
*
*
*
 *const isEven=n =>n%2==0
 * const square=n=>n*n;
 * console.log(square(4));
 * console.log(isEven(45))
 *
*  箭头函数少出 简化回调函数;
*  箭头函数注意点：
*  1）函数体内的this对象，就是定义是所在的对象，而不是使用时所在的对象
* this对象的志向是可变的，但是箭头函数中，他是固定的。
* functioin foo(){
* setTimeout(()=>console.log('id:',this.id); 100)
* }
* var id=21;
* foo.call({id:42})
*
* function Timer(){
*   this.s1=0;
*   this.s2=0;
*   setInterval( ()=> this.s1++,1000)
*   setInterval(function(){ this.s2++;},1000)
*
* }
* var timer=new Timer();
* setTimeout( ()=> console.log('s1:'+timer.s1),3100);
*
*  2）不可以当做构造函数，也就是说 不可以使用new命令，否则抛出一个错误
*  3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
*  4）不可以使用yieId命令，因此箭头函数不能用作Generator函数

模板字符串
