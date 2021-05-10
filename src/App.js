// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { addPost } from './redux/store';
// import Friend from './components/SideBar/Friends/Friend';
// import Sidebar from './components/SideBar/Sidebar';

const App = function (props) {

  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
            render= { () => <Dialogs
              store={props.store}
              // Вырезали диспатч стейта но так более правильно 
              // state={props.state.dialogsPage}
              // dialogs={props.state.dialogsPage.dialogs}
              // messages={props.state.dialogsPage.messages} 
              />} />
          <Route path='/profile'
            render= { () => <Profile
              profilePage = { props.state.profilePage }
              dispatch = { props.dispatch }
              // addPost={props.addPost}
              // updateNewPostText={props.updateNewPostText}
                // posts={props.state.profilePage.posts} 
              /> }
          />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          {/* <Route path='' component={Sidebar} /> */}
          {/* <Route path='/friends' component={Friend}  /> */}
        </div>
      </div>
  );
}

export default App;