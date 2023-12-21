export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const res = await fetch(
    `https://my-json-server.typicode.com/typicode/demo/posts`
  );
  const product = await res.json();

  return Response.json({ product });
}
