export function curlToJs(curl) {
  const tokens = tokenize(curl);
  const parsedTokens = parseTokens(tokens);
  let jsExample = convertToJsSyntax(parsedTokens);

  return jsExample;
}

export function tokenize(str) {
  let tokens = []; // 명령어를 토큰화하여 저장할 배열

  let currentToken = ""; // 현재 처리 중인 토큰을 저장할 문자열
  let inSingleQuote = false; // 싱글 쿼트 내에 있는지 여부
  let inDoubleQuote = false; // 더블 쿼트 내에 있는지 여부
  let escaping = false; // 이스케이프 문자를 처리 중인지 여부

  for (let i = 0; i < str.length; i++) {
    const char = str[i]; // 현재 처리 중인 문자

    if (escaping) {
      // 이전에 백슬래시가 나와 이스케이프 상태인 경우
      currentToken += char; // 현재 문자를 그대로 토큰에 추가
      escaping = false; // 이스케이프 상태 해제
    } else if (char === "\\") {
      // 백슬래시를 만난 경우
      if (i + 1 < str.length && str[i + 1] === "\n") {
        // 백슬래시 다음에 줄바꿈이 있는 경우 (라인 연속)
        i++; // 줄바꿈 문자 건너뜀
      } else {
        escaping = true; // 다음 문자를 이스케이프 처리
        currentToken += char; // 백슬래시를 토큰에 추가
      }
    } else if (inSingleQuote) {
      // 싱글 쿼트 내에 있는 경우
      if (char === "'") {
        // 싱글 쿼트 종료
        inSingleQuote = false;
        currentToken += char; // 종료 쿼트 추가
        tokens.push(currentToken); // 현재 토큰을 토큰 배열에 추가
        currentToken = ""; // 현재 토큰 초기화
      } else {
        currentToken += char; // 싱글 쿼트 내 문자 추가
      }
    } else if (inDoubleQuote) {
      // 더블 쿼트 내에 있는 경우
      if (char === '"') {
        // 더블 쿼트 종료
        inDoubleQuote = false;
        currentToken += char; // 종료 쿼트 추가
        tokens.push(currentToken); // 현재 토큰을 토큰 배열에 추가
        currentToken = ""; // 현재 토큰 초기화
      } else {
        currentToken += char; // 더블 쿼트 내 문자 추가
      }
    } else if (char === "'") {
      // 싱글 쿼트 시작
      inSingleQuote = true;
      currentToken += char; // 시작 쿼트 추가
    } else if (char === '"') {
      // 더블 쿼트 시작
      inDoubleQuote = true;
      currentToken += char; // 시작 쿼트 추가
    } else if (/\s/.test(char)) {
      // 공백 문자 (스페이스, 탭 등)를 만난 경우
      if (currentToken.length > 0) {
        tokens.push(currentToken); // 현재 토큰을 토큰 배열에 추가
        currentToken = ""; // 현재 토큰 초기화
      }
    } else {
      currentToken += char; // 그 외의 문자들을 토큰에 추가
    }
  }
  if (currentToken.length > 0) {
    tokens.push(currentToken); // 마지막 토큰 추가
  }

  // console.log(`1 ${tokens}`);

  // 후처리
  tokens = tokens.map((str) =>
    str.replace(/\s+/g, " ").replace(/^['"]|['"]$/g, ""),
  ); // 토큰 내 추가 공백, 감싸는 따옴표 제거

  // console.log(tokens);

  return tokens; // 토큰 배열 반환
}

//
//
//

export function parseTokens(arr) {
  // console.log(`Logl: ${arr}`);

  const result = {
    url: "",
    method: "",
    header: [],
    data: [],
  };

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    // console.log(element);
    if (element.startsWith("http://") || element.startsWith("https://")) {
      if (element.includes("?")) {
        const [baseUrl, queryString] = element.split("?");
        result.url = baseUrl;
        const params = queryString.split("&");
        params.forEach((param) => {
          const [key, value] = param.split("=");
          result.data.push(`${key}: ${value}`);
        });
      } else {
        result.url = element;
      }
    } else if (["POST", "GET", "PUT", "DELETE"].includes(element)) {
      result.method = element;
    } else if (
      [
        "-d",
        "--data",
        "--data-raw",
        "--data-binary",
        "--data-urlencode",
        "-F", // F인 경우 별도 JS 문법 있는지 확인 필요
        "--form",
        "--form-string",
      ].includes(element)
    ) {
      const nextElement = arr[i + 1];
      if (nextElement) {
        result.data.push(nextElement);
        i++; // 다음 요소를 이미 처리했으므로 인덱스 증가
      }
    } else if (["-H", "--header"].includes(element)) {
      const nextElement = arr[i + 1];
      if (nextElement) {
        result.header.push(nextElement);
        i++; // 다음 요소를 이미 처리했으므로 인덱스 증가
      }
    }
  }

  // console.log(result.header.toString());
  // console.log(result.data.toString());
  // ['target_id_type=user_id', 'target_id=${TARGET_ID}', 'task={ "content": "테스트 할 일 수정", "due_info": { "due…ILY;", "record_on": false } }, "bookmark": true }', 'task_id=${TASK_ID}']

  return result; // 파싱된 객체 반환
}

function convertToJsSyntax(parsedObj) {
  // 데이터
  // console.log(parsedObj.data);
  if (parsedObj.data.length > 0) {
    parsedObj.data = parsedObj.data.map((element) => {
      if (element.includes("=[")) {
        // 배열인 경우
        element = element.replace("=[", ": JSON.stringify([") + ")";
      } else if (element.includes("={")) {
        // 객체인 경우
        // console.log(`Log2: ${element}`);
        element =
          element
            .replace("={", ": JSON.stringify({")
            .replace(/"([^"]+)":/g, "$1:") + ")";

        // console.log(`Log3: ${element}`);
      } else if (element.includes("=")) {
        // 객체 아니고 배열 아니고 = 포함
        element = element
          // .replace(/(\w+)=([^,\s]+)/g, '$1: "$2"');
          .replace(/(\w+)=(.+)/g, '$1: "$2"');
      } else if (element.includes(": ${")) {
        // 객체 또는 배열이 아닌 일반 데이터에 : ${ 포함된 경우 스트링 처리
        element = element.replace(/:\s*\$\{([^}]+)\}/g, ': "${$1}"');
      } else {
        element = element.replace("=", ": ");
      }
      return element;
    });
  }

  parsedObj.header = parsedObj.header.map((element) => {
    if (element.includes(": ")) {
      // console.log(element);
      element = element
        // 객체 아니고 배열 아니고 : 포함
        .replace(/([\w-]+): (.+)/g, '"$1": "$2"');
    }
    return element;
  });

  let jsExample = "";
  // console.log(parsedObj.data);
  if (parsedObj.data.length > 0) {
    jsExample = `// 본문 지정
const data = new URLSearchParams( { ${parsedObj.data.toString()} } ).toString();

`;
  }
  if (parsedObj.data.length > 0) {
    if (parsedObj.method === "GET") {
      // GET 코드
      jsExample += `// 요청
fetch(\`${parsedObj.url}?\${data}\`, {
method: "${parsedObj.method}",
headers: { ${parsedObj.header.toString()} }});`;
    } else {
      // POST 코드
      jsExample += `// 요청
fetch("${parsedObj.url}", {
method: "${parsedObj.method}",
headers: { ${parsedObj.header.toString()} },
body: data });`;
    }
  } else {
    jsExample += `// 요청
fetch("${parsedObj.url}", {
method: "${parsedObj.method}",
headers: { ${parsedObj.header.toString()} }});`;
  }

  return jsExample;
}

//
// TODO:
// 1. 테스트
// 1. func 함수 분리 후 파이썬 추가
