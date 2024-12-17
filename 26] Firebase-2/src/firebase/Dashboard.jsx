import { addDoc, collection, doc, getDocs, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { ClockLoader } from 'react-spinners';

export default function Dashboard() {
  const [user, setUser] = useState('');
  const [userData, setUserData] = useState();
  const [movie, setMovie] = useState('');
  const [actor, setActor] = useState('');
  const [record, setRecord] = useState([]);

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

    await addDoc(collection(db, 'data'), { userId: user, movie, actor });
    setMovie('');
    setActor('');
    fetchData();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 p-4">
      <div className="max-w-3xl w-full bg-gray-800 rounded-lg shadow-lg p-6">
        {userData ? (
          <>
            <h1 className="text-4xl font-bold mb-6">
              Welcome, <span className="text-red-500">{userData.name}</span>
            </h1>
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
                Submit
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
                    <p className="text-gray-300">
                      🎭 <span className="font-medium">{e.actor}</span>
                    </p>
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
