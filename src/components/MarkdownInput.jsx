import React from 'react'

const MarkdownInput = (props) => {
    const handleChange = (evt) => {
      props.onMarkdownChange(evt.target.value)
    }
    return (
      <div className="editor">
        <p>
          <textarea
            value={props.message}
            onChange={handleChange}
          >
          </textarea>
        </p>
      </div>
    )
}

export default MarkdownInput