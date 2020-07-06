import { combineReducers } from '@reduxjs/toolkit';

import issuesDisplayReducer from 'features/issuesDisplay/issuesDisplaySlices';
import repoDetailsReducer from 'features/repoSearch/repoSearchSlice';
import issuesReducer from 'features/issuesList/issuesSlice';
import commentsReducer from 'features/issuesDetails/commentsSlice';

const rootReducer = combineReducers({
  issuesDisplay: issuesDisplayReducer,
  repoDetails: repoDetailsReducer,
  issues: issuesReducer,
  comments: commentsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
