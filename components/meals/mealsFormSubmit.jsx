'use client'
import {useFormStatus} from 'react-dom';
import React from 'react'
function mealsFormSubmit() {

    const {pending}=useFormStatus();

  return (
    <button type='submit' disabled={pending} >
        {pending?"Loading...😴":"Share Meal 😇 "}
    </button>
  )
}

export default mealsFormSubmit