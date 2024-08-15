export interface Response<T> {
  message?: string,
  data: T; // significa que o dado pode ser qualquer coisa, de qualquer tipo
}
