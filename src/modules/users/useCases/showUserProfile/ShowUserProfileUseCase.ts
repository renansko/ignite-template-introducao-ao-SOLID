import { UsersRepository } from 'modules/users/repositories/implementations/UsersRepository';
import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userAlreadyExistsById = this.usersRepository.findById(user_id);

    if (!userAlreadyExistsById) {
      throw new Error('User dont found!');
    }

    return userAlreadyExistsById;
  }
}

export { ShowUserProfileUseCase };
