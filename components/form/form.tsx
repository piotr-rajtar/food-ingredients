import { Button, Input } from '@chakra-ui/react'

import styles from './form.module.scss'

export default function Form() {
  return (
    <section>
      <h2>FIND INGREDIENT:</h2>
      <form>
        <label>
          Ingredient:
          <Input 
            name='ingredient'
            placeholder='Write down ingredient' 
            size='lg'
            type='text'
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