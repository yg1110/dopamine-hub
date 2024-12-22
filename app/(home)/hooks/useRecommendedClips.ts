import { useQuery } from '@tanstack/react-query';

import { getRecommendedClips } from '@/api/chzzk/get-recommended-clips.ts';

export const useRecommendedClips = (next: string) => {
  return useQuery({
    queryKey: ['recommendedClips', next],
    queryFn: async () => {
      const res = await getRecommendedClips({
        next,
      });
      console.log('res :>> ', res);
      if (res.code >= 300) {
        throw new Error(res.message || '클립 목록을 불러오는 중 오류가 발생했습니다.');
      }
      return res.content;
    },
    refetchOnWindowFocus: false,
  });
};
