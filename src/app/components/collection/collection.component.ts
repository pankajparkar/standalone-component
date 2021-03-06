import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DatabaseService } from './../../services/database.service';

@Component({
  selector: 'bmc-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionComponent implements OnInit {

  movies$ = this.db.getMovies(100);

  constructor(
    private db: DatabaseService,
  ) { }

  ngOnInit(): void {
  }

}
