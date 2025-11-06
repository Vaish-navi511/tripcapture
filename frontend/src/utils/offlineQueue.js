const offlineQueue = [];

export function addToQueue(trip) {
  offlineQueue.push(trip);
}

export function getQueue() {
  return offlineQueue;
}

export function clearQueue() {
  offlineQueue.length = 0;
}
