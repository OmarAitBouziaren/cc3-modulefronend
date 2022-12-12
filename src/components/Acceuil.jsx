import React from 'react'
import ListUser from './ListUser'

export default function Acceuil() {
  return (
    <div>
        <nav>
            <h1>Gestion des Taches</h1>
        </nav>
        <h1>Liste des utilisateurs:</h1>
        <ListUser/>
    </div>
  )
}
