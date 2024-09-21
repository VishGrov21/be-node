import { CustomError } from './custom.error';

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor(public field?: string) {
    super();
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    const fieldName = this.field ? `${this.field} : ` : '';
    return [{ message: `${fieldName}Requested resource not found` }];
  }
}
