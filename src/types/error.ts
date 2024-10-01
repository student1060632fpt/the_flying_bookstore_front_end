
 type IServerError={
  timestamp: string;
  status: number;
  error: string;
  path: string;
}
export function isServerError(error: any): error is IServerError {
  return (
    typeof error === 'object' &&
    'message' in error &&
    'status' in error &&
    'path' in error &&
    'timestamp' in error
  );
}
export interface IFrontEndError {
  type: string,
  title: string,
  status: number,
  detail: string,
  instance: string,
  properties: unknown
}
export function isFrontEndError(error: any): error is IFrontEndError {
  return (
    typeof error === 'object' &&
    'type' in error &&
    'title' in error &&
    'status' in error &&
    'detail' in error &&
    'instance' in error &&
    'properties' in error
  );
}
export interface IValidationError {
  message: string;
  errors: Record<string, string[]>
}