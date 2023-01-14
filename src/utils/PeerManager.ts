import { Peer, DataConnection } from 'peerjs';

export default class PeerManager {
  private peer: Peer;

  private connection: DataConnection | null;

  constructor() {
    this.peer = new Peer();
    this.connection = null;
  }

  getPeerId(): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        if (this.peer.id) resolve(this.peer.id);
        this.peer.on('open', (id) => {
          resolve(id);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  createConnection(peerId: string): Promise<DataConnection> {
    return new Promise((resolve, reject) => {
      try {
        const connection = this.peer.connect(peerId);
        this.connection = connection;
        resolve(connection);
      } catch (error) {
        reject(error);
      }
    });
  }

  destroyPeer() {
    this.peer.destroy();
  }

  closeConnection() {
    if (this.connection) this.connection.close();
  }

  get peerInstance() {
    return this.peer;
  }

  get connectionInstance() {
    return this.connection;
  }
}
