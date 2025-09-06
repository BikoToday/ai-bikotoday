// Serve Chatbase Help through your domain without redirecting.
// This returns the remote HTML and strips/sets headers so Gamma can embed it.

export const dynamic = 'force-dynamic';

export async function GET() {
  const upstream = 'https://www.chatbase.co/DWCuKMIQrgol47UDlGucO/help';

  const res = await fetch(upstream, {
    // helps some hosts serve the full page
    headers: { 'user-agent': 'Mozilla/5.0 (compatible; BikoProxy/1.0)' },
    cache: 'no-store',
  });

  let html = await res.text();

  // Optional: in case the page uses relative URLs, make them resolve back to Chatbase
  // so assets load correctly without breaking your URL.
  // If everything works without this, you can remove it.
  html = html.replace(
    '<head>',
    `<head><base href="https://www.chatbase.co/">`
  );

  return new Response(html, {
    status: 200,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      // Make sure NO restrictive frame headers slip through
      'x-frame-options': '',
      // Allow your page to be embedded in Gamma
      'content-security-policy':
        `frame-ancestors 'self' https://*.gamma.app https://gamma.app;`,
      'referrer-policy': 'strict-origin-when-cross-origin',
      'cache-control': 'no-store',
    },
  });
}
