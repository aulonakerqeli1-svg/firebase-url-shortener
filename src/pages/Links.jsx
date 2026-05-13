
import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";

import { db, auth } from "../firebase";

function Links() {

  const [links, setLinks] = useState([]);

  const load = async () => {
    const q = query(
      collection(db, "urls"),
      where("userId", "==", auth.currentUser.uid)
    );

    const snap = await getDocs(q);

    setLinks(
      snap.docs.map((d) => ({
        id: d.id,
        ...d.data()
      }))
    );
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id) => {
    await deleteDoc(doc(db, "urls", id));
    load();
  };

  const copy = async (text) => {
    await navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Your Links
      </h1>

      <div className="space-y-5">

        {links.map((l) => {

          const shortUrl =
            `${window.location.origin}/r/${l.shortCode}`;

          return (
            <div
              key={l.id}
              className="bg-[#1e293b] p-6 rounded-3xl border border-slate-700"
            >

              <p className="text-cyan-400 text-lg">
                {shortUrl}
              </p>

              <p className="text-gray-300 mt-2 break-all">
                {l.originalUrl}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">

                <button
                  onClick={() => copy(shortUrl)}
                  className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-xl"
                >
                  Copy
                </button>

                <button
                  onClick={() => remove(l.id)}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
                >
                  Delete
                </button>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default Links;