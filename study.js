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

// 計算する
var number = (100 + 2) * 3;
console.log(number + number);
console.log(number)

// 値段を計算する
var apple_price = (parseInt(Math.random() * 10) + 1) * 100;  //リンゴの単価
var apple_num = parseInt(Math.random() * 10) + 1;  //リンゴを買う数
console.log("リンゴの単価 :" + apple_price + "円");
console.log("リンゴを買う数 :" + apple_num +"値");
var total = apple_price * apple_num;
console.log("合計金額 :" +total + "円");

// データの種類
process.stdin.resume();
process.stdin.setEncoding('utf8');
var number = 100 + 40;// 数値
var text = "ハロー" + "paiza";// 文字列
console.log(number);
console.log(text);
console.log(number + text);
console.log(number + 20);

// if文による条件分岐　else if
var number = 1;
if (number == 1) {
  console.log("スキ！");// 条件式が成立したときの処理
} else if (number == 2) {
  console.log("どちらでもない");// 条件式2が成立したときの処理
} else {
  console.log("キライ");// 条件式がどちらも成立しなかったときの処理
}