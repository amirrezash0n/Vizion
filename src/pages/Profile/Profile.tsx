import PageHeader from "../../components/common/PageHeader/PageHeader";
import ProfileInfoCard from "./components/ProfileInfoCard";
// import PasswordChangeCard from "./components/PasswordChangeCard";

const user = {
  username: "امیررضا شورورزی",
  avatar: "/images/avatar1.jpg",
  phone: "09154188878",
  fullName: "امیررضا شورورزی",
  email: "shourvarziamirreza@gmail.com",
};

export default function Profile() {
  return (
    <div>
      <PageHeader />

      <div className="max-w-2xl mx-auto mt-4 space-y-4 xs:space-y-6 animate-fadeIn">
        <ProfileInfoCard
          avatar={user.avatar}
          username={user.username}
          defaultValues={{
            fullName: user.fullName,
            phone: user.phone,
            email: user.email,
          }}
        />

        {/* <PasswordChangeCard /> */}
      </div>
    </div>
  );
}
