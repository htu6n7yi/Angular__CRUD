
import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';





export interface PeriodicElement {
  nome: string;
  turma: string;
  horario: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
     nome: 'Sheila', turma: '', horario: '7:00 - 8:30',

  },
  {
     nome: 'Carlos', turma: '0079', horario: 'H',

  },
  {
     nome: 'Vitor', turma: '1.0079', horario: 'H',

  },
  {
     nome: 'André', turma: '1.0079', horario: 'H',

  },

];


@Component({
  selector: 'app-home',
  imports: [MatTableModule, MatButtonModule, MatIconModule, FormsModule, CommonModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  displayedColumns: string[] = ['nome','turma', 'horario', 'actions'];
  dataSource = ELEMENT_DATA;

  addRow() {

  }

  confirmDelete(index: number): void {
    const confirmacao = confirm("Tem certeza que deseja remover este item?");
    if (confirmacao) {
      this.deleteRow(index);
    }}


    deleteRow(index: number): void {
      this.dataSource.splice(index, 1);
      this.dataSource = [...this.dataSource]; // Atualiza a tabela
    }



  mostrar = false;

  novoItem: PeriodicElement = {
    nome: '',
    turma: '',
    horario: ''
  };

  add_new_element() {
    if (this.novoItem.nome && this.novoItem.horario) { // Evita adicionar itens vazios
      this.dataSource.push({ ...this.novoItem });
      this.dataSource = [...this.dataSource]; // Atualiza a tabela
      this.novoItem = { nome: '', turma: '', horario: '' }; // Limpa os inputs
      this.mostrar = false; // Fecha o formulário

  }}

  editandoIndex: number | null = null; // Guarda o índice do item sendo editado

  // Inicia a edição
  startEdit(index: number) {
    this.editandoIndex = index;
  }

  // Salva as alterações
  saveEdit() {
    this.editandoIndex = null; // Finaliza a edição
    this.dataSource = [...this.dataSource]; // Atualiza a tabela
  }



}
