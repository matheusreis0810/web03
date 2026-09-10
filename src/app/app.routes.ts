import { Routes } from '@angular/router';
import { Cadastrar } from './cadastrar/cadastrar'

export const routes: Routes = [
    {path: "cadastrar", component:Cadastrar},
    {path: "", component:Cadastrar}
];
