import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(
    public photoService: PhotoService,
    public actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
    this.photoService.loadSaved();
  }

  public async showActionSheet(photo, position) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.photoService.deletePicture(photo, position);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            // Nothing to do, action sheet is automatically closed
          }
        }
      ]
    })
    await actionSheet.present();
  }

}
