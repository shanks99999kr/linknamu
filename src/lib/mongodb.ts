import { MongoClient } from "mongodb";

function createClientPromise() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI가 .env.local에 설정되어 있지 않습니다.");
  }
  return new MongoClient(uri).connect();
}

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient> | undefined;

export function getMongoClientPromise(): Promise<MongoClient> {
  if (process.env.NODE_ENV === "development") {
    // 개발 모드 HMR로 모듈이 재실행돼도 global에 캐시해 커넥션이 늘어나는 것을 막는다.
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = createClientPromise();
    }
    return global._mongoClientPromise;
  }
  if (!clientPromise) {
    clientPromise = createClientPromise();
  }
  return clientPromise;
}
