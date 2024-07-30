import * as crypto from 'crypto';

export const hashPassword = (str) => {
  return crypto.createHash('sha256').update(str).digest('hex');
};
