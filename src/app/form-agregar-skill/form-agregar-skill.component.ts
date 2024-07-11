import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-agregar-skill',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ],
  templateUrl: './form-agregar-skill.component.html',
  styleUrl: './form-agregar-skill.component.css'
})
export class FormAgregarSkillComponent {

  myForm!:FormGroup;
  selectedImage: File | null = null;
  base64Image: string | null = null;

  constructor(private fb:FormBuilder){
    this.myForm = fb.group({
      name: ['' , Validators.required],
      skill: ['', Validators.required],
      porcentage: ['', Validators.required],
      color1: ['', Validators.required],
      color2: ['' , Validators.required],
      detalle: [''],
      categorias: ['', Validators.required],
      imagen: ['',  Validators.required]
    })

  }



  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      // Aquí puedes enviar el formulario a través de un servicio o realizar otra acción
    } else {
      console.log('Form is not valid');
    }
  }

  categorias = [
    { value: 'frontend'},
    { value: 'backend'},
    { value: 'database'},
    { value: 'frameworks'},
    { value: 'inteligencia-artificial'},
    { value: 'otros'},
  ];


  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File | null = (target.files as FileList)[0] || null;
    
    if (file) {
      this.selectedImage = file;
      
      // Convertir la imagen a base64
      this.convertToBase64(file);
    }
  }

  convertToBase64(file: File) {

    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64Image = reader.result as string;

      this.myForm.patchValue({
        imagen: this.base64Image
      });
    };
  }


  
}
