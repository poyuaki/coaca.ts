# Coaca.ts:<br>Convert and Calculate by RPN for typescript

## 注意点
このwebアプリは一応Coaca.jsの進化版ではありますが、**Coaca.jsとは全く操作が違います**のでご注意ください。

また、万が一無限ループ等で処理に負荷がかかり、**ブラウザがクラッシュしたとしても責任は負いません**。めちゃくちゃクセの強い式でない限りはクラッシュすることはないと思いますので、**無理に負荷をかけるような式を入力しない**でください。

このアプリではローカルストレージを利用し、ユーザが設定した変数を記憶させています。ブラウザ側の設定などでローカルストレージが使用できなくなっている場合、予期せぬ不具合が発生する可能性があります。そのような場合には開発者へ連絡してください。なお、ローカルストレージを用いた記憶方法は途中で変更する場合があります。[^1]

## Coaca.js (English)
<div align="center">
  <a href="https://github.com/poyuaki/CoaCa.js">Coaca.js</a>
</div>

## Todo
- [x] データ型のチェック
- [x] sin(...)やln(...)、!(...)のような数式を実装
- [x] オニオンアーキテクチャの実装🧅
- [ ] 式や解の履歴を表示

## 使用方法
式を入力するフォームに式を入力し、エンターキーを押します。そうするとフォームに答えが表示されます。

## 演算子

| 演算子 | 内容 |
:---:|:---:
| + | 加算 |
| - | 減算 |
| * | 乗算 |
| / | 除算 |
| % | 余り |
| ^ | 冪乗 |
| a_b | bを底としたaの対数 |

## 特殊演算子

caoca.tsでは特殊演算子をサポートしています。特殊演算子を使用する際には[]を用いてください。

| 演算子 | 内容 |
:---:|:---:
| sin, cos, tan | 三角関数 |
| asin, acos, atan | 逆三角関数 |
| ! | 階乗 |
| ln | 自然対数 |
| rad | ラジアン角度への変換 |
| abs | 絶対値 |

例
```
10_(abs[(-10)]) // -> 1
```

**※ マイナスを用いる際は()で囲んでください。**

## 変数の命名規則
- 演算子、特殊演算子、デフォルト変数に被らない変数にする
- 変数の値は必ず数値にする
- 20文字を超す変数名は使用できない

## デフォルト変数について
coaca.tsでは**既に登録されている変数(デフォルト変数)**が存在します。

このデフォルト変数は削除や変更することはできません。

| デフォルト変数名 | 内容 |
| :-------: | :-------: |
| pie | 円周率  |
| e | ネイピア数 |
| K | 1,000 |
| M | 1,000,000 |
| G | 1,000,000,000 |
| m | 0.001 |
| μ | 0.000001 |
| n | 0.000000001 |

## 負数について
coaca.tsでは負数を取り扱うことはできますが、以下のような式にすることはできません。

```
-3*10 // (-3)*10とする

abs[30*-1] // abs[30*(-1)]とする
```

[^1]: ローカルストレージの使用は推奨されていないのが現状です。機密事項の値は用いていないものの、非推奨の機能を用いるのも好ましくないでしょう。
