import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import user from "./user.json";
import data from "./data.json";

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

      <Statistics key={data.id} title={data.title} stats={data} />
    </>
  );
}
