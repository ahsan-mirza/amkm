export type Resolution = {
  width: number;
  height: number;
};

export type Quality = {
  qualityDepth: string;
  fileSize: number;
  resolution: Resolution;
};

export type ContentMeta = {
  type: string;
  contentType: string;
  availableQualities: [Quality];
  fileId: string;
};

export type ITimeline = {
  type: string;
  numOfLikes: number;
  publishedAt: string;
  userId: string;
  textCaption: string;
  mentions:any;
  numOfComments: number;
  id: string;
  tags: any;
  isPlaying: false;
  uri:string
};


export interface TimelineItemProps {
  userName: string;
  userAvatar: string;
  postText: string;
  postImage?: string;
  numOfLikes: number;
  publishedAt: string;
  textCaption: string;
  mentions: string[];
  numOfComments: number;
  tags: string[];
}