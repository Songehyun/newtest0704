const root = document.getElementById("root") as HTMLDivElement;
console.log(root);

const anchorTags = (inherf: string, content: string): string => {
  let result = `<a href="${inherf}">${content}</a>`;
  return result;
};

const liTags = (children: string): string => {
  let result = `<li>${children}</li>`;
  return result;
};

interface BasicData {
  jeamin: "재민";
  hoyoung: "호영";
  ujin: "유진";
  jiyoon: "지윤";
}

const basicData: BasicData = {
  jeamin: "재민",
  hoyoung: "호영",
  ujin: "유진",
  jiyoon: "지윤",
};

const totalElement = (object: BasicData): string => {
  let result = "";
  for (let key in object) {
    // TypeScript가 key가 BasicData의 키인 것을 알게 함
    const value = object[key as keyof BasicData];
    result += liTags(anchorTags(key, value));
  }
  return result;
};

// let result = liTags(anchorTags(`#${object.jeamin}`, object.jeamin));

root.innerHTML = `
<ul>
  ${totalElement(basicData)}
</ul>
`;
