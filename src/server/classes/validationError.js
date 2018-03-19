export default class ValidationError extends Error {
  __constructor(content) {
    this.name = 'Validation Error';
    this.content = content;
  }
}
