const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const payload = (await request.json()) as { email?: string };
  const email = payload.email?.trim() ?? "";

  if (!EMAIL_REGEX.test(email)) {
    return Response.json({ message: "Please provide a valid email." }, { status: 400 });
  }

  return Response.json({
    message: "Welcome to BERLANDO RUN. You are now subscribed."
  });
}
