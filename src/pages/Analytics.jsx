import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs
} from "firebase/firestore";

function Analytics() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "urls"),
        where("userId", "==", auth.currentUser.uid)
      );

      const snap = await getDocs(q);

      setLinks(
        snap.docs.map((d) => d.data())
      );
    };

    fetchData();
  }, []);

  return (
    <div className="px-4 sm:px-6 py-4 w-full">
      
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
        Analytics
      </h1>

      <div className="space-y-5">
        {links.map((l, i) => (
          <div
            key={i}
            className="bg-[#1e293b] p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-700"
          >
            <p className="text-cyan-400 text-base sm:text-lg break-all">
              /r/{l.shortCode}
            </p>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
              
              <div className="bg-slate-800/40 p-4 rounded-2xl">
                <p className="text-gray-400 text-sm">
                  Total Clicks
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold mt-1">
                  {l.clickCount}
                </h2>
              </div>

              <div className="bg-slate-800/40 p-4 rounded-2xl">
                <p className="text-gray-400 text-sm">
                  Click Events
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold mt-1">
                  {l.clicks?.length || 0}
                </h2>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analytics;