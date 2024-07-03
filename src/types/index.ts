export type UserDataObject = {
  id: string;
  username?: string;
  activePage?: string;
};

export type UserContentObject = {
  id: string;
  name: string;
  shareable?: boolean;
  metadata: {
    size: number;
    type: string;
  };
  blob: Blob;
};

export type FriendContentObject = {
  id: string;
  username: string;
  friendIds: string[];
};

export enum Store {
  UserData = "rills-app-db::user-data",
  UserContent = "rills-app-db::user-content",
  UserPeers = "rills-app-db::user-peers",
  UserChannels = "rills-app-db::user-channels",
  ChannelPeers = "rills-app-db::channel-peers",
  PeerContent = "rills-app-db::peer-content"
}

export type UserContentMetaData = {
  [key: string]: { edit: boolean; name: string };
};

export type UserPeer = {
  id: string;
  username?: string;
  activePage?: string;
};

export type UserPeers = UserPeer[];

export type UserChannel = {
  id: string;
  name: string;
  peers: UserPeers;
};

export type UserChannelContent = {
  userChannel: UserChannel;
  userContent: UserContentObject[];
};

export type Experiment = { id: string, name: string };
