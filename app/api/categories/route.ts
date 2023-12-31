// categories route
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(request: Request) {
    const categories = await prisma.categories.findMany();
    await prisma.$disconnect();
    
    if (categories) {
        categories.sort((a, b) => a.title.localeCompare(b.title));
        return Response.json(categories);
    } else {
        return Response.json({ error: 'Categories not found' }, { status: 404, statusText: 'Categories not found' });
    }
}