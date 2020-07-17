import React from "react";
import './account.css';
import axios from 'axios';


class Account extends React.Component {

    state = {
        selectedFile: null
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const formData = new FormData();
        formData.append('image', this.state.selectedFile, this.state.selectedFile.name)
        axios.post('localhost:3006/art', formData, {
            onUploadProgress: ProgressEvent => {
                console.log('Upload Progress: '+ Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%')
            }
        })
        .then(res => {
            console.log(res);
        });
    };

    render() {
        return (
            <div className="Account">
                <h1>Account Managment.</h1>
                <input type="file" onChange={ this.fileSelectedHandler } />
                <button onClick={ this.fileUploadHandler }> Upload </button>
            </div>
        )
    }
}

export default Account