// app/api/proxy/route.js (Next.js 14 App Router)
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const endpoint = searchParams.get("endpoint");

  if (!endpoint) {
    return new Response("Missing endpoint", { status: 400 });
  }

  try {
    const res = await fetch(`http://157.230.240.97:9999/api/v1/${endpoint}`);
    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    return new Response("Error fetching external API", { status: 500 });
  }
}
