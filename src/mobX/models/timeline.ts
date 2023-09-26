import {types} from 'mobx-state-tree';

const Resolution = types.model({
  width: types.number,
  height: types.number,
});

const Quality = types.model({
  qualityDepth: types.string,
  fileSize: types.number,
  resolution: Resolution,
});

const ContentMeta = types.model({
  type: types.string,
  contentType: types.string,
  availableQualities: types.array(Quality),
  fileId: types.string,
});

const TimelineItem = types.model({
  contentMeta: types.array(ContentMeta),
  numOfLikes: types.number,
  publishedAt: types.string,
  userId: types.string,
  textCaption: types.string,
  mentions: types.array(types.string),
  numOfComments: types.number,
  id: types.string,
  tags: types.array(types.string),
  isPlaying: true,
});

// {
//   "contentMeta": [
//       {
//           "type": "IMAGE",
//           "contentType": "image/jpeg",
//           "availableQualities": [
//               {
//                   "qualityDepth": "MEDIUM",
//                   "fileSize": 390364,
//                   "resolution": {
//                       "width": 3000,
//                       "height": 4000
//                   }
//               }
//           ],
//           "fileId": "https://poc-post-image.s3.me-central-1.amazonaws.com/e14cd7bc-55d1-4cb2-94f0-0f971459c937/Public/1a791d32-1385-4a89-aa54-c48a9674c5ca/media_max.jpeg"
//       }
//   ],
//   "numOfLikes": 3,
//   "publishedAt": "2023-09-11T11:54:14.912Z",
//   "userId": "e14cd7bc-55d1-4cb2-94f0-0f971459c937",
//   "textCaption": "",
//   "mentions": [],
//   "numOfComments": 3,
//   "id": "942661c2-958a-45e1-89a1-60817bbc3dcc",
//   "tags": []
// }

export default TimelineItem;
