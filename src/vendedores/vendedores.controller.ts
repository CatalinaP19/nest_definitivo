import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller("vendedores")
export class VendedoresController {
//endpoint//
//destino de la request//
//se escribe como una funcion en una clase controlador//
  @Get()
  consultarVendedores(): string {
    return "Aqui se podran consultar todos los Vendedores";
  }
//desde la request se puede enviar un id para consultar un vendedor especifico//
  @Get(":id")
  consultarVendedorPorId(@Param("id") id: string){
    return  `aqui se podra consultar un 
                vendedor por id: ${id}`; ;
    }

  @Post()
  crearVendedor(): string {
    return "Aqui se podra crear un Vendedor";
  }


  @Patch()
    actualizarVendedor(): string {
        return "Aqui se podra actualizar un Vendedor";
    }

  @Patch(":id")
  actualizarVendedorPorId(@Param("id") id: string): string {
    return `Aqui se  actualizar el Vendedor de id: ${id}`;
    }

 @Delete()
     eliminarVendedor(): string {
    return "Aqui se podra eliminar un Vendedor";
 }
 @Delete(":id")
    eliminarVendedorPorId(@Param("id") id: string): string {
        return `Aqui se eliminara el Vendedor de id: ${id}`;
    }
}



