function docMaker(title, contents){
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="/doc/style.css" type="text/css">
  </head>
  <body>
    ${contents}
  </body>
  </html>`
}

module.exports = docMaker;


function cssMaker(){
return `* {    
  margin: 0; 
  padding: 0; 
  box-sizing: border-box; 
  flex-wrap: wrap;
  flex-direction: column; 
  color: rgb(145, 145, 145);
  background-color: rgb(19, 19, 19); 
};

body { 
    width: 100vw;
    height: 100vh;
};`
}

module.exports = cssMaker;