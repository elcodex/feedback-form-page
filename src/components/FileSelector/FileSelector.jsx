import React, { useState, useRef, useReducer } from 'react';
import PropTypes from 'prop-types';
import "./FileSelector.css";

function getFileNames(state, files) {
    let names = [];

    for (let i = 0; i < files.length; i++) {
        names.push(files[i].name);
    }
    
    return names;
}

export default function FileSelector({ setFiles }) {
    const [fileNames, setFileNames] = useReducer(getFileNames, []);
    const [isDragEnter, setIsDragEnter] = useState(false);

    const fileInput = useRef(null);

    function handleAddFiles() {
        if (fileInput?.current) {
            fileInput.current.click();
        }
    }

    function handleChangeFiles(event) {
        if (event.target.files?.length) {
            const files = event.target.files;
            setFileNames(files);
            setFiles(files);
        }
    }

    function handleDropFiles(event) {
        event.preventDefault();

        if (event.dataTransfer?.files) {
            const files = event.dataTransfer.files;
            setFileNames(files);
            setFiles(files);
        }
        setIsDragEnter(false);
    }

    function handleDragEnterAndOver(event) {
        event.preventDefault();
        if (event.dataTransfer?.files) {
            setIsDragEnter(true);
        }
    }

    function handleDragLeave() {
        setIsDragEnter(false);
    }
        
    const renderInputFile = () =>
        <input
            className="form__inputFile"
            type="file" 
            ref={fileInput} 
            multiple={true}
            onChange={handleChangeFiles}
        />

    return (
        <div className="files">
            {fileNames.length ? 
                <ol className="files__names">
                    {fileNames.map((name, i) =>
                        <li className="names__item" key={`${i}_${name}`}>
                            {name}
                        </li>
                    )}
                </ol>
                : <div className="files__caption">
                    Upload your files
                </div>
            }
            <button 
                className={[
                        "files__uploader", 
                        isDragEnter ? "files__uploader_drag" : ""
                ]
                    .filter(c => c)
                    .join(" ")
                }
                onDrop={handleDropFiles} 
                onDragEnter={handleDragEnterAndOver}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragEnterAndOver}
                onClick={handleAddFiles}
            >
                    
                {renderInputFile()}
                    <div
                        onDrop={handleDropFiles} 
                        onDragEnter={handleDragEnterAndOver}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragEnterAndOver}
                    >
                        <div className="uploader__img">
                            <img src={`${process.env.PUBLIC_URL}/static/media/folder.svg`} alt="" />
                        </div>
                        <p className="uploader__text">Drag your files here.</p>
                        <p className="uploader__text">Maximum size: 2mb</p>
                        
                    </div>
                </button>
        </div>
    )
}

FileSelector.propTypes = {
    setFiles: PropTypes.func.isRequired,
}