import React, { Component } from 'react';
import marked from "marked"
import logo from './logo.svg';
import './App.css';
import md from './data/md-example'
import './MarkdownPreviewer.scss'

const MarkdownInput = (props) => {
  const handleChange = (evt) => {
    props.onMarkdownChange(evt.target.value)
  }
  return (
    <p>
      <textarea
        value={props.message}
        onChange={handleChange}
      >
      </textarea>
    </p>
  )
}

class MarkdownView extends Component{
  constructor(props){
    super(props)

    this.rawMarkup = this.rawMarkup.bind(this)
  }

  rawMarkup(message){
    var rawMarkup = marked(message)
    return {
      __html: rawMarkup
    }
  }

  render(){
    return(
      <div className="paper">
        <div 
          className="view" 
          // onClick={this.handleClick}
          dangerouslySetInnerHTML={this.rawMarkup(this.props.message)}
          >
        </div>
      </div>
    )
  }
}

class MarkdownPreviewer extends Component{
  constructor(props){
    super(props)

    this.state = {
      message:md
    }
  }

  render(){
    return(
      <div className="container">
        <MarkdownInput message={this.state.message} />
        <MarkdownView message={this.state.message} />
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        Markdown Previewer
        </header>
        <main>
          <MarkdownPreviewer />
        </main>
        <footer>
          by tengfei.xi
        </footer>
      </div>
    );
  }
}

export default App;
