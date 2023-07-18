import React from "react";
import Link from "next/link";
const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-center flex-col">
      <h1 className="head_text text-left">
        {type}
        <span className="blue_gradient">Post</span>
      </h1>
      <p className="desc text-left max-w-md">{type} and share amazing prompts with world</p>

      <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 ">
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gray-700">My AI Prompt</span>
          <textarea
            required
            spellCheck={false}
            className="form_textarea"
            placeholder="Write about your prompt"
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          ></textarea>
        </label>

        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag {` `}
            <span className="font-normal">(#product, #webdev)</span>
          </span>
          <input
            required
            spellCheck={false}
            className="form_input"
            placeholder="What your tags"
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
          />
        </label>

        {/* Group btns */}
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/">Cancel</Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange
          rounded-full text-white
          "
          >
            {submitting ? `${type} ...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
