import React from "react"
import { Button, Input } from '@chakra-ui/react'

import styles from './form.module.scss'
import { SubmitFormFunction } from "../../typings";

export default function Form({ submitForm } : {submitForm: SubmitFormFunction}) {
  const [ingredient, setIngredient] = React.useState('');

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    submitForm(ingredient);
    setIngredient('');
  }

  return (
    <section>
      <h2>FIND INGREDIENT:</h2>
      <form onSubmit={event => onFormSubmit(event)}>
        <label>
          Ingredient:
          <Input 
            name='ingredient'
            placeholder='Write down ingredient' 
            size='lg'
            type='text'
            value={ingredient}
            onChange={event => setIngredient(event.target.value)}
          />
        </label>
          <Button 
            size='lg'
            type='submit'
          >
            Search
          </Button>
      </form>
    </section>
  )
}