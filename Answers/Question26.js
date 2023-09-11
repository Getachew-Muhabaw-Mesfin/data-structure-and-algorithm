function canBreathe(isConnected, hasOxygen, aboveWater) {
  if (
    ((isConnected || hasOxygen) && aboveWater) ||
    (isConnected && hasOxygen) ||
    aboveWater
  )
    return true;
  else return false;
}
