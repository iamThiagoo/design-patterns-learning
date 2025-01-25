import UserRepository, {
  UserRepositoryMemory,
} from '../repository/UserRepository';
import User from '../User';

type Input = {
  name: string;
  email: string;
  password: string;
};

export default class Signup {
  private repository: UserRepository;

  constructor() {
    this.repository = UserRepositoryMemory.getInstance();
  }

  async execute(input: Input): Promise<void> {
    const user = User.create(input.name, input.email, input.password);
    await this.repository.save(user);
  }
}
