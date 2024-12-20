import { useQuery } from '@tanstack/react-query';
import { api } from '@lib/api-client';

export function useEvents() {
  return useQuery({
    queryKey: ['events'],
    queryFn: () => api.events.list(),
  });
}
