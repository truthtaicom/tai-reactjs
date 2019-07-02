import React from 'react'
import Footer from '../Footer';
import Header from '../Header';

export default function Layout(props) {
  return (
    <>
      <Header {...props}/>
        {props.children}
      <Footer />
    </>
  )
}