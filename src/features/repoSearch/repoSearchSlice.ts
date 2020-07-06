import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk } from "app/store";

import { RepoDetails, getRepoDetails } from "api/githubAPI";

interface RepoDetailsSlice {
  openIssuesCount: number;
  error: string | null;
}

const initialState: RepoDetailsSlice = {
  openIssuesCount: -1,
  error: null,
}

const repoDetailsSlice = createSlice({
  name: 'repoDetails',
  initialState,
  reducers: {
    getRepoDetailsSuccess(state, action: PayloadAction<RepoDetails>) {
      state.openIssuesCount = action.payload.open_issues_count;
      state.error = null;
    },
    getRepoDetailsFailed(state, action: PayloadAction<string>) {
      state.openIssuesCount = -1;
      state.error = action.payload
    },
  },
});

export const { getRepoDetailsFailed, getRepoDetailsSuccess } = repoDetailsSlice.actions;

export default repoDetailsSlice.reducer;

export const fetchIssuesCount = (org: string, repo: string): AppThunk => async dispatch => {
  try {
    const repoDetails = await getRepoDetails(org, repo);
    dispatch(getRepoDetailsSuccess(repoDetails));
  } catch (err) {
    dispatch(getRepoDetailsFailed(err.toString()));
  }
}
