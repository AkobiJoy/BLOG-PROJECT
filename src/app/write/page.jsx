




"use client"
// // we import the methods we need from forebse
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import app from "@/utils/firebase"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function BlogForm() {
      // initialize firebase storage
      // const storage = getStorage(app);
  // Define state for each form field
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  // const [image, setImage] = useState(null);
  const [body, setBody] = useState('');
  const [file, setFile] = useState('')
  const [media, setMedia] = useState('')

  // handle file uplodad
  // useEffect will only run when my file chnages

//   useEffect(() => {
//     const upload = () => {
//         console.log("it is working")
//         // create new unique name for files to be uploaded 
//         const newFileName = new Date().getTime() + file.name
//         console.log(file)

//         const storageRef = ref(storage, newFileName);

//         const uploadTask = uploadBytesResumable(storageRef, file);

//         // Register three observers:
//         // 1. 'state_changed' observer, called any time the state changes
//         // 2. Error observer, called on failure
//         // 3. Completion observer, called on successful completion
//         uploadTask.on('state_changed',
//             (snapshot) => {
//                 // Observe state change events such as progress, pause, and resume
//                 // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//                 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//                 console.log('Upload is ' + progress + '% done');
//                 switch (snapshot.state) {
//                     case 'paused':
//                         console.log('Upload is paused');
//                         break;
//                     case 'running':
//                         console.log('Upload is running');
//                         break;
//                 }
//             },
//             (error) => {
//                 // Handle unsuccessful uploads

//             },
//             () => {
//                 // Handle successful uploads on complete
//                 // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//                 getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//                     console.log('File available at', downloadURL);
//                     // save the download url in the state "media" to be stored in the database

//                     setMedia(downloadURL)
//                 });
//             }
//         );
//     }
//     // call upload function when file state is not null
//     file && upload()
// }, [file])
  // State for form validation messages
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    
  

    // Basic form validation
    let formErrors = {};
    if (!title) formErrors.title = 'Title is required';
    else if (!author) formErrors.author = 'Author is required';
    else if (!category) formErrors.category = 'Please select a category';
    // else if (!image) formErrors.image = 'Image is required';
    else if (!body) formErrors.body = 'Body of the post is required';

    if (Object.keys(formErrors).length === 0) {

      try{
        const res = await axios.post("http://localhost:3000/api/createBlog", {
          title,
          author,
          category,
          media,
          body
        })
  
        console.log(res)
        if(res.status===201){
          console.log("blog is uploaded");
        }
      }
      catch(err){
        console.log(err.message)
      }
      // console.log({ title, author, category, media, body });
      alert('Blog post submitted successfully!');
      // Clear the form (optional)
      setTitle('');
      setAuthor('');
      setCategory('');
     
      setBody('');
      setErrors({});
    } else {
      setErrors(formErrors);
     

      

    }
  };

  return (
    <div className='car flex items-center  py-[7rem] px-[10rem] h-[100vh]'>
      <div className="max-w-md  p-8 bg-white rounded shadow-lg shadow-sky-100 mt-2 w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">Create a Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title of Your Blog
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 w-full border rounded outline-none"
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="author" className="block text-sm font-medium text-gray-700">
              Name of Author
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="mt-1 p-2 w-full border rounded outline-none"
            />
            {errors.author && <p className="text-red-500 text-xs mt-1">{errors.author}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 p-2 w-full border rounded outline-none"
            >
              <option value="">Select category</option>
              <option value="Sport">Sport</option>
              <option value="Fashion">Fashion</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Education">Education</option>
            </select>
            {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
          </div>

          {/* <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              className={`mt-1 w-full ${errors.image ? 'text-red-500' : 'text-gray-500'}`}
            />
            {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
          </div> */}

          <input placeholder="Image url"  className="mt-1 p-2 w-full border rounded outline-none"type="text" onChange={(e)=>setMedia(e.target.value)}/>

          <div className="mb-4">
            <label htmlFor="body" className="block text-sm font-medium text-gray-700">
              Body of Post
            </label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows="5"
              className="mt-1 p-2 w-full border outline-none rounded"
            ></textarea>
            {errors.body && <p className="text-red-500 text-xs mt-1">{errors.body}</p>}
          </div>

          <button
            type="submit"
            className="mx-auto w-fit bg-blue-500 text-white p-2 rounded hover:bg-blue-600 flex items-center justify-center"
          >
            Submit Blog Post
          </button>
        </form>
      </div>
    </div>

  );
}

