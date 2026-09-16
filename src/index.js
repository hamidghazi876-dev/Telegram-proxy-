export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const telegramUrl = "https://api.telegram.org" + url.pathname + url.search;

    const init = {
      method: request.method,
      headers: request.headers,
      body: request.method !== "GET" && request.method !== "HEAD" ? request.body : undefined,
    };

    const response = await fetch(telegramUrl, init);
    return new Response(response.body, {
      status: response.status,
      headers: response.headers,
    });
  },
};
