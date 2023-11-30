"use strict";

class Hospital {
    constructor(medicos = [], citas = []) {
        this.medicos = medicos;
        this.citas = citas;
    }

    altaMedico(oMedico) { //devuelve string

        const yaExisteEseId = (this.medicos.some(m => m.idMedico === oMedico.idMedico));

        if (yaExisteEseId)
            return false;

        this.medicos.push(oMedico);
        return true;

    }

    altaCita(oCita) {//devuelve string

        const yaExisteEseId = (this.citas.some(c => c.idMedico === oCita.idMedico));

        if (yaExisteEseId) {
            
            return false;
        } else {
            this.citas.push(oCita);
            return true;
        }

    }

    listadoMedicos() { //html table
        let s;
        s =  "<table><caption>Listado de Médicos</caption>";
        s += "<thead><tr><th>ID</th><th>Nombre</th><th>Telefono</th><th>Email</th><th>Colegiado</th></tr></thead>";
        s += "<tbody>";
        
        for(let medico of this.medicos){
          s += medico.toHTMLRow();
        }
      
        s += "</tbody></table>";
        return s;

    }

    listadoCitas() { //html table

        let s;
        s =  "<table><caption>Listado de Citas</caption>";
        s += "<thead><tr><th>ID</th><th>Paciente</th><th>fecha</th><th>hora</th></tr></thead>";
        s += "<tbody>";
        
        for(let cita of this.citas){
          s += cita.toHTMLRow();
        }
      
        s += "</tbody></table>";
        return s;

    }
}

class Medico {
    constructor(idMedico, nombre, telefono, email, colegiado) {
        this.idMedico = idMedico;
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.colegiado = colegiado;
    }

    toHTMLRow() {

        return `<tr><td>${this.idMedico}</td><td>${this.nombre}</td><td>${this.telefono}</td><td>${this.email}</td><td>${this.colegiado}</td></tr>`;   

    }
}

class Cita {
    constructor(idMedico, paciente, fecha, hora) {
        this.idMedico = idMedico;
        this.paciente = paciente;
        this.fecha = fecha;
        this.hora = hora;
    }

    toHTMLRow() {

        return `<tr><td>${this.idMedico}</td><td>${this.paciente}</td><td>${this.fecha}</td><td>${this.hora}</td></tr>`;   
    }
}

