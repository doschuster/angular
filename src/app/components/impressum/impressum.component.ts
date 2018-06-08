import { Component, OnInit } from '@angular/core';
import {LogService } from './../../services/log.service';

@Component({
    selector: 'impressum',
    templateUrl: './impressum.component.html'
})

export class ImpressumComponent implements OnInit {
    constructor(
        private logger: LogService
    ) { }

    ngOnInit() {
        this.logger.log('Service Test')
     }
}