### Exercises: What is React?
1. What is React?  
A: React is a JavaScript library used for building User Interface.    

2. What is a library?  
A: A library is a set of code that was previously written, that can be called upon when building your own code. It is work that was previously done by someone else that you can now make use of, without having to do it yourself. And you can make use of it in your own code, legally, as it was written to be used by others.  

3. What is a single page application?    
A: It has only one HTML file.  

4. What is a component ?  
A:  Components are the building blocks of any React app. Every application we develop in React will be made up of pieces called components. Components make the task of building UIs much easier.  

5. What is the latest version of React?  
A: 18.2.0  

6. What is DOM?  
A: The JavaScript Document Object Model (DOM) is a set of APIs for controlling HTML and styling information that makes heavy use of the Document object. It can be used to access all the elements in a webpage, and is created as a tree of objects when the page is loaded.  

7. What is React Virtual DOM?  
A: React uses its virtual DOM to make new changes and it updates only the element, that needs changing. Do not directly interact with DOM when you build a React Application and leave the DOM manipulation job for the React virtual DOM.  

8. What does a web application or a website(composed of) have?  
A: A web application is a program or software that users can access via a web browser. It is created using markup languages such as HTML, CSS and JavaScript and all major browsers can support it.  

### Exercises: Why React?  
1. Why did you chose to use react?  
A: fast, modular, scalable, flexible, big community and popular, open source and High job opportunity  
  
2. What measures do you use to know popularity ?  
A: By looking at the number of watchers, stars and forks.  
  
3. What is more popular, React or Vue ?  
A: React  
  
### Exercises: JSX  
What is an HTML element?  
A: An HTML element has an opening and closing tags, content, and attribute in the opening tag. However, some HTML elements may not have content and a closing tag - they are self closing elements.  
  
How to write a self closing HTML element?  
A: Some HTML tag can be self-closed by the ending slash <… /> (The slash is optional)   
  
What is an HTML attribute? Write some of them  
A: HTML attributes provide additional information about HTML elements. They usually come in name/value pairs like: name="value" like href, src, alt, width and height, style, lang and title.   
  
What is JSX?  
A: JSX stands for JavaScript XML. JSX allows us to write HTML elements with JavaScript code.  
  
What is babel?  
A: JSX will be converted to JavaScript on browser using a transpiler - babel.js. Babel is a library which transpiles JSX to pure JavaScript.  
  
What is a transpiler?  
A: It is a tool that is used to convert source code into another source code that is of the same level. That is why it is also known as a source-to-source compiler.  
  
### Exercises: JSX Elements  
What is a JSX element?  
A: JSX has a JavaScript and HTML like syntax. JSX element could be a single HTML element or many HTML elements wrapped in a parent HTML element.  
  
Write your name in a JSX element and store it in a name variable  
A: const name = <h1>Lubna Fathima N</h1>
  
Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable  
A: const main = (  
    <main>  
        <h1>Jane Doe</h1>  
        <p>England</p>  
        <p>Web Developer</p>  
        <p>Female</p>  
        <p>janedoe@mail.com</p>  
        <p>9876543210</p>  
    </main>  
)  
  
Write a footer JSX element  
A: const footer = (  
    <footer>    
        <p>Copyright 2023</p>  
    </footer>  
)  
  
### Exercises: Inline Style  
Create a style object for the main JSX  
A: const main = (  
    <main style={{ color: 'purple' }}>  
        <h1>Hey</h1>   
    </main>  
)  
  
Create a style object for the footer and app JSX  
A: const footer = (  
    <footer style={{ color: 'red' }}>    
        <p>Copyright 2023</p>  
    </footer>  
)  
const app = (
    <div className='app' style={{ backgroundColor: 'purple' }}>
        {footer}
    </div>
)
  
Add more styles to the JSX elements  
A: const footer = (  
    <footer style={{ backgroundColor: 'pink', border: '2px solid purple'}}>    
        <p style={{ color: 'black', fontSize: '18px' }}>Copyright 2023</p>  
    </footer>  
)
  
### Exercises: Internal Styles  
Apply different styles to your JSX elements  
A: const style = { border: '2px solid orange', color: 'black', fontSize: '18px' }  

const header = (  
  <header style={style}>  
    <h1>Hello World</h1> 
  </header>  
)  
  
### Exercise: Inject data to JSX  
Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object)  
A: const full_name = 'Jane Doe'   
const age = 25    
const student = true   
const tech = ['HTML', 'CSS', 'JS']
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)    
const phone_number = 9876543210  
const location = {
    city: 'London',
    country: 'England',
}
  
const main = (  
    <main>  
        <h1>{full_name}</h1>  
        <p>{age}</p>  
        <p>{student}</p>  
        <p>{techsFormatted}</p>  
        <p>{email}</p>  
        <p>{location.city} {location.country}</p>  
    </main>  
) 