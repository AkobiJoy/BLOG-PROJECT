import React from 'react'

export default function page() {
  return (
    <div>
      <form action="">
        <div>
        <label htmlFor="">TITEL of your blog</label>
        <input type="text" />
        </div>

        <div>
            <label htmlFor="">Name of Author</label>
            <input type="text" />
        </div>

        <div>
            <label htmlFor="">CAtegory</label>
            <select value="">
                <option value="">Select category</option>
                <option value="Sport">Sport</option>
                <option value="Fashion">Fashion</option>
                <option value="Lifystle">LifeStyle</option>
                <option value="Education">Education</option>
            </select>
        </div>

        <div>
            <label htmlFor="">Upload Image</label>
                <input type="file" />
        </div>

        <div>
            <label htmlFor="">Body of post </label>
            <textarea name="" id=""></textarea>
        </div>
      </form>
    </div>
  )
}
