import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes = [
      { id: 11, name: 'Aragon'},
      { id: 12, name: 'Legolas'},
      { id: 13, name: 'Gimly'},
      { id: 14, name: 'Boramir'},
      { id: 15, name: 'Faramir'},
      { id: 16, name: 'Thorin'},
      { id: 17, name: 'Gandalf'},
      { id: 18, name: 'Sam'},
    ];

    return {heroes};
  }

}
