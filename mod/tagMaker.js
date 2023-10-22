function tagMaker(tagName, styleStr, content){
  return `<${tagName} style ="${styleStr}">${content}</${tagName}>`
}
module.exports = tagMaker;

//--------------------------------------------------------------------
function formMaker(){
  return `<form action="/login" method="GET">
  Username:<br>
  <input type="text" name="Username" placeholder="User name"><br>
  <input type="password" name="password" placeholder="password"> <br><br>
  <input type="submit" value="Login">     
</form>`}

module.exports = formMaker;

