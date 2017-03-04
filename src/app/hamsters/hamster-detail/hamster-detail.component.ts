import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Hamster } from '../hamster.def';
import { ShopingListService } from '../../services/shoping-list-service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HamstersService } from '../../services/hamsters.service';

@Component({
  selector: 'hb-hamster-detail',
  templateUrl: './hamster-detail.component.html',
  styleUrls: ['./hamster-detail.component.scss']
})
export class HamsterDetailComponent implements OnInit, OnDestroy {
  @Input() selectedHamster: Hamster;

  private subscription: Subscription;
  private hamsterIndex: number;

  constructor(
    private ShopingListService: ShopingListService,
    private ActivatedRoute: ActivatedRoute,
    private HamstersService: HamstersService,
    private Router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.ActivatedRoute.params.subscribe((params) => {
      // the '+' is converting the string to a integer
      this.hamsterIndex = +params['id'];
      this.selectedHamster = this.HamstersService.getHamster(this.hamsterIndex);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAdd() {
    this.ShopingListService.addAbilities(this.selectedHamster.abilities)
  }

  onEdit() {
    this.Router.navigate(['/hamsters', this.hamsterIndex, 'edit']);
  }

  onDelete() {
    if (!confirm('Are you sure you want to delete this hamster?')) return;

    this.HamstersService.deleteHamster(this.selectedHamster);
    this.Router.navigate(['/hamsters']);
  }
}
