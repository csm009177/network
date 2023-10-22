// bone of tag Maker
function tagMaker(tagName, styleStr, content){
  return `<${tagName} style ="${styleStr}">${content}</${tagName}>`
}
module.exports = tagMaker;

//--------------------------------------------------------------------

function formMaker(actionUrl, actionMethod){
  return `<form action=${actionUrl} method=${actionMethod}>
  Username:<br>
  <input type="text" name="Username" placeholder="User name"><br>
  <input type="password" name="password" placeholder="password"> <br><br>
  <input type="submit" value="Login">     
  </form>`
}
module.exports = formMaker;

// style --------------------------------------------------------

function basic(){
  return `margin:0; padding: 0; box-sizing: border-box;
  background-color: rgb(66, 66, 66); color: white;
  align-items: center; align-content: center;`
}
module.exports = basic;

//--------------------------------------------------------------------
