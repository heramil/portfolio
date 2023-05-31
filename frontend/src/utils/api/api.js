const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5001"

async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status < 200 || response.status > 399) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    if (response.status === 204) {
      return null;
    }

    return await response.json();

  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

/**
 * Retrieves all existing decks.
 * @returns {Promise<[deck]>}
 *  a promise that resolves to a possibly empty array of decks saved in the database.
 */
export async function listProjects(signal) {
  const url = `${API_BASE_URL}/projects`;
  return await fetchJson(url, { signal }, []);
}