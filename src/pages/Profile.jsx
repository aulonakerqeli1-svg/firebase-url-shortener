
import { auth } from "../firebase";

function Profile() {
  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Profile
      </h1>

      <div className="bg-[#1e293b] p-6 rounded-3xl border border-slate-700 max-w-2xl">

        <div className="mb-5">
          <p className="text-gray-400">
            Email
          </p>

          <p className="text-xl mt-1">
            {auth.currentUser?.email}
          </p>
        </div>

        <div>
          <p className="text-gray-400">
            User ID
          </p>

          <p className="text-sm mt-1 break-all">
            {auth.currentUser?.uid}
          </p>
        </div>

      </div>

    </div>
  );
}

export default Profile;
