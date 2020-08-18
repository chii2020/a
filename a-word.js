'use strict';
const userNameInput = document.getElementById('user-name');
const iWantToSayDivided = document.getElementById('i-want-to-say-a-word-to-you-area');
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
userNameInput.onkeydown = (event) => {
  if (event.key === 'Enter') {
    assessmentButton();
  }
}

function assessmentButton() {
  const userName = userNameInput.value;
  if (!userName) {
  return;
  }

  // 診断結果表示エリアの作成
  iWantToSayDivided.innerText = ' ';
  removeAllChildren(resultDivided);
  
  const paragraph4 = document.createElement('p');
  const toYou2 = i_want_to_say_a_word_to_you(userName);
  paragraph4.innerText = toYou2;
  iWantToSayDivided.appendChild(paragraph4);

  const paragraph = document.createElement('p');
  const result = assessment(userName);
  paragraph.innerText = result;
  resultDivided.appendChild(paragraph);

  // ツイートエリアの作成
  removeAllChildren(tweetDivided);
  const anchor = document.createElement('a');
  const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
    + encodeURIComponent('あなたに一言！')
    + '&ref_src=twsrc%5Etfw';
  anchor.setAttribute('href', hrefValue);
  anchor.className = 'twitter-hashtag-button';
  anchor.setAttribute('data-text', result);
  anchor.innerText = 'Tweet #あなたに一言！';
  tweetDivided.appendChild(anchor);
 
  // widgets.js の設定
  twttr.widgets.load();

  removeAllChildren(src);
  const paragraph3 = document.createElement('p');
  paragraph3.innerText = 'src';
  src.appendChild(paragraph3);

  function ElementSetTextContent(element, str) {
    if (element.textContent !== undefined) {
      element.textContent = str;
    }
    if (element.innerText !== undefined) {
      element.innerText = str;
    }
  }
  var anchor2 = document.createElement("a");
  anchor2.href = "https://www.youtube.com/watch?v=7AiJq_Kg-bs";
  src.appendChild(anchor2);
  ElementSetTextContent(anchor2, `https://www.youtube.com/
  watch?v=7AiJq_Kg-bs`);

  removeAllChildren(link);
  const paragraph2 = document.createElement('p');
  const xyz = "https://www.youtube.com/watch?v=7AiJq_Kg-bs".link("https://www.youtube.com/watch?v=7AiJq_Kg-bs").fontcolor("red").bold();
  paragraph2.innerHTML = xyz;
  link.appendChild(paragraph2);
};

const answers = [
  `常識は、敵だ。
  
  `,
  `絶対の強さは、
   時に人を退屈させる。
  
  `,
  `天才はいる。悔しいが。
  
  `,
  `可能性は人を熱くする。
  
  `,
  `速さは、自由か孤独か。
  
  `,
  `群れに答えなどない。
  
  `,
  `本当の敵は、諦めだ。
  
  `,
  `僕らは、
   ひとりでは強くなれない。
  
  `,
  `神はいる。そう思った。
  `,
];
resultDivided.style.fontSize = '40px';
resultDivided.style.color = 'gold';

const toYou = ['{userName}さんに一言！'];
iWantToSayDivided.style.fontSize = '25px';

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
  
  return result;
}

//'{userName}さんに一言！'の{userName}をuserNameに変える
function i_want_to_say_a_word_to_you(userName) {
  let toYou2 = toYou[0];
  toYou2 = toYou2.replace(/\{userName\}/, userName);
  return toYou2;
}

// テストコード
console.assert(
  i_want_to_say_a_word_to_you('太郎') === '太郎さんに一言！',
  '名前に置き換える処理が正しくありません。'
);
console.assert(
  i_want_to_say_a_word_to_you('太郎') === i_want_to_say_a_word_to_you('太郎'),
  '入力が同じ名前なら同じ出力をする処理が正しくありません。'
);
