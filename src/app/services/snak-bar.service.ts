import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class SnakBarService {
  constructor(private snackbar: MatSnackBar) {}

  openSnackBar(msg) {
    this.snackbar.open(msg, "Close", {
      duration: 3000
    });
  }
}
