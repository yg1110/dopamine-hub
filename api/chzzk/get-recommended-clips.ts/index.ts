import axios from 'axios';

import { ApiResponse } from '..';

export interface OwnerChannel {
  channelId: string;
  channelName: string;
  channelImageUrl: string;
  verifiedMark: boolean;
}

export interface ClipData {
  clipUID: string;
  videoId: string;
  clipTitle: string;
  ownerChannelId: string;
  ownerChannel: OwnerChannel;
  thumbnailImageUrl: string;
  duration: number;
  adult: boolean;
  categoryType: string;
  clipCategory: string;
  categoryValue: string;
  recId: string;
  createdDate: string;
  readCount: number;
  contentLineage: string;
}

interface FetchClipsResponse {
  data: ClipData[];
  page: {
    next: {
      next: string;
    };
  };
  size: number;
}

interface FetchClipsParams {
  next: string;
}

export const getRecommendedClips = async ({ next }: FetchClipsParams) => {
  const response = await axios.get<ApiResponse<FetchClipsResponse>>(`/chzzk/service/v1/home/recommended/clips`, {
    params: {
      next,
    },
  });
  return response.data;
};
