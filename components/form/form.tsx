import styles from './form.module.scss'

export default function Form() {
  return (
    <section>
      <h2>FIND INGREDIENT:</h2>
      <form>
        <label>
          Ingredient:
          <input type="text" name="name" />
          <button type='submit'>Search</button>
        </label>
      </form>
    </section>
  )
}