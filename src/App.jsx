import { useState } from 'react';
import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"  

const users = [
  {
    userName: 'rusonotrousseau' ,
    name: 'Ruso Rusiani',
    inFollowing:  false,
  },

  {
    userName: 'midudev' ,
    name: ' Miguel Angel Duran',
    inFollowing:  false,
  },

  {
    userName: 'olgaenvivo' ,
    name: 'Olga En Vivo',
    inFollowing:  true,
  }
]
export function App () {

  return(
    <section className='App'>
      {
        users.map(user=>{
        const { userName, name, isFollowing } = user  
        return(
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
            >
            {name} 
            </TwitterFollowCard>
        )
        })
      }

    </section>
  )
}

export default App;

