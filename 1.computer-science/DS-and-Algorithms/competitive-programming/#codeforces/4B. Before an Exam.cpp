//https://codeforces.com/contest/4/problem/B
#include<iostream>

using namespace std;

int main() {
    int dayAmount, currentSumTime, sumTime, minTimes[1000], minMaxDifferences[1000], i, minTime, maxTime, totalMaxTime = 0;
    cin >> dayAmount >> sumTime;
    currentSumTime = sumTime;
    for (i = 0; i < dayAmount; i++) {
        cin >> minTime >> maxTime;
        if (currentSumTime >= minTime) {
            minTimes[i] = minTime;
            currentSumTime = currentSumTime - minTime;
        }
        else {
            cout << "NO";
            return 0;
        }
        minMaxDifferences[i] = maxTime - minTime;
        totalMaxTime = totalMaxTime + maxTime;
    }
    if (totalMaxTime < sumTime) {
        cout << "NO";
        return 0;
    }
    cout << "YES" << endl;
    for (i = 0; i < dayAmount; i++) {
        if (currentSumTime >= minMaxDifferences[i]) cout << minTimes[i] + minMaxDifferences[i] << " ", currentSumTime = currentSumTime - minMaxDifferences[i];
        else cout << minTimes[i] + currentSumTime << " ", currentSumTime = 0;
    }
}
