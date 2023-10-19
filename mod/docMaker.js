function docMaker(title, putScript, actionSite){
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
      <link rel="stylesheet" href="style.css">
    <style>
    *{ margin: 0; padding: 0; box-sizing: border-box; flex-direction: column; flex-wrap: wrap;
      background-color: rgb(19, 19, 19); color: rgb(112, 111, 111)
    }
    </style>
  </head>
  <body >
    <div id="root">
      <form id="form" action="${actionSite}" >
        <input id="id" type="text" name="id" placeholder="id type"><br>
        <input id="pw" type="password" name="pw" placeholder="password type"><br>
        <input id="pw2" type="password" name="pw2" placeholder="password check"><br>
        <input id="login" type="submit" value="login"><br>
      </form>
    </div>
    <script>
    ${putScript}
      // let root = document.getElementById('root');
      // root.style.width = "100vw";
      // root.style.height = "100vh";
      // root.style.margin = "auto";
      // root.style.display = "flex";
      
      // let form = document.getElementById('form')
      // form.style.width = "50vw";
      // form.style.height = "50vh";
      // form.style.margin = "auto";
      // form.style.display = "flex";
      // form.style.alignContent = "center";
      // form.style.alignItems = "center";
      // form.style.justifyContent = "center";
      // form.style.justifyItems = "center";
      // form.style.backgroundColor = "rgb(70, 70, 70)";
  
      // let loginInput = document.getElementById('login');
      // loginInput.style.width = "18vw";
      // loginInput.style.height = "5vh";
      // loginInput.style.fontSize = "4vh";
      // loginInput.style.alignContent = "center";
  
    </script>
  </body>
  </html>`
}

module.exports = docMaker;