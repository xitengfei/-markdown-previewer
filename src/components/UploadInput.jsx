import React from 'react'

const UploadInput = (props) => {
    return (
        <p className="upload-input">
            <input
                type="file"
                name="file"
                id="markdown_file"
                onChange={props.onInputChange}
            >
            </input>
        </p>
    )
}

export default UploadInput