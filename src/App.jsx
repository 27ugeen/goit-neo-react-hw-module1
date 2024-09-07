import 'normalize.css';
import './index.css';

import userData from './jsonData/userData.json';
import friends from './jsonData/friends.json';

import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FrendList';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
