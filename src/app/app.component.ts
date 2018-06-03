import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core'
 import { MapsAPILoader } from '@agm/core';
 import {} from '@types/googlemaps';
 import { ViewChild, ElementRef, NgZone,OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

   @ViewChild('search') public searchElement: ElementRef;
       constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}

              ngOnInit() {
           this.mapsAPILoader.load().then(
            // () => {
            //  let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types:["address"] });
            //
            //   autocomplete.addListener("place_changed", () => {
            //   this.ngZone.run(() => {
            //    let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            //    if(place.geometry === undefined || place.geometry === null ){
            //     return;
            //    }
            //   });
            //   });
            // }
            //    );
             }

  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
    }
  ]
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
