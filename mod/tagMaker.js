function tagMaker(tagName, styleStr, content){
  return `<${tagName} style ="${styleStr}">${content}</${tagName}>`
}
module.exports = tagMaker;

