// {
//   input: "",
//   expected: "",
// },

export const testCases = [
  {
    input:
      'curl -v -G GET "https://kapi.kakao.com/v1/user/shipping_address" \\\n  -H "Authorization: Bearer ${ACCESS_TOKEN}"\n',
    expected:
      '// 요청\nfetch("https://kapi.kakao.com/v1/user/shipping_address", {\n  method: "GET",\n  headers: { Authorization: "Bearer ${ACCESS_TOKEN}" },\n});\n',
  },
  {
    input:
      'curl -v -G GET "https://kapi.kakao.com/v1/user/shipping_address" \\\n  -H "Authorization: KakaoAK ${SERVICE_APP_ADMIN_KEY}" \\\n  -d "target_id_type=user_id" \\\n  -d "target_id=${USER_ID}"\n',
    expected:
      '// 데이터 지정\nconst data = new URLSearchParams({\n  target_id_type: "user_id",\n  target_id: "${USER_ID}",\n}).toString();\n\n// 요청\nfetch(`https://kapi.kakao.com/v1/user/shipping_address?${data}`, {\n  method: "GET",\n  headers: { Authorization: "KakaoAK ${SERVICE_APP_ADMIN_KEY}" },\n});\n',
  },

  {
    input:
      'curl -X PUT "https://apis.moment.kakao.com/openapi/v4/creatives" \\\n  -H "Authorization: Bearer ${BUSINESS_ACCESS_TOKEN}" \\\n  -H "adAccountId: ${AD_ACCOUNT_ID}" \\\n  -H "Content-Type: multipart/form-data" \\\n  -F "id=1234" \\\n  -F "adGroupId=5678" \\\n  -F "format=IMAGE_BANNER" \\\n  -F "imageFile=@local_640X200_image_path" \\\n  -F "altText=edit_creative_description" \\\n  -F "mobileLandingUrl=http://www.daum.net"\n',
    expected:
      '// 데이터 지정\nconst data = new URLSearchParams({\n  id: "1234",\n  adGroupId: "5678",\n  format: "IMAGE_BANNER",\n  imageFile: "@local_640X200_image_path",\n  altText: "edit_creative_description",\n  mobileLandingUrl: "http://www.daum.net",\n}).toString();\n\n// 요청\nfetch("https://apis.moment.kakao.com/openapi/v4/creatives", {\n  method: "PUT",\n  headers: {\n    Authorization: "Bearer ${BUSINESS_ACCESS_TOKEN}",\n    adAccountId: "${AD_ACCOUNT_ID}",\n    "Content-Type": "multipart/form-data",\n  },\n  body: data,\n});\n',
  },

  {
    input:
      'curl -v -G -X DELETE "http://kapi.kakao.com/v2/internal/talk/message/image/delete" \\\n  -H "Authorization: KakaoAK ${DELEGATOR_APP_ADMIN_KEY}" \\\n  -d "image_token=cfgf4R/ZSbxYlxQEF/5O7z0liXAMz9UuC2bERe5k" \\\n  -d "target_app_key=${SERVICE_APP_KEY}"\n',
    expected:
      '// 데이터 지정\nconst data = new URLSearchParams({\n  image_token: "cfgf4R/ZSbxYlxQEF/5O7z0liXAMz9UuC2bERe5k",\n  target_app_key: "${SERVICE_APP_KEY}",\n}).toString();\n\n// 요청\nfetch("http://kapi.kakao.com/v2/internal/talk/message/image/delete", {\n  method: "DELETE",\n  headers: { Authorization: "KakaoAK ${DELEGATOR_APP_ADMIN_KEY}" },\n  body: data,\n});\n',
  },

  {
    input:
      'curl -v -G -X DELETE "http://kapi.kakao.com/v1/internal/talk/openchat/delete/link" \\\n  -H "Authorization: KakaoAK ${DELEGATOR_APP_ADMIN_KEY}" \\\n  -d "domain_id=98789343543" \\\n  -d "link_id=123446575676" \\\n  -d "target_app_key=${SERVICE_APP_KEY}" \\\n  -d "target_id_type=user_id" \\\n  -d "target_id=787573"\n',
    expected:
      '// 데이터 지정\nconst data = new URLSearchParams({\n  domain_id: "98789343543",\n  link_id: "123446575676",\n  target_app_key: "${SERVICE_APP_KEY}",\n  target_id_type: "user_id",\n  target_id: "787573",\n}).toString();\n\n// 요청\nfetch("http://kapi.kakao.com/v1/internal/talk/openchat/delete/link", {\n  method: "DELETE",\n  headers: { Authorization: "KakaoAK ${DELEGATOR_APP_ADMIN_KEY}" },\n  body: data,\n});\n',
  },

  {
    input:
      'curl -X DELETE "https://apis.moment.kakao.com/openapi/v4/targetings/${ID}" \\\n  -H "Authorization: Bearer ${BUSINESS_ACCESS_TOKEN}" \\\n  -H "adAccountId: ${AD_ACCOUNT_ID}" \\\n  -H "Content-Type: application/json"\n',
    expected:
      '// 요청\nfetch("https://apis.moment.kakao.com/openapi/v4/targetings/${ID}", {\n  method: "DELETE",\n  headers: {\n    Authorization: "Bearer ${BUSINESS_ACCESS_TOKEN}",\n    adAccountId: "${AD_ACCOUNT_ID}",\n    "Content-Type": "application/json",\n  },\n});\n',
  },

  {
    input:
      'curl -v -X POST "http://kapi.kakao.com/v1/internal/talk/openchat/update/link" \\\n  -H "Authorization: KakaoAK ${SERVICE_APP_ADMIN_KEY}" \\\n  -d "target_id_type=user_id" \\\n  -d "target_id=787573" \\\n  -d "domain_id=98789343543" \\\n  -d "link_id=118593" \\\n  -d "link_name=test_name" \\\n  -d "link_image=http://..." \\\n  -d "link_description=test_description"\n',
    expected:
      '// 데이터 지정\nconst data = new URLSearchParams({\n  target_id_type: "user_id",\n  target_id: "787573",\n  domain_id: "98789343543",\n  link_id: "118593",\n  link_name: "test_name",\n  link_image: "http://...",\n  link_description: "test_description",\n}).toString();\n\n// 요청\nfetch("http://kapi.kakao.com/v1/internal/talk/openchat/update/link", {\n  method: "POST",\n  headers: { Authorization: "KakaoAK ${SERVICE_APP_ADMIN_KEY}" },\n  body: data,\n});\n',
  },

  {
    input:
      'curl -v -X POST "https://kauth.kakao.com/oauth/business/token" \\\n  -H "Content-Type: application/x-www-form-urlencoded;charset=utf-8" \\\n  -d "grant_type=authorization_code" \\\n  -d "client_id=${REST_API_KEY}" \\\n  --data-urlencode "redirect_uri=${REDIRECT_URI}" \\\n  -d "code=${AUTHORIZE_CODE}"\n',
    expected:
      '// 데이터 지정\nconst data = new URLSearchParams({\n  grant_type: "authorization_code",\n  client_id: "${REST_API_KEY}",\n  redirect_uri: "${REDIRECT_URI}",\n  code: "${AUTHORIZE_CODE}",\n}).toString();\n\n// 요청\nfetch("https://kauth.kakao.com/oauth/business/token", {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",\n  },\n  body: data,\n});\n',
  },

  // {
  //   input: "",
  //   expected: "",
  // },

  // {
  //   input: "",
  //   expected: "",
  // },

  // {
  //   input: "",
  //   expected: "",
  // },

  // {
  //   input: "",
  //   expected: "",
  // },

  // {
  //   input: "",
  //   expected: "",
  // },

  // {
  //   input: "",
  //   expected: "",
  // },
];
