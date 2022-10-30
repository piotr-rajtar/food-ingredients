import React from 'react';
import { Button, Heading, Input } from '@chakra-ui/react';

import styles from './form.module.scss';
import { SubmitFormFunction } from '../../typings';

interface FormProps {
  submitForm: SubmitFormFunction;
}

export default function Form({ submitForm } : FormProps) {
  const [ ingredient, setIngredient ] = React.useState('');

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if(!!ingredient.trim().length) {
      submitForm(ingredient);
    }
    setIngredient('');
  }

  return (
    <section className={styles.section}>
      <Heading className={styles['section-subtitle']} as='h2' size='lg'>FIND INGREDIENT:</Heading>
      <form className={styles.form} onSubmit={event => onFormSubmit(event)}>
        <label className={styles.label}>
          Ingredient:
          <Input 
            className={styles.input}
            value={ingredient}
            color='teal'
            focusBorderColor='teal.400'
            name='ingredient'
            placeholder='Write down ingredient' 
            size='lg'
            type='text'
            onChange={event => setIngredient(event.target.value)}
          />
        </label>
        <Button 
          className={styles.button}
          colorScheme='teal'
          size='lg'
          type='submit' 
          variant='outline' 
        >
          Search
        </Button>
      </form>
    </section>
  )
}