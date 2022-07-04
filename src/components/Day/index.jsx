import React, { useEffect, useState } from 'react'

export const Day = ({ weather }) => {

  console.log(weather);
  return (
    <li>
      <h3>{weather[0].main}</h3>
    </li>
  )
}
