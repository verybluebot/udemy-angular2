import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import { Hamster } from '../hamster.def';
import {
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { HamstersService } from '../../services/hamsters.service';

@Component({
  selector: 'hb-hamster-edit',
  templateUrl: './hamster-edit.component.html',
  styleUrls: ['./hamster-edit.component.scss']
})
export class HamsterEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  hamsterIndex: number;
  hamster: Hamster;
  isNew: boolean = true;
  hamsterForm: FormGroup;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private HamstersService: HamstersService,
    private FormBuilder: FormBuilder,
    private Router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.ActivatedRoute.params.subscribe((params) => {
      if (params.hasOwnProperty('id')) {
        this.hamsterIndex = +params['id'];
        this.isNew = false;
        this.hamster = this.HamstersService.getHamster(this.hamsterIndex);
      } else {
        this.isNew = true
      }
    });

    this.initForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if (this.isNew) {
      this.HamstersService.addHamster(this.hamsterForm.value);
    }

    if (!this.isNew) {
      this.HamstersService.editHamster(this.hamster, this.hamsterForm.value);
    }

    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  onAddAbility(name: string, level: number) {
    (<FormArray>this.hamsterForm.controls['abilities']).push(
      new FormGroup({
        name: new FormControl(name, Validators.required),
        level: new FormControl(level, [Validators.required, Validators.pattern("\\d+")])
      })
    );

    name = '';
    level = 0;
  }

  onAbilityRemove(index: number) {
    (<FormArray>this.hamsterForm.controls['abilities']).removeAt(index);
  }

  private navigateBack() {
    this.Router.navigate(['../']);
  }

  private initForm() {
    let hamsterName = '';
    let hamsterDesc = '';
    let hamsterImage = '';
    let hamsterAbilities = new FormArray([]);

    if (!this.isNew) {
      if (this.hamster.abilities) {
        _.forEach(this.hamster.abilities, (ability) => {
          hamsterAbilities.push(
            new FormGroup({
              name: new FormControl(ability.name, Validators.required),
              level: new FormControl(ability.level, [
                Validators.required,
                Validators.pattern("\\d+")
              ])
            })
          );
        });
      }

      hamsterName = this.hamster.name;
      hamsterDesc = this.hamster.description;
      hamsterImage = this.hamster.imagePath;
    }



    this.hamsterForm = this.FormBuilder.group({
      name: [hamsterName, Validators.required],
      description: [hamsterDesc, [Validators.maxLength(255), Validators.required]],
      imagePath: [hamsterImage, Validators.required],
      abilities: hamsterAbilities
    })

  }

}
