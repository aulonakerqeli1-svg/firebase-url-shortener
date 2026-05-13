import { useState } from "react";
import { db, auth } from "../firebase";
import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp
} from "firebase/firestore";

function Create() {
  const [url, setUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [result, setResult] = useState("");

  const createLink = async () => {

    if (!url || !alias) {
      alert("Fill all fields");
      return;
    }

    const q = query(
      collection(db, "urls"),
      where("shortCode", "==", alias)
    );

    const snap = await getDocs(q);

    if (!snap.empty) {
      alert("Alias already exists!");
      return;
    }

    await addDoc(collection(db, "urls"), {
      originalUrl: url,
      shortCode: alias,
      clickCount: 0,
      createdAt: serverTimestamp(),
      userId: auth.currentUser.uid,
      clicks: []
    });

    setResult(alias);
    setUrl("");
    setAlias("");
  };

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Create Link
      </h1>

      <div className="bg-[#1e293b] p-6 rounded-3xl border border-slate-700 max-w-2xl">

        <input
          className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl mb-4"
          placeholder="Long URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <input
          className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl mb-4"
          placeholder="Custom Alias"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
        />

        <button
          onClick={createLink}
          className="bg-cyan-600 hover:bg-cyan-700 transition px-6 py-3 rounded-xl"
        >
          Create Link
        </button>

        {result && (
          <div className="mt-6 bg-slate-900 p-4 rounded-xl">

            <p className="mb-2">
              Your short link:
            </p>

            <p className="text-cyan-400">
              {window.location.origin}/r/{result}
            </p>

          </div>
        )}

      </div>

    </div>
  );
}

export default Create;
