import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = " ";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liの生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //完了ボタンの生成
  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";
  completebutton.addEventListener("click", () => {
    deletelist(deletebutton.parentNode);
    const addTarget = deletebutton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    //divの初期化
    addTarget.textContent = null;

    //li作成
    const li = document.createElement("li");

    //button
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";

    //div以下の要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backbutton);

    //完了に追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //削除ボタンを生成
  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";
  deletebutton.addEventListener("click", () => {
    //未完了リストから削除

    deletelist(deletebutton.parentNode);
  });

  //divに子要素を追加
  div.appendChild(li);
  div.appendChild(completebutton);
  div.appendChild(deletebutton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//
const deletelist = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
