export class ValidationError extends Error {
  __constructor(content) {
    this.name = 'Validation Error';
    this.content = content;
  }
}

export class NotFoundError extends Error {
  __constructor(content) {
    this.name = 'Not Found Error';
    this.content = content;
  }
}
