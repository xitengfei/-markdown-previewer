import React, { Component } from 'react';
import './App.css';
import MarkdownPreviewer from './components/MarkdownPreviewer'

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
        <footer className="App-footer">
          <p>by tengfei.xi</p>
        </footer>
      </div>
    );
  }
}

export default App;
