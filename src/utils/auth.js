import Cookies from 'js-cookie'



export function getToken() {
  return Cookies.get("token")
}


export function setToken(token) {
  if(!token){
    return Cookies.set("token","eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJlbWFpbFwiOlwiZWRlbi5jaGVuQGNkcGdyb3VwbHRkLmNvbVwiLFwibG9jYWxlXCI6XCJ6aF9DTlwiLFwicGVyc29uSWRcIjpcImVkZW5cIixcInBob25lXCI6XCIxODU1Njc3NTkyOFwiLFwidGVuYW50SWRcIjpcIm5ldmVyZXZlclwiLFwidXNlcklkXCI6XCJlZGVuXCIsXCJ1c2VybmFtZVwiOlwiZWRlblwifSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE1NTQzNjI5MTh9.x6ym5KHxCxmtIzN3b_8qD6z125sfl_qvOZeJdGhpxa-Wn43bAAEP1chRASurQIvjvCLTQfqh8-jIMIlo3KMzfg" )
  }
    return Cookies.set("token",token)
}

export function removeToken() {
  return Cookies.remove("token")
  
}

export function setPerson(id) {
  return Cookies.set(PersonId, id)
}
export function getPerson() {
  return 3
}

export function GetRequest() {
  var url = location.search; //获取url中"?"符后的字串
  if (url.indexOf("?") != -1) {  
  let str = url.substr(1); 
  let strs = str.split("=");  
  return strs[1]      
  }
  }
