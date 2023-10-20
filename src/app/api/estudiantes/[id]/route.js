import { prisma } from "@/libs/prisma";

const { NextResponse } = require("next/server");

export async function GET(request, {params: {id}}){
    try {
        const estudiante = await prisma.estudiante.findUnique({where: {id: Number(id)}});
        if(!estudiante) return NextResponse.json({message: "Estudiante no encontrado"},{status: 404})
    return NextResponse.json(estudiante);
    } catch (error) {
        if(error instanceof Error) return NextResponse.json({message: error.message},{status: 500})
    }
}

export async function DELETE(request, {params: {id}}){
    try {
        const estudiante = await prisma.estudiante.delete({where: {id: Number(id)}});
        if(!estudiante) return NextResponse.json({message: "Estudiante no encontrado"},{status: 404})
    return NextResponse.json(estudiante);
    } catch (error) {
        if(error instanceof Error) return NextResponse.json({message: error.message},{status: 500})
    }
}

export async function PUT(request, {params: {id}}){
    try {
        const {nombre, genero, edad, carrera} = await request.json();
        const estudianteActualizado = await prisma.estudiante.update({where: {id: Number(id)}, data: {nombre,genero,edad,carrera}});
        if(!estudiante) return NextResponse.json({message: "Estudiante no encontrado"},{status: 404})
    return NextResponse.json(estudianteActualizado);
    } catch (error) {
        if(error instanceof Error) return NextResponse.json({message: error.message},{status: 500})
    }
}