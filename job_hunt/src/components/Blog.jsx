import React from "react";

const Blog = () => {
  return (
    <div className="ml-5 mr-5 mt-10">
      <div className="bg-slate-200 rounded-md">
        <h1 className="text-2xl font-bold p-6">
          1.When should you use context api?
        </h1>
        <p className="p-6">
          <span className="font-bold ">Answer :</span> when a certain amount of
          data must be accessed by numerous components at various nesting
          levels. It makes component reuse more challenging, so use it
          carefully. Component composition is frequently a more straightforward
          option than context if all you want to do is avoid passing some props
          through a lot of layers.
        </p>
      </div>
      <div className="bg-slate-200 rounded-md mt-6">
        <h1 className="text-2xl font-bold p-6">2.What is useRef?</h1>
        <p className="p-6">
          <span className="font-bold ">Answer :</span> UseRef is a hook in React
          that enables you to construct a mutable reference to a DOM element or
          a persistent value. Similar to how you would use document, you may use
          useRef to retrieve a DOM element in a functional component.In a
          conventional JavaScript context, use getElementById().
        </p>
      </div>
      <div className="bg-slate-200 rounded-md mt-6">
        <h1 className="text-2xl font-bold p-6">3.What is custom hook?</h1>
        <p className="p-6">
          <span className="font-bold ">Answer :</span>  custom hook is a React function that enables the reuse of stateful logic across numerous components. It is a technique for removing typical stateful logic so that it may be readily shared and reused without adding new code. UseState, useEffect, useContext, and other built-in React hooks can be used by custom hooks, which begin with the word "use" (e.g., useCounter, useFetch, etc.).
        </p>
      </div>
      <div className="bg-slate-200 rounded-md mt-6">
        <h1 className="text-2xl font-bold p-6">4.What is useMemo?</h1>
        <p className="p-6">
          <span className="font-bold ">Answer :</span> UseMemo is a hook in React that enables you to memoize function-generated values and only recompute them when their dependents have changed. In doing so, you can reduce the number of redundant re-renders in your application, which will increase its performance. A function that computes the memoized value and an array of dependents are the two inputs that useMemo accepts. Calling the function computes the memoized value, and React will only recompute the value if one of the dependents changes.
        </p>
      </div>
    </div>
  );
};

export default Blog;
