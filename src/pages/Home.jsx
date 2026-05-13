import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs
} from "firebase/firestore";

function Home() {
  const [stats, setStats] = useState({
    links: 0,
    clicks: 0
  });

  useEffect(() => {
    const load = async () => {
      const q = query(
        collection(db, "urls"),
        where("userId", "==", auth.currentUser.uid)
      );

      const snap = await getDocs(q);

      let totalClicks = 0;

      snap.docs.forEach((d) => {
        totalClicks += d.data().clickCount || 0;
      });

      setStats({
        links: snap.docs.length,
        clicks: totalClicks
      });
    };

    load();
  }, []);

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-linear-to-r from-blue-600 to-cyan-500 p-6 rounded-3xl shadow-xl">
          <p className="text-blue-100">
            Total Links
          </p>

          <h2 className="text-5xl font-bold mt-3">
            {stats.links}
          </h2>
        </div>

        <div className="bg-linear-to-r from-purple-600 to-pink-500 p-6 rounded-3xl shadow-xl">
          <p className="text-purple-100">
            Total Clicks
          </p>

          <h2 className="text-5xl font-bold mt-3">
            {stats.clicks}
          </h2>
        </div>

        <div className="bg-linear-to-r from-emerald-500 to-green-600 p-6 rounded-3xl shadow-xl">
          <p className="text-green-100">
            Performance
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Excellent
          </h2>
        </div>

      </div>

    </div>
  );
}

export default Home;