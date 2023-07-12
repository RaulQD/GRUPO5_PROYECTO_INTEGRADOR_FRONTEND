import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoRoutingModule } from './proyecto-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InversionesComponent } from './pages/inversiones/inversiones.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AcountStatusComponent } from './pages/acount-status/acount-status.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { MovementListComponent } from './pages/movement-list/movement-list.component';


import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { RetiroComponent } from './pages/retiro/retiro.component';
import localeEsPE from '@angular/common/locales/es-PE';

import { registerLocaleData } from '@angular/common';

import { OportunitiesComponent } from './pages/oportunities-user/oportunities/oportunities.component';
import { ListOportunitiesComponent } from './pages/oportunidades/pages/list-oportunities/list-oportunities.component';
import { AddOportunitiesComponent } from './pages/oportunidades/pages/add-oportunities/add-oportunities.component';
import { AddCompanyComponent } from './pages/empresas/pages/add-company/add-company.component';
import { ListPageComponent } from './pages/empresas/pages/list-page/list-page.component';
import { EditCompanyComponent } from './pages/empresas/pages/edit-company/edit-company.component';
import { AddFacturaComponent } from './pages/factura/pages/add-factura/add-factura.component';
import { ListFacturasComponent } from './pages/factura/pages/list-facturas/list-facturas.component';
import { ReportsInversionesComponent } from './pages/reports/reports-inversiones/reports-inversiones.component';
import { ReportsUsuariosComponent } from './pages/reports/reports-usuarios/reports-usuarios.component';




registerLocaleData(localeEsPE);


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    NavbarComponent,
    InversionesComponent,
    ProfileComponent,
    AcountStatusComponent,
    DashboardComponent,
    FooterComponent,
    TabsComponent,
    EditProfileComponent,
    WalletComponent,
    MovementListComponent,
    DepositoComponent,
    RetiroComponent,
    OportunitiesComponent,
    AddOportunitiesComponent,
    ListOportunitiesComponent,
    AddCompanyComponent,
    ListPageComponent,
    EditCompanyComponent,
    AddFacturaComponent,
    ListFacturasComponent,
    ReportsInversionesComponent,
    ReportsUsuariosComponent,
    
  ],
  imports: [
    CommonModule,
    ProyectoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule,
    SharedModule
  ],
  exports:[
    HomeComponent,
    TabsComponent
  ]
})
export class ProyectoModule { }
