import App from './App.svelte'
import './main.css'

const app = new App({
  target: document.getElementById('app'),
})

export default app

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never
