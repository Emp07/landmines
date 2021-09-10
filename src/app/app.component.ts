import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public grid: number[][] = [];
  
  ngOnInit(): void {
    this.grid = this._createGrid(30, 16, 99);
  }

  private _createGrid(x: number, y: number, numberOfMines: number): number[][] {
    const grid: number[][] = [];

    for(let i = 0; i < x; i++) {
      grid.push([]);
      for (let j = 0; j < y; j++) {
        grid[i].push(0);
      }
    }    

    for (let i = 0; i < numberOfMines; i++) {
      let mineX: number;
      let mineY: number;

      do {
        mineX = this._getRandomInt(x);
        mineY = this._getRandomInt(y);
      } while (grid[mineX][mineY] < 0)
      
      for (let j = -1; j < 1; j++) {
        for (let k = -1; k < 1; k++) {
          if (j === 0 && k === 0) {
            grid[mineX][mineY] = -numberOfMines;
          } else {
            grid[mineX + j][mineY + k] += 1;
          }
        }  
      }
    }

    return grid;
  }

  private _getRandomInt(max: number) {
    return Math.floor((Math.random() * (max - 1)) + 1);
  }
}
