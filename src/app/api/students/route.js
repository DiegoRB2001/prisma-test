import { prisma } from "@/libs/prisma";

const { NextResponse } = require("next/server");

export async function GET(){

    try {
        const students = await prisma.estudiante.findMany();
    return NextResponse.json(students);
    } catch (error) {
        if(error instanceof Error) return NextResponse.json({message: error.message},{status: 500})
    }
    
}

export async function POST(request){

    try {
        const {nombre, genero, edad, carrera} = await request.json();
        const student = await prisma.estudiante.create({data: {nombre: nombre,genero:genero,edad:edad,carrera:carrera}});
    return NextResponse.json(student);
    } catch (error) {
        if(error instanceof Error) return NextResponse.json({message: error.message},{status: 500})
    }
    
}