interface StorageServiceInterface {
  setItem: (key: string, value: string) => void;
  getItem: (key: string) => string;
  deleteItem: (key: string) => void;
}

export class StorageService implements StorageServiceInterface {
  public setItem(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }

  public getItem(key: string): string {
    return window.localStorage.getItem(key) || '';
  }

  public deleteItem(key: string): void {
    window.localStorage.removeItem(key);
  }

  public hasItem(key: string): boolean {
    return window.localStorage.getItem(key) !== null;
  }
}
