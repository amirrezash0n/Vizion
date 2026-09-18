import { useState } from "react";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import ProfileInfoCard from "./components/ProfileInfoCard";
import PasswordChangeCard from "./components/PasswordChangeCard";

const user = {
  username: "amirrezash0n",
  avatar: "/images/avatar1.jpg",
  phone: "09154188878",
  fullName: "امیررضا شورورزی",
  email: "shourvarziamirreza@gmail.com",
};

export default function Profile() {
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  return (
    <div>
      <PageHeader />

      <div className="mx-auto mt-4 max-w-md animate-fadeIn space-y-4 xs:space-y-5">
        <ProfileInfoCard
          avatar={user.avatar}
          username={user.username}
          defaultValues={{
            fullName: user.fullName,
            phone: user.phone,
            email: user.email,
          }}
          isPasswordOpen={isPasswordOpen}
          onTogglePassword={() => setIsPasswordOpen(!isPasswordOpen)}
        />
        {isPasswordOpen && (
          <div className="animate-fadeIn">
            <PasswordChangeCard onSuccess={() => setIsPasswordOpen(false)} />
          </div>
        )}
      </div>
    </div>
  );
}
