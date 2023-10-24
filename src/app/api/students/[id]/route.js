import { prisma } from "@/libs/prisma";

const { NextResponse } = require("next/server");

export async function GET(request, {params: {id}}){
    try {
        const student = await prisma.estudiante.findUnique({where: {id: Number(id)}});
        if(!student) return NextResponse.json({message: "Estudiante no encontrado"},{status: 404})
    return NextResponse.json(student);
    } catch (error) {
        if(error instanceof Error) return NextResponse.json({message: error.message},{status: 500})
    }
}

export async function DELETE(request, {params: {id}}){
    try {
        const deletedStudent = await prisma.estudiante.delete({where: {id: Number(id)}});
        if(!student) return NextResponse.json({message: "Estudiante no encontrado"},{status: 404})
    return NextResponse.json(deletedStudent);
    } catch (error) {
        if(error instanceof Error) return NextResponse.json({message: error.message},{status: 500})
    }
}

export async function PUT(request, {params: {id}}){
    try {
        const {nombre, genero, edad, carrera} = await request.json();
        const updatedStudent = await prisma.estudiante.update({where: {id: Number(id)}, data: {nombre: nombre,genero:genero,edad:edad,carrera:carrera}});
        if(!updatedStudent) return NextResponse.json({message: "Estudiante no encontrado"},{status: 404})
    return NextResponse.json(updatedStudent);
    } catch (error) {
        if(error instanceof Error) return NextResponse.json({message: error.message},{status: 500})
    }
}