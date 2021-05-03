import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState('')

    const handleBur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)


        fetch('http://localhost:5000/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="container-fluid row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBur} type="email" class="form-control" name="email" placeholder="Enter email" />

                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input onBlur={handleBur} type="text" class="form-control" name="name" placeholder="name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Upload image</label>
                        <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputPassword1" placeholder="file" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;