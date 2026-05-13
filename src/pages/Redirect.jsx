import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  arrayUnion
} from "firebase/firestore";

function Redirect() {
  const { shortCode } = useParams();

  useEffect(() => {
    const run = async () => {

      const q = query(
        collection(db, "urls"),
        where("shortCode", "==", shortCode)
      );

      const snap = await getDocs(q);

      if (snap.empty) return;

      const d = snap.docs[0];
      const ref = doc(db, "urls", d.id);

      // 📊 LOG CLICK DETAILS
      await updateDoc(ref, {
        clickCount: d.data().clickCount + 1,
        clicks: arrayUnion({
          time: Date.now(),
          device: navigator.userAgent
        })
      });

      window.location.href = d.data().originalUrl;
    };

    run();
  }, [shortCode]);

  return <p>Redirecting...</p>;
}

export default Redirect;