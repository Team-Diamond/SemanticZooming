import { observable, observe } from 'mobx'

export class Index {
  
  @observable
  zoomLevel = 0;

  onZoom(level) {
    this.zoomLevel = level;
  }
}

export const index = new Index()