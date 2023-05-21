/** @format */

"use client";

import useUser from "csc-start/hooks/useUser";
import useUserMustBeLogged from "csc-start/hooks/useUserMustBeLogged";
import { addNewLink, deleteNewLink } from "csc-start/utils/data";
import { useState, useEffect } from "react";
import supabase from "csc-start/utils/supabase";
const Profile = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [linkType, setLinkType] = useState("link");
  const [currentUser, setCurrentUser] = useState(0);
  const [currentLinks, setCurrentLinks] = useState([]);
  const [todos, setTodos] = useState([]);
  const [inputDisabled, isInputDisabled] = useState(false);
  // const [checked, setChecked] = useState(false);

  // the user hook, will, provide us with the following, and it is completely abstracted away
  //  - user, and update whenever it's changed (undefined if loading, set if loaded)

  const { user, refreshUser, error, loading } = useUser();
  // we removed the useUser in the userMustBeLogged component, and now are supplying the user
  useUserMustBeLogged(user, "in", "/login");

  useEffect(() => {
    if (user) {
      let tempCurrentLinks = user.socialLinks;
      if (linkType === "link") {
        tempCurrentLinks = user.linkLinks;
      }

      setCurrentLinks(tempCurrentLinks);
      setCurrentUser(user);
    }
  }, [user, linkType]);

  const addLink = async (e) => {
    e.preventDefault();

    const order = currentLinks.length + 1;
    const addedLink = await addNewLink(user.id, title, order, linkType);

    if (addedLink.success == false) {
      //handle error
      return;
    }
    setUrl("");
    setTitle("");
    //@todo update this to either fake get the links (by taking the latest DB load + adding in the latest pushed link)
    //  or make a new request....
    refreshUser();
    //handle success
  };

  const deleteLink = async (e) => {
    e.preventDefault();

    const order = currentLinks.length - 1;
    const deleteLink = await deleteNewLink(user.id, title, order, linkType);
    //const addedLink = await addNewLink(user.id, title, order, linkType);

    if (deleteLink.success == false) {
      //handle error
      return;
    }
    // setUrl("");
    setTitle("");
    //@todo update this to either fake get the links (by taking the latest DB load + adding in the latest pushed link)
    //  or make a new request....
    refreshUser();
    //handle success
  };

  // const deleteTodo = async (id: number) => {
  // const deleteTodo = async (e) => {
  //   try {
  //     await supabase.from("todo").delete().eq("id", id).throwOnError();
  //     setTodos(todos.filter((x) => x.id != id));
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  // const handleChange = () => {
  //   setChecked(!checked);
  // };
  // const Checkbox = ({ label, value, onChange }) => {
  //   return (
  //     <label>
  //       <input type='checkbox' checked={value} onChange={onChange} />
  //     </label>
  //   );
  // };

  return (
    <div className='barge'>
      {!!error && (
        <div
          className={`bg-red-200 border-2 border-red-800 text-red-800 py-2 px-5 my-10 text-center`}
        >
          <span className='font-bold'>{error.message}</span>
        </div>
      )}
      {!error && loading && <p>Loading...</p>}
      {!error && !loading && (
        <div>
          <div className='flex justify-between my-5'>
            <button
              disabled={linkType === "social"}
              onClick={() => setLinkType("social")}
              className='button small'
            >
              Todo List #1:
            </button>
            <button
              disabled={linkType === "link"}
              onClick={() => setLinkType("link")}
              className='button small'
            >
              Todo List #2
            </button>
          </div>
          <ul>
            {currentLinks.map((link) => {
              return (
                <li key={link.id}>
                  {link.title}
                  {/* Future Delete Button */}
                  <button
                    className='button small text-25xl'
                    onClick={(e) => deleteTodo(e)}
                  >
                    &times;
                  </button>
                </li>
              );
            })}
          </ul>
          <p className='h2 my-5'>
            Currently Viewing <span className='capitalize'>{linkType}</span> You
            added
          </p>
          <table>
            <thead>
              <tr>
                {/* <th>URL</th> */}
                <th>
                  <u>Todo Title</u>
                </th>
                <th>
                  <u>Todo Type</u>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentLinks.map((link) => {
                return (
                  <tr key={link.id}>
                    <td>{link.title}</td>
                    {/* Future Delete Button */}
                    <button
                      className='button small text-25xl'
                      onClick={(e) => deleteTodo(e)}
                    >
                      &times;
                    </button>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <form onSubmit={addLink}>
            <p className='h2'>Add New Todo</p>
            <p className='my-5'>
              <label htmlFor='todoTitle' className='inline-block w-[75px]'>
                Todo List Title:
              </label>
              <input
                id='todoTitle'
                className='border border-2 border-black px-2'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                type='text'
              />
            </p>
            <p className='my-5'>
              <label htmlFor='todoItems' className='inline-block w-[75px]'>
                URL:
              </label>
              <input
                className='border border-2 border-black px-2'
                id='url'
                value={todos}
                onChange={(e) => setTodos(e.target.value)}
                required
                type='url'
              />
            </p>
            <p className='text-center'>
              <input
                type='submit'
                className='button small '
                disabled={isInputDisabled}
              />
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
