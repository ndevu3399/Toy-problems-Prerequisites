function speedDetector(speed) {
    const speedLimit = 70;
    if (speed < speedLimit) return "Ok";
    let points = Math.floot((speed - speedLimit) / 5);
    return points > 12 ? "License suspended" : 'Points; ${points}';
}