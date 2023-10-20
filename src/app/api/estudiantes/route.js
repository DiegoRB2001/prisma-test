import { prisma } from "@/libs/prisma";

const { NextResponse } = require("next/server");

export async function GET(){

    try {
        const estudiantes = await prisma.estudiante.findMany();
    return NextResponse.json(estudiantes);
    } catch (error) {
        if(error instanceof Error) return NextResponse.json({message: error.message},{status: 500})
    }
    
}

export async function POST(request){

    try {
        const {nombre, genero, edad, carrera} = await request.json();
        const estudiante = await prisma.estudiante.create({data: nombre,genero,edad,carrera});
    return NextResponse.json(estudiante);
    } catch (error) {
        if(error instanceof Error) return NextResponse.json({message: error.message},{status: 500})
    }
    
}