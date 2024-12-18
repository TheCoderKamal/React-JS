import { addDoc, collection, doc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ClockLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [user, setUser] = useState('');
  const [userData, setUserData] = useState();
  const [movie, setMovie] = useState('');
  const [actor, setActor] = useState('');
  const [record, setRecord] = useState([]);
  const [editId, setEditId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setUser(data.uid);
      }
    });
  }, []);

  useEffect(() => {
    fetchUser();
    fetchData();
  }, [user]);

  const fetchUser = async () => {
    if (user) {
      await getDoc(doc(db, 'users', user)).then((data) => {
        setUserData(data.data());
      });
    }
  };

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, 'data'));
    const details = querySnapshot.docs.map((item) => ({
      docId: item.id,
      ...item.data(),
    }));
    setRecord(details);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (editId) {
      await updateDoc(doc(db, 'data', editId), { movie, actor });
    } else {
      await addDoc(collection(db, 'data'), { userId: user, movie, actor });
      setEditId(null);
    }

    setMovie('');
    setActor('');
    fetchData();
  };

  const handleEdit = (id, movieName, actorName) => {
    setEditId(id);
    setMovie(movieName);
    setActor(actorName);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'data', id));
    fetchData();
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser('');
        setUserData(null);
        navigate("/");
      })
      .catch((error) => {
        console.error('Logout failed:', error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 p-4">
      <div className="max-w-3xl w-full bg-gray-800 rounded-lg shadow-lg p-6">
        {userData ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-4xl font-bold">
                Welcome, <span className="text-red-500">{userData.name}</span>
              </h1>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            </div>
            <p className="text-lg text-gray-400 mb-6">Share your favorite movies and actors!</p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row items-center gap-4 mb-8"
            >
              <input
                type="text"
                placeholder="Favorite movie name..."
                className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-700 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                onChange={(e) => setMovie(e.target.value)}
                value={movie}
              />
              <input
                type="text"
                placeholder="Favorite actor name..."
                className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-700 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                onChange={(e) => setActor(e.target.value)}
                value={actor}
              />
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                {editId ? 'Update' : 'Submit'}
              </button>
            </form>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {record.length > 0 ? (
                record.map((e, i) => (
                  <div
                    key={i}
                    className="bg-gray-700 rounded-lg shadow-md p-4 flex flex-col items-center text-center transform hover:scale-105 transition duration-300"
                  >
                    <h2 className="text-xl font-bold text-red-400 mb-2">
                      🎬 {e.movie}
                    </h2>
                    <p className="text-gray-300 mb-4">
                      🎭 <span className="font-medium">{e.actor}</span>
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(e.docId, e.movie, e.actor)}
                        className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition duration-300"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(e.docId)}
                        className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition duration-300"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 col-span-full text-center">
                  No records found!
                </p>
              )}
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center">
            <ClockLoader color="#ffffff" />
          </div>
        )}
      </div>
    </div>
  );
}
