import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lapor-kegiatan',
  templateUrl: './lapor-kegiatan.page.html',
  styleUrls: ['./lapor-kegiatan.page.scss'],
})
export class LaporKegiatanPage {
  files: any[] = [];
  isModalOpen = false;

  constructor(private navCtrl: NavController) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.files.push(file);
    }
  }

  removeFile(file: any) {
    this.files = this.files.filter((f) => f !== file);
  }

  openSavePopup() {
    this.isModalOpen = true;
  }

  closeSavePopup() {
    this.isModalOpen = false;
  }

  saveReport() {
    // Implement save functionality
    console.log('Report saved');
  }

  goToTab2() {
    this.navCtrl.navigateRoot('/tabs/tab2');
  }
}
