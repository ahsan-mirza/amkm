import {types, getParent, flow, applySnapshot} from 'mobx-state-tree';
import axios from 'axios';
import TimelineItem from '../models/timeline';
import {apiResponse} from '../../utils/dummyData';

const TimelineStore = types
  .model('TimelineStore', {
    list: types.array(TimelineItem),
  })
  .actions(self => ({
    fetchTimelineData: flow(function* fetchTimelineData() {
      try {
        // const response = yield axios.get(
        //   'https://devloot.free.beeceptor.com/timeline',
        // );
        // const {data} = response;
        // if (response!?.status === 200) {
        //   applySnapshot(self, {
        //     ...self,
        //     list: data.message.items,
        //   });
        // } else {
        //   applySnapshot(self, {
        //     ...self,
        //     list: apiResponse.message.items,
        //   });
        // }
        applySnapshot(self, {
          ...self,
          list: apiResponse.message.items,
        });
      } catch (error) {
        console.error('Error fetching timeline data:', error);
      }
    }),

    togglePlay: id => {
      const item = self.list.find(item => item.id === id);
      if (item) {
        item.isPlaying = !item.isPlaying;
      }
    },
  }));

export default TimelineStore;
