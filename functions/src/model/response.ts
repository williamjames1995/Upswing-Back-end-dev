
interface GBErrorModel {
    code: number;
    message: string;
}

/**
 * response model.
 */
export class GBResponseModel {
  success: boolean;
  payload: Record<string, unknown>[];
  error?: GBErrorModel;
  timestamp: number;

  /**
  * @param {any} data first parameter.
  */
  constructor(data: any) {
    this.success = data.success;
    this.payload = data.payload;
    this.error = data.error;
    this.timestamp = new Date().getTime();
  }
}