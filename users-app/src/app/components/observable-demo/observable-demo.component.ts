import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css'],
})
export class ObservableDemoComponent {
  obs$ = new Observable((observer) => {
    setTimeout(() => {
      observer.next('First Package');
    }, 2000);
    setTimeout(() => {
      observer.next('Second Package');
    }, 4000);
    setTimeout(() => {
      observer.next('Third Package');
    }, 5000);
    setTimeout(() => {
      // observer.next('Fourth Package');
      observer.error(new Error('Something bad happened....'));
    }, 7000);
    setTimeout(() => {
      observer.complete();
    }, 10000);
  });
  
  packages : Array<string> = [];
  unsub$ : Subscription;

  onSub() {
    this.unsub$ = this.obs$.subscribe(
      (data: string) => {
        this.packages.push(data);
      },
      (err) => {
        console.error(err);
      },
      () => {
        console.log('[COMPLETED]');
      }
    );
  }

  onUnsub(){
    this.unsub$.unsubscribe();
  }

}
