import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetrouteconfigService } from '../service/getrouteconfig/getrouteconfig.service';

@Component({
  selector: 'app-polyfills',
  templateUrl: './polyfills.component.html',
  styleUrls: ['./polyfills.component.css']
})
export class PolyfillsComponent implements OnInit {

  constructor(private service: GetrouteconfigService, private route: Router) { }

  ngOnInit() {
    this.service.getRouteConfig().subscribe((data) => {
      window['route_config'] = data;
      this.route.navigateByUrl('/actions');
    });
  }

}
