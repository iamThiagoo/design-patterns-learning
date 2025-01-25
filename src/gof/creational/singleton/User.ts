export default class User {
  constructor(
    readonly userId: string,
    readonly name: string,
    readonly email: string,
    readonly password: string,
  ) {}

  static create(name: string, email: string, password: string) {
    return new User(
      Math.random().toString(36).substring(2),
      name,
      email,
      password,
    );
  }

  passwordMatches(password: string) {
    return this.password === password;
  }
}
