import React,{Component} from 'react'
import marked from "marked"

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

export default MarkdownView