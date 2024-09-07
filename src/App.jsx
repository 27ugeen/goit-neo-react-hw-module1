import 'normalize.css';
import './index.css';

import userData from './jsonData/userData.json';

import Profile from './components/Profile/Profile';

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
    </>
  );
};

export default App;
