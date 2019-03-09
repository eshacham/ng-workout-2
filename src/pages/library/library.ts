import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage {
  images = [];

  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    private file: File,
    private camera: Camera,
    private sanitizer: DomSanitizer) {
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  async takePicture(sourceType) {
    // Create options for the Camera Dialog
    const options: CameraOptions = {
      quality: 100,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: sourceType
    }
    // Get the picture
    try {
      const imageData = await this.camera.getPicture(options)
      //let loading = this.loadingCtrl.create();
      //loading.present();
      const unsafefileName = 'data:image/jpeg;base64,' + imageData;
      console.log('sunsafefileName:', unsafefileName);
      // Resolve the picture URI to a file
      //const oneFile = await this.file.resolveLocalFilesystemUrl(imageData)
      // Convert the File to an ArrayBuffer for upload
      //const realFile = await this.file.readAsArrayBuffer(this.file.tempDirectory, oneFile.name)
      let type = 'jpg';
      let newName = 'image-' + new Date().getTime() + '.' + type;
      this.images.push({
        key: newName,
        url://`${this.file.tempDirectory}/${oneFile.name}`
          this.sanitize(unsafefileName),//
          //tempfileName
      });
      //loading.dismiss();
    } catch (err) {
      console.log('err capture image: ', err);
    }
  }
  sanitize(imageUrl: string): SafeUrl {
    //return imageUrl
    const safeUrl = this.sanitizer.bypassSecurityTrustUrl(imageUrl);
    return safeUrl;
}

  deleteImage(index) {
    this.images.splice(index, 1);
  }

}
