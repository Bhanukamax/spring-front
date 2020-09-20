import config from 'config';

interface UserServiceInterface {
  getUsers: () => any;
  createUser: (payload: any) => any;
  deleteUser: (userId: string) => any;
}

export default class UserService implements UserServiceInterface {
  private url: string;
  constructor() {
    this.url = `${config.API_PROTOCOL}${config.APP_URL}/users`;
  }

  public getUsers() {
    return fetch(this.url).then((res) => res.json());
  }

  public createUser(payload: any) {
    return fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  }

  public deleteUser(userId: string) {
    return fetch(`${this.url}/${userId}`, {
      method: 'DELETE',
    }).then((res) => res.json());
  }
}
