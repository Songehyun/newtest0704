"use strict";

var root = document.getElementById("root");
console.log(root);
var anchorTags = function anchorTags(inherf, content) {
  var result = "<a href=\"".concat(inherf, "\">").concat(content, "</a>");
  return result;
};
var liTags = function liTags(children) {
  var result = "<li>".concat(children, "</li>");
  return result;
};
var basicData = {
  jeamin: "재민",
  hoyoung: "호영",
  ujin: "유진",
  jiyoon: "지윤"
};
var totalElement = function totalElement(object) {
  var result = "";
  for (var key in object) {
    // TypeScript가 key가 BasicData의 키인 것을 알게 함
    var value = object[key];
    result += liTags(anchorTags(key, value));
  }
  return result;
};

// let result = liTags(anchorTags(`#${object.jeamin}`, object.jeamin));

root.innerHTML = "\n<ul>\n  ".concat(totalElement(basicData), "\n</ul>\n");