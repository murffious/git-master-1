A file dedicated to show basic react in a new way
React is coding all HTML CSS and JS into a JS file and using Obejct.createElement to use the JSX and turn it into html - we do this so we can have full reign of the logic and power of the Javacript language to code our HTML and CSS DAT FLOW and still use JS for the interaction

1. React is an object 
- props is an object that is wrapping the entired react app and you can add properites and values to it to pass around values/data to other parts of the app. for the most part these values are passed DOWN to children only not up.

2. One of the properites on React object is the Component class
3. the Compenent class has properties and methods on it that we will take advantage of

We will use this Class by inheriting all its methods:
```class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}```

props 
state
setState

Javascriptisused to manipualte the DOM 
I am going to try and not use the real source code but my understanding of what we use and why from that inehrited stuff

The methiods in this class are actually called at certain points in time related to code being rendered on the screen for example in Chrome
called in order in // comments 
class Component (){
// Mounting
constructor()
static getDerivedStateFromProps()
render()
componentDidMount()
//Updating
static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()

Unmounting
This method is called when a component is being removed from the DOM:

componentWillUnmount()

}


an instance of a component is being created and inserted into the DOM:


React component is a fuction that return some HTML (and possibly its CSS too) - JSX is used and createElement
So think of Handlbars with passing pdata flow objects and {} again to  FULL use of Javascirpt logic 
props are passed as attributes to the element it self. and later passed down into children. 

So think HTML now fully using JS to write the whole thing. 
