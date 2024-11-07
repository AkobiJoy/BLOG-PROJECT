// "use client"

// import React, { useState } from 'react';

// export default function BlogForm() {
//   // Define state for each form field
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [category, setCategory] = useState('');
//   const [image, setImage] = useState(null);
//   const [body, setBody] = useState('');

//   // State for form validation messages
//   const [errors, setErrors] = useState({});

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic form validation
//     let formErrors = {};
//     if (!title) formErrors.title = 'Title is required';
//     else if (!author) formErrors.author = 'Author is required';
//     else if (!category) formErrors.category = 'Please select a category';
//     else if (!image) formErrors.image = 'Image is required';
//     else if (!body) formErrors.body = 'Body of the post is required';

//     if (Object.keys(formErrors).length === 0) {
//       console.log({ title, author, category, image, body });
//       alert('Blog post submitted successfully!');
//       // Clear the form (optional)
//       setTitle('');
//       setAuthor('');
//       setCategory('');
//       setImage(null);
//       setBody('');
//       setErrors({});
//     } else {
//       setErrors(formErrors);
//     }
//   };

//   // Handle file input change
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
//       if (!allowedTypes.includes(file.type)) {
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           image: 'Unsupported format, only .jpeg, .png, .jpg is accepted',
//         }));
//         setImage(null); // Reset the image file if format is invalid
//       } else {
//         setImage(file);
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           image: '', // Clear the error if file is valid
//         }));
//       }
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
//       <h2 className="text-2xl font-semibold mb-4">Create a Blog Post</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//             Title of Your Blog
//           </label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="mt-1 p-2 w-full border rounded outline-none"
//           />
//           {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
//         </div>

//         <div className="mb-4">
//           <label htmlFor="author" className="block text-sm font-medium text-gray-700">
//             Name of Author
//           </label>
//           <input
//             type="text"
//             id="author"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             className="mt-1 p-2 w-full border rounded outline-none"
//           />
//           {errors.author && <p className="text-red-500 text-xs mt-1">{errors.author}</p>}
//         </div>

//         <div className="mb-4">
//           <label htmlFor="category" className="block text-sm font-medium text-gray-700">
//             Category
//           </label>
//           <select
//             id="category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="mt-1 p-2 w-full border rounded outline-none"
//           >
//             <option value="">Select category</option>
//             <option value="Sport">Sport</option>
//             <option value="Fashion">Fashion</option>
//             <option value="Lifestyle">Lifestyle</option>
//             <option value="Education">Education</option>
//           </select>
//           {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
//         </div>

//         <div className="mb-4">
//           <label htmlFor="image" className="block text-sm font-medium text-gray-700">
//             Upload Image
//           </label>
//           <input
//             type="file"
//             id="image"
//             accept=".jpeg, .jpg, .png"
//             onChange={handleImageChange}
//             className={`mt-1 w-full ${errors.image ? 'border-red-500' : 'border-gray-300'} border rounded outline-none`}
//           />
//           {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
//         </div>

//         <div className="mb-4">
//           <label htmlFor="body" className="block text-sm font-medium text-gray-700">
//             Body of Post
//           </label>
//           <textarea
//             id="body"
//             value={body}
//             onChange={(e) => setBody(e.target.value)}
//             rows="5"
//             className="mt-1 p-2 w-full border outline-none rounded"
//           ></textarea>
//           {errors.body && <p className="text-red-500 text-xs mt-1">{errors.body}</p>}
//         </div>

//         <button
//           type="submit"
//           className="mx-auto w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 flex items-center justify-center"
//         >
//           Submit Blog Post
//         </button>
//       </form>
//     </div>
//   );
// }






"use client"

import React, { useState } from 'react';

export default function BlogForm() {
  // Define state for each form field
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [body, setBody] = useState('');

  // State for form validation messages
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    let formErrors = {};
    if (!title) formErrors.title = 'Title is required';
    else if (!author) formErrors.author = 'Author is required';
    else if (!category) formErrors.category = 'Please select a category';
    else if (!image) formErrors.image = 'Image is required';
    else if (!body) formErrors.body = 'Body of the post is required';

    if (Object.keys(formErrors).length === 0) {
      console.log({ title, author, category, image, body });
      alert('Blog post submitted successfully!');
      // Clear the form (optional)
      setTitle('');
      setAuthor('');
      setCategory('');
      setImage(null);
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

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            className={`mt-1 w-full ${errors.image ? 'text-red-500' : 'text-gray-500'}`}
          />
          {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
        </div>

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

