import {useQuery} from '@tanstack/react-query';
import { api } from '@/lib/api-client';

export function useCircles() {
  return useQuery({
    queryKey: ['circles'],
    queryFn: () => api.circles.list(),
  });
}
