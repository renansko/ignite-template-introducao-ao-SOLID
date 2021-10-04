import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userAlreadyExistById = this.usersRepository.findById(user_id);

    if (!userAlreadyExistById) {
      throw new Error('User dont found!');
    }

    const turnOnAdmin = this.usersRepository.turnAdmin(userAlreadyExistById);

    return turnOnAdmin;
  }
}

export { TurnUserAdminUseCase };
