'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');
const link = document.getElementById('link');

/**
 * 指定した要素の子どもを全て除去する
 * @param {HTMLElement} element HTMLの要素
 */
function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

////練習
userNameInput.onkeydown = event => {
  if (event.key === 'Enter') {
    assessmentButton.onclick();
  }
}

// 診断結果表示エリアの作成
function appendAssessmentResult(element, result) {
  const h3 = document.createElement('h3');
  h3.innerText = '診断結果';
  element.appendChild(h3);

  const p= document.createElement('p');
  p.innerText = result;
  element.appendChild(p);
}

// ツイートエリアの作成
function appendTweetButton(element, message) {
  const a = document.createElement('a');
  const href = 'https://twitter.com/intent/tweet?button_hashtag='
    + encodeURIComponent('あなたのいいところ')
    + '&ref_src=twsrc%5Etfw';
  a.setAttribute('href', href);
  a.className = 'twitter-hashtag-button';
  a.setAttribute('data-text', message);
  a.innerText = 'Tweet #あなたのいいところ';
  element.appendChild(a);
}

assessmentButton.onclick = () => {
  const userName = userNameInput.value;
  if (!userName) {
  return;
  }

  removeAllChildren(resultDivided);
  const result = assessment(userName);
  appendAssessmentResult(resultDivided, result);

  removeAllChildren(tweetDivided);
  appendTweetButton(tweetDivided, result);
  
  // widgets.js の設定
  twttr.widgets.load();

  function ElementSetTextContent(element, str) {
    if (element.textContent !== undefined) {
      element.textContent = str;
    }
    if (element.innerText !== undefined) {
      element.innerText = str;
    }
  }
  removeAllChildren(あなたに一言);
  var anchor2 = document.createElement("a");
  anchor2.href = "https://chii2020.github.io/assessment/%E4%B8%80%E8%A8%80.html";
  あなたに一言.appendChild(anchor2);
  ElementSetTextContent(anchor2, `
  
  
  
  あなたに一言！`);

  removeAllChildren(link);
  const paragraph2 = document.createElement('p');
  const xyz = "あなたに一言！".link("https://chii2020.github.io/assessment/a-word.html").fontcolor("red").bold();
  paragraph2.innerHTML = xyz;
  link.appendChild(paragraph2);
};

const answers = [
  '{userName}さんのいいところは声です。{userName}さんの特徴的な声はみなを惹きつけ、心に残ります。',
  '{userName}さんのいいところはまなざしです。{userName}さんに見つめられた人は、気になって仕方がないでしょう。',
  '{userName}さんのいいところは情熱です。{userName}さんの情熱に周りの人は感化されます。',
  '{userName}さんのいいところは厳しさです。{userName}さんの厳しさがものごとをいつも成功に導きます。',
  '{userName}さんのいいところは知識です。博識な{userName}さんを多くの人が頼りにしています。',
  '{userName}さんのいいところはユニークさです。{userName}さんだけのその特徴が皆を楽しくさせます。',
  '{userName}さんのいいところは用心深さです。{userName}さんの洞察に、多くの人が助けられます。',
  '{userName}さんのいいところは見た目です。内側から溢れ出る{userName}さんの良さに皆が気を惹かれます。',
  '{userName}さんのいいところは決断力です。{userName}さんがする決断にいつも助けられる人がいます。',
  '{userName}さんのいいところは思いやりです。{userName}さんに気をかけてもらった多くの人が感謝しています。',
  '{userName}さんのいいところは感受性です。{userName}さんが感じたことに皆が共感し、わかりあうことができます。',
  '{userName}さんのいいところは節度です。強引すぎない{userName}さんの考えに皆が感謝しています。',
  '{userName}さんのいいところは好奇心です。新しいことに向かっていく{userName}さんの心構えが多くの人に魅力的に映ります。',
  '{userName}さんのいいところは気配りです。{userName}さんの配慮が多くの人を救っています。',
  '{userName}さんのいいところはその全てです。ありのままの{userName}さん自身がいいところなのです。',
  '{userName}さんのいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}さんが皆から評価されています。',
  '{userName}さんのいいところは優しさです。{userName}の優しい雰囲気や立ち振る舞いに多くの人が癒やされています。
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */
function assessment(userName) {
  // 全文字のコード番号を取得してそれを足し合わせる
  let sumOfCharCode = 0;
  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
  }

  // 文字のコード番号の合計を回答の数で割って添字の数値を求める
  const index = sumOfCharCode % answers.length;
  let result = answers[index];
  
  result = result.replace(/\{userName\}/g, userName);
  return result;
}

// テストコード
//「2章イシュー管理とWikiによるドキュメント作成」で追加
console.assert(
  assessment('太郎') === '太郎さんのいいところはユニークさです。太郎さんだけのその特徴が皆を楽しくさせます。',
  '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
);

console.assert(
  assessment('太郎') === assessment('太郎'),
  '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
);
