import { Component } from '@angular/core';
import { Preloader } from "../../layouts/components/preloader/preloader";
import { Header } from "../../layouts/components/header/header";
import { Footer } from "../../layouts/components/footer/footer";
import { ScrollTop } from "../../layouts/components/scroll-top/scroll-top";
import { Hero } from "../../layouts/components/hero/hero";
import { PriceGuide } from "../../features/services/components/price-guide/price-guide";
import { RequestForm } from "../../features/services/components/request-form/request-form";
import { Faq } from "../../features/services/components/faq/faq";
import { Service } from '../../features/services/models/service.model';
import { ServicesList } from '../../features/services/components/services-list/services-list';

@Component({
  selector: 'app-services',
  imports: [Preloader, Header, Footer, ScrollTop,ServicesList, Hero , PriceGuide, RequestForm, Faq],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {

    selectedService?: Service;
loading: any;

    onServiceSelected(service: Service){

        this.selectedService = service;

    }

}
