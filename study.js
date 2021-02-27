process.stdin.resume();
process.stdin.setEncoding('utf8');
console.log("<h1>hello world</h1>"); //HTML表示
process.stdout.write("<p>世界の皆さん\n"); //　\nで改行される
process.stdout.write("<b>こんにちは</b></p>"); //JavaScriptのプログラムで改行しない

// 変数を使う
process.stdin.resume();
process.stdin.setEncoding('utf8');
var player = "勇者"; //代入
console.log(player);

console.log(player + "は、荒野を歩いていた");
console.log(player + "は、モンスターと戦った");
console.log(player + "は、モンスターをたおした");

// 数の表示とサイコロ
var randnum = parseInt(Math.random() * 10) + 1;  //小数点以下切り捨てparseIntを付ける
//console.log(randnum);
//var number = 100;
console.log("スライムが" + randnum + "匹あらわれた")