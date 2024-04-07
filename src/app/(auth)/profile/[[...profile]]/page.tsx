import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <div className="w-full">
    <div className="mx-auto my-10 flex justify-center">
      <UserProfile path="/profile" routing="path"/>
    </div>
  </div>
);

export default UserProfilePage;
