### Exercises: Level 1  
What is a module?  
A: A single or multiple functions, that can be exported and imported when needed, can be included in a project. In React we do not use link to access modules or packages, instead we import the module.  

What is package?  
A: A Package is a module or a collection of modules. For instance, React, ReactDOM are packages.  

What is the difference between a module and a package.  
A: Inside the module, the implementation could contain any valid JavaScript code, including classes, functions, arrays, objects, etc.  
A package mainly contains the source code, distribution code, documentation, examples, executables, test suite, meta-data (such as version number), etc.  
  
What is NPM?  
A: It allows users to consume and distribute JavaScript modules that are available in the registry. NPM allows to create packages, use packages and distribute packages.  

What is Webpack?  
A: webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.  

How do you create a new React project?  
A: By running the following command:  
npx create-react-app name-of-your-project  

What are the files and folders inside a project folder(package.json, package-lock.json or yarn.lock, .gitignore,node_modules and public)?  
A: 
- node_modules  
- Public
  - index.html  
  - favicon.ico  
  - manifest.json  
  - other images  
  - robots.txt  
- src
  - App.css, index.css  
  - index.js  
  - App.js  
  - serviceWorker.js  
  - setupTests.js  
- package.json  
- .gitignore  
- README.md  
- yarn.lock or package-lock.json  

What is your favorite code editor (I believe that it is Visual Studio Code)?  
A: Visual Studio Code

Add different Visual Studio Code extensions to improve your productivity(eg. prettier, ESLint etc).  
A: prettier, live server  
  
Try to make a different custom module in a different file and import it to index.js.
A: 
<!-- module.js -->  
import React from "react";  
    
export default DefaultExport = () => {  
  return (  
    <div>  
      Hey from module.js  
    </div>  
  );  
};  

<!-- index.js -->  
import React from "react";  
import ReactDOM from "react-dom";  
import File from "./DefaultExport";  
    
ReactDOM.render(  
  <React.StrictMode>  
    <File />  
  </React.StrictMode>,  
  document.getElementById("root")  
);  
