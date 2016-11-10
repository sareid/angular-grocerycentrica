import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let foods = [
      {id: 11, name: 'Bananas'},
      {id: 12, name: 'Apples'},
      {id: 13, name: 'Bread'},
      {id: 14, name: 'Hot Sauce'}
    ];
    return {foods};
  }
}
