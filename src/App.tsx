import React, {FC, useContext, useEffect, useState} from 'react';
import LoginForm from './components/LoginForm';
import { Context } from '.';
import { observer } from 'mobx-react-lite';
import { Guild } from './models/Guild';
import GuildService from './services/GuildService';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage';
import TeamsPage from './pages/TeamsPage';
import Header from './containers/Header';
import Footer from './containers/Footer';

const App: FC = () => {

  const {store} = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])

  if (store.isLoading) {
    return (
      <>
      LOADING...
      </>
    )
  }

  return (
    <>
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="/teams" element ={<TeamsPage />} />

        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    
    </>
  )
}

export default observer(App);
