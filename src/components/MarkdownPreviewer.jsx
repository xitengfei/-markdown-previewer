import React,{Component} from 'react'
import md from '../data/md-example'
import './MarkdownPreviewer.scss'
import UploadInput from './UploadInput'
import MarkdownInput from './MarkdownInput'
import MarkdownView from './MarkdownView'

class MarkdownPreviewer extends Component{
    constructor(props){
      super(props)
  
      this.state = {
        message:md
      }
  
      this.handleMarkdownChange = this.handleMarkdownChange.bind(this)
      this.handleUpload = this.handleUpload.bind(this)
    }
  
    handleMarkdownChange(msg){
      this.setState({
        message:msg
      })
    }

    handleUpload(evt){
      const that = this
      const files = evt.target.files

      for(var i = 0, f; f = files[i]; i++){
        let reader = new FileReader()
        reader.onload = ((file)=>{
          return (evt)=>{
            that.setState({
              message: evt.currentTarget.result
            })
          }
        })(f)
        reader.readAsText(f)
      }
    }
  
    render(){
      return(
        <div className="container">
          <UploadInput onInputChange={this.handleUpload} />
          <MarkdownInput message={this.state.message} onMarkdownChange={this.handleMarkdownChange} />
          <MarkdownView message={this.state.message} />
        </div>
      )
    }
}

export default MarkdownPreviewer