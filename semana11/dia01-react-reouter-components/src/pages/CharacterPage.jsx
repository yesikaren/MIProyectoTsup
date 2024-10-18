import React from 'react'
import { useParams } from 'react-router-dom'

const CharacterPage = () => {
  const {id} = useParams()
  console.log(id)
  return (
    <div>CharacterPage construyendo</div>
  )
}

export default CharacterPage