import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, position, resumeUrl, coverLetter } = body;

    const applicant = await prisma.jobApplicant.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        position,
        resumeUrl,
        coverLetter
      },
    });

    return NextResponse.json(applicant, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const applicants = await prisma.jobApplicant.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(applicants, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch applicants' }, { status: 500 });
  }
}
