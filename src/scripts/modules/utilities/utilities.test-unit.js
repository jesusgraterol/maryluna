import Utilities from './utilities';

/**
 * UUID Management
 * Tests that cover the generation and validation of universally unique identifiers.
 */
describe('UUID Management', () => {
  beforeAll(() => { });

  afterAll(() => { });

  beforeEach(() => { });

  afterEach(() => { });

  test('can generate a valid id', () => {
    const uuid = Utilities.generateID();
    expect(typeof uuid).toBe('string');
    expect(uuid.length).toBe(36);
    expect(Utilities.validateID(uuid)).toBe(true);
  });

  test('can identify invalid uuids', () => {
    expect(Utilities.validateID('9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d')).toBe(true);
    expect(Utilities.validateID('9b1deb4d-3b7d4bad-9bdd-2b0d7b3dcb6d')).toBe(false);
    expect(Utilities.validateID('somethingelse')).toBe(false);
    expect(Utilities.validateID('9b1deb4d-3%7d-4bad-9bdd-2b0d7b3d-b6d')).toBe(false);
  });
});
