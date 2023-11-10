export async function fetchToCocApi(path: string, options: RequestInit = {}) {
  const apiKey = process.env.COC_API_KEY;
  const endpoint = process.env.COC_API_ENDPOINT;

  const url = endpoint + path;
  options.headers = { Authorization: `Bearer ${apiKey}`, ...options.headers };

  try {
    const res = await fetch(url, options);

    return res;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
