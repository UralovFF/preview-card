document.body.setAttribute(
  "style",
  "@import url(https://fonts.googleapis.com/css?family=Figtree:300,regular,500,600,700,800,900); font-family: 'Figtree', sans-serif; background: #F4D04E; margin: 0; padding: 0;"
);

document.body.innerHTML = `
    <div class="main-box">
        <div class="box">
            <div class="main-img">
                <img src="img/main-img.png" alt="" />
            </div>
            <div class="learning">Learning</div>
            <div class="date">Published 21 Dec 2023</div>
            <p class="title">HTML & CSS foundations</p>
            <p class="text">These languages are the backbone of every website, defining structure, content, and presentation.</p>
            <div class="author">
                <img src="img/avatar.png" alt="" />
                <p class="name">Greg Hooper</p>
            </div>
        </div>
    </div>
`;

let mainBox = document.querySelector(".main-box");
let box = document.querySelector(".box");
let learning = document.querySelector(".learning");
let date = document.querySelector(".date");
("");
let title = document.querySelector(".title");
let text = document.querySelector(".text");
let author = document.querySelector(".author");
let name = document.querySelector(".name");

mainBox.setAttribute(
  "style",
  "height: 100vh; display: flex; justify-content: center; align-items: center"
);

box.setAttribute(
  "style",
  "width: 24rem; box-shadow: 8px 8px 0 0 #000; background: #fff; border: 1px solid #111; border-radius: 20px; padding: 24px; box-sizing: border-box;"
);

learning.setAttribute(
  "style",
  "margin-top: 24px; width: 82px; padding: 4px 12px; border-radius: 4px; background: #f4d04e; text-align: center; font-size: 14px; color: #111; font-weight: 800;"
);

date.setAttribute(
  "style",
  "margin-top: 12px; font-weight: 500; font-size: 14px; color: #111;"
);

title.setAttribute(
  "style",
  "margin-top: 12px; font-weight: 800; font-size: 24px;"
);

text.setAttribute(
  "style",
  "margin-top: 12px; font-weight: 500; color: #7f7f7f; line-height: 150%;"
);

author.setAttribute(
  "style",
  "display: flex; align-items: center; column-gap: 12px; font-weight: 800; font-size: 14px; color: #111; line-height: 150%;"
);

title.onmouseover = function () {
  title.setAttribute(
    "style",
    "cursor: pointer; transition: all 0.2s; color: #f4d04e; margin-top: 12px; font-weight: 800; font-size: 24px;"
  );
};

title.onmouseout = function () {
  title.setAttribute(
    "style",
    "transition: all 0.2s; margin-top: 12px; font-weight: 800; font-size: 24px; color: #111"
  );
};

box.onmouseover = function () {
  box.setAttribute(
    "style",
    "cursor: pointer; transition: all 0.2s; width: 24rem; box-shadow: 16px 16px 0 0 #000; background: #fff; border: 1px solid #111; border-radius: 20px; padding: 24px; box-sizing: border-box;"
  );
};

box.onmouseout = function () {
  box.setAttribute(
    "style",
    "transition: all 0.5s; width: 24rem; box-shadow: 8px 8px 0 0 #000; background: #fff; border: 1px solid #111; border-radius: 20px; padding: 24px; box-sizing: border-box;"
  );
};