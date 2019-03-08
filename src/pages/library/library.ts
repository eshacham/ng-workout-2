import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';

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
    private camera: Camera) {
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

  takePicture(sourceType) {
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
    this.camera.getPicture(options).then((imageData) => {

      let loading = this.loadingCtrl.create();
      loading.present();

      const tempfileName = 'data:image/jpeg;base64,' + imageData;
      console.log(tempfileName);

      // Resolve the picture URI to a file
      this.file.resolveLocalFilesystemUrl(imageData).then(oneFile => {

        // Convert the File to an ArrayBuffer for upload
        this.file.readAsArrayBuffer(this.file.tempDirectory, oneFile.name).then(realFile => {
          let type = 'jpg';
          let newName = 'image-' + new Date().getTime() + '.' + type;
          this.images.push({
            key: newName,
            url: `${this.file.tempDirectory}/${oneFile.name}`,
            tmepPath: tempfileName
          });
          loading.dismiss();
        });
      }, err => {
        console.log('err: ', err);
      })
    }, (err) => {
      console.log('err: ', err);
    });
  }

  deleteImage(index) {
    this.images.splice(index, 1);
  }

}
