import { StorageService } from 'services/storage-service/storage-service';

interface LoginPayload {
  userName: string;
  password: string;
}

interface AuthServiceInterface {
  login: (payload: LoginPayload) => void;
  isLoggedIn: () => boolean;
  logout: () => void;
}

const user = {
  name: 'bhanuka',
  password: 'password',
};

export enum AuthStorageKeys {
  IS_LOGGED_IN = 'IS_LOGGED_IN ',
  AUTHENTICATED_USER = 'AUTHENTICATED_USER',
}

export default class AuthService implements AuthServiceInterface {
  public login({ userName, password }: LoginPayload): void {
    if (this.validateUser(userName, password)) {
      const storage = new StorageService();
      storage.setItem(
        AuthStorageKeys.AUTHENTICATED_USER,
        JSON.stringify({ name: userName })
      );
      storage.setItem(AuthStorageKeys.IS_LOGGED_IN, 'true');
    } else {
      throw new Error('Invalid Login');
    }
  }

  public isLoggedIn(): boolean {
    const storage = new StorageService();

    return storage.getItem(AuthStorageKeys.IS_LOGGED_IN) === 'true';
  }

  public logout(): void {
    const storage = new StorageService();

    storage.deleteItem(AuthStorageKeys.AUTHENTICATED_USER);
    storage.deleteItem(AuthStorageKeys.IS_LOGGED_IN);
  }

  private validateUser(userName: string, password: string) {
    let isValid = true;
    if (userName !== user.name) {
      isValid = false;
    }

    if (password !== user.password) {
      isValid = false;
    }

    return isValid;
  }
}
