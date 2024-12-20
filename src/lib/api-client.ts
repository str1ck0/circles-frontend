const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1';

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError'
  }
}

async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new ApiError(response.status, await response.text());
  }

  return response.json();
}

export const api = {
  events: {
    list: () => fetchApi<Event[]>('/events'),
    get: (id: number) => fetchApi<Event>(`/events/${id}`),
  },
  circles: {
    list: () => fetchApi<Circle[]>('/circles'),
    get: (id: number) => fetchApi<Circle>(`/circles/${id}`),
  },
};
