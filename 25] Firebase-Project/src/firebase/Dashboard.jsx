import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export default function Dashboard() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if(data){
        setUser(data.uid);
        console.log(data.uid);
      }
    })
  }, []);

  useEffect(() => {
    fetchUser();
  }, [user])

  const fetchUser = async () => {
    if(user){
      await getDoc(doc(db, "users", user)).then((data) => {
        setUserData(data.data());
        console.log(data.data())
      })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100">
      <div className="text-center">
        {userData ? (
          <>
            <h1 className="text-4xl font-bold mb-4">
              Welcome, <span className="text-red-500">{userData.name}</span>
            </h1>
            <p className="text-lg text-gray-400">Enjoy your dashboard experience!</p>
          </>
        ) : (
          <h1 className="text-2xl text-gray-400 animate-pulse">Loading...</h1>
        )}
      </div>
    </div>
  );
}
