import { configureStore } from "@reduxjs/toolkit";
import pathChangeSlice from "./pathChangeSlice";
import switchAccSlice from "./SwitchAcc";
import StoryItemsSlice from "./StoryItemsSlice";
import PostItemsSlice from "./PostItemsSlice";
import PostAddTooltipSlice from "./PostAddTooltipSlice";
import SavedItemSlice from "./SavedItemSlice";
import ProfileSlice from "./ProfileSlice";
import SearchItemSlice from "./SearchItems";
import MessagesSlice from "./MessageSent";
import ChatDisplaySlice from "./ChatDisplay";

const store = configureStore({
  reducer: {
    Postitems: PostItemsSlice.reducer,
    switchItems: switchAccSlice.reducer,
    StoryItems: StoryItemsSlice.reducer,
    pathChange: pathChangeSlice.reducer,
    PostAdd: PostAddTooltipSlice.reducer,
    SavedItems: SavedItemSlice.reducer,
    ProfileItems: ProfileSlice.reducer,
    SearchedItems: SearchItemSlice.reducer,
    MediaState: MessagesSlice.reducer,
    ChatDisplay: ChatDisplaySlice.reducer,
  },
});
export default store;
