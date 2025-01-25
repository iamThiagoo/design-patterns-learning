import UserRepository, { UserRepositoryMemory } from "../repository/UserRepository";


type Input = {
    email: string,
    password: string
}

type Output = {
    success: boolean
}

export default class Login {
    
    private repository: UserRepository;
    
    constructor() {
        this.repository = UserRepositoryMemory.getInstance();
    }
    
    async execute(input: Input) : Promise<Output> {
        const user = await this.repository.getByEmail(input.email);
        let success = false;

        if (user && user.passwordMatches(input.password)) {
            success = true
        }

        return {
            success
        }
    }
}