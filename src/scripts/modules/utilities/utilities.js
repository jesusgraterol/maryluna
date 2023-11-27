import { v4 as uuidv4, validate as uuidValidate } from 'uuid';

/**
 * Utilities Class
 * This class provides a toolkit that aims to bring consistency throughout modules when performing
 * common tasks.
 */
class Utilities {
  /* ******************************************
   * Universally Unique Identifier Management *
   ****************************************** */

  /**
   * Generates a Universally Unique Identifier and returns it.
   * @returns string
   */
  static generateID() {
    return uuidv4();
  }

  /**
   * Validates a given uuid.
   * @param {*} uuid
   * @returns boolean
   */
  static validateID(uuid) {
    return uuidValidate(uuid);
  }
}




/**
 * Module Exports
 */
export default Utilities;
