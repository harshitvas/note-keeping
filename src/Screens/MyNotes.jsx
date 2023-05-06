import MainScreen from "../Components/MainScreen";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
import { deleteNoteAction, listNotes } from "../actions/noteActions";
import ErrorMessage from "../Components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";

const MyNotes = ({ history, search }) => {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    successUpdate,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  return (
    <div>
      <MainScreen title={"Welcome back Harshit Vashistha..."}>
        <Link to="/createnote">
          <button className="rounded-lg bg-purple-500 px-4 py-2 text-lg hover:bg-purple-400 border-2 border-black">
            Create New Note
          </button>
        </Link>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {errorDelete && (
          <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
        )}
        {loading && <Loading />}
        {loadingDelete && <Loading />}
        {notes &&
          notes
            .filter((filteredNote) =>
              filteredNote.title.toLowerCase().includes(search.toLowerCase())
            )
            .reverse()
            .map((note, index) => (
              <div
                key={note._id}
                className="mt-5 bg-cyan-200 px-2 py-2 rounded-md shadow-md"
              >
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
                  onClick={() => handleClick(index)}
                >
                  <div className="font-medium flex justify-between items-center">
                    <p className="text-2xl">{note.title}</p>
                    <div className="flex gap-3">
                      <a href={`/note/${note._id}`}>
                        <p className="bg-blue-500 px-3 py-1 hover:bg-blue-300 rounded-md border-2 border-black">
                          EDIT
                        </p>
                      </a>
                      <p
                        className="bg-red-500 px-3 py-1 hover:bg-red-300 rounded-md border-2 border-black"
                        onClick={() => deleteHandler(note._id)}
                      >
                        DELETE
                      </p>
                    </div>
                  </div>
                </button>
                {index === activeIndex && (
                  <div className="p-4 border-t border-gray-400">
                    <div className="flex">
                      <span className="text-sm mr-1">Category -</span>
                      <span className="flex gap-1">
                        <span className="bg-green-400 px-2 border-1 border-black rounded-lg">
                          {note.category}
                        </span>
                      </span>
                    </div>
                    <p className="mt-2 text-lg">{note.content}</p>
                  </div>
                )}
              </div>
            ))}
      </MainScreen>
    </div>
  );
};

export default MyNotes;
