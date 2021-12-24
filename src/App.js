import Profile from "./components/Profile/Profile";
import user from "./user.json";

export default function App() {
  return (
    <>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
    </>
  );
}
