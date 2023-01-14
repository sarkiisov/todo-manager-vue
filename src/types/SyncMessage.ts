export type SyncMessage = {
  type: string;
  payload?: {
    [key: string]: string;
  };
};
