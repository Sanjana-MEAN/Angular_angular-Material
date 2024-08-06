import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ShowmessageService {

  constructor(private _snackBar: MatSnackBar) { }

  sendSuccess(): any{
    this._snackBar.open('Sent successfully!', 'Close', {
      duration: 3000, 
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
  sendRemoveSuccess(): any{
    this._snackBar.open('Removed successfully!', 'Close', {
      duration: 3000, 
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
  addedToCart(): any{
    this._snackBar.open('Successfully Added to cart', 'Close', {
      duration: 3000, 
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
  wishlisted(): any{
    this._snackBar.open('Wishlisted Successfully', 'Close', {
      duration: 3000, 
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

}
