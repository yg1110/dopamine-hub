import axios from 'axios';

import { ApiResponse } from '..';

interface RecommendationChannel {
  channel: {
    activatedChannelBadgeIds: string[];
    channelId: string;
    channelImageUrl: string;
    channelName: string;
    verifiedMark: boolean;
  };
  channelId: string;
  contentLineage: string;
  liveInfo: {
    concurrentUserCount: number;
    liveCategoryValue: string;
    liveTitle: string;
  };
  streamer: {
    openLive: boolean;
  };
}

interface FetchChannelsResponse {
  recommendationChannels: RecommendationChannel[];
}

interface FetchChannelsParams {
  next?: string;
}

export const fetchChannels = async ({ next }: FetchChannelsParams) => {
  const response = await axios.get<ApiResponse<FetchChannelsResponse>>(
    `/chzzk/service/v1/home/recommendation-channels`,
    {
      params: {
        next,
      },
    }
  );
  const data = response.data;
  return data;
};
