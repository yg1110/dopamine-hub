'use client';

import React, { useEffect, useState } from 'react';

import { ClipData } from '@/api/chzzk/get-recommended-clips.ts';
import VerticalSwiper from '@/components/VerticalSwiper';

import { useRecommendedClips } from '../hooks/useRecommendedClips';

const VideoList = () => {
  const [currentParams, setCurrentParams] = useState<string>('');
  const [nextParams, setNextParams] = useState<string>('');
  const [clips, setClips] = useState<ClipData[]>([]);
  const { data } = useRecommendedClips(currentParams);

  useEffect(() => {
    if (!data) return;
    setNextParams(data.page.next.next);
    setClips([...clips, ...data.data]);
  }, [data]);

  const onChangeNextParams = () => {
    setCurrentParams(nextParams);
  };

  return <VerticalSwiper clips={clips} onChangeNextParams={onChangeNextParams} />;
};

export default VideoList;
