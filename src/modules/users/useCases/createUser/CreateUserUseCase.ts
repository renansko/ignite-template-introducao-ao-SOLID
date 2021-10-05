import { User } from '../../model/User';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userAlreadyExists = this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('Category Already Exist!');
    }

    const user = this.usersRepository.create({ email, name });
    return user;
  }
}

export { CreateUserUseCase };
