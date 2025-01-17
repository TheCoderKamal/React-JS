import {
  addDoc,
  collection,
  doc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { ClockLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [movie, setMovie] = useState("");
  const [actor, setActor] = useState("");
  const [record, setRecord] = useState([]);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser.uid);
      } else {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (user) {
      fetchUser();
      fetchData();
    }
  }, [user]);

  const fetchUser = async () => {
    try {
      const userDoc = await getDoc(doc(db, "users", user));
      if (userDoc.exists()) {
        setUserData(userDoc.data());
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "data"));
      const details = querySnapshot.docs.map((item) => ({
        docId: item.id,
        ...item.data(),
      }));
      setRecord(details.filter((item) => item.userId === user));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editId) {
        await updateDoc(doc(db, "data", editId), { movie, actor });
        setEditId(null);
      } else {
        await addDoc(collection(db, "data"), { userId: user, movie, actor });
      }
      setMovie("");
      setActor("");
      fetchData();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleEdit = (id, movieName, actorName) => {
    setEditId(id);
    setMovie(movieName);
    setActor(actorName);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "data", id));
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setUserData(null);
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 p-4">
      <div className="max-w-3xl w-full bg-gray-800 rounded-lg shadow-lg p-6">
        {loading ? (
          <div className="flex justify-center items-center">
            <ClockLoader color="#ffffff" />
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <img
                  src={userData?.imgUrl || "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"}
                  alt="Profile"
                  className="w-12 h-12 rounded-full border-2 border-red-500"
                />
                <h1 className="text-4xl font-bold">
                  Welcome,{" "}
                  <span className="text-red-500">{userData?.name || "User"}</span>
                </h1>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            </div>
            <p className="text-lg text-gray-400 mb-6">
              Share your favorite movies and actors!
            </p>

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
                required
              />
              <input
                type="text"
                placeholder="Movie's actor name..."
                className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-700 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                onChange={(e) => setActor(e.target.value)}
                value={actor}
                required
              />
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                {editId ? "Update" : "Submit"}
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
        )}
      </div>
    </div>
  );
}
